import $ from 'jquery';
window.ss = window.ss || {};

ss.initByState = (state) => {
  $('body').find(`[data-ss-state="${state}"]`).each(function () {
    let moduleName = $(this).data('ss-init');
    ss[moduleName].init($(this));
  });
};

// init method
ss.init = (module) => {
  if (module) {
    ss[module].init();
  } else {
    $(document).ready(ss.initByState('onReady'));
    $(window).load(ss.initByState('onLoad'));
  }
};

//destroy method
ss.destroy = (module) => {
  if (module) {
    ss[module].destroy();
  } else {
    $('body').find(`[data-ss-init]`).each(function () {
      let moduleName = $(this).data('ss-init');
      ss[moduleName].destroy($(this));
    });
  }
};
