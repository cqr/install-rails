(function ($) {
  var setPageFromHash = function(e) {
    if (window.location.hash == '') return false;
    if (e) { e.preventDefault(); }
    var activeFragment = $(window.location.hash);
    $(".revealer").not(activeFragment).fadeOut();
    activeFragment.fadeIn();
  }

  $(function () {
    $('.revealer').hide();

    $(window)
      .hashchange(setPageFromHash)
    ;

    if (window.location.hash == '') {
      window.location.hash = 'start';
    } else {
      setPageFromHash();
    }


  });

})(jQuery);

