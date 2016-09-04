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
      .fail(() => console.warn('Can not add item to wishlist!'));
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
      })
      .fail(() => console.warn('Can not remove item from wishlist!'))
      .always(() => {
        $currentProduct = null;
        $button = null;
        $wishList = null;
      });
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
      .fail(() => console.warn('Can not add variant to cart!'))
      .always(() => {
        $currentProduct = null;
        $button = null;
      });
  }

  _updateEmailList() {
    let currentURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

    $.get(currentURL)
      .done((data) => {
        let newEmailLink = $(data).find(CLASSES.email);
        $(CLASSES.email).html(newEmailLink);
        newEmailLink = null;
      })
      .fail(() => console.warn('Can not update email list!'));
  }

  selectCallback(variant) {
    let
      $wishListProduct = $(CLASSES.product),
      currentURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
      newURL = currentURL + '?variant=' + variant.id;

    $.get(newURL)
      .done((data) => {
        $wishListProduct.empty();
        let newData = $(data).find(CLASSES.product).html();
        $wishListProduct.html(newData);
      })
      .fail(() => console.warn('Something went wrong. Please try again!'))
      .always(() => {
        $wishListProduct = null;
      });
  }
};
