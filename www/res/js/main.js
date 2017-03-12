var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

$(document).ready(function() {
   hideSplashScreen();
    $('a').click(function() {
        console.log("triggered...");
        $('a').each(function(i, obj) {
            $(this).animate({color: '#FFFFFF'}, {duration: 200});
        });
        $(this).animate({color: 'blue'}, {duration: 500});
    });
    $(window).on('swipeleft swiperight', null, true, function(event) {
        if (event.type == 'swipeleft') {
            hideHamburgerMenu();
        } else {
            showHamburgerMenu();
        }
    });
})

function hideSplashScreen() {
    window.setTimeout(function() {
        $('#splash-screen').animate(
            {
                opacity: 0.0
            }, {
            duration: 200,
            complete: function() {
                $(this).remove();
        }});
    }, 5000);
}

function showHamburgerMenu() {
    $('#hamburger-menu').css('visibility', 'visible').animate({
        left: '0',
    }, 200);
    $('#overlay').css('visibility', 'visible').animate({
        opacity: 0.8
    }, 200);
};

function hideHamburgerMenu() {
    $('#hamburger-menu').animate({
        left: '-100%',
    }, {
        duration: 200,
        complete: function() {
            $(this).css('visibility', 'hidden')
        }
    });
    $('#overlay').animate({
        opacity: 0.0
    }, {duration: 200,
        complete: function(){
            $(this).css('visibility', 'collapse');
        }
       }
    );
};