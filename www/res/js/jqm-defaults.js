$(document).bind('mobileinit', function () {
    console.log('init');
    $.mobile.changePage.defaults.changeHash = true;
    $.mobile.hashListeningEnabled = true;
    $.mobile.pushStateEnabled = false;
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.changePage.defaults.allowSamePageTransition = false;
    $.mobile.phonegapNavigationEnabled = true;
    jQuery.mobile.defaultPageTransition = 'slide';
});