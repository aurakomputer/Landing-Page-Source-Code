// main script
(function () {
  "use strict";

  window.onscroll = function () {
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };
  // Animaton on Scroll
  // ---------------------------------------
  AOS.init({
    delay: 0.2,
    duration: 800,
  });

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // ===== Faq accordion
  const faqs = document.querySelectorAll(".single-faq");
  faqs.forEach((el) => {
    el.querySelector(".faq-btn").addEventListener("click", () => {
      el.querySelector(".icon").classList.toggle("rotate-180");
      el.querySelector(".faq-content").classList.toggle("hidden");
    });
  });

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  // back to top
  // --------------------------------------------------
  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };

  const selectPaket = document.getElementsByClassName("selectPaket");

  // form checkout button
  window.checkout = (formId) => {
    const formEl = document.getElementById(formId);
    const formData = new FormData(formEl);

    const message = `Hai, saya tertarik dengan \n${formData.get("category")} ${formData.get("product")}\n ${formData.get("variant")} ${formData.get("qty")}`;
    window.open(
      "https://api.whatsapp.com/send?phone=" +
        formData.get("whatsapp_number") +
        "&text=" +
        message,
      "_blank",
    );
  };

  setTimeout(() => {
    window.whatsappWidget("#whatsapp-widget", {
      businessInfo: {
        name: "Aura Komputer",
        tagline:
          "Jasa Pembuatan dan Penjualan Aplikasi terbaik berbasis Web, Desktop, dan Mobile",
      },
      businessHours: {
        enabled: true,
        schedule: {
          mon: {
            open: "09:00",
            close: "16:00",
          },
          tue: {
            open: "09:00",
            close: "16:00",
          },
          wed: {
            open: "09:00",
            close: "16:00",
          },
          thu: {
            open: "09:00",
            close: "16:00",
          },
          fri: {
            open: "09:00",
            close: "16:00",
          },
        },
        offlineMessage:
          "Mohon maaf mungkin response kami sedikit lambat dikarenakan sedang tidak di jam kerja!",
      },

      departments: [
        {
          id: "sales",
          name: "Konsultasi",
          description: "Konsultasi Jasa / Produk, tanya tanya juga boleh",
          icon: "💰",
          members: [
            {
              id: "mohamad-supangat",
              name: "Mohamad Supangat",
              phone: "+6285161748582",
              avatar:
                "https://placehold.co/400x400?text=Moha&bg=FF6B6B&color=fff",
              title: "Sales Manager",
              skills: ["Layanan Customer", "Konsultasi"],
              isOnline: true,
            },
          ],
        },
        {
          id: "support",
          name: "Technical Support",
          description: "Bantuan Support Pelanggan",
          icon: "🛠️",
          members: [
            {
              id: "mohamad-supangat",
              name: "Mohamad Supangat",
              phone: "+6285161748582",
              avatar:
                "https://placehold.co/400x400?text=Moha&bg=FF6B6B&color=fff",
              title: "Senior Developer",
              skills: ["Pengembang Aplikasi", "Bantuan Teknikal"],
              isOnline: true,
            },
          ],
        },
      ],
      leadCapture: {
        enabled: false,
        showBefore: "member-selection",
        fields: {
          name: {
            required: true,
            placeholder: "Nama",
          },
          email: {
            required: false,
            placeholder: "Nama Sekolah / Asal Daerah",
          },
        },
      },
      quickMessages: [
        {
          category: "general",
          messages: [
            {
              label: "Demo Produk",
              text: "Saya ingin mencoba demo aplikasi",
            },
            {
              label: "Tanya Harga",
              text: "Apakah saya boleh tanya harga untuk pembuatan aplikasi ?",
            },
            {
              label: "Bantuan Teknis",
              text: "Saya butuh bantuan teknis",
            },
            {
              label: "Partner",
              text: "Saya tertarik untuk menjadi partner",
            },
          ],
        },
      ],
      analytics: {
        enabled: false,
        events: {},
      },
      position: "bottom-right",
      autoOpen: false,
      showBranding: false,
      theme: {
        brandColors: {
          primary: "#25d366",
          secondary: "#128c7e",
          accent: "#6c5ce7",
        },
        typography: {
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "14px",
        },
      },
    });
  }, 4000);
})();
