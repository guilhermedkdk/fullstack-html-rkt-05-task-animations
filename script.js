const subtitle = document.querySelector(".subtitle.desktop-only");
const imgs = subtitle.querySelectorAll("img");
const strongTexts = subtitle.querySelectorAll("strong");
const spanTexts = subtitle.querySelectorAll("span");

subtitle.addEventListener(
  "mouseenter",
  () => {
    spanTexts.forEach((span, index) => {
      setTimeout(() => {
        span.style.opacity = 1;
      }, (index + 0.2) * 800);
    });

    strongTexts.forEach((strong, index) => {
      setTimeout(() => {
        strong.style.opacity = 1;
      }, (index + 0.2) * 800);
    });

    imgs.forEach((img, index) => {
      setTimeout(() => {
        img.style.animation =
          "fadeInImage 200ms ease forwards, scaleInImage 400ms linear";
      }, (index + 0.2) * 800);
    });
  },
  { once: true }
);

const subscriptionCards = document.querySelector(".subscription-cards");
const firstCard = document.querySelector(
  ".subscription-cards .card:nth-child(1)"
);
const secondCard = document.querySelector(
  ".subscription-cards .card:nth-child(2)"
);
const thirdCard = document.querySelector(
  ".subscription-cards .card:nth-child(3)"
);

subscriptionCards.addEventListener("mouseenter", () => {
  subscriptionCards.classList.add("spread");
});

firstCard.addEventListener("mouseenter", () => {
  secondCard.classList.add("not-hovered");
});

firstCard.addEventListener("mouseleave", () => {
  secondCard.classList.remove("not-hovered");
});

thirdCard.addEventListener("mouseenter", () => {
  secondCard.classList.add("not-hovered");
});

thirdCard.addEventListener("mouseleave", () => {
  secondCard.classList.remove("not-hovered");
});
