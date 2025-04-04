/*==================== start welcome section ====================*/
// creating [bullets] in [welcome section] by adding [boxs]
function createBullets() {
  // linking html tags
  const welcomeBoxs = document.querySelectorAll(".welcome-box");
  const welcomeBullets = document.querySelector("#welcome__bullets");
  // loop for [welcomeBoxs]
  for (let i = 0; i < welcomeBoxs.length; i++) {
    // create and linking attribute
    const bullet = document.createElement("button");
    const dataBullet = welcomeBoxs[i].getAttribute("data-bullet");
    // adding attributes to [button]
    bullet.className = "bullet";
    bullet.id = `bullet${i + 1}`;
    bullet.title = `Article ${i + 1}`
    bullet.ariaLabel = `Go to Article ${i + 1}`
    bullet.setAttribute("data-image", dataBullet);
    // put [bullet] inside [welcomeBullets]
    welcomeBullets.appendChild(bullet);
    
    // linking first [bullet] and active it by adding [active-bullet] class as default
    const bullet1 = document.querySelector("#bullet1");
    bullet1.classList.add("active-bullet");
  }
} createBullets();


// active [box] by click on [bullets]
function welcomeBoxs() {
  // linking html tags
  const welcomeBoxs = document.querySelectorAll(".welcome-box");
  const bullets = document.querySelectorAll(".bullet");
  // loop for [welcomeBoxs]
  for (let i = 0; i < welcomeBoxs.length; i++) {
    // activeBox onclick [bullet]
    function activeBox() {
      // loop for [welcomeBoxs]
      for (const welcomeBox of welcomeBoxs) {
        // adding and removing [active--welcome-box] class by equaling [data] attribute's value of [welcomeBox] and its [bullet]
        if (welcomeBox.getAttribute("data-bullet") === bullets[i].getAttribute("data-image")) {
          welcomeBox.classList.add("active--welcome-box");
        } else {
          welcomeBox.classList.remove("active--welcome-box");
        }
      }
    } bullets[i].addEventListener("click", activeBox)
  }
} welcomeBoxs();


// active target [bullet] by click on it
function welcomeBullets() {
  // linking html tags
  const bullets = document.querySelectorAll(".bullet");
  // loop for [bullets]
  for (let i = 0; i < bullets.length; i++) {
    // activeBullet onclick [bullet]
    function activeBullet(element) {
      // loop for [bullets] to remove [active-bullet] class from all [bullets]
      bullets.forEach(bullet => {
        bullet.classList.remove("active-bullet");
      })
      // add [active-bullet] class to the [bullet] target that get clicked
      element.target.classList.add("active-bullet");
    } bullets[i].addEventListener("click", activeBullet)
  }
} welcomeBullets();


// active [header] by click on [bullet]
function welcomeHeader() {
  // linking html tags
  const welcomeHeads = document.querySelectorAll(".welcome-head");
  const bullets = document.querySelectorAll(".bullet");
  // loop for [welcomeHeads]
  for (let i = 0; i < welcomeHeads.length; i++) {
    // linking attribute, and put it inside [data-head] attribute
    const dataBullet = welcomeHeads[i].getAttribute("data-bullet");
    bullets[i].setAttribute("data-head", dataBullet);
    // activeHead onclick [bullets]
    function activeHead() {
      // loop for [welcomeHeads]
      for (const welcomeHead of welcomeHeads) {
        // adding and removing [active--welcome-head] class by equaling [data] attribute's value of [welcomeHead] and its [bullet]
        if (welcomeHead.getAttribute("data-bullet") === bullets[i].getAttribute("data-head")) {
          welcomeHead.classList.add("active--welcome-head");
        } else {
          welcomeHead.classList.remove("active--welcome-head");
        }
      }
    } bullets[i].addEventListener("click", activeHead)
  }
} welcomeHeader();


// active [paragraph] by click on [bullet]
function welcomeParagraph() {
  // linking html tags
  const welcomeParags = document.querySelectorAll(".welcome-parag");
  const bullets = document.querySelectorAll(".bullet");
  // loop for [welcomeParags]
  for (let i = 0; i < welcomeParags.length; i++) {
    // linking attribute, and put it inside [data-parag]
    const dataBullet = welcomeParags[i].getAttribute("data-bullet");
    bullets[i].setAttribute("data-parag", dataBullet);
    // activeParag onclick bullets
    function activeParag() {
      // loop for [welcomeParags]
      for (const welcomeParag of welcomeParags) {
        // adding and removing [active--welcome-parag] class by equaling [data] attribute's value of [welcomeParag] and its [bullet]
        if (welcomeParag.getAttribute("data-bullet") === bullets[i].getAttribute("data-parag")) {
          welcomeParag.classList.add("active--welcome-parag");
        } else {
          welcomeParag.classList.remove("active--welcome-parag");
        }
      }
    } bullets[i].addEventListener("click", activeParag)
  }
} welcomeParagraph();
/*==================== end welcome section ====================*/




/*==================== start sections main & nav ====================*/
// create [nav-link] by adding [section-main]
function createNav() {
  // linking html tags
  const sectionMains = document.querySelectorAll(".section-main");
  const navbarList = document.querySelector("#navbar__list");
  // loop for [sectionMain]
  for (let i = 0; i < sectionMains.length; i++) {
    // creating [li] and [a]
    const navListLinks = document.createElement("li"); 
    const navLinks = document.createElement("a");
    // linking attributes [section]
    const href = sectionMains[i].getAttribute("id");
    const dataNav = sectionMains[i].getAttribute("data-nav");
    // adding attributes in [a]
    navLinks.href = `#${href}`;
    navLinks.className = "nav-link";
    navLinks.id = `nav__link${i + 1}`;
    navLinks.title = dataNav;
    navLinks.ariaLabel = `Go to ${dataNav} section`;
    navLinks.setAttribute("data-section", dataNav);
    navLinks.innerHTML = `${dataNav}`;
    // put [a] inside [li], put [li] inside [ul]
    navListLinks.appendChild(navLinks);
    navbarList.appendChild(navListLinks);
  }
} createNav();


// active [sectionMain] and [navbar] by scrolling
function sectionMainAndNavbar() {
  // linking html tags
  const sectionMains = document.querySelectorAll(".section-main");
  const navLinks = document.querySelectorAll(".nav-link");
  const rocketImg = document.querySelectorAll(".rocket-img");
  const sectionMainHead = document.querySelectorAll(".section-main--head");
  const sectionMainLine = document.querySelectorAll(".section-main--line");
  const sectionMainParag1 = document.querySelectorAll(".section-main--parag1");
  const sectionMainParag2 = document.querySelectorAll(".section-main--parag2");
  // loop for [sectionMains]
  for (let i = 0; i < sectionMains.length; i++) {
    // onscroll the [window]
    function onScroll() {
      const sectionLocation = sectionMains[i].getBoundingClientRect(); // determine the location of [sectionMains]
      // adding and removing [active] class => when the diffrance between [sectionMains.top] and [window.top] is 66px or less "start", and the diffrance between [sectionMains.bottom] and [window.top] is 66px or more "start"
      if (sectionLocation.top <= 66 && sectionLocation.bottom >= 66) {
        sectionMains[i].classList.add("active--section-main");
        rocketImg[i].classList.add("active--rocket-img");
        sectionMainHead[i].classList.add("active--section-main--head");
        sectionMainLine[i].classList.add("active--section-main--line");
        sectionMainParag1[i].classList.add("active--section-main--parag");
        sectionMainParag2[i].classList.add("active--section-main--parag");
        // adding and removing [active--nav-link] class by equaling [data] attribute's value of [sectionMains] and its [navLinks]
        if (sectionMains[i].hasAttribute("data-nav") === navLinks[i].hasAttribute("data-section")) {
          navLinks[i].classList.add("active--nav-link");
        } else {
          navLinks[i].classList.remove("active--nav-link");
        }
      } else {
        sectionMains[i].classList.remove("active--section-main");
        rocketImg[i].classList.remove("active--rocket-img");
        sectionMainHead[i].classList.remove("active--section-main--head");
        sectionMainLine[i].classList.remove("active--section-main--line");
        sectionMainParag1[i].classList.remove("active--section-main--parag");
        sectionMainParag2[i].classList.remove("active--section-main--parag");
        navLinks[i].classList.remove("active--nav-link");
      }
    } window.addEventListener("scroll", onScroll)
  }
} sectionMainAndNavbar();


// smooth scroll when click on [nav-link]
function scrollBehaviorSmooth() {
  // linking html tags
  const navLinks = document.querySelectorAll(".nav-link");
  // loop for [navLinks]
  for (let i = 0; i < navLinks.length; i++) {
    // click on [nav-link]
    function clickNavLink(event) {
      event.preventDefault(); // stop [nav-link] from its work
      const navLinkScroll = document.querySelector(event.target.getAttribute("href")); // href of on click target
      // scroll smooth
      navLinkScroll.scrollIntoView({
        behavior: "smooth",
      })
    } navLinks[i].addEventListener("click", clickNavLink)
  }
} scrollBehaviorSmooth();
/*==================== end sections main & nav ====================*/




/*==================== start footer ====================*/
// active [footerLogo] & [footerName] by scrolling
function footerNameLogo() {
  // linking html tags
  const footerLogoName = document.querySelector("#footer__logo__name");
  const footerLogo = document.querySelector("#footer__logo");
  const footerName = document.querySelector("#footer__name");
  // on scroll the [window]
  function onScroll() {
    const footerLogoNameLocation = footerLogoName.getBoundingClientRect(); // determine the location of [footerLogoName]
    // adding and removing [active] class => when the diffrance between [footerLogoName.top] and [window.top] is 300px or less "start"
    if (footerLogoNameLocation.top <= 300) {
      footerLogo.classList.add("active--footer-logo");
      footerName.classList.add("active--footer-name");
    } else {
      footerLogo.classList.remove("active--footer-logo");
      footerName.classList.remove("active--footer-name");
    }
  } window.addEventListener("scroll", onScroll)
} footerNameLogo();


// active grandchildren of [footerContainer] by scrolling
function footerContainer() {
  // linking [contactLinks] and its child
  const contactLinks = document.querySelector("#contact__links");
  const contactLink = document.querySelectorAll(".contact-link");
  // linking [footerLinks] and its child
  const footerLinks = document.querySelector("#footer__links");
  const footerList = document.querySelectorAll(".footer-list");
  const footerLink = document.querySelectorAll(".footer-link");
  // linking [footerInfos] and its child
  const footerInfos = document.querySelector("#footer__infos");
  const footerFontAwesome = document.querySelectorAll(".footer-font-awesome");
  const footerParag = document.querySelectorAll(".footer-parag");
  // on scroll the [window]
  function onScroll() {
    const contactLinksLocation = contactLinks.getBoundingClientRect(); // determine the location of [contactLinks]
    // loop for [contactLink]
    for (let i = 0; i < contactLink.length; i++) {
      // adding and removing [active] class => when the diffrance between [contactLinks.top] and [window.top] is 400px or less "start"
      if (contactLinksLocation.top <= 400) {
        contactLink[i].classList.add("active--contact-link");
      } else {
        contactLink[i].classList.remove("active--contact-link");
      }
    }
    const footerLinksLocation = footerLinks.getBoundingClientRect(); // determine the location of [footerLinks]
    // loop for [footerList]
    for (let i = 0; i < footerList.length; i++) {
      // adding and removing [active] class => when the diffrance between [footerLinks.top] and [window.top] is 400px or less "start"
      if (footerLinksLocation.top <= 400) {
        footerList[i].classList.add("active--footer-list");
      } else {
        footerList[i].classList.remove("active--footer-list");
      }
    }
    // loop for [footerLink]
    for (let i = 0; i < footerLink.length; i++) {
      // adding and removing [active] class => when the diffrance between [footerLinks.top] and [window.top] is 400px or less "start"
      if (footerLinksLocation.top <= 400) {
        footerLink[i].classList.add("active--footer-link");
      } else {
        footerLink[i].classList.remove("active--footer-link");
      }
    }
    const footerInfosLocation = footerInfos.getBoundingClientRect(); // determine the location of [footerInfos]
    // loop for [footerFontAwesome]
    for (let i = 0; i < footerFontAwesome.length; i++) {
      // adding and removing [active] class => when the diffrance between [footerInfos.top] and [window.top] is 400px or less "start"
      if (footerInfosLocation.top <= 400) {
        footerFontAwesome[i].classList.add("active--footer-font-awesome");
      } else {
        footerFontAwesome[i].classList.remove("active--footer-font-awesome");
      }
    }
    // loop for [footerParag]
    for (let i = 0; i < footerParag.length; i++) {
      // adding and removing [active] class => when the diffrance between [footerInfos.top] and [window.top] is 400px or less "start"
      if (footerInfosLocation.top <= 400) {
        footerParag[i].classList.add("active--footer-parag");
      } else {
        footerParag[i].classList.remove("active--footer-parag");
      }
    }
  } window.addEventListener("scroll", onScroll)
} footerContainer();


// active [scrollUpButton] by scrolling, effect on [window] by click on [scrollUpButton]
function scrollUpButton() {
  // linking html tags
  const scrollUpButton = document.querySelector("#scroll__up__button");
  // // on scroll the [window]
  function onScroll() {
    const scrollUpButtonLocation = scrollUpButton.getBoundingClientRect(); // determine the location of [scrollUpButton]
    // adding and removing [active] class => when the diffrance between [scrollUpButton.top] and [window.top] is 500px or less "start"
    if (scrollUpButtonLocation.top <= 650) {
      scrollUpButton.classList.add("active--scroll-up-button");
    } else {
      scrollUpButton.classList.remove("active--scroll-up-button");
    }
  } window.addEventListener("scroll", onScroll)
  // on click the [scrollUpButton]
  function onClick() {
    // scroll to the top of the window smoothly
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
  } scrollUpButton.addEventListener("click", onClick)
} scrollUpButton();
/*==================== end footer ====================*/
