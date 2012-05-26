(function ($) {
  var setPageFromHash = function() {
    if (window.location.hash == '') return false;
    var activeFragment = $(window.location.hash);
    $(".revealer").not(activeFragment).fadeOut();
    activeFragment.fadeIn();
  }

  var setWindowHeight = function () {
    var $window = $(window);

    $window.add('body').css('min-height', $window.height() - 50);
  }

  $(function () {
    $('.revealer').hide();

    setWindowHeight();

    $(window)
      .hashchange(setPageFromHash)
      .resize(setWindowHeight)
    ;

    if (window.location.hash == '') {
      window.location.hash = 'start';
    } else {
      setPageFromHash();
    }


  });

})(jQuery);

