import $ from 'jquery';
window.ss = window.ss || {};

ss.instances = [];
ss.utils = ss.utils || {};

import {classes} from './ss.config';

ss.checkIfClassExists = function (className) {
  try {
    $(this).attr('data-ss-instance', ss.instances.length);

    for (let i = 0, classesLength = classes.length; i < classesLength; i++) {
      if (classes[i].name === className) {
        ss.instances.push(new classes[i]($(this)));
      }
    }
  }
  catch (e) {
    console.warn(`The class ${className} does not exist!`);
  }
};

ss.initByState = (state) => {
  $(document).find(`[data-ss-state="${state}"]`).each(function () {
    let className = $(this).data('ss-init');
    ss.checkIfClassExists.call(this, className);
  });
};

// init method
ss.init = ($container, deepScan = false) => {
  if ($container) {
    if ($container instanceof $) {

      if (deepScan) {
        // initialize all modules from the jQuery DOM element
        $container.find(`[data-ss-init]`).each(function () {
          let className = $(this).data('ss-init');
          ss.checkIfClassExists.call(this, className);
        });
      }
      else {
        // initialize  the current element passed
        $container.each(function () {
          let className = $(this).data('ss-init');
          if (className) {
            ss.checkIfClassExists.call(this, className);
          }
        });
      }

    } else {
      console.error('The parameter passed it is not a jQuery element!');
    }
  } else {
    // if no param passed, all the modules from the DOM
    // will be initialized depending on the data-ss-state value
    $(document).ready(() => ss.initByState('onReady'));
    $(window).on('load', () => ss.initByState('onLoad'));
  }
};

//destroy method
ss.destroy = ($container, deepScan = false) => {
  let destroyInstance = function () {
    let currentInstance = $(this).data('ss-instance');
    ss.instances[currentInstance].destroy();
    $(this).removeAttr('data-ss-instance');
    ss.instances[currentInstance] = null;
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
