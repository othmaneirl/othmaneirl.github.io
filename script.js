document.addEventListener('DOMContentLoaded', () => {
  const sectionHeaders = document.querySelectorAll('.section-header');

  sectionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      header.classList.toggle('active');
      const content = header.nextElementSibling;
      
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
