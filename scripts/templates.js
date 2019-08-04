const templates = Array.from(document.getElementsByTagName("template"));
templates.forEach(template => {
	const options = JSON.parse(template.dataset.options);

	if (options.id) {
		const el = document.getElementById(options.id);
		if (options.replaceOuter) {
			el.replaceWith(template.content.cloneNode(true));
		} else {
			el.innerHTML = template.innerHTML;
		}
	} else if (options.class) {
		Array.from(document.getElementsByClassName(options.class)).forEach(el => {
			if (options.replaceOuter) {
				el.replaceWith(template.content.cloneNode(true));
			} else {
				el.innerHTML = template.innerHTML;
			}
		});
	}
});
