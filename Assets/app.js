const cursor = document.getElementById("cursor");
const hoverElements = document.querySelectorAll(
  ".cursor-hover, a, button, input, textarea",
);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursor.style.transform = `translate(-50%, -50%)`;
});

hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.width = "50px";
    cursor.style.height = "50px";
    cursor.style.backgroundColor = "rgba(251, 255, 72, 0.4)";
    cursor.style.border = "2px solid black";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.width = "24px";
    cursor.style.height = "24px";
    cursor.style.backgroundColor = "rgba(251, 255, 72, 0.7)";
    cursor.style.border = "2px solid black";
  });
});

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1 },
);

revealElements.forEach((el) => revealObserver.observe(el));

window.addEventListener("scroll", () => {
  let winScroll = window.pageYOffset || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = height > 0 ? (winScroll / height) * 100 : 0;
  document.getElementById("progressBar").style.width = scrolled + "%";
});

// Lazy load external GitHub stats and graphics so browser loading spinner completes immediately
window.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll(".lazy-img");
  lazyImages.forEach((img) => {
    if (img.dataset.src) {
      img.src = img.dataset.src;
    }
  });
});
