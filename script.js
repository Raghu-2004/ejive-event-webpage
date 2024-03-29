const animatedParagraph = document.querySelector('.animated-paragraph');

window.addEventListener('scroll', () => {
  if (isElementInViewport(animatedParagraph)) {
    animatedParagraph.classList.add('animate-on-scroll');
  }
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
