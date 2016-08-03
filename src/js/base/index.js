import $ from 'jquery';

export default class Base {
  constructor(classes) {
    window.info = window.info || {};
    info.instances = info.instances || [];

    this.classes = classes;
  }

  // init method
  init($container, deepScan = false) {
    let _self = this;

    if ($container) {
      if ($container instanceof $) {

        if (deepScan) {
          // initialize all modules from the jQuery DOM element
          $container.find(`[data-ss-init]`).each(function () {
            let className = $(this).data('ss-init');
            _self.checkIfClassExists($(this), className);
          });
        }
        else {
          // initialize  the current element passed
          $container.each(function () {
            let className = $(this).data('ss-init');
            if (className) {
              _self.checkIfClassExists($(this), className);
            }
          });
        }
      } else {
        console.error('The parameter passed it is not a jQuery element!');
      }
    } else {
      // if no param passed, all the modules from the DOM
      // will be initialized depending on the data-ss-state value
      $(document).ready(() => this.initByState('onReady'));
      $(window).on('load', () => this.initByState('onLoad'));
    }
  };

  //destroy method
  destroy($container, deepScan = false) {
    let destroyInstance = function () {
      let currentInstance = $(this).data('ss-instance');
      info.instances[currentInstance].destroy();
      $(this).removeAttr('data-ss-instance');
      info.instances[currentInstance] = null;
    };

    if ($container) {
      if ($container instanceof $) {
        if (deepScan) {
          // destroy all modules from the jQuery DOM element
          $container.find(`[data-ss-instance]`).each(destroyInstance);
        }
        else {
          // destroy  the current element passed
          $container.each(destroyInstance);
        }
      } else {
        console.error('The parameter passed it is not a jQuery element!');
      }
    }
    else {
      $(document).find(`[data-ss-instance]`).each(destroyInstance);
    }
  };

  checkIfClassExists($el, className) {
    let classExists = false;

    for (let i = 0, classesLength = this.classes.length; i < classesLength; i++) {
      if (this.classes[i].name === className) {
        $el.attr('data-ss-instance', info.instances.length);
        classExists = true;
        info.instances.push(new this.classes[i]($el));
      }
    }

    if (!classExists) {
      console.warn(`The class ${className} does not exist!`);
    }
  };

  initByState(state) {
    let _self = this;

    $(document).find(`[data-ss-state="${state}"]`).each(function() {
      let className = $(this).data('ss-init');
      _self.checkIfClassExists($(this), className);
    });
  };
}
