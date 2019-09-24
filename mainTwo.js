$(document).ready(function () {

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
    });

    $('#sidebar').css('display', 'none');

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').css('display', 'block');

        $('#sidebar').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('#iks').on('click', function () {
        $('#sidebar').css('display', 'none');
    })

    function navChange() {
        $('.nav').css({
            backgroundColor: 'white',
            height: '6vh',
            borderBottom: 'none'
        });
        $('.navbar-toggle').css({
            color: 'black'
        });
        $('.navbar-brand').css({
            textTransform: 'uppercase',
            color: 'black'
        });
        $('.navbar-default .navbar-nav>li>a').css({
            color: 'black'
        });
    }

    $(document).on('mousewheel', function () {
        if ($(document).scrollTop() > 1) {
            navChange();
        } else {
            $('.nav').css({
                backgroundColor: 'black',
                borderBottom: '0',
                color: 'white',
            });
            $('.navbar-toggle').css({
                color: 'white'
            });
            $('.navbar-brand').css({
                textTransform: 'capitalize',
                color: 'white'
            });
            $('.navbar-default .navbar-nav>li>a').css({
                color: 'white'
            });
        }
    })

    $('.auto').css({ 'display': 'none' });
    $(window).scroll(function () {
        let bottomOfObject = $('.bgg').position().top + $('.bgg').outerHeight();
        let bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottomOfObject) {
            console.log('hjygjhgjhg');
            $('.auto').delay(600).fadeIn();
        }
    })

    function checkDate() {
        //new york
        let currentDateNY = new Date();
        var hourDegreeNY = ((currentDateNY.getHours() - 6) + currentDateNY.getMinutes() / 60) / 12 * 360;
        var minuteDegreeNY = currentDateNY.getMinutes() / 60 * 360;
        $('.hourOne').css({ transform: 'rotate(' + hourDegreeNY + 'deg)' });
        $('.minOnes').css({ transform: 'rotate(' + minuteDegreeNY + 'deg)' });

        //london
        let currentDateLon = new Date();
        var hourDegreeLon = ((currentDateLon.getHours() - 1) + currentDateLon.getMinutes() / 60) / 12 * 360;
        var minuteDegreeLon = currentDateLon.getMinutes() / 60 * 360;
        $('#hourTwo').css({ transform: 'rotate(' + hourDegreeLon + 'deg)' });
        $('.minTwo').css({ transform: 'rotate(' + minuteDegreeLon + 'deg)' });
        //toronto
        let currentDateTor = new Date();
        var hourDegreeTor = ((currentDateTor.getHours() - 6) + currentDateTor.getMinutes() / 60) / 12 * 360;
        var minuteDegreeTor = currentDateTor.getMinutes() / 60 * 360;
        $('.hourThree').css({ transform: 'rotate(' + hourDegreeTor + 'deg)' });
        $('#minThree').css({ transform: 'rotate(' + minuteDegreeTor + 'deg)' });
        //hong kong
        let currentDateHK = new Date();
        var hourDegreeHK = ((currentDateHK.getHours() + 6) + currentDateHK.getMinutes() / 60) / 12 * 360;
        var minuteDegreeHK = currentDateHK.getMinutes() / 60 * 360;
        $('#hourFour').css({ transform: 'rotate(' + hourDegreeHK + 'deg)' });
        $('.minFour').css({ transform: 'rotate(' + minuteDegreeHK + 'deg)' });
        //bucharest
        let currentDateB = new Date();
        var hourDegreeB = ((currentDateB.getHours() + 1) + currentDateB.getMinutes() / 60) / 12 * 360;
        var minuteDegreeB = currentDateB.getMinutes() / 60 * 360;
        $('.hourFive').css({ transform: 'rotate(' + hourDegreeB + 'deg)' });
        $('#minFives').css({ transform: 'rotate(' + minuteDegreeB + 'deg)' });

        //warsaw
        let currentDateW = new Date();
        var hourDegreeW = (currentDateW.getHours() + currentDateW.getMinutes() / 60) / 12 * 360;
        var minuteDegreeW = currentDateW.getMinutes() / 60 * 360;
        $('#hourSix').css({ transform: 'rotate(' + hourDegreeW + 'deg)' });
        $('.minSix').css({ transform: 'rotate(' + minuteDegreeW + 'deg)' });

    }


    checkDate();
    setInterval(checkDate, 1000);


})