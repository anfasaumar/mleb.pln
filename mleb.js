const container = document.getElementById('scrollContainer');
  container.addEventListener('mouseover', () => {
    container.classList.add('animate-paused');
  });
  container.addEventListener('mouseout', () => {
    container.classList.remove('animate-paused');
  });
