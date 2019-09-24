$(document).ready(function () {
  let sliki = ['img/vtora.jpg', 'img/treta.jpg', 'img/chetvrta.jpg'];
  let images = ['img/one.png', 'img/two.png', 'img/three.png'];
  let counter = 0;
  let slide = () => {
    $('.background-image').css({ 'background-image': `url(${sliki[counter]})` });
    $('.abs').attr('src', images[counter]);
    counter++;
    if (counter > 2) {
      counter = 0;
    }
  }
  setInterval(slide, 2000);

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

  $('.prvo').hover(function () {
    $('.vis').css({ 'display': 'block' });
    $(this).append(`<p class="text-center klime width">Our digital marketers live<br> where your costumers do.<br> We combine deep local<br> knoledge with data to acquire<br> and convert profitable<br> international customers.</p>`)
    $('.firstBtn').addClass('displayNone');
    $(this).addClass('opacity white');
  }, function () {
    $('.klime').css({ 'display': 'none' });
    $(this).removeClass('opacity white');
    $('.vis').css({ 'display': 'none' });
  });

  $('.vtoro').hover(function () {
    $('.viss').css({ 'display': 'block' });
    $(this).append(`<p class="text-center klime width">Our digital marketers live<br> where your costumers do.<br> We combine deep local<br> knoledge with data to acquire<br> and convert profitable<br> international customers.</p>`)
    $('.secondBtn').addClass('displayNone');
    $(this).addClass('opacity white');
  }, function () {
    $('.klime').css({ 'display': 'none' });
    $(this).removeClass('opacity white');
    $('.viss').css({ 'display': 'none' });

  });

  $('.treto').hover(function () {
    $('.visss').css({ 'display': 'block' });
    $(this).append(`<p class="text-center klime width">Our digital marketers live<br> where your costumers do.<br> We combine deep local<br> knoledge with data to acquire<br> and convert profitable<br> international customers.</p>`)
    $('.thirdBtn').addClass('displayNone');
    $(this).addClass('opacity white');
  }, function () {
    $('.klime').css({ 'display': 'none' });
    $(this).removeClass('opacity white');
    $('.visss').css({ 'display': 'none' });

  });

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
        backgroundColor: 'transparent',
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
  let click = 1;
  $('#dolno').on('click', function () {
    click++;
    console.log(click);
    if (click == 10) {
      $(this).attr('disabled', true);
      $('#gorno').attr('disabled', false);

    }
    arrowDown();
  });
  
  function arrowDown() {
    $('.img-tablet').animate({ 'margin-left': '+=30px' }, 500);
  }

  $('#gorno').attr('disabled', true);
  $('#gorno').on('click', function () {
    $('#dolno').attr('disabled', false);
    console.log(click);
    if (click == 2) {
      $(this).attr('disabled', true);
    }
    click--;
    arrowUp();
  })
  
  function arrowUp() {
    $('.img-tablet').animate({ 'margin-left': '-=30px' }, 500);
  }

  $('#One').on('click', function () {
    if ($('#firstB').text() == '+') {
      $(this).append(`<div class='nesh'><p>We are bold and ambitious. We are not afraid to test new ideas. We are resourceful. We solve hard problems in clever ways.</p></div>`);
      $('#firstB').text('-');
      $('#secondB').text('+');
      $('.nesh1').remove();
      $('#thirdB').text('+');
      $('.nesh2').remove();
      $('#forthB').text('+');
      $('.nesh3').remove();
    } else {
      $('#firstB').text('+');
      $('.nesh').remove();
    }
  });
  $('#two').on('click', function () {
    $(this).append(`<div class='nesh1'><p>We don't pretend to know what all customers want. We listen intently. We are objective. We put ourselves in our customers' shoes.</p></div>`);
    if ($('#secondB').text() == '+') {
      $('#secondB').text('-');
      $('#firstB').text('+');
      $('.nesh').remove();
      $('#thirdB').text('+');
      $('.nesh2').remove();
      $('#forthB').text('+');
      $('.nesh3').remove();
    } else {
      $('#secondB').text('+');
      $('.nesh1').remove();
    }
  });
  $('#three').on('click', function () {
    $(this).append(`<div class='nesh2'><p>We got this. We do what we need to do. We don't let each other down. We make commitments and keep them.</p></div>`);
    if ($('#thirdB').text() == '+') {
      $('#thirdB').text('-');
      $('#firstB').text('+');
      $('.nesh').remove();
      $('#secondB').text('+');
      $('.nesh1').remove();
      $('#forthB').text('+');
      $('.nesh3').remove();
    } else {
      $('#thirdB').text('+');
      $('.nesh2').remove();
    }
  });
  $('#four').on('click', function () {
    $(this).append(`<div class='nesh3'><p>We have very high standards. We don't cut corners. We are specialists, not generalists. We choose depth over breadth.</p></div>`);
    if ($('#forthB').text() == '+') {
      $('#forthB').text('-');
      $('#firstB').text('+');
      $('.nesh').remove();
      $('#secondB').text('+');
      $('.nesh1').remove();
      $('#thirdB').text('+');
      $('.nesh2').remove();
    } else {
      $('#forthB').text('+');
      $('.nesh3').remove();
    }
  });

  $('.auto').css({ 'display': 'none' });
  $(window).scroll(function () {
    let bottomOfObject = $('.bgg').position().top + $('.bgg').outerHeight();
    let bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottomOfObject) {
      console.log('hjygjhgjhg');
      $('.auto').delay(600).fadeIn();
    }
  })

  $('.line').css({ 'display': 'none' });
  $(window).scroll(function () {
    let height = $(window).height();
    if (height > 0.1) {
      console.log('skjnskdj')
      $('.line').slideDown('5000', 'linear');
    }
  })






  //     let chas = $(".strelka");
  //         let minuti = $(".strelkaa");

  //     function sedDate(){
  //     let data = new Date();
  //     let hour = data.getHours();
  //     let hourdeg = ((hour / 12) * 360 ) + 90;
  //     chas.css({'transform': `rotate(${hourdeg}deg)`})
  //     // chas.style.transform=`rotate(${hourdeg}deg)`;
  //     let min = data.getMinutes();
  //     let mindeg =((min /60) * 360) + 90;
  //     minuti.css({'transform': `rotate(${mindeg}deg)`})
  //     // minuti.style.transform=`rotate(${mindeg}deg)`;

  // }
  //     setInterval(sedDate, 1000);
  //     sedDate();


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

  $('#myCarousel').bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 120 > 0) {
      $(this).carousel('prev');
    } else {
      $(this).carousel('next');
    }
  });
  // let leftArrow = $(window).width() * 1 / 3;
  // let rightArrow = $(window).width() * 2 / 3;
  // $('.left').width(leftArrow);
  // $('.right').width(rightArrow - leftArrow);
  // console.log(rightArrow-leftArrow);
  $('.glyphicon-left, .glyphicon-right').hide();
  $('.left').hover(function () {
    $('.glyphicon-left').show();
  }, function () {
    $('.glyphicon-left').hide();
  })
  $('.right').hover(function () {
    $('.glyphicon-right').show();
  }, function () {
    $('.glyphicon-right').hide();
  })


  $('.Prvo').addClass('show');
  $('.Vtoro').addClass('hide');
  $('.Treto').addClass('hide');

  $('.brand').click(function () {
    $('.Prvo').addClass('show');
    $('.Vtoro').addClass('hide');
    $('.Treto').addClass('hide');
    $('.Vtoro').removeClass('show')
    $('.Treto').removeClass('show')
  })
  $('.mark').click(function () {
    $('.Prvo').addClass('hide');
    $('.Prvo').removeClass('show');
    $('.Vtoro').removeClass('hide');
    $('.Vtoro').addClass('show');
    $('.Treto').removeClass('show');
    $('.Treto').addClass('hide');

  })
  $('.codi').click(function () {
    $('.Prvo').addClass('hide');
    $('.Prvo').removeClass('show');
    $('.Vtoro').addClass('hide');
    $('.Vtoro').removeClass('show');
    $('.Treto').addClass('show');
    $('.Treto').removeClass('hide');

  })
  //list arrays
  let codingList = ['Web Design', 'Mobile & App Design', 'E-Commerce', 'CMS (WordPress & Prestashop)', 'UI • UX Responsive', 'Templating', 'Creative Front-End & Back-End Development'];
  let marketingList = ['Lead Generation', 'Social Media Marketing', 'Search Engine Optimization', 'PPC and paid search management', 'Strategy', 'Display and Advertising Recapture Marketing', 'Conversion Rate Optimisation', 'Growth Hacking', 'Side Project Marketing', 'Email Marketing', 'Content Marketing', 'Digital Event Amplification', 'Digital Marketing Trainings'];
  let brandingList = ['Art & Creative Direction', 'Brand Identity', 'Logo Design', 'Graphic Guidelines', 'Illustration', 'Typography', 'Print', 'Strategy'];

  function listDisplay(listArray) {
    $('.Prvo').html('');
    listArray.forEach(element => {
      $('.Prvo').append(`<p>${element}</p>`)
    });
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  }

  // function highlight() {
  //     $(this).addClass('active');
  //     $(this).siblings().removeClass('active');
  // }

  $('.codi').on('click', function () {
    // highlight().bind(this);
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    listDisplay(codingList);
  });
  $('.mark').on('click', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    listDisplay(marketingList)
  });
  $('.brand').on('click', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    listDisplay(brandingList)
  });
  // $('#coding').click();

  //change lists on click

  //change lists on scroll
  let s = 0;
  $('body').on('wheel', function (e) {
    if (e.originalEvent.wheelDelta < 0) {
      // s++;
      s < 3 ? s++ : null;
      if (s === 1) {
        $('.codi').click();
      }
      if (s === 2) {
        $('.mark').click();
      }
      if (s === 3) {
        $('.brand').click();
      }
    } else {
      // s--;
      s > 1 ? s-- : null;
      if (s === 1) {
        $('.codi').click();
      }
      if (s === 2) {
        $('.mark').click();
      }
      if (s === 3) {
        $('.brand').click();
      }
    }
  })



});

