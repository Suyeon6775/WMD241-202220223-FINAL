document.addEventListener('mousemove', (event) => {
  const circles = document.querySelectorAll('.floating');
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  circles.forEach((circle, index) => {
    const delay = index * 100; // 각 원이 약간의 지연을 갖도록 설정 (100ms 단위)
    setTimeout(() => {
      circle.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }, delay);
  });
});
