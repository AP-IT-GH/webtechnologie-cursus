"use strict";

// social info
const socialPlatforms = ["youtube", "instagram", "facebook", "twitter"];
const socialLinks = ["https://www.youtube.com", "https://www.instagram.com/", "https://www.facebook.com/", "https://twitter.com/"];

// social ul
const ul = document.querySelector('#socials'); // Using querySelector to select the ul by id

// Loop over social platforms using forEach
socialPlatforms.forEach((platform, index) => {

    // Get the link using the current index
    const link = socialLinks[index];

    // Create necessary elements
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    // Set element properties
    a.href = link;
    a.target = "_blank";
    img.src = `assets/icon${platform}.png`;

    // Append elements together
    a.appendChild(img);
    li.appendChild(a);
    ul.appendChild(li);
});
