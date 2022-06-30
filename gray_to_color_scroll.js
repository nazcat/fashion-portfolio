const targets = document.querySelectorAll(".colored");
const isAnimated = "is-animated";
const threshold = 0.5;

function callback(entries, observer) {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.intersectionRatio >= threshold) {
      elem.classList.add(isAnimated);
      //observer.unobserve(elem);
    } else {
      elem.classList.remove(isAnimated);
    }
  });
}

const observer = new IntersectionObserver(callback, { threshold });
for (const target of targets) {
  observer.observe(target);
}
