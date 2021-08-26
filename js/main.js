$(document).ready(function() {
    //sticky menu section
    $(".sticky-menu").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky")
        }
    });
    // portfolio section mixit up 
    var mixer = mixitup('.portfolio-container')

    // scroll to top
    const scrollBtn = document.querySelector('.scroll-btn')

    const refreshBtn = () => {
        if (document.documentElement.scrollTop <= 100) {
            scrollBtn.style.display = "none"
        } else {
            scrollBtn.style.display = "block"
        }
    }

    refreshBtn() //when page loads first time 
    scrollBtn.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
    document.addEventListener("scroll", (e) => {
        refreshBtn()
    })
})