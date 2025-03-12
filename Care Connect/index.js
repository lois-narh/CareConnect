document.addEventListener("DOMContentLoaded", function () {
    // Toggle availability switch
    const toggleSwitch = document.querySelector(".toggle");
    if (toggleSwitch) {
      toggleSwitch.addEventListener("click", function () {
        this.classList.toggle("active");
        if (this.classList.contains("active")) {
          this.style.backgroundColor = "#00cc99";
          this.style.justifyContent = "flex-end";
        } else {
          this.style.backgroundColor = "#008080";
          this.style.justifyContent = "flex-start";
        }
      });
    }
  
    // Search form submission
    const searchForm = document.querySelector(".search-form");
    if (searchForm) {
      searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.querySelector(".input-field:nth-child(1)").value;
        const specialty = document.querySelector(".input-field:nth-child(2)").value;
        alert(`Searching for doctors with name: ${name} and specialty: ${specialty}`);
      });
    }
  
    // Smooth scrolling for navigation
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Appointment button click
    const appointmentBtn = document.querySelector(".home_content button");
    if (appointmentBtn) {
      appointmentBtn.addEventListener("click", function () {
        alert("Redirecting to the appointment booking system...");
        window.location.href = "appointment.html"; // Replace with actual appointment URL
      });
    }
  
    // Newsletter subscription
    const subscribeBtn = document.querySelector(".companies button");
    if (subscribeBtn) {
      subscribeBtn.addEventListener("click", function () {
        const email = document.querySelector(".companies input").value;
        if (email) {
          alert(`Thank you for subscribing with ${email}`);
          document.querySelector(".companies input").value = "";
        } else {
          alert("Please enter a valid email address.");
        }
      });
    }
  
    // Hover effect for service cards
    document.querySelectorAll(".services div").forEach((service) => {
      service.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
      });
      service.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    });
  
    // Handling social media link clicks
    document.querySelectorAll(".social-icons a").forEach((icon) => {
      icon.addEventListener("click", function (event) {
        event.preventDefault();
        alert(`Redirecting to ${this.href}`);
        window.open(this.href, "_blank");
      });
    });
  });
  