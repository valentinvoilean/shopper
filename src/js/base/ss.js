import $ from 'jquery';
window.ss = window.ss || {};

ss.initByState = (state) => {
  $('body').find(`[data-ss-state="${state}"]`).each(function () {
    let moduleName = $(this).data('ss-init');
    try {
      ss[moduleName].init($(this));
    } catch (e) {
      console.warn(`The module ${moduleName} does not exist!`);
    }
  });
};

// init method
ss.init = (module) => {
  if (module) {
    try {
      ss[module].init();
    } catch (e) {
      console.warn(`The module ${module} does not exist!`);
    }
  } else {
    $(document).ready(ss.initByState('onReady'));
    $(window).load(ss.initByState('onLoad'));
  }
};

//destroy method
ss.destroy = (module) => {
  if (module) {
    try {
      ss[module].destroy();
    } catch (e) {
      console.warn(`The module ${module} does not exist!`);
    }
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
