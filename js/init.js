jQuery(document).ready(function(){

	"use strict";
	
	function grax_service_carousel(){
		var carousel			= jQuery('.grax_services_wrap .owl-carousel');
		carousel.owlCarousel({
				loop: true,
				items: 3,
				lazyLoad: true,
				margin: 40,
				autoplay: true,
				autoplayTimeout: 5500,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
				0:{items:1},
				480:{items:1},
				768:{items:2},
				1040:{items:3},
				1200:{items:3},
				1600:{items:3},
				1920:{items:3}
			}
		});
		grax_modal_news();
		
		var carousel2			= jQuery('.grax_news .owl-carousel');
		carousel2.owlCarousel({
				loop: true,
				items: 3,
				lazyLoad: true,
				margin: 40,
				autoplay: true,
				autoplayTimeout: 5500,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
				0:{items:1},
				480:{items:1},
				768:{items:2},
				1040:{items:3},
				1200:{items:3},
				1600:{items:3},
				1920:{items:3}
			}
		});
		
		jQuery('.grax_news .custom_nav > a.prev').on('click', function(){
		carousel2.trigger('prev.owl.carousel');
		return false;
	});
	
	jQuery('.grax_news .custom_nav > a.next').on('click', function(){
		carousel2.trigger('next.owl.carousel');
		return false;
	});
		
		var carousel3			= jQuery('.grax_testimonials .owl-carousel');
		carousel3.owlCarousel({
				loop: true,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				items: 1,
				lazyLoad: true,
				margin: 40,
				autoplay: true,
				autoplayTimeout: 5500,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true
		});
		
		var carousel4			= jQuery('.grax_partners .owl-carousel');
		carousel4.owlCarousel({
				loop: true,
				items: 4,
				lazyLoad: true,
				margin: 40,
				autoplay: true,
				autoplayTimeout: 4000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
					0:{items:1},
					480:{items:2},
					768:{items:3},
					1040:{items:4},
					1200:{items:4},
					1600:{items:4},
					1920:{items:4}
				}
		});
		
	}
	grax_service_carousel();
		
	/*** Svg ***/
	
	function grax_svg(){
		
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}
grax_svg();
	
	/*** Progress ***/
	
	function tdss(container){
		
		container.find('.progress_inner').each(function(i) {
			var progress 		= jQuery(this);
			var pValue 			= parseInt(progress.data('value'), 10);
			var pColor			= progress.data('color');
			var pBarWrap 		= progress.find('.bar');
			var pBar 			= progress.find('.bar_in');
			pBar.css({width:pValue+'%', backgroundColor:pColor});
			setTimeout(function(){pBarWrap.addClass('open');},(i*300));
		});
	}

		jQuery('.grax_progress').each(function() {
			
			var pWrap 			= jQuery(this);
			pWrap.waypoint({handler: function(){tdss(pWrap);},offset:'90%'});	
		});
	
	/*** Images ***/
	
	function grax_images(){
		
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element		= jQuery(this);
		var url			= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}
grax_images();
	
	/*** Hero Height ***/
	
	function grax_hero_height(){
		
	var WH		= jQuery(window).height();
	var hero	= jQuery('.grax_hero_wrap');
		
	hero.css({height:WH});
}
grax_hero_height();	
	
	
	/************************* Hero Effect ****************************/
	
	
	function renex_hero_effect(){
		
	jQuery(window).on('scroll',function(){
		var currentScroll		= window.pageYOffset;
		jQuery(".grax_hero_wrap .hero_texts,.grax_down").css({'transform': 'translateY(-50%)('+(100 - currentScroll/100)/99+')','opacity' : (1 - (currentScroll/20) / 15)});
	});	
}
	
	/*** Menu Backgound ***/
	
	function grax_menu_bg(){
	jQuery(window).on('scroll',function(){
		var WinOffset		= jQuery(window).scrollTop();
		var topBar			= jQuery('.grax_topbar');
		if(WinOffset >= 550){
			topBar.addClass('animate');
		}else{
			topBar.removeClass('animate');
		}
	});
}
grax_menu_bg();
	
	/*** Mobile Menu ***/
	
	function grax_mobile_menu(){
		
	var trigger			= jQuery('.grax_topbar .trigger');
	var triggerMenu		= jQuery('.grax_topbar .trigger .menu');
	var triggerClose	= jQuery('.grax_topbar .trigger .close');
	var dropdown		= jQuery('.grax_topbar .dropdown');
	
	trigger.on('click',function(){
		var element	= jQuery(this);
		if(element.hasClass('opened')){
			element.removeClass('opened');
			triggerMenu.removeClass('opened');
			triggerClose.removeClass('opened');
			dropdown.slideUp();
		}else{
			element.addClass('opened');
			triggerMenu.addClass('opened');
			triggerClose.addClass('opened');
			dropdown.slideDown();
		}
		return false;
	});
}
grax_mobile_menu();	
	
	/*** Anchor ***/
	
	function grax_anchor(){
	
	jQuery('.grax_topbar .menu_list ul li a,.grax_topbar .dropdown .main ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-78
			}, 1000);
		}
		return false;
	});
}
grax_anchor();
	
	/*** Appear ***/
	
	function grax_appear(){
		
	var div		= jQuery('.grax_appear');
	
	div.each(function(){
		
		var element	= jQuery(this);
		
		element.waypoint({
			handler:function(){
				element.addClass('load');
			},
			offset:"50%"
		});
		
	});
	
}
grax_appear();
	
	function grax_popup(){
	
		jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
	}
	grax_popup();
	
	/*** Ripple ***/
	
	function grax_ripple(){
		
		jQuery('#ripple').ripples({
				resolution: 500,
				dropRadius: 20,
				perturbance: 0.04
			});
	}
	grax_ripple();
	
	/*** Video ***/
	
	$(".youtube-bg").mb_YTPlayer();
	
	/*** Glitch ***/
	
	$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});
	
	function grax_animate_text(){
		
	var animateSpan1			= jQuery('.grax_tm_animation_text_word');
	var animateSpan2			= jQuery('.grax_tm_animation_text_word_2');
	var animateSpan3			= jQuery('.grax_tm_animation_text_word_3');
	
		animateSpan1.typed({
			strings: ["an ML Developer", "Alisya","an IoT Developer","an Innovator"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
		
		animateSpan2.typed({
			strings: ["Freelancer", "Designer","Web Developer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
		
		animateSpan3.typed({
			strings: ["Freelancer", "Designer","Web Developer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}
grax_animate_text();
	
	/*** Preloader ***/
	
	function grax_preloader(){
		
	var mainPreloader	 = $(".grax_loader-wrapper .loader");
	var WinWidth 		 = $(window).width();
    var WinHeight		 = $(window).height();
    var zero = 0;

    mainPreloader.css({
        top: WinHeight / 2 - 2.5,
        left: WinWidth / 2 - 200
    });

    do {
        mainPreloader.animate({
            width: zero
        }, 10);
        zero += 3;
    } while (zero <= 400);
    if (zero === 402) {
        mainPreloader.animate({
            left: 0,
            width: '100%'
        });
        mainPreloader.animate({
            top: '0',
            height: '100vh'
        });
    }
		
    setTimeout(function() {
        $(".grax_loader-wrapper").fadeOut('fast');
        (mainPreloader).fadeOut('fast');
    }, 4500);
}
	jQuery(window).on('scroll',function(){
		grax_modal_scroll();
		renex_hero_effect();
	});

	jQuery(window).on('resize',function(){
		grax_hero_height();
	});

	jQuery(window).load('body', function(){
		setTimeout(function(){grax_preloader();},1000);
	});
	
	
	function grax_location(){
	var button		= jQuery('.href_location');
	button.on('click',function(){
		var element		= jQuery(this);
		var address		= element.text();
		address			= address.replace(/\ /g,'+');
		var text		= 'https://maps.google.com?q=';
		window.open(text+address);
		return false;
	});
}
grax_location();	
	
	/*** Contact Form ***/
	
	function grax_contact_form(){
		
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}
	grax_contact_form();
	
	
	
	
	/*********************** Modal News *************************/
	
	
	function grax_modal_news(){
		
		var modalBox		= jQuery('.grax_modal_news');
		var modalMain		= jQuery('.grax_modal_news .modal_main');
		var list			= jQuery('.grax_news .news_list ul li');
		var close 			= jQuery("#floatingmes");
		
		list.each(function(){
			var element		= jQuery(this);
			var button		= element.find('.more a,.texts .title h3 a,.image a');
			var html		= element.html();
			var title		= element.find('.title h3');
			var titleHref	= element.find('.title h3 a').html();
			
			/* button.on('click',function(){
				modalBox.addClass('opened');
				modalMain.html(html);
				title = modalMain.find('.title h3');
				title.html(titleHref);
				modalBox.on('mousemove',function(pos){
					close.show(); 
					close.css('left',(pos.pageX+10)+'px').css('top',(pos.pageY+10)+'px'); 	
				}).on('mouseleave',function() {
					close.hide();
				});
				return false;
			}); */
		});
		modalBox.on('click',function(){
			var element = jQuery(this);
			element.removeClass('opened');
			element.scrollTop(0);
			close.hide();
		});
	}
	grax_modal_news();

	
	/************************* Modal Scroll *********************/
	
	
	function grax_modal_scroll(){
		
	var H				= jQuery(window).height();
	var scrollable		= jQuery('.grax_modal_news.scrollable');
	
	var popupBox		= jQuery('.grax_modal_news');
	
	popupBox.css({height:H});
	
	scrollable.each(function(){
		var element		= jQuery(this);
		var wH			= jQuery(window).height();
		
		element.css({height: wH});
		
		element.niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #fff"
		});
	});
}
	grax_modal_scroll();

	/************************* Jarallax *********************/
	
	function grax_jarallax(){
		
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}
	grax_jarallax();
	
	/************************* Portfolio *********************/
	
	
	function grax_portfolio_filter(){

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.arlo_tm_portfolio_list');
		var filter		 = jQuery('.arlo_tm_portfolio_filter');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}
	grax_portfolio_filter();

function grax_portfolio() {
	
	
	jQuery('.arlo_tm_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.arlo_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.arlo_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.arlo_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.arlo_tm_portfolio_titles').removeClass('visible');
		});
	});
}
	grax_portfolio();
	
	
	
	
	
	
	function grax_about_animation(){
				
		if ($('.parallax').length > 0) { 
		  var scene = $('.parallax').get(0);
		  var parallax = new Parallax(scene, { 
			relativeInput: true,
			onReady: function() { console.log('ready!');
		  } });
		}
	}
	grax_about_animation();
	
	function grax_kenburn_slider(){
		
		jQuery(function() {
			jQuery('.grax_hero_wrap_kenburn .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/hero/1.jpg' },
				{ src: 'img/hero/2.jpg' },
				{ src: 'img/hero/5.jpg' },
			]

		});
	});
}
	grax_kenburn_slider();
		
	
});