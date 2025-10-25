document.addEventListener("DOMContentLoaded", () => {
  // Inisialisasi AOS
  AOS.init({
    duration: 1200,
    once: true,
    easing: "ease-in-out",
  });

  const openBtn = document.getElementById("openBtn");
  const hero = document.getElementById("hero");
  const invitation = document.getElementById("invitation");
  const lagu = document.getElementById("lagu");

  // Mencegah scroll sebelum dibuka
  document.body.classList.add("no-scroll");

  openBtn.addEventListener("click", () => {
    // Tambahkan efek cinematic fade-out
    hero.classList.add("fade-out-cinematic");
    setTimeout(() => {
      hero.style.display = "none";
      document.body.classList.remove("no-scroll");
      invitation.classList.remove("hidden");
      invitation.classList.add("fade-in-cinematic");
      AOS.refresh();
      window.scrollTo({ top: 0, behavior: "smooth" });
      lagu.play();
    }, 1500);
  });
});

// Countdown Timer
const countDownDate = new Date("Nov 1, 2025 10:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// Efek Parallax pada gambar saat scroll
window.addEventListener("scroll", () => {
  const parallaxImages = document.querySelectorAll(".photo img");
  parallaxImages.forEach((img) => {
    const rect = img.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;

    // Parallax lembut: gambar bergerak sedikit lebih lambat
    const offset = rect.top * -0.1; // semakin besar nilainya, semakin kuat efeknya
    img.style.transform = `translateY(${offset}px)`;
  });
});
