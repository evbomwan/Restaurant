import heroImage from "./images/hero.jpg";

export default function loadHome() {
  const container = document.createElement("div");
  container.classList.add("home");

  const hero = document.createElement("section");
  hero.classList.add("hero");

  const image = document.createElement("img");
  image.src = heroImage;
  image.alt = "Sakura Table Restaurant";
  image.classList.add("hero-image");

  const overlay = document.createElement("div");
  overlay.classList.add("hero-overlay");

  const title = document.createElement("h1");
  title.classList.add("hero-title");
  const text = "ようこそ! Welcome to Sakura Table";
  for (const character of text) {
    if (character === " ") {
      title.append(document.createTextNode(" "));
      continue;
    }
    const span = document.createElement("span");
    span.textContent = character;
    title.append(span);
  }

  const subtitle = document.createElement("p");
  subtitle.classList.add("hero-subtitle");
  subtitle.textContent =
    "Experience authentic Japanese cuisine in a warm and elegant atmosphere.";

  overlay.append(title, subtitle);

  hero.append(image, overlay);

  container.append(hero);

  return container;
}
