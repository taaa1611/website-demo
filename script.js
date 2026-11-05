// --- Hero Slider Mantığı ---
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const heroSection = document.querySelector(".hero-slider-section");
let slideInterval;

// Her slayt için arka plan renkleri (İleride farklı bir renk denemek istersen buradan değiştirebilirsin)
const slideColors = [
  "rgb(255, 255, 255)", // 1. Medikal Estetik (Açık Pastel Mavi)
  "rgb(255, 255, 255)", // 2. Soprano Titanyum (Sıcak Şeftali / Pudra)
  "rgb(255, 255, 255)", // 3. Cynosure Apogee Alexandrite (Açık Pastel Mavi)
  "rgb(255, 255, 255)"  // 4. Hydramaster (Sıcak Pudra Tonu)
];

function showSlide(index) {
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");

  // Arka plan rengini güncelle
  if (heroSection) {
    heroSection.style.backgroundColor = slideColors[currentSlideIndex];
  }
}

function currentSlide(index) {
  clearInterval(slideInterval);
  showSlide(index);
  startAutoSlide();
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    showSlide(currentSlideIndex + 1);
  }, 3500); // 4.5 saniyede bir otomatik geçiş
}

startAutoSlide();

// --- Form 1: "Sizi Arayalım" Gönderimi (WhatsApp Yönlendirmesi) ---
const quickForm = document.getElementById("quickContactForm");
if (quickForm) {
  quickForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("quickName").value;
    const phone = document.getElementById("quickPhone").value;

    const text = `Merhaba, yivesclinic.com üzerinden 'Sizi Arayalım' talebi bırakıldı.\n\nİsim: ${name}\nTelefon: ${phone}`;
    const whatsappUrl = `https://wa.me/905416452445?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, "_blank");
    quickForm.reset();
  });
}

// --- Form 2: Detaylı Mesaj / Randevu Talebi (WhatsApp Yönlendirmesi) ---
const fullForm = document.getElementById("fullContactForm");
if (fullForm) {
  fullForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("fullName").value;
    const phone = document.getElementById("fullPhone").value;
    const message = document.getElementById("fullMessage").value;

    const text = `Merhaba, web sitenizden yeni bir randevu/bilgi mesajı geldi:\n\nAd Soyad: ${name}\nTelefon: ${phone}\nMesaj: ${message}`;
    const whatsappUrl = `https://wa.me/905416452445?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
    fullForm.reset();
  });
}

// --- Form 3: Hakkımızda Sayfası Sidebar Formu ---
const aboutForm = document.getElementById("aboutContactForm");
if (aboutForm) {
  aboutForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("sideName").value;
    const phone = document.getElementById("sidePhone").value;
    const branch = document.getElementById("sideBranch").value;
    const message = document.getElementById("sideMessage").value;

    const text = `Merhaba, Yives Clinic web sitesi 'Hakkımızda' sayfasından yeni mesaj:\n\nŞube Tercihi: ${branch}\nAd Soyad: ${name}\nTelefon: ${phone}\nMesaj: ${message}`;
    const whatsappUrl = `https://wa.me/905416452445?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
    aboutForm.reset();
  });
}

// --- Yukarı Çık (Scroll to Top) Mantığı ---
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

if (scrollToTopBtn) {
  window.addEventListener("scroll", () => {
    // Sayfa 350 pikselden fazla aşağı kaydırıldıysa butonu göster
    if (window.scrollY > 350) {
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
