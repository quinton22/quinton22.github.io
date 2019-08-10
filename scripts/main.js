const myKeyAttributes = ["Student", "Software Developer", "Spikeball Enthusiast"];

document.getElementById('my-key-attributes').innerHTML = myKeyAttributes.join('&nbsp;&nbsp;<span class="vertical-bar text-emphasis-color"></span>&nbsp;&nbsp;');

fadeOutOnScrollElements = Array.from(document.getElementsByClassName('fadeout-on-scroll'));

document.getElementById('main').addEventListener("scroll", function() {
	fadeOutOnScrollElements.forEach(el => {
		watchItem = document.getElementById(el.getAttribute('data-fadeout-id'));
		opacity = 1 - this.scrollTop / (watchItem.offsetTop + 0.75 * watchItem.offsetHeight);
		opacity = opacity > 1 ? 1 : (opacity < 0 ? 0 : opacity);
		el.style.opacity = opacity;
	});
});
