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

// Scroll Links
function scrollToSection() {
  const linkinterno = document.querySelectorAll(".js-menu a[href^='#']");

  function ScrollTo(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // Alternative code
    // window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
  }

  linkinterno.forEach((link) => {
    link.addEventListener("click", ScrollTo);
  });
}
scrollToSection();

// Scroll Animation
function scrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMet = window.innerHeight * 0.6;

    function scrollAnimated() {
      sections.forEach((section) => {
        const sectiontop = section.getBoundingClientRect().top - windowMet;
        if (sectiontop < 0) {
          section.classList.add("ativo");
        }
      });
    }
    window.addEventListener("scroll", scrollAnimated);
    scrollAnimated();
  }
}
scrollAnimation();
