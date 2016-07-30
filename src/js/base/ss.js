import $ from 'jquery';
window.ss = window.ss || {};

ss.checkIfModuleExists = (moduleName, cb) => {
  try {
    ss[moduleName][cb]($(this));
  } catch (e) {
    console.warn(`The module ${moduleName} does not exist!`);
  }
};

ss.initByState = (state) => {
  $('body').find(`[data-ss-state="${state}"]`).each(function () {
    let moduleName = $(this).data('ss-init');
    ss.checkIfModuleExists(moduleName, 'init');
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
          ss.checkIfModuleExists(moduleName, 'init');
        });
      }
      else {
        // initialize  the current element passed
        let moduleName = $container.data('ss-init');
        if (moduleName) {
          ss.checkIfModuleExists(moduleName, 'init');
        }
      }

    } else {
      console.error('The parameter passed it is not a jQuery element!');
    }
  } else {
    // if no param passed, all the modules from the DOM
    // will be initialized depending on the data-ss-state value
    $(document).ready(ss.initByState('onReady'));
    $(window).load(ss.initByState('onLoad'));
  }
};

//destroy method
ss.destroy = (data) => {
  if (data) {
    ss.checkIfModuleExists(data, 'destroy');
  } else {
    $('body').find(`[data-ss-init]`).each(function () {
      let moduleName = $(this).data('ss-init');
      try {
        ss[moduleName].destroy($(this));
      } catch (e) {
        console.warn(`The module ${moduleName} does not exist!`);
      }
    });
  }
};
