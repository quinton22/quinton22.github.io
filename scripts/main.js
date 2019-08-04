const myKeyAttributes = ["Student", "Software Developer", "Spikeball Enthusiast"];

document.getElementById('my-key-attributes').innerHTML = myKeyAttributes.join('&nbsp;&nbsp;<span class="vertical-bar text-emphasis-color"></span>&nbsp;&nbsp;');

const mainCard = document.getElementsByClassName("section-card")[0];

mainCard.style.transform = "translateX(0)";
