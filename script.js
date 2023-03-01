// Animal list / text animation
function NavList() {
  const tabmenu = document.querySelectorAll(".js-tabmenu li");
  const tabcontent = document.querySelectorAll(".js-tabcontent section");

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add("show");

    function showcontent(index) {
      tabcontent.forEach((content) => {
        content.classList.remove("show");
      });
      tabcontent[index].classList.add("show");
    }
    tabmenu.forEach((img, index) => {
      img.addEventListener("click", () => {
        showcontent(index);
      });
    });
  }
}
NavList();

// FAQ Animation
function FaqList() {
  const faqDts = document.querySelectorAll(".js-accordion dt");

  if (faqDts.length) {
    faqDts[0].classList.toggle("showdd");
    faqDts[0].nextElementSibling.classList.toggle("showdd");

    function showdd() {
      this.classList.toggle("showdd");
      this.nextElementSibling.classList.toggle("showdd");
    }
    faqDts.forEach((faq) => {
      faq.addEventListener("click", showdd);
    });
  }
}
FaqList();
