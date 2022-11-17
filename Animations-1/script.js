gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav_items a");
const activeNav = document.querySelector(".active_nav");

links.forEach((link) => {
  link.addEventListener("click", () => {
    //! turn navs blue
    gsap.to(links, { color: "#252525" });

    if (document.activeElement === link) {
      gsap.to(link, { color: "#385ae0" });
    }

    //! move blue line
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 1.25,
      absolute: true,
      ease: "elastic.out(1,0.5)",
    });
  });
});

//Cards

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const state = Flip.getState(cards);

    //! Add active class to the clicked one and add inactive to other
    const isCardActive = card.classList.contains("active");
    cards.forEach((otherCard, otherIdx) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("is-inactive");

      if (!isCardActive && index !== otherIdx) {
        otherCard.classList.add("is-inactive");
      }
    });
    if (!isCardActive) card.classList.add("active");

    Flip.from(state, {
      duration: 1,
      ease: "expo.out",
      absolute: true,
    });
  });
});
