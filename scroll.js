new fullpage("#fullpage", {
    licenseKey: "31EB1867-F27C4C2E-90C981D3-01B86BEC",
    autoScrolling: !0,
    scrollHorizontally: !0,
    slidesNavigation: !0,
    slidesNavPosition: "bottom",
    resetSliders: !0,
    resetSlidersKey: "b3JvcGVuZG9sYS5kZXZfUUtwY21WelpYUlRiR2xrWlhKejI0ZA=="
}), setTimeout((function() {
    document.getElementsByClassName("centered")[0].classList.remove("outofscreen"), document.getElementsByClassName("centered")[1].classList.remove("outofscreen")
}), 500), setTimeout((function() {
    document.getElementsByClassName("oropendola")[0].classList.remove("nonvisible"), document.getElementsByClassName("centered")[0].classList.remove("centered"), document.getElementsByClassName("centered")[0].classList.remove("centered")
}), 1e3);
const onHome = document.getElementsByClassName("fp-viewing-page-home"),
    onAbout = document.getElementsByClassName("fp-viewing-page-about"),
    onWork = document.getElementsByClassName("fp-viewing-page-work"),
    onContact = document.getElementsByClassName("fp-viewing-page-contact"),
    onLocaly = document.getElementsByClassName("fp-viewing-page-localy-0"),
    onVeganfind = document.getElementsByClassName("fp-viewing-page-veganfind-0"),
    onEcoimpakt = document.getElementsByClassName("fp-viewing-page-ecoimpakt-0"),
    onLupamove = document.getElementsByClassName("fp-viewing-page-lupamove-0"),
    onCastlexperience = document.getElementsByClassName("fp-viewing-page-castlexperience-0"),
    onDragonleaves = document.getElementsByClassName("fp-viewing-page-dragonleaves-0"),
    body = document.querySelector("body"),
    header = document.querySelector("header"),
    links = document.querySelectorAll("nav a"),
    slideNav = document.querySelectorAll(".fp-slidesNav ul li a span"),
    arrowsNav = document.querySelectorAll(".fp-controlArrow"),
    aboutLink = document.getElementById("aboutlink").style,
    workLink = document.getElementById("worklink").style,
    contactLink = document.getElementById("contactlink").style,
    footer = document.querySelector("footer"),
    yellowBig = document.getElementsByClassName("yellowcircle-big")[0].style,
    blackBig = document.getElementsByClassName("blackcircle-big")[0].style,
    yellowSmall = document.getElementsByClassName("yellowcircle-small")[0],
    blackSmall = document.getElementsByClassName("blackcircle-small")[0],
    outlineSmall = document.getElementsByClassName("outlinecircle-small")[0].style,
    outlineBig = document.getElementsByClassName("outlinecircle-big")[0].style,
    oropendola = document.getElementsByClassName("oropendola")[0],
    projectContent = document.getElementsByClassName("projectcontentwrap"),
    projectContentLinks = document.querySelectorAll(".projectcontentwrap a"),
    localyH1 = document.getElementsByClassName("localyh1")[0].style,
    veganfindH1 = document.getElementsByClassName("veganfindh1")[0].style,
    ecoimpaktH1 = document.getElementsByClassName("ecoimpakth1")[0].style,
    lupamoveH1 = document.getElementsByClassName("lupamoveh1")[0].style,
    castlexperienceH1 = document.getElementsByClassName("castlexperienceh1")[0].style,
    dragonleavesH1 = document.getElementsByClassName("dragonleavesh1")[0].style;

function whiteTheme() {
    header.style.color = "#fff", links.forEach((e => e.style.color = "#fff")), footer.style.color = "#fff"
}

function darkTheme() {
    header.style.color = "var(--darkgray)", links.forEach((e => e.style.color = "var(--darkgray)")), footer.style.color = "var(--darkgray)", body.style.backgroundColor = "#fff"
}

function scrollHome() {
    yellowBig.width = "75vmax", yellowBig.top = "-35vmax", yellowBig.left = "50%", yellowBig.transform = "", blackBig.width = "50vmax", blackBig.top = "70%", blackBig.left = "-25%", blackBig.transform = "", blackBig.backgroundColor = "var(--darkgray)", outlineSmall.width = "60vmax", outlineSmall.top = "65%", outlineSmall.left = "-10%", outlineSmall.transform = "", outlineSmall.border = "1px solid var(--darkgray)", outlineBig.width = "90vmax", outlineBig.top = "-65vmax", outlineBig.transform = "", outlineBig.left = "10%", yellowSmall.classList.remove("centered"), blackSmall.classList.remove("centered-black"), yellowSmall.classList.remove("centered-yellow"), oropendola.classList.remove("nonvisible"), yellowSmall.classList.remove("overlap-yellow"), blackSmall.classList.remove("overlap-black"), yellowSmall.style.zIndex = "2", blackSmall.style.zIndex = "2", yellowSmall.style.backgroundColor = "var(--mustard)", aboutLink.textDecoration = "none", workLink.textDecoration = "none", contactLink.textDecoration = "none"
}

function scrollAbout() {
    yellowSmall.classList.add("centered-yellow"), blackSmall.classList.add("centered-black"), oropendola.classList.add("nonvisible"), yellowSmall.classList.remove("overlap-yellow"), blackSmall.classList.remove("overlap-black"), yellowSmall.style.zIndex = "-2", blackSmall.style.zIndex = "2", yellowBig.width = "130vmax", yellowBig.top = "-100vmax", yellowBig.left = "50%", yellowBig.transform = "translateX(-50%)", outlineBig.width = "110vmax", outlineBig.top = "-300vmax", outlineBig.left = "50%", outlineBig.transform = "translateX(-50%)", blackBig.transform = "translateX(-50%)", blackBig.backgroundColor = "var(--darkgray)", blackBig.left = "50%", outlineSmall.transform = "translateX(-50%)", outlineSmall.border = "1px solid var(--darkgray)", outlineSmall.left = "50%", aboutLink.textDecoration = "underline", workLink.textDecoration = "none", contactLink.textDecoration = "none", window.innerWidth > 980 && (blackBig.width = "45vmax", blackBig.top = "80%", outlineSmall.width = "90vmax", outlineSmall.top = "80%"), window.innerWidth <= 980 && (blackBig.width = "25vmax", blackBig.top = "95%", outlineSmall.width = "40vmax", outlineSmall.top = "95%")
}

function scrollWork() {
    yellowBig.top = "-300%", yellowBig.right = "-5vw", blackBig.width = "45vmax", blackBig.left = "50%", blackBig.transform = "translateX(-50%)", blackBig.backgroundColor = "var(--darkgray)", outlineSmall.left = "50%", outlineSmall.transform = "translateX(-50%)", outlineSmall.border = "1px solid var(--darkgray)", outlineBig.top = "-300vmax", yellowSmall.classList.add("centered-yellow"), blackSmall.classList.add("centered-black"), oropendola.classList.add("nonvisible"), yellowSmall.style.zIndex = "2", blackSmall.style.zIndex = "-2", yellowSmall.classList.remove("overlap-yellow"), blackSmall.classList.remove("overlap-black"), yellowSmall.style.backgroundColor = "var(--mustard)", aboutLink.textDecoration = "none", workLink.textDecoration = "underline", contactLink.textDecoration = "none", window.innerWidth > 980 && (blackBig.top = "-40%", outlineSmall.width = "90vmax", outlineSmall.top = "-70%"), window.innerWidth <= 980 && (blackBig.top = "-15%", outlineSmall.width = "40vmax", outlineSmall.top = "0%", links.forEach((e => e.style.color = "#fff")))
}

function scrollContact() {
    yellowBig.top = "-300%", yellowBig.right = "-5vw", blackBig.left = "50%", blackBig.transform = "translateX(-50%)", blackBig.backgroundColor = "var(--darkgray)", outlineSmall.left = "50%", outlineSmall.transform = "translateX(-50%)", outlineSmall.border = "1px solid var(--darkgray)", outlineBig.left = "50%", outlineBig.transform = "translateX(-50%)", yellowSmall.classList.add("overlap-yellow"), blackSmall.classList.add("overlap-black"), oropendola.classList.add("nonvisible"), yellowSmall.style.backgroundColor = "var(--mustard)", yellowSmall.style.zIndex = "2", blackSmall.style.zIndex = "1", aboutLink.textDecoration = "none", workLink.textDecoration = "none", contactLink.textDecoration = "underline", window.innerWidth > 980 && (blackBig.width = "45vmax", blackBig.top = "70%", outlineBig.width = "65vmax", outlineBig.top = "-10%", outlineSmall.width = "40vmax", outlineSmall.top = "55%"), window.innerWidth <= 980 && (outlineBig.top = "-5%", outlineBig.width = "85vmax", blackBig.width = "105vmax", blackBig.top = "80%", outlineSmall.width = "50vmax", outlineSmall.top = "65.5%", document.querySelector("footer").style.color = "#fff")
}

function scrollProject() {
    yellowBig.top = "-300%", yellowBig.right = "-5vw", blackBig.left = "50%", blackBig.transform = "translateX(-50%)", blackBig.backgroundColor = "var(--darkgray)", outlineSmall.left = "50%", outlineSmall.transform = "translateX(-50%)", outlineSmall.border = "1px solid var(--darkgray)", outlineBig.top = "-300vmax", yellowSmall.classList.add("centered-yellow"), blackSmall.classList.add("centered-black"), oropendola.classList.add("nonvisible"), yellowSmall.style.zIndex = "2", blackSmall.style.zIndex = "-2", yellowSmall.classList.remove("overlap-yellow"), blackSmall.classList.remove("overlap-black"), aboutLink.textDecoration = "none", workLink.textDecoration = "underline", contactLink.textDecoration = "none", window.innerWidth > 980 && (blackBig.top = "-50%", blackBig.width = "35vmax", outlineSmall.width = "90vmax", outlineSmall.top = "-70%"), window.innerWidth <= 980 && (blackBig.top = "-64%", blackBig.width = "75vmax", outlineSmall.width = "75vmax", outlineSmall.top = "85%")
}

function scrollAnimations(e) {
    e.forEach((function(e) {
        "attributes" === e.type && "class" === e.attributeName && (onHome.length && (darkTheme(), scrollHome()), onAbout.length && (darkTheme(), scrollAbout()), onWork.length && (darkTheme(), scrollWork()), onContact.length && (darkTheme(), scrollContact()), onLocaly.length && (scrollProject(), whiteTheme(), localyH1.color = "#fff", blackBig.backgroundColor = "#fff", outlineSmall.border = "1px solid #fff", yellowSmall.style.backgroundColor = "var(--localypurple)", body.style.backgroundColor = "var(--localypurple)", projectContent[0].style.color = "#fff", slideNav.forEach((e => e.style.backgroundColor = "#fff")), projectContentLinks.forEach((e => e.style.color = "#fff")), arrowsNav.forEach((e => "fp-next" === e.classList[1] ? e.style.borderColor = "transparent transparent transparent #fff" : e.style.borderColor = "transparent #fff transparent transparent")), window.innerWidth <= 980 && links.forEach((e => e.style.color = "var(--localypurple)"))), onVeganfind.length && (scrollProject(), darkTheme(), veganfindH1.color = "var(--veganfindcoral)", blackBig.backgroundColor = "var(--veganfindcoral)", outlineSmall.border = "1px solid var(--veganfindcoral)", yellowSmall.style.backgroundColor = "var(--veganfindgreen)", body.style.backgroundColor = "var(--veganfindgreen)", projectContentLinks.forEach((e => e.style.color = "var(--darkgray)")), slideNav.forEach((e => e.style.backgroundColor = "var(--veganfindcoral)")), arrowsNav.forEach((e => "fp-next" === e.classList[1] ? e.style.borderColor = "transparent transparent transparent var(--veganfindcoral)" : e.style.borderColor = "transparent var(--veganfindcoral) transparent transparent")), window.innerWidth <= 980 && links.forEach((e => e.style.color = "#fff"))), onEcoimpakt.length && (scrollProject(), darkTheme(), ecoimpaktH1.color = "var(--darkgray)", blackBig.backgroundColor = "var(--darkgray)", outlineSmall.border = "1px solid var(--darkgray)", yellowSmall.style.backgroundColor = "var(--ecoimpaktbeige)", body.style.backgroundColor = "var(--ecoimpaktbeige)", slideNav.forEach((e => e.style.backgroundColor = "var(--darkgray)")), projectContentLinks.forEach((e => e.style.color = "var(--darkgray)")), arrowsNav.forEach((e => "fp-next" === e.classList[1] ? e.style.borderColor = "transparent transparent transparent var(--darkgray)" : e.style.borderColor = "transparent var(--darkgray) transparent transparent")), window.innerWidth <= 980 && links.forEach((e => e.style.color = "#fff"))), onLupamove.length && (scrollProject(), whiteTheme(), lupamoveH1.color = "var(--lupamovepeach)", blackBig.backgroundColor = "var(--lupamovepurple)", outlineSmall.border = "1px solid var(--lupamovepeach)", yellowSmall.style.backgroundColor = "var(--lupamovesalmon)", body.style.backgroundColor = "var(--lupamovesalmon)", projectContent[3].style.color = "#fff", slideNav.forEach((e => e.style.backgroundColor = "#fff")), arrowsNav.forEach((e => "fp-next" === e.classList[1] ? e.style.borderColor = "transparent transparent transparent #fff" : e.style.borderColor = "transparent #fff transparent transparent")), window.innerWidth <= 980 && links.forEach((e => e.style.color = "#fff"))), onCastlexperience.length && (scrollProject(), whiteTheme(), castlexperienceH1.color = "#fff", blackBig.backgroundColor = "var(--darkgray)", outlineSmall.border = "1px solid #fff", yellowSmall.style.backgroundColor = "var(--castlexperiencepink)", body.style.backgroundColor = "var(--castlexperiencepink)", projectContentLinks.forEach((e => e.style.color = "#fff")), projectContent[4].style.color = "#fff", slideNav.forEach((e => e.style.backgroundColor = "#fff")), arrowsNav.forEach((e => "fp-next" === e.classList[1] ? e.style.borderColor = "transparent transparent transparent #fff" : e.style.borderColor = "transparent #fff transparent transparent"))), onDragonleaves.length && (scrollProject(), darkTheme(), dragonleavesH1.color = "var(--dragonleavesgreen)", blackBig.backgroundColor = "var(--dragonleavesgreen)", outlineSmall.border = "1px solid var(--dragonleavesgreen)", yellowSmall.style.backgroundColor = "var(--dragonleavespeach)", body.style.backgroundColor = "var(--dragonleavespeach)", projectContentLinks.forEach((e => e.style.color = "var(--darkgray)")), slideNav.forEach((e => e.style.backgroundColor = "var(--dragonleavesgreen)")), arrowsNav.forEach((e => "fp-next" === e.classList[1] ? e.style.borderColor = "transparent transparent transparent var(--dragonleavesgreen)" : e.style.borderColor = "transparent var(--dragonleavesgreen) transparent transparent")), window.innerWidth <= 980 && links.forEach((e => e.style.color = "#fff"))))
    }))
}
const options = {
        attributes: !0
    },
    observer = new MutationObserver(scrollAnimations);
observer.observe(body, options);