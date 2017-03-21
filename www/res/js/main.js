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
    setEventListeners();
    hideAllSections();
    $("section[data-name=home]").show();
})

function setEventListeners() {
    $('li a').click(function() {
        $('li a').each(function(i, obj) {
            $(this).removeClass('selected');
        });
        $(this).addClass('selected');
        hideHamburgerMenu();
    });
    $("li").click(function() {
        $('li').each(function(i, obj) {
            $(this).removeClass('selected');
        });
        $(this).addClass('selected');
        
        var elementToShow = $(this).attr('data-name');
        
        if (elementToShow !== undefined) {
            hideAllSections();

            $("section[data-name=" + elementToShow + "]").fadeIn(600).show;
            
            setTitle(elementToShow);
        }
    });
    $(window).on('swipeleft swiperight', null, true, function(event) {
        if (event.type == 'swipeleft') {
            hideHamburgerMenu();
        } else {
            showHamburgerMenu();
        }
    });
}

function hideAllSections() {
        $("section").each(function() {
            $(this).hide();
        });
    }

function setTitle(pageName='home') {
    $title = $('span[class=title]');
    switch (pageName) {
        case 'home':
            $title.text("Dashboard");
            break;
        case 'addAssignment':
            $title.text("Add Assignment");
    }
}

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