import sushiImg from "./images/sushi.jpg";
import ramenImg from "./images/ramen.jpg";
import teriyakiImg from "./images/teriyaki.jpg";
import tempuraImg from "./images/tempura.jpg";
import curryImg from "./images/curry.jpg";
import mochiImg from "./images/mochi.jpg";

function createMenuItem(title, description, imageSrc) {
  const item = document.createElement("div");
  item.classList.add("menu-item");

  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = title;
  image.classList.add("menu-image");

  const itemTitle = document.createElement("h2");
  itemTitle.classList.add("menu-title");
  itemTitle.textContent = title;

  const itemDescription = document.createElement("p");
  itemDescription.classList.add("menu-description")
  itemDescription.textContent = description;

  item.append(image, itemTitle, itemDescription);

  return item;
}
function loadMenu() {
  const container = document.createElement("div");
  container.classList.add("menu");

  const heading = document.createElement("h1");
  heading.classList.add("menu-heading");
  heading.textContent = "Our menu";
  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");
  menuGrid.append(
    createMenuItem("Sushi", "Fresh salmon, tuna, and avocado rolls.", sushiImg),
    createMenuItem(
      "Tonkotsu Ramen",
      "Rich pork broth with noodles, chashu pork, and a soft-boiled egg.", ramenImg
    ),
    createMenuItem(
      "Chicken Teriyaki",
      "Grilled chicken glazed with our signature teriyaki sauce.", teriyakiImg
    ),
    createMenuItem(
      "Tempura",
      "Lightly battered shrimp and seasonal vegetables", tempuraImg
    ),
    createMenuItem(
      "Katsu Curry",
      "Cripsy breaded chicken served with Japanese curry and steamed rice", curryImg
    ),
    createMenuItem(
      "Mochi Ice Cream",
      "Soft rice cake filled with creamy matcha, vanilla, or strawberry ice cream.", mochiImg
    ),
  );

  container.append(heading, menuGrid);
  return container;
}

export default loadMenu;
