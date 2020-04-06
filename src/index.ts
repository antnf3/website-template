const header = document.querySelector("header");
const headerNav = document.querySelector(".header-nav");

(function() {
  let isSmallHeader = false;
  const handleScroll = (e: Event) => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 0 && !isSmallHeader) {
      console.log("크다");
      header?.classList.add("small-header");
      headerNav?.classList.add("small-nav");
      isSmallHeader = true;
    } else if (scrollPosition === 0) {
      console.log("작다");
      header?.classList.remove("small-header");
      headerNav?.classList.remove("small-nav");
      isSmallHeader = false;
    }
  };
  window.addEventListener("scroll", handleScroll);
})();
