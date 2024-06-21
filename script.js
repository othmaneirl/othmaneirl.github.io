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
var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
