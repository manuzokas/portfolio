document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Remove para não ficar observando o tempo todo
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  timelineItems.forEach((item) => {
    observer.observe(item);
  });
});
