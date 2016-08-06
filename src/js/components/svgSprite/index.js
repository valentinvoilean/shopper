import $ from 'jquery';
import {VALUES, ATTRIBUTES} from './config';

export default class SVGSprite {

  constructor($el) {
    this.$el = $el;
    this.link = this.$el.data(ATTRIBUTES.options);

    $.get(this.link, (data) => {
      this.$svg = $(data).find('svg');
      this.$el.append(this.$svg);

    }).fail(() => { throw new Error(VALUES.errorMessage); });
  }

  destroy() {
    this.$el.empty();
  }
};
