// Intersection Observer to trigger animations when sections come into view
const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-in');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

elementsToAnimate.forEach(element => {
  observer.observe(element);
});