const myKeyAttributes = ["Student", "Software Developer", "Spikeball Enthusiast"];

document.getElementById('my-key-attributes').innerHTML = myKeyAttributes.join('&nbsp;&nbsp;<span class="vertical-bar text-emphasis-color"></span>&nbsp;&nbsp;');

const homeSectionCard = document.getElementsByClassName("home-section__card")[0];

homeSectionCard.style.transform = "translateX(0)";
