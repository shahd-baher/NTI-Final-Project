const bars = document.querySelector('header nav i.bars');
    const navbar = document.querySelector('.navbar');
    bars.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
    const testimonials = [
  {
    quote: [
      "As a purpose-driven agency, we're constantly juggling strategy and design and have a big need to reliably execute what's planned.",
      "It's rare that we find a tech partner who appreciates that and does it - but that's what Hatchet's done for our team, time and time again. They're knowledgeable in their disciplines, on time, and have been an anchoring presence on key projects.",
      "We've come to see them as an extension of the DrawHistory family, and that's probably the nicest thing we can say about anyone!"
    ],
    avatar: "https://omokhtar407.github.io/Hatchet/imags/jeff.webp",
    company: "DrawHistory",
    name: "Jeffrey Effendi",
    title: "Founder & Head of Creativity"
  },
  {
    quote: [
      "Hatchet took the time to actually understand our business before jumping into solutions, which made all the difference.",
      "The team communicated clearly at every stage, hit every deadline, and were happy to jump on a call whenever we needed clarity.",
      "They feel less like a vendor and more like an extra department inside our own company."
    ],
    avatar: "https://i.pravatar.cc/150?img=32",
    company: "Northside Studio",
    name: "Amelia Carter",
    title: "Co-Founder & Creative Director"
  },
  {
    quote: [
      "We came to Hatchet with a messy, half-built platform and left with something our customers actually enjoy using.",
      "Their developers asked the right questions early, which saved us from costly rework later in the project.",
      "Honestly one of the smoothest agency partnerships we've had in years."
    ],
    avatar: "https://i.pravatar.cc/150?img=51",
    company: "Vantage Retail",
    name: "Marcus Reid",
    title: "Head of Digital Operations"
  }
];

let currentSlide = 0;

function buildSlide(t) {
  const slide = document.createElement("div");
  slide.className = "slide";

  const card = document.createElement("div");
  card.className = "testimonial-card mx-auto";
  t.quote.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    card.appendChild(p);
  });

  const info = document.createElement("div");
  info.className = "client-info";

  const avatar = document.createElement("img");
  avatar.src = t.avatar;
  avatar.alt = t.name;
  avatar.className = "client-avatar";

  const company = document.createElement("p");
  company.className = "client-company";
  company.textContent = t.company;

  const nameLine = document.createElement("p");
  nameLine.textContent = t.name + " - " + t.title;

  info.appendChild(avatar);
  info.appendChild(company);
  info.appendChild(nameLine);

  slide.appendChild(card);
  slide.appendChild(info);

  return slide;
}

function renderSlider() {
  const track = document.getElementById("sliderTrack");
  const dotsWrap = document.getElementById("dotsWrap");
  if (!track || !dotsWrap) return;

  track.innerHTML = "";
  dotsWrap.innerHTML = "";

  testimonials.forEach((t, i) => {
    track.appendChild(buildSlide(t));

    const dot = document.createElement("span");
    dot.className = "dot" + (i === currentSlide ? " active" : "");
    dot.addEventListener("click", () => changeDot(i));
    dotsWrap.appendChild(dot);
  });

  updateSliderPosition();
}

function updateSliderPosition() {
  const track = document.getElementById("sliderTrack");
  if (!track) return;
  track.style.transform = "translateX(-" + (currentSlide * 100) + "%)";

  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function changeDot(index) {
  currentSlide = index;
  updateSliderPosition();
}

document.addEventListener("DOMContentLoaded", renderSlider);
