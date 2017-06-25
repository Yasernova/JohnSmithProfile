$(document).ready(function(){

        /*Global variables*/
  var scrn = document.body.clientHeight,
      win = $(window),
      body = $('body'),
      navItem = $('li'),
      preLoad = $('.preloader');

  win.on('load', function(){
    preLoad.css({'display': 'none'});
    body.css('overflow','auto');
  });

  navItem.on('click',function(){
    var navLi = $(this);
    body.animate({scrollTop : $('.'+navLi.attr('id')).offset().top-100}, 1000);
  });
  var secAbout = $('section.about'),
      secSkills = $('section.skills'),
      secExperience = $('section.experience'),
      secGalary = $('section.galary'),
      secTestimonials = $('section.testimonials'),
      secContact = $('section.contact');
  win.on('scroll', function(){
    var winScroll = win.scrollTop();
    if(win.scrollTop() < secAbout.offset().top-100){
      $('#home').addClass('active-nav').siblings().removeClass('active-nav');
    }else if(win.scrollTop() < secSkills.offset().top-100){
      $('#'+secAbout.attr('data-id')).addClass('active-nav').siblings().removeClass('active-nav');
    }else if(win.scrollTop() < secExperience.offset().top-100){
      $('#'+secSkills.attr('data-id')).addClass('active-nav').siblings().removeClass('active-nav');
    }else if(win.scrollTop() < secGalary.offset().top-100){
      $('#'+secExperience.attr('data-id')).addClass('active-nav').siblings().removeClass('active-nav');
    }else if(win.scrollTop() < secTestimonials.offset().top-100){
      $('#'+secGalary.attr('data-id')).addClass('active-nav').siblings().removeClass('active-nav');
    }else if(win.scrollTop() < secContact.offset().top-100){
      $('#'+secTestimonials.attr('data-id')).addClass('active-nav').siblings().removeClass('active-nav');
    }else if(win.scrollTop() > secContact.offset().top-100){
      $('#'+secContact.attr('data-id')).addClass('active-nav').siblings().removeClass('active-nav');
    }
  });


//================ Header positioning ================
  (function(){
    var btnDown =$('.btn-down'),
        headerTypo = $('.header-typo');
    headerTypo.css('paddingTop', scrn/4);
    win.on('resize', function(){
      headerTypo.css('paddingTop', scrn/4);
    });
    btnDown.css('marginTop', scrn*0.8);

    $('header .cover').height(scrn);
    btnDown.on('click', function(){
      if (win.width() < 1000){
        body.animate({scrollTop: scrn+1}, 1000)
      }else{body.animate({scrollTop: scrn}, 1000)}
    });
  })();
//================ Nav bar positioning ===============
  (function(){
    win.on('scroll', function(){
      var aboutContainer = $('.about .container'),
          hedr = $('.hedr');
      if(win.scrollTop() >= scrn){
        aboutContainer.css({
          marginTop: '8rem'});
        hedr.css({
          position: 'fixed',
          width: '100%',
          top: 0,
        });
      }else {
          hedr.css('position', 'relative');
          aboutContainer.css({
            marginTop: '2rem'});
        }
        /*scroll to top btn display*/
      if (win.scrollTop() > scrn*0.15){
        up.css('display', 'block');
        $('.about .container h1, .about .container p').animate({
          opacity: 1,
          marginTop: '2rem'
        },1300)}else {
        up.css('display', 'none');
      }
    });
    var up = $('.up');
    up.on('click', function(){
      body.animate({scrollTop: 0}, 600)
      }
    );
  })();
//================ Mob-Menu btn ======================
  (function(){
    var mobMenu = $('.mob-menu'),
        mobMenuBtn = $('.fa-bars');

    mobMenuBtn.on('click', function(){
      mobMenu.removeClass('slided');
      mobMenu.slideToggle(500, function(){
        mobMenu.addClass('slided');
      });
    });

    body.on('click',function(){
        if(mobMenu.hasClass('slided')){
          mobMenu.slideUp(500);
          mobMenu.removeClass('slided');
        }
    });
  })();
//================ About me section ==================
  (function(){
    var imgWraper = $('.about-img .img-wraper'),
        meWraper = $('.me .me-wraper');
    win.on('scroll', function(){
      if ( win.scrollTop()+scrn*0.5 > imgWraper.offset().top){
        imgWraper.animate({marginLeft: 0, opacity: 1},500);
      }
      if (win.scrollTop()+scrn*0.5 > meWraper.offset().top){
        meWraper.animate({marginLeft: 0, opacity: 1},500);
      }
    });
  })();
//================ Skills section ====================
  (function(){
    var html = 'html5',
        css = 'css3',
        js = 'js',
        jquery = 'jquery',
        mobile = 'mobile',
        wf = 'wf';

    var start = 4.72,
        diff,
        c;

    function playCan(skill, level,i, wait){
      var target = document.getElementById(skill);
      c = target.getContext('2d');
      target.height = target.width;
      diff = i/100 * Math.PI*2;
      c.clearRect(0, 0, target.width, target.height);
      c.lineWidth = 23;
      c.fillStyle = 'rgb(255,255,255)';
      c.textAlign = 'center';
      c.font = '80px monospace';
      c.fillText(i+'%', target.width/2, target.width/1.7);
      c.beginPath();
      c.strokeStyle = 'rgb(42,43,44)';
      c.arc(target.width/2, target.width/2, target.width/2.3, start, diff+start*1.5, false);
      c.stroke();
      c.beginPath();
      c.strokeStyle = 'rgb(26, 188, 156)';
      c.arc(target.width/2, target.width/2, target.width/2.3, start, diff+start, false);
      c.stroke();
      $('#'+skill).animate({marginBottom: 0},500);
    }
    function playOnScroll(){
      var x = 300;
      var htmlI = 0, triggerHtml = setTimeout(function(){var fire = setInterval(function(){if(htmlI <= 81){playCan(html, 81, htmlI); htmlI++;}else{clearInterval(triggerHtml);}}, 300/81)},x/2);
      var cssI = 0, triggerCss = setTimeout(function(){var fire = setInterval(function(){if(cssI <= 77){playCan(css, 77, cssI); cssI++;}else{ clearInterval(triggerCss)}}, 300/77)},x);
      var jsI = 0, triggerJs = setTimeout(function(){var fire = setInterval(function(){if(jsI <= 68){playCan(js, 68, jsI); jsI++;}else{ clearInterval(triggerJs)}}, 300/68)},2*x);
      var jqI= 0,triggerJquery = setTimeout(function(){var fire = setInterval(function(){if(jqI <= 71){playCan(jquery, 71, jqI); jqI++;}else{ clearInterval(triggerJquery)}}, 300/71)},3*x);
      var mobI = 0,triggerMobile = setTimeout(function(){var fire = setInterval(function(){if(mobI <= 86){playCan(mobile, 86, mobI); mobI++;}else{ clearInterval(triggerMobile)}}, 500/86)},4*x);
      var wfI = 0, triggerWf = setTimeout(function(){var fire = setInterval(function(){if(wfI <= 84){playCan(wf, 84, wfI); wfI++;}else{ clearInterval(triggerWf)}}, 300/84)},5*x);
    }
        /*skills animation in action */

    var skills = $('.skills'),
        canvasElement =$('canvas'),
        goodAt = $('.skills .container h1.text-center');

    win.on('scroll.myScroll', function(){
      if(win.scrollTop()+scrn*0.75 >= goodAt.offset().top){
        if(win.width() > 1000){
          skills.height(500);
        }
        goodAt.animate({marginTop: '5rem',opacity: 1},500, playOnScroll);
        win.off('scroll.myScroll');
      }
    });
  })();
//================ Experience section ================
  (function(){
    var my = $('section.experience'),
        myH_I = $('.experience .my h1'),
        myH_III = $('.experience .my h3'),
        myP = $('.experience .my p');

    var wrkExp = $('.experience .wrkexp'),
        adrs = $('.experience div.adrs');

    win.on('scroll', function(){
      if(win.scrollTop()+scrn*0.5> my.offset().top){
        myH_I.animate({paddingTop: 0,opacity: 1}, 1000);
        myP.animate({paddingTop: 0, opacity: 1},1000);
        myH_III.animate({paddingTop: 0, opacity: 1},1000);
      }
      if(win.scrollTop()+scrn*0.5> wrkExp.offset().top){
        adrs.animate({marginTop: 0,opacity: 1}, 1000);
      }
    });
       /*Experience & Education items animamyion*/
    var expItemOne = $('#exp-one'),
        expItemTwo = $('#exp-two'),
        expItemThree = $('#exp-three');

    var eduItemOne = $('#edu-one'),
        eduItemTwo = $('#edu-two');

    function expAnimation(expItem){

      if(win.scrollTop()+scrn*0.5 > expItem.offset().top){
        expItem.addClass('on-vp');
        expItem.find('div').addClass('on-vp');

        var vrLine = $('.slice.on-vp'),
            hrLine = $('.exp-item.on-vp'),
            expLeft = $('.exp-breif.on-vp'),
            expRight = $('.exp-details.on-vp');

        vrLine.addClass('slice-show');
        hrLine.addClass('hr-show');
        setTimeout(function(){
          expLeft.animate({marginLeft: 0},500);
          expRight.animate({marginLeft: 0},500);
        },300);
      }
    }
    win.on('scroll', function(){
      expAnimation(expItemOne);
      expAnimation(expItemTwo);
      expAnimation(expItemThree);
      expAnimation(eduItemOne);
      expAnimation(eduItemTwo);
    });
  })();
//================ Education section =================
  (function(){
    var educationH_I = $('.education .edu-intro h1'),
        educationH_3 = $('.education .edu-intro h3');
    win.on('scroll', function(){
      if(win.scrollTop()+scrn*0.5 > educationH_I.offset().top){
        educationH_I.animate({
          opacity: 1,
          paddingTop: 0
        },1000)
      }
      if(win.scrollTop()+scrn*0.5 > educationH_3.offset().top){
        educationH_3.animate({
          opacity: 1,
          paddingTop: 0
        },500)
      }
    })
  })();
//================ Galary section ====================
  (function(){
    var galary = $('.galary'),
        galIntro = $('.galary .gal-intro'),
        galBtn = $('.galary .gal-btns'),
        galItem = $('.gal-item');

    win.on('scroll', function(){
      if(win.scrollTop()+scrn/8 > galary.offset().top){
        galIntro.animate({
          paddingTop: 0,
          opacity: 1
        }, 1000, function(){
          galBtn.css('opacity','1');
          galItem.css('opacity','1');
        });

      }
    });
    var design = $('#design'),
        photography =$('#photography'),
        all = $('#all');

    var web = $('.web'),
        foto = $('.foto');

    design.on('click', function(){
      foto.addClass('show-img',1000);
      web.removeClass('show-img',1000);
    });
    photography.on('click', function(){
      web.addClass('show-img',1000);
      foto.removeClass('show-img',1000);
    });
    all.on('click', function(){
      foto.removeClass('show-img',1000);
      web.removeClass('show-img',1000);
    });
    var zoom = $('.fa-search-plus'),
        imgSlider = $('.galary .img-slider'),
        imgToShow = $('.galary .img-slider img'),
        closeBtn = $('.galary .img-slider span i'),
        sliderBg = $('.slider-bg'),
        targetImgSrc,
        thisPhoto,
        nextPhotoSrc;

    function closeSlider(toClick) {
      toClick.on('click', function(){
        imgSlider.css('display', 'none');
      });
    }
    zoom.on('click',function(){

      targetImgSrc = $(this).closest('.img-tools').siblings().attr('src');
      thisPhoto = $(this).closest('.gal-item');
      imgSlider.css('display','block');
      imgToShow.attr('src', targetImgSrc);
      closeSlider(sliderBg);
      closeSlider(closeBtn);
    });


    win.on('keydown',function(e) {

      if(e.which == 39){
        if(thisPhoto.index() < 9){thisPhoto = thisPhoto.next()}
        else {thisPhoto = $('.gal-item:eq(0)')}
      }
      if(e.which == 37){
        if(thisPhoto.index() > 2){thisPhoto = thisPhoto.prev()}
        else if(thisPhoto.index() === 2){ thisPhoto = $('.gal-item:eq(7)')}
      }
      nextPhotoSrc = thisPhoto.find('img').attr('src');
      imgToShow.attr('src', nextPhotoSrc);
    });
  })();
//================ Testimonials section ==============
  (function(){
    var tstIntro = $('.testimonials .intro'),
        tstItems = $('.testimonials .clients-wraper');

    win.on('scroll', function(){
      if(win.scrollTop()+ scrn/3 > tstIntro.offset().top){
        tstIntro.animate({marginLeft: 0, opacity: 1}, 500);
        tstItems.animate({paddingLeft: 0, opacity: 1}, 500);
      }
    });
    var crslBtn = $('.carousal span'),
        clients = $('.clients'),
        crslItem;

    crslBtn.on('click', function(){

      if($(this).hasClass('active')){}
      else {
        $(this).addClass('active').siblings().removeClass('active');
        mrgnValue = $(this).index();
        clients.animate({
          marginLeft: mrgnValue*-100+'%'
        },1000);
      }
    });
  })();
//================ Contact section ===================
  (function(){
    var intro = $(".contact .intro"),
        introH1 = $('.contact .intro h1'),
        introH3 = $('.contact .intro h3'),
        info = $('.contact .info'),
        contactForm = $('.contact .contact-form');
    win.on('scroll', function(){
      if(win.scrollTop()+scrn/2 > intro.offset().top){
        introH1.animate({opacity: 1, paddingTop: 0}, 1000);
        introH3.animate({opacity: 1, paddingTop: 0}, 1000);
      }
    });
    win.on('scroll', function(){
      if(win.scrollTop()+scrn/2 > info.offset().top){
        info.animate({opacity: 1, marginLeft: 0}, 1000);
        contactForm.animate({opacity: 1, marginLeft: 0}, 1000);
      }
    });
  })();


                  /*Have a nice surfing*/
                  /*Ahmed Yasser*/
                  /*23/6/2017*/
                  /*1st*/
});
