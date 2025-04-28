/***************************************************
==================== JS INDEX ======================
****************************************************
// Data Js
// Mobile Menu Js
// Sticky Js
// Backtotop Js
// Fun Fact Js
// VenoBox Js
// Accordion Js
// Hero Slider Js
// Service Slider Js
// Marquee slider Js
// Project Slider Js
// Testimonial Slider Js
// Blog Slider Js
// Awards Slider Js
// Line Animation Js

****************************************************/

(function ($) {
	"use strict";
	$(document).ready(function () {
		////////////////////////////////////////////////////
		// Data js
		$("[data-bg-image]").each(function () {
			var $this = $(this),
				$image = $this.data("bg-image");
			$this.css("background-image", "url(" + $image + ")");
		});

		////////////////////////////////////////////////////
		// Mobile Menu Js
		$(".menu_bar").on("click", function () {
			$(this).toggleClass("on");
		});

		// offcanvas
		$(".menu_bar.menu_offcanvas").on("click", function () {
			$(".tj-offcanvas-area").toggleClass("opened");
			$("body").toggleClass("overflow-hidden");
		});

		$(".main-mobile-menu").meanmenu({
			meanMenuContainer: ".mobile_menu",
			meanScreenWidth: "10000",
			meanExpand: ['<i class="tji-drop-down"></i>'],
		});

		// Hamburger Menu Js
		$(".mobile_menu_bar").on("click", function () {
			$(".hamburger-area").addClass("opened");
			$(".body-overlay").addClass("opened");
		});
		$(".hamburger_close_btn").on("click", function () {
			$(".hamburger-area").removeClass("opened");
			$(".body-overlay").removeClass("opened");
			$(".mobile_menu_bar").removeClass("on");
		});
		$(".body-overlay").on("click", function () {
			$(".hamburger-area").removeClass("opened");
			$(".body-overlay").removeClass("opened");
			$(".mobile_menu_bar").removeClass("on");
		});

		////////////////////////////////////////////////////
		// Sticky Js
		$(window).scroll(function () {
			var Width = $(document).width();
			if ($("body").scrollTop() > 250 || $("html").scrollTop() > 250) {
				$(".header-sticky").addClass("sticky");
			} else {
				$(".header-sticky").removeClass("sticky");
			}
		});
		////////////////////////////////////////////////////
		// Backtotop Js
		function back_to_top() {
			var btn = $("#back_to_top");
			var btn_wrapper = $(".back-to-top-wrapper");

			$(window).scroll(function () {
				if ($(window).scrollTop() > 300) {
					btn_wrapper.addClass("back-to-top-btn-show");
				} else {
					btn_wrapper.removeClass("back-to-top-btn-show");
				}
			});

			btn.on("click", function (e) {
				e.preventDefault();
				$("html, body").animate({ scrollTop: 0 }, "300");
			});
		}
		back_to_top();

		////////////////////////////////////////////////////
		// Fun Fact Js
		$(".counter").counterUp({
			delay: 10,
			time: 1000,
		});

		////////////////////////////////////////////////////
		// VenoBox Js
		if ($(".ig-gallery").length > 0) {
			new VenoBox({
				selector: ".ig-gallery",
				numeration: true,
				// infinigall: true,
				spinner: "pulse",
			});
		}

		if ($(".video-popup").length > 0) {
			new VenoBox({
				selector: ".video-popup",
				numeration: true,
				// infinigall: true,
				spinner: "pulse",
			});
		}

		////////////////////////////////////////////////////
		// Accordion Js
		if ($(".accordion-item").length > 0) {
			$(".accordion-item .faq-title").on("click", function () {
				if ($(this).parent().hasClass("active")) {
					$(this).parent().removeClass("active");
				} else {
					$(this).parent().siblings().removeClass("active");
					$(this).parent().addClass("active");
				}
			});
		}

		////////////////////////////////////////////////////
		// Hero Slider JS
		if (document.querySelector(".hero-slider")) {
			var hero = new Swiper(".hero-slider", {
				slidesPerView: 1,
				spaceBetween: 0,
				loop: true,
				speed: 600,
				autoplay: {
					delay: 5000,
				},
				navigation: {
					nextEl: ".slider-next",
					prevEl: ".slider-prev",
				},
			});
		}

		////////////////////////////////////////////////////
		// Service Slider Js
		if ($(".service-slider").length > 0) {
			var service = new Swiper(".service-slider", {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				autoplay: {
					delay: 9000,
				},
				speed: 600,
				navigation: {
					nextEl: ".slider-next",
					prevEl: ".slider-prev",
				},
				pagination: {
					el: ".service-pagination",
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					640: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 3,
					},
				},
			});
		}

		////////////////////////////////////////////////////
		// Marquee slider Js
		if ($(".marquee-slider").length > 0) {
			var marquee = new Swiper(".marquee-slider", {
				slidesPerView: "auto",
				spaceBetween: 0,
				freemode: true,
				centeredSlides: true,
				loop: true,
				speed: 1500,
				allowTouchMove: false,
				autoplay: {
					delay: 1,
					disableOnInteraction: true,
				},
			});
		}

		////////////////////////////////////////////////////
		// Project Slider Js
		if ($(".project-slider").length > 0) {
			var project = new Swiper(".project-slider", {
				slidesPerView: 3,
				spaceBetween: 30,
				centeredSlides: true,
				loop: true,
				speed: 600,
				autoplay: {
					delay: 2000,
				},
				pagination: {
					el: ".project-pagination",
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 1.2,
					},
					992: {
						slidesPerView: 1.5,
					},
					1200: {
						slidesPerView: 1.6,
					},
					1440: {
						slidesPerView: 1.9,
					},
				},
			});
		}

		// Project Slider Js
		if ($(".project-slider-two").length > 0) {
			var project = new Swiper(".project-slider-two", {
				slidesPerView: 3,
				spaceBetween: 30,
				centeredSlides: true,
				loop: true,
				autoplay: {
					delay: 9000,
				},
				speed: 600,
				navigation: {
					nextEl: ".slider-next",
					prevEl: ".slider-prev",
				},
				pagination: {
					el: ".project-pagination",
					clickable: true,
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1.6,
					},
					640: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
				},
			});
		}

		////////////////////////////////////////////////////
		// Testimonial Slider Js
		if ($(".testimonial-slider").length > 0) {
			var testimonial = new Swiper(".testimonial-slider", {
				slidesPerView: 1,
				spaceBetween: 30,
				loop: true,
				speed: 600,
				// autoplay: {
				// 	delay: 2000,
				// },
				navigation: {
					nextEl: ".slider-next",
					prevEl: ".slider-prev",
				},
				pagination: {
					el: ".testimonial-pagination",
					clickable: true,
				},
			});
		}
		////////////////////////////////////////////////////
		// Project Hover active change
		if ($(".project-wrapper-three").length) {
			$(".project_item").hover(function () {
				// Remove active class from all siblings
				$(this).siblings(".project_item").removeClass("active");

				// Add active class to hovered item
				$(this).addClass("active");

				// Update image dynamically
				const newSrc = $(this).data("src");
				const $image = $(".project_list_img img");

				// Animate zoom out, change image, then zoom back in
				$image
					.fadeOut(300)
					.css("transform", "scale(0.9)")
					.promise()
					.done(function () {
						$image.attr("src", newSrc).fadeIn(300).css("transform", "scale(1)");
					});
			});
		}

		////////////////////////////////////////////////////
		// progress bar
		const progressBarController = () => {
			const progressContainers = document.querySelectorAll(".tj-progress");

			if (progressContainers?.length) {
				progressContainers.forEach(progressContainer => {
					const targetedProgressBar =
						progressContainer.querySelector(".tj-progress__bar");
					const completedPercent =
						parseInt(targetedProgressBar.getAttribute("data-perchant")) || 0;

					console.log("Target progress:", completedPercent + "%"); // Debugging log

					// Trigger animation when the element comes into view
					const observer = new IntersectionObserver(
						entries => {
							entries.forEach(entry => {
								if (entry.isIntersecting) {
									// Animate the progress bar
									targetedProgressBar.style.transition = "width 2s ease-out";
									targetedProgressBar.style.width = `${completedPercent}%`;

									// Animate the percentage text
									const percentageText = progressContainer.querySelector(
										".tj-progress__perchant"
									);
									if (percentageText) {
										let currentPercent = 0;

										const interval = setInterval(() => {
											currentPercent++;
											percentageText.textContent = `${currentPercent}%`;

											if (currentPercent >= completedPercent) {
												clearInterval(interval); // Stop the animation
											}
										}, 10); // Adjust the interval for animation speed
									}
								}
							});
						},
						{
							root: null, // Observing the viewport
							threshold: [0.3, 0.9], // Progress triggers based on visibility
						}
					);
					observer.observe(progressContainer);
				});
			}
		};

		// Call the function
		progressBarController();

		////////////////////////////////////////////////////
		// nice select
		if ($(".tj-nice-select").length) {
			$(".tj-nice-select").niceSelect();
		}

		////////////////////////////////////////////////////
		// wow js
		new WOW().init();
	});
	/////////////////////////////////////////////////////
	//Email Form
	document.addEventListener("DOMContentLoaded", function () {
		const form = document.querySelector("#newsletter-form");
		if (!form) return;
		const emailInput = document.querySelector("#email");
	  
		form.addEventListener("submit", function (e) {
		  e.preventDefault();
	  
		  const email = emailInput.value.trim();
		  if (!email || !validateEmail(email)) {
			alert("Please enter a valid email.");
			return;
		  }
	  
		  const formData = new FormData();
		  formData.append("email", email);
	  
		  const scriptURL = "https://script.google.com/macros/s/AKfycbzXuVn-ieZJ6A3ILqAaA6aXt-v8YeIkTOb3oiTWotNOXOtw97gMiy2x84asO9wWkjaH/exec";
	  
		  fetch(scriptURL, {
			method: "POST",
			body: formData,
		  })
			.then(response => response.text())
			.then(result => {
			  alert("Thank you for subscribing!");
			  form.reset();
			})
			.catch(error => {
			  console.error("Error!", error.message);
			  alert("Network error. Try again later.");
			});
		});
	  
		function validateEmail(email) {
		  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		  return re.test(email.toLowerCase());
		}
	  });
	/////////////////////////////////////////////////////
	//Contact Form
	document.addEventListener("DOMContentLoaded", function () {
		const form = document.querySelector("#contact-form");
		if (!form) return;
		const emailInputThree = document.querySelector("#emailThree");
		const nameInput = document.querySelector("#full");
		const phoneInput = document.querySelector("#tel");
		const subjectInput = document.querySelector("#subject");
		const messageInput = document.querySelector("#message");
	  
		form.addEventListener("submit", function (e) {
		  e.preventDefault();
	  
		  const name = nameInput.value.trim();
		  const emailThree = emailInputThree.value.trim();
		  const phone = phoneInput.value.trim();
		  const subject = subjectInput.value.trim();
		  const message = messageInput.value.trim();
	  
		  if (!name || !emailThree || !subject || !message) {
			alert("Please fill in all required fields.");
			return;
		  }
	  
		  // Validate email
		  if (!validateEmail(emailThree)) {
			alert("Please enter a valid email.");
			return;
		  }
	  
		  const formData = new FormData();
		  formData.append("name", name);
		  formData.append("email", emailThree);
		  formData.append("phone", phone);
		  formData.append("subject", subject);
		  formData.append("message", message);
	  
		  const scriptURL = "https://script.google.com/macros/s/AKfycbwauhJut5DiRj0QWqwDOHXrJXFd2qlaMlBaSfRztOWclkqG71p-8Br8NgkD_Uu4YVxV1w/exec";
	  
		  fetch(scriptURL, {
			method: "POST",
			body: formData,
		  })
			.then(response => response.text())
			.then(result => {
			  alert("Thank you for your message!");
			  form.reset();
			})
			.catch(error => {
			  console.error("Error!", error.message);
			  alert("Network error. Please try again later.");
			});
		});
	  
		function validateEmail(emailThree) {
		  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		  return re.test(emailThree.toLowerCase());
		}
	  });
	  
	  // Preloader
	  $(window).on("load", function () {
		if ($("#preloader").length > 0) {
		  setTimeout(() => {
			$("#preloader").addClass("tj-preloader--hidden");
		  }, 100);
		}
	  });
		
	  
})(jQuery);
