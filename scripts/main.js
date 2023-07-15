const myKeyAttributes = ['Software Developer', 'Artist'];

document.getElementById('my-key-attributes').innerHTML = myKeyAttributes.join(
  '&nbsp;&nbsp;<span class="vertical-bar text-emphasis-color"></span>&nbsp;&nbsp;'
);

fadeOutOnScrollElements = Array.from(
  document.getElementsByClassName('fadeout-on-scroll')
);

document.getElementById('main').addEventListener('scroll', function () {
  fadeOutOnScrollElements.forEach((el) => {
    watchItem = document.getElementById(el.getAttribute('data-fadeout-id'));
    fadeoutStart = el.getAttribute('data-fadeout-start') || 1;
    opacity =
      (watchItem.getBoundingClientRect().y / fadeoutStart - 100) /
      window.innerHeight;
    opacity = opacity > 1 ? 1 : opacity < 0 ? 0 : opacity;
    el.style.opacity = opacity;
  });
});
