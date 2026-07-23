export default function loadAbout() {
    const container = document.createElement("div");
    container.classList.add("about");

    const heading = document.createElement("h1");
    heading.classList.add("about-title");
    heading.textContent = "About Sakura Table";

    // Card 1
    const story = createAboutCard(
        "Our Story",
        "Sakura Table was founded to share the warmth and elegance of Japanese cuisine. Every dish is prepared with fresh ingredients and inspired by traditional Japanese cooking techniques."
    );

    // Card 2
    const owner = createAboutCard(
        "Meet Clinton",
        "Clinton, a Nigerian software developer with a deep admiration for Japanese culture, created Sakura Table to combine his love for Japan's traditions, hospitality, and cuisine into one unforgettable dining experience."
    );

    // Card 3
    const hours = createAboutCard(
        "Opening Hours",
        "Monday – Thursday: 11:00 AM – 9:00 PM\nFriday – Sunday: 11:00 AM – 11:00 PM"
    );

    container.append(heading, story, owner, hours);

    return container;
}

function createAboutCard(title, text) {
    const card = document.createElement("div");
    card.classList.add("about-card");

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("about-card-title");
    cardTitle.textContent = title;

    const cardText = document.createElement("p");
    cardText.classList.add("about-card-text");
    cardText.textContent = text;

    card.append(cardTitle, cardText);

    return card;
}