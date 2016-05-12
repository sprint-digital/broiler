;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// OffCanvass
	var offCanvass = function() {
		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			var $this = $(this);

			$('#fh5co-offcanvass').toggleClass('fh5co-awake');
			$('#fh5co-page, #fh5co-menu').toggleClass('fh5co-sleep');




			if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
				$this.addClass('active');
			} else {
				$this.removeClass('active');
			}
			event.preventDefault();
			
		});
	};

	// Single Page Nav





	var footerFixed = function() {
		var fh = $('#fh5co-footer').innerHeight();
		$('#fh5co-wrap').css({
			marginBottom : fh + 'px'
		});

		if ( $(window).width() < 991 ) {
			$('#fh5co-wrap').css({
				marginBottom: ''
			})
		}

		$(window).resize(function(){

			var fh = $('#fh5co-footer').innerHeight();
			$('#fh5co-wrap').css({
				marginBottom : fh + 'px'
			});

			if ( $(window).width() < 991 ) {
				$('#fh5co-wrap').css({
					marginBottom: ''
				})
			}
		});
	};


	//  Faqs Accordion
	var faqsAccordion = function() {

		var faqAcc = $('.faq-accordion h3');

		// Click
		faqAcc.on('click', function(event){
			var $this = $(this);
			
			$('.faq-accordion').removeClass('active');
			$('.faq-accordion').find('.faq-body').slideUp(400, 'easeInOutExpo');

			if ( !$this.closest('.faq-accordion').find('.faq-body').is(':visible')) {
				$this.closest('.faq-accordion').addClass('active');
				$this.closest('.faq-accordion').find('.faq-body').slideDown(400, 'easeInOutExpo');
			} else {
				$this.closest('.faq-accordion').removeClass('active');
				$this.closest('.faq-accordion').find('.faq-body').slideUp(400, 'easeInOutExpo');
			}


			setTimeout(function(){
				// alert($this.closest('.faq-accordion.active').innerHeight());
				$('html, body').animate({
			        scrollTop: $this.closest('.faq-accordion.active').offset().top - 90
			    }, 500);
			}, 700);
			
			
			event.preventDefault();
			return false;

		});

	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvass, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
	    		$('#fh5co-offcanvass').removeClass('fh5co-awake');
	    		$('#fh5co-page, #fh5co-menu').removeClass('fh5co-sleep');

	    		$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

		$(window).scroll(function(){
			var $menu = $('#fh5co-menu');
			if ( $(window).scrollTop() > 150 ) {
				$menu.addClass('sleep');
			}

			if ( $(window).scrollTop() < 500 ) {
				$menu.removeClass('sleep');
				$('#fh5co-offcanvass ul li').removeClass('active');
				$('#fh5co-offcanvass ul li').first().addClass('active');
			}
		

			if ( $(window).scrollTop() > 500 ) {
				if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
		    		$('#fh5co-offcanvass').removeClass('fh5co-awake');
		    		$('#fh5co-page, #fh5co-menu').removeClass('fh5co-sleep');

		    		$('.js-fh5co-nav-toggle').removeClass('active');
		    	}
	    	}
		});
	};



	// Document on load.
	$(function(){
		offCanvass();
		mobileMenuOutsideClick();
		footerFixed();
		faqsAccordion();
	});


}());