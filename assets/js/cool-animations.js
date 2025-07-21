// Cool interactive animation: Parallax effect for gradient circles
// Moves the background circles slightly based on mouse position for a modern effect

document.addEventListener('mousemove', function(e) {
  const circles = document.querySelectorAll('.bg-gradient-circle');
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  circles.forEach((circle, i) => {
    const factor = (i + 1) * 18;
    circle.style.transform = `translate(${x * factor}px, ${y * factor}px) scale(1)`;
  });
});

document.addEventListener('mouseleave', function() {
  const circles = document.querySelectorAll('.bg-gradient-circle');
  circles.forEach(circle => {
    circle.style.transform = '';
  });
});
