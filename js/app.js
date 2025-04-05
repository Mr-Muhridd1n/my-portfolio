import data from "./data.js";
const time = document.querySelector("#time");
const template = document.querySelector("template");
const portfolio__list = document.querySelector(".portfolio__list");
time.textContent = new Date().getFullYear();
console.log(data.length);
data.forEach((d, i) => {
  const clone = template.content.cloneNode(true);

  const portfolio__counter = clone.querySelector(".portfolio__counter");
  const portfolio__title = clone.querySelector(".portfolio__title");
  const linkGithub = clone.querySelector(".link-github");
  const linkVercel = clone.querySelector(".link-vercel");

  portfolio__counter.textContent = data.length - i;
  portfolio__title.textContent = d.title;
  linkGithub.href = d.github;
  linkVercel.href = d.vercel;

  portfolio__list.append(clone);
});

document.addEventListener('DOMContentLoaded', () => {
  const timeSpan = document.getElementById('time');
  const currentYear = new Date().getFullYear();
  timeSpan.textContent = currentYear;

  // Portfolio elementlariga animatsiya qo'shish
  const portfolioItems = document.querySelectorAll('.portfolio__item');
  const footer = document.querySelector('.footer');

  portfolioItems.forEach((item, index) => {
      item.style.setProperty('--order', index);

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.1 });

      observer.observe(item);
  });

  // Footer uchun animatsiya
  const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              footerObserver.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  footerObserver.observe(footer);
});