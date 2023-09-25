const counter1 = document.getElementById("counter1");
const counter2 = document.getElementById("counter2");

const counter3 = document.getElementById("counter3");
const counter4 = document.getElementById("counter4");

const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px",
  threshold: 1.0, // Fully in viewport
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
       startCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(counter1);
observer.observe(counter2);
observer.observe(counter3);
observer.observe(counter4);


function startCounter(target) {
  let count = 0;
  const updateCounter = () => {
    if (target === counter2 && count >= 8) {
      target.textContent = count + "+";
    } else if (target === counter3 && count >= 8) {
      target.textContent = count + "+";
    } else {
      target.textContent = count;
    }

    if (target === counter1 && count < 300) {
        count+=10;
      requestAnimationFrame(updateCounter);
    }
   
    if (target === counter3 && count < 8) {
        count+=2;
      requestAnimationFrame(updateCounter);
    }
    if (target === counter2 && count < 250) {
        count+=10;
        requestAnimationFrame(updateCounter);
      }
      if (target === counter4 && count < 35) {
        count+=5;
        requestAnimationFrame(updateCounter);
      }
  };
  requestAnimationFrame(updateCounter);
}
