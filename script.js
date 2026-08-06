console.log("Love Anniversary Website ❤️");

// Opening → Starry message
const beginStoryBtn = document.getElementById("beginStoryBtn");

beginStoryBtn.addEventListener("click", () => {
  document.getElementById("intro-message").scrollIntoView({
    behavior: "smooth",
  });
});

// Starry message → Love story
const storyBtn = document.getElementById("storyBtn");

storyBtn.addEventListener("click", () => {
  document.getElementById("story").scrollIntoView({
    behavior: "smooth",
  });
});

// Typewriter message
const typewriterText = document.getElementById("typewriterText");

const message = `Every love story is beautiful...

But ours...

is my favorite. ❤️`;

let characterIndex = 0;

function typeMessage() {
  if (characterIndex < message.length) {
    typewriterText.textContent += message.charAt(characterIndex);
    characterIndex++;
    setTimeout(typeMessage, 65);
  }
}

const messageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !typewriterText.textContent) {
        typeMessage();
      }
    });
  },
  { threshold: 0.55 },
);

messageObserver.observe(document.getElementById("intro-message"));
// Timeline Animation
const cards = document.querySelectorAll(".timeline-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.3,
  },
);

cards.forEach((card) => {
  observer.observe(card);
});
const letterParts = document.querySelectorAll(".letter-part");
const nextLetterButton = document.getElementById("next-letter-btn");

let currentPart = 0;

nextLetterButton.addEventListener("click", () => {
  letterParts[currentPart].classList.remove("active");
  currentPart++;

  if (currentPart < letterParts.length) {
    letterParts[currentPart].classList.add("active");

    if (currentPart === letterParts.length - 1) {
      nextLetterButton.textContent = "I Love You Forever ❤️";
    }
  } else {
    currentPart = 0;
    letterParts[currentPart].classList.add("active");
    nextLetterButton.textContent = "Open My Heart ❤️";
  }
});
// =========================================================
// LOVE THROUGH EMAILS
// =========================================================

const emailBtn = document.getElementById("emailBtn");
const emailLetter = document.getElementById("emailLetter");

const emailParts = document.querySelectorAll(".email-reading-part");
const emailNextButtons = document.querySelectorAll(".email-next-btn");

let currentEmailPart = 0;

// =========================================================
// OPEN / CLOSE EMAIL
// =========================================================

emailBtn.addEventListener("click", () => {
  const isOpen = emailLetter.classList.contains("show-email");

  if (!isOpen) {
    emailLetter.classList.add("show-email");

    emailBtn.textContent = "Close Our Email 💌";

    // Start from first page
    emailParts.forEach((part) => {
      part.classList.remove("active-email-part");
    });

    currentEmailPart = 0;

    emailParts[currentEmailPart].classList.add("active-email-part");

    // Scroll gently to email
    setTimeout(() => {
      emailLetter.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);
  } else {
    emailLetter.classList.remove("show-email");

    emailBtn.textContent = "Open Our Old Email 💌";
  }
});

// =========================================================
// READ EMAIL ONE PART AT A TIME
// =========================================================

emailNextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextPartId = button.dataset.next;

    const nextPart = document.getElementById(nextPartId);

    if (!nextPart) return;

    // Hide current part
    emailParts[currentEmailPart].classList.remove("active-email-part");

    // Find next part
    const nextIndex = Array.from(emailParts).indexOf(nextPart);

    if (nextIndex !== -1) {
      currentEmailPart = nextIndex;

      nextPart.classList.add("active-email-part");

      // Scroll to newly revealed part
      setTimeout(() => {
        nextPart.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 150);
    }
  });
});
// Video memories popup
const videoCards = document.querySelectorAll(".video-card");
const videoModal = document.getElementById("videoModal");
const memoryVideo = document.getElementById("memoryVideo");
const videoModalTitle = document.getElementById("videoModalTitle");
const closeVideoBtn = document.getElementById("closeVideoBtn");

videoCards.forEach((card) => {
  card.addEventListener("click", () => {
    memoryVideo.src = card.dataset.video;
    videoModalTitle.textContent = card.dataset.title;

    videoModal.classList.add("show-video");
    videoModal.setAttribute("aria-hidden", "false");

    memoryVideo.play();
  });
});

function closeVideoModal() {
  memoryVideo.pause();
  memoryVideo.currentTime = 0;
  memoryVideo.removeAttribute("src");
  memoryVideo.load();

  videoModal.classList.remove("show-video");
  videoModal.setAttribute("aria-hidden", "true");
}

closeVideoBtn.addEventListener("click", closeVideoModal);

videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) {
    closeVideoModal();
  }
});
// Open envelope love letter
const openEnvelopeBtn = document.getElementById("openEnvelopeBtn");
const envelopeLetter = document.getElementById("envelopeLetter");

openEnvelopeBtn.addEventListener("click", () => {
  envelopeLetter.classList.add("open-letter");
  openEnvelopeBtn.classList.add("envelope-opened");
});
// Final YES button and exploding hearts
const yesBtn = document.getElementById("yesBtn");
const yesMessage = document.getElementById("yesMessage");
const heartExplosion = document.getElementById("heartExplosion");

yesBtn.addEventListener("click", () => {
  yesMessage.classList.add("show-message");
  yesBtn.textContent = "Forever ❤️";
  yesBtn.disabled = true;

  for (let index = 0; index < 80; index++) {
    const heart = document.createElement("span");

    heart.className = "exploding-heart";
    heart.textContent = Math.random() > 0.25 ? "❤️" : "✨";

    const moveX = `${Math.random() * 160 - 80}vw`;
    const moveY = `${Math.random() * 150 - 75}vh`;
    const rotate = `${Math.random() * 720 - 360}deg`;

    heart.style.setProperty("--move-x", moveX);
    heart.style.setProperty("--move-y", moveY);
    heart.style.setProperty("--rotate", rotate);
    heart.style.animationDelay = `${Math.random() * 0.25}s`;

    heartExplosion.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1900);
  }
});
// Music mute / unmute control
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  backgroundMusic.muted = !backgroundMusic.muted;

  if (backgroundMusic.muted) {
    musicBtn.textContent = "🔇";
    musicBtn.setAttribute("aria-label", "Unmute music");
  } else {
    musicBtn.textContent = "🔊";
    musicBtn.setAttribute("aria-label", "Mute music");
  }
});
/* =========================================================
   SECRET SECTION - BURST RAIN + FAST LIGHTNING
   ========================================================= */

const secretSection = document.getElementById("the-secret");
const rainContainer = document.querySelector("#the-secret .rain");

let rainTimer;
let lightningTimer;

/* =========================================================
   CREATE ONE BURST OF RAIN
   ========================================================= */

function createRainBurst() {
  if (!rainContainer) return;

  // Clear previous rain
  rainContainer.innerHTML = "";

  // Number of drops in one burst
  const numberOfDrops = 45;

  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement("span");

    drop.classList.add("raindrop");

    // Random horizontal position
    drop.style.left = Math.random() * 100 + "%";

    // Random height
    drop.style.height = 25 + Math.random() * 35 + "px";

    // Random speed
    drop.style.animationDuration = 0.45 + Math.random() * 0.45 + "s";

    // Random delay
    drop.style.animationDelay = Math.random() * 0.3 + "s";

    rainContainer.appendChild(drop);
  }

  /*
   * Remove the rain after the burst.
   * This creates a clear pause before
   * the next rain burst.
   */
  setTimeout(() => {
    rainContainer.innerHTML = "";
  }, 1200);
}

/* =========================================================
   FAST LIGHTNING
   ========================================================= */

function lightningFlash() {
  if (!secretSection) return;

  // Restart animation
  secretSection.classList.remove("lightning-flash");

  void secretSection.offsetWidth;

  secretSection.classList.add("lightning-flash");

  // Remove class after flash
  setTimeout(() => {
    secretSection.classList.remove("lightning-flash");
  }, 180);
}

/* =========================================================
   START RAIN
   ========================================================= */

function startRain() {
  // First burst
  createRainBurst();

  /*
   * New burst every 3.5 seconds.
   *
   * So:
   * Rain → STOP → pause → Rain → STOP
   */
  rainTimer = setInterval(() => {
    createRainBurst();
  }, 3500);
}

/* =========================================================
   START LIGHTNING
   ========================================================= */

function startLightning() {
  lightningTimer = setInterval(() => {
    /*
     * 40% chance of lightning
     * each time the timer checks.
     */
    if (Math.random() < 0.4) {
      lightningFlash();
    }
  }, 2200);
}

/* =========================================================
   START SECRET WEATHER
   ========================================================= */

startRain();
startLightning();
