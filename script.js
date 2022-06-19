const x = document.querySelector(".transition-container");
const scroll = document.querySelector(".main_menu");
const counters = document.querySelectorAll(".counter")


window.onscroll = function() {scrollFun()};

// window.addEventListener("scroll",scrollFun);

function menuShow(){
    x.classList.toggle("navbar-collapse")
}

function scrollFun(){
    if(window.scrollY>=60){
        scroll.classList.add("home_menu")
        scroll.style.position = "fixed"
    }
    else{
        scroll.classList.remove("home_menu")
        scroll.style.position = "absolute"
    }
}


counter=(()=>{
    counters.forEach((counter) => {
        counter.innerText=0;
        const updatecounter=()=>{
            const target = +counter.getAttribute("data-target");
            if(+counter.innerText<target){
                counter.innerText = +counter.innerText+1;
                setTimeout(updatecounter,5);
            }
        };
        updatecounter();
});

})


var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
    counter()
}, { threshold: [0] });

observer.observe(document.querySelector(".member-count"));

