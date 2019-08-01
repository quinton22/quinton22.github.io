const themes = Object.freeze({
	fall: ['#d2a3a9', '#e6dce5', '#ebc3c1', '#ecad8f', '#af6e43'],
	beach: ['#89aeb2', '#97f2f3', '#f1e0b0', '#f1cdb0', '#e7cfc8'],
	candy: ['#b5ddd1', '#d7e7a9', '#d3c0f9', '#f99a9c', '#fdbccf'],
	default: ['#70ae98', '#ecbe7a', '#e58b88', '#9dabdd', '#d9effc']
});

// TODO: add logic for picking a theme
let chosenTheme = themes.default.slice();
const limit = 2; // limit the number of circles that can be the same color

let themeColorCount = Array(chosenTheme.length).fill(limit);

// TODO: add logic for toggling animation
const shouldAnimate = true;

// 3 - 6 circles
const numCircles = Math.floor(Math.random() * 3) + 3;

createCircles(numCircles);

function createCircles(n) {
	const bg = document.getElementById('bg');
	for (let i = 0; i < n; ++i) {
		const { position, radius, color, border_radius } = generateCircleAttributes();
		const style = `left: ${position.x}px;
							top: ${position.y}px;
							height: ${radius * 2}px;
							width: ${radius * 2}px;
							border: solid ${border_radius}px ${color};`
		const circle = `<div id="bg-circle${i}" class="${shouldAnimate ? 'bg-circle bg-circle--animated' : 'bg-circle'}" style="${style}"></div>`;
		bg.innerHTML += circle;
	}
}

function generateCircleAttributes() {
	const viewportHeight = window.innerHeight;
	const viewportWidth = window.innerWidth;
	const radius = 10 + Math.random() * (Math.min(viewportHeight, viewportWidth) - 10) / 3;
	const position = {
		x: Math.random() * (viewportWidth - radius) - radius / 2,
		y: Math.random() * (viewportHeight - radius) - radius / 2
	}; // keep 3/4 of the circle in view and position from top left of div
	const borderRadius = Math.random() * Math.min(radius / 4, 20) + 10; // minimum of 10px max of 1/3 radius

	const colorIndex = Math.floor(Math.random() * chosenTheme.length);
	const color = chosenTheme[colorIndex];
	if (--themeColorCount[colorIndex] === 0) {
		chosenTheme.splice(colorIndex, 1); // remove color
	}

	return {
		radius: radius,
		position: position,
		color: color,
		border_radius: borderRadius
	}
}

// IDEA: could do a bubbling animation replacing circles when animation ends
//	css::	animation: 2s ease 1 alternate grow;
