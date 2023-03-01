function NavImgList() {
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
NavImgList();
