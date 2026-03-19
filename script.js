// Mobile nav toggle and active link handling

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-link");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  // Highlight active section in navigation
  const sections = document.querySelectorAll("section[id]");

  const onScroll = () => {
    let currentId = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        currentId = section.id;
      }
    });

    links.forEach((link) => {
      link.classList.toggle(
        "active",
        currentId && link.getAttribute("href") === `#${currentId}`
      );
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});
