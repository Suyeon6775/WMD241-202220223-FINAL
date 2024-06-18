document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const captionText = document.getElementById('caption');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const span = document.getElementsByClassName('close')[0];

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = item.src;
      captionText.innerHTML = item.getAttribute('data-description');
    });
  });

  span.onclick = function () {
    modal.style.display = 'none';
  };
});
