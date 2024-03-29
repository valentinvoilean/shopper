import {CLASSES} from './app.config';

export default class AppComponent {
  constructor(classes) {
    window.info = window.info || {};
    info.instances = info.instances || [];

    this.classes = classes ? classes : CLASSES;
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
            _self.checkIfClassExistsOnDom($(this), className);
          });
        }
        else {
          // initialize  the current element passed
          $container.each(function () {
            let className = $(this).data('ss-init');
            if (className) {
              _self.checkIfClassExistsOnDom($(this), className);
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

  checkIfClassExistsOnDom($el, className) {
    let classExists = false,
      domClasses = this.classes.dom ? this.classes.dom : this.classes;

    $.each(domClasses, function (index, value) {
      if (index === className) {
        $el.attr('data-ss-instance', info.instances.length);
        classExists = true;
        info.instances.push(new value($el));
      }
    });

    if (!classExists) {
      console.warn(`The class ${className} does not exist!`);
    }
  };

  initByState(state) {
    let _self = this,
      $components;

    if (this.classes === CLASSES) {
      $.each(CLASSES[state], function (index, value) {
        new value();
      });
    }

    if (state === 'onLoad') {
      $components = $(document).find(`[data-ss-state="${state}"]`);
    }
    else {
      $components = $(document).find('[data-ss-init]:not([data-ss-state])');
    }

    $components.each(function () {
      let className = $(this).data('ss-init');
      _self.checkIfClassExistsOnDom($(this), className);
    });
  };
}
