
/*==================== ADD NAME OF USER====================*/

var personName=prompt("pleaze Enter your Name                                   من فضلك ادخل اسمك هنا   ");
var pPrompot=document.getElementById('p-alert');
pPrompot.innerHTML=personName;

/*====================HIDDIN UL NAV AFTER CLICK ====================*/
let navLink=document.querySelectorAll('nav a');
let navbar=document.querySelector('.navbar-collapse');
for (i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
       
        navbar.classList.remove("show")
    })
}

/*==================== ADD  ACTIVE LINK  WHEN CLICK====================*/
let active = document.getElementsByClassName(' li-active');
let x = document.querySelectorAll('nav a');
function activeClass() {
    //add active class to btn
    if (active.length >= 0) {
        active[0].className = active[0].className.replace('li-active', ' ')
    }
    this.className += ' li-active';
}
for (i = 0; i < x.length; i++) {
    x[i].addEventListener('click', activeClass)
}
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
let sectionScroll = document.getElementsByClassName(" section-scroll");
let homeNav = document.getElementById("home-nav"),
    protectNav = document.getElementById("protect-nav"),
    symtomsNav = document.getElementById("symtoms-nav"),
    preventNav = document.getElementById("prevent-nav"),
    hamdwashNav = document.getElementById("handwash-nav"),
    spreadNav = document.getElementById("spread-nav");

 
 
window.addEventListener('scroll', function () {
    let scrollPage = window.pageYOffset;
    let sectionTop1 = sectionScroll[0].offsetTop,
        sectionTop2 = sectionScroll[1].offsetTop,
        sectionTop3 = sectionScroll[2].offsetTop,
        sectionTop4 = sectionScroll[3].offsetTop,
        sectionTop5 = sectionScroll[4].offsetTop;
        sectionTop6 = sectionScroll[5].offsetTop;
        
    

    if (scrollPage >= sectionTop1 && scrollPage < sectionTop2) {
       if (active.length >= 0) {
        active[0].className = active[0].className.replace('li-active', ' ')
    }
    homeNav.className += ' li-active ';
}

    if (scrollPage+100 >= sectionTop2 && scrollPage < sectionTop3) {

        if (active.length >= 0) {
            active[0].className = active[0].className.replace('li-active', ' ')
        }
        protectNav.className += ' li-active ';

    }

    if (scrollPage+100 >= sectionTop3 && scrollPage < sectionTop4) {
        if (active.length >= 0) {
            active[0].className = active[0].className.replace('li-active', ' ')
        }
        symtomsNav.className += ' li-active ';


    }

    if (scrollPage+100 >= sectionTop4 && scrollPage-100 < sectionTop5) {
        if (active.length >= 0) {
            active[0].className = active[0].className.replace('li-active', ' ')
        }
        preventNav.className += ' li-active ';


    }
    if (scrollPage+100 >= sectionTop5 && scrollPage-100 < sectionTop6) {
        if (active.length >= 0) {
            active[0].className = active[0].className.replace('li-active', ' ')
        }
        hamdwashNav.className += ' li-active ';


    }
    if (scrollPage+150 >sectionTop6) {
        if (active.length >= 0) {
            active[0].className = active[0].className.replace('li-active', ' ')
        }
        spreadNav.className += ' li-active ';

    }

});
/*==================== SHOW SCROLL TOP ====================*/
const scrollTop = document.getElementById('scroll-button');
scrollTop.onclick = function () {
    window.scrollTo(0, 0)
}

function scrollTopFunction() {

    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) {
        scrollTop.style.visibility = "visible";
        scrollTop.style.transform = "translate(-3px,-10px)"
    } else {
        scrollTop.style.visibility = "hidden";
        scrollTop.style.transform = "translate(120px)"
    }

}
window.addEventListener('scroll', scrollTopFunction)