// NobleAI v1.0 Animations

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 150);
  });

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });
});
