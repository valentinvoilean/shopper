import {CLASSES, NAMESPACE} from './wish-list.config';

export default class WishListComponent {
  constructor() {
    this.addEventListeners();
  }

  destroy() {
    this.removeEventListeners();
  }

  addEventListeners() {
    $(document).on(`click${NAMESPACE}`, CLASSES.button, $.proxy(this._postToWishlist, this));
    $(document).on(`click${NAMESPACE}`, CLASSES.removeButton, $.proxy(this._removeFromWishlist, this));
    $(document).on(`click${NAMESPACE}`, CLASSES.addToCart, $.proxy(this._addToCart, this));
  }

  removeEventListeners() {
    $(document).off(NAMESPACE);
  }

  _postToWishlist(e) {
    let options = $(e.currentTarget).data('ss-options');

    $.post('/contact', [
      {name: 'form_type', value: 'customer'},
      {name: 'contact[email]', value: options['email']},
      {name: 'contact[tags]', value: options['tagID']}
    ])
      .done(this._updateCounter)
      .fail(() => console.warn('Something went wrong. Please try again!'));
  }

  _removeFromWishlist(e) {
    let
      $button = $(e.currentTarget),
      $currentProduct = $button.closest('li'),
      $wishList = $currentProduct.parent(),
      options = $currentProduct.data('ss-options');

    $.post('/contact', [
      {name: 'form_type', value: 'customer'},
      {name: 'contact[email]', value: options['email']},
      {name: 'contact[tags]', value: options['tagID']}
    ])
      .done((data) => {
        this._updateCounter(data);
        $currentProduct.remove();

        if ($wishList.children('li').length) {
          this._updateEmailList();
        } else {
          $('#wishlist-email-link').empty().html('<p>Your wish list is currently empty.</p>');
        }

        $currentProduct = null;
        $button = null;
      })
      .fail(() => console.warn('Something went wrong. Please try again!'));
  }

  _updateCounter(data) {
    let counter = parseInt($(data).find(CLASSES.counter).text());
    $(CLASSES.counter).trigger('update', {counter: counter});
  }

  _addToCart(e) {
    let
      $button = $(e.currentTarget),
      $currentProduct = $button.closest('li'),
      options = $currentProduct.data('ss-options');

    $.post('/cart/add', [
      {name: 'id', value: options['variantID']}
    ])
      .done(() => {
        this._removeFromWishlist(e);
        console.warn('Product added to cart !');
      })
      .fail(() => console.warn('Something went wrong. Please try again!'));
  }

  _updateEmailList() {
    let currentURL = window.location.protocol + '//' + window.location.host + window.location.pathname;
    $.ajax({
      url: currentURL,
      type: 'GET',
      success: function (data, textStatus) {
        console.warn(textStatus);
        let newEmailLink = $(data).find('#wishlist-email-link a');
        $('#wishlist-email-link').html(newEmailLink);
      }
    });
  }

  selectCallback(variant) {

    // you will be using something like this if you are using Shopify's option_selection.js as a callback to
    // update your images and stuff when the user chooses another variant from a product select element.
    // Just add the bits below to what you already have in there. This will ensure when the customer picks another
    // variant, the wish list form will update to the current variant.
    //Update wishlist form
    let $wishList = $('.js-wish-list');
    let currentURL = window.location.protocol + '//' + window.location.host + window.location.pathname;
    let newURL = currentURL + '?variant=' + variant.id;

    $.ajax({
      type: 'GET',
      url: newURL,
      success:function(data) {
        $wishList.empty();
        let newData = $(data).find('.js-wish-list').html();
        $wishList.html(newData);

        // reset event listener for posting to wish list
        this._postToWishlist();
      }
    });
  }

};
