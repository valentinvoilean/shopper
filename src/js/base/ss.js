import $ from 'jquery';
window.ss = window.ss || {};

ss.checkIfModuleExists = function (moduleName, cb) {
  try {
    ss[moduleName][cb]($(this));
  }
  catch (e) {
    console.warn(`The module ${moduleName} does not exist!`);
  }
};

ss.initByState = (state) => {
  $('body').find(`[data-ss-state="${state}"]`).each(function () {
    let moduleName = $(this).data('ss-init');
    ss.checkIfModuleExists.call(this, moduleName, 'init');
  });
};

// init method
ss.init = ($container, deepScan = false) => {
  if ($container) {
    if ($container instanceof $) {

      if (deepScan) {
        // initialize all modules from the jQuery DOM element
        $container.find(`[data-ss-init]`).each(function () {
          let moduleName = $(this).data('ss-init');
          ss.checkIfModuleExists.call(this, moduleName, 'init');
        });
      }
      else {
        // initialize  the current element passed
        $container.each(function () {
          let moduleName = $(this).data('ss-init');
          if (moduleName) {
            ss.checkIfModuleExists.call(this, moduleName, 'init');
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
  if ($container) {
    if ($container instanceof $) {
      if (deepScan) {
        // destroy all modules from the jQuery DOM element
        $container.find(`[data-ss-init]`).each(function () {
          let moduleName = $(this).data('ss-init');
          ss.checkIfModuleExists.call(this, moduleName, 'destroy');
        });
      }
      else {
        // destroy  the current element passed
        $container.each(function () {
          let moduleName = $(this).data('ss-init');
          if (moduleName) {
            ss.checkIfModuleExists.call(this, moduleName, 'destroy');
          }
        });
      }

    } else {
      console.error('The parameter passed it is not a jQuery element!');
    }
  }
  else {
    $('body').find(`[data-ss-init]`).each(function () {
      let moduleName = $(this).data('ss-init');
      ss.checkIfModuleExists.call(this, moduleName, 'destroy');
    });
  }

};
