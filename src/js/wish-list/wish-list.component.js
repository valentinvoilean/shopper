import {CLASSES, EVENT_NAMESPACE} from './wish-list.config';

export default class WishListComponent {
  constructor() {
    this.addEventListener();
  }

  addEventListener() {
    $(document).on(`submit${EVENT_NAMESPACE}`, `.${CLASSES.form}`, $.proxy(this._postToWishlist, this));
    $(document).on(`click${EVENT_NAMESPACE}`, `.${CLASSES.removeButton}`, $.proxy(this._removeFromWishlist, this));
    $(document).on(`click${EVENT_NAMESPACE}`, `.${CLASSES.addToCart}`, $.proxy(this._addToCart, this));
  }

  _addToCart(e) {
    let variantID;

    e.preventDefault();
    variantID = $(this).attr('data-id');
    $('#product-select').attr('value', variantID);
    this._removeFromWishlist($(this));
    $('#add-variant').submit();
  }

  _postToWishlist(e) {
    let postData, formURL, $currentForm;

    e.preventDefault();
    $currentForm = $(e.currentTarget);
    postData = $currentForm.serializeArray();
    formURL = $currentForm.attr('action');

    $.ajax({
      url : formURL,
      type: 'POST',
      data : postData,
      success:function(data, textStatus) {
        console.warn(textStatus);
        $currentForm.parent().empty().html('<p>This product is in your <a href="/pages/wish-list">wishlist</a></p>');
      },
      error: function() {
        $currentForm.append("<p>I'm afraid that didn't work.</p>");
      }
    });
  }

  _removeFromWishlist(e) {
    e.preventDefault();
    let $this = $(e.currentTarget);
    // select parent li element
    let $elem = $this.closest('li');
    // get the id which is the selected variant tag
    let tagID = $elem.attr('id');
    let $form = $('#remove');

    // set the value of the input in the form to the selected variant
    $('#remove-value').attr('value', tagID);
    let postData = $form.serializeArray();
    let formURL = $form.attr('action');
    $.ajax({
      url : formURL,
      type: 'POST',
      data : postData,
      success:function(data, textStatus) {
        console.warn(textStatus);
        $elem.remove();
        if ($('ul.wishlist li').length === 0) {
          $('#wishlist-email-link').empty().html('<p>Your wish list is currently empty.</p>');
        } else {
          this._updateEmailList();
        }
      },
      error: function() {
        $(this).append(`<p>I'm afraid that didn't work.</p>`);
      }
    });
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
