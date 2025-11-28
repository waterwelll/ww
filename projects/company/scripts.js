document.addEventListener("DOMContentLoaded", function () {
	// Mobile menu toggle
	const mobileMenuBtn = document.querySelector(".mobile-menu");
	const nav = document.querySelector("nav");

	mobileMenuBtn.addEventListener("click", function () {
		nav.classList.toggle("active");
		this.querySelector("i").classList.toggle("fa-times");
		this.querySelector("i").classList.toggle("fa-bars");
	});

	// Smooth scrolling for anchor links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();

			const targetId = this.getAttribute("href");
			if (targetId === "#") return;

			const targetElement = document.querySelector(targetId);
			if (targetElement) {
				// Close mobile menu if open
				if (nav.classList.contains("active")) {
					nav.classList.remove("active");
					mobileMenuBtn.querySelector("i").classList.remove("fa-times");
					mobileMenuBtn.querySelector("i").classList.add("fa-bars");
				}

				window.scrollTo({
					top: targetElement.offsetTop - 80,
					behavior: "smooth",
				});
			}
		});
	});

	// Testimonial slider
	const testimonials = document.querySelectorAll(".testimonial");
	let currentTestimonial = 0;

	function showTestimonial(index) {
		testimonials.forEach((testimonial, i) => {
			testimonial.style.display = i === index ? "block" : "none";
		});
	}

	// Initialize first testimonial
	showTestimonial(currentTestimonial);

	// Auto-rotate testimonials
	setInterval(() => {
		currentTestimonial = (currentTestimonial + 1) % testimonials.length;
		showTestimonial(currentTestimonial);
	}, 5000);

	// Form submission
	const quoteForm = document.getElementById("quoteForm");
	if (quoteForm) {
		quoteForm.addEventListener("submit", function (e) {
			e.preventDefault();

			// Get form values
			const formData = new FormData(this);
			const data = {};
			formData.forEach((value, key) => {
				data[key] = value;
			});

			// Here you would typically send the data to your server
			console.log("Form submitted:", data);

			// Show success message
			alert("Thank you for your request! We will contact you shortly.");
			this.reset();
		});
	}

	// Update copyright year
	document.getElementById("year").textContent = new Date().getFullYear();

	// Add scroll reveal animations
	const scrollReveal = ScrollReveal({
		origin: "bottom",
		distance: "20px",
		duration: 1000,
		delay: 200,
		reset: true,
	});

	scrollReveal.reveal(
		".service-card, .about-content, .about-img, .testimonial, .contact-info, .contact-form",
		{
			interval: 200,
		}
	);
});
