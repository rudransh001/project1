let navOffset = $("nav").innerHeight()+20;

$(document).ready(function(e){
    $("body,html").animate({scrollTop:0},100, "easeInOutQuad");
    $("nav>a:nth-child(1)").addClass("active");
});

$("nav a[href^='#']").click(function(e){
    e.preventDefault();
    let idPosNav = $($(this).attr("href")).offset().top - navOffset;
    $("body,html").animate({scrollTop:idPosNav}, 1000, "easeInOutQuad");
});

$(window).scroll(function(){
    // * find the position of the content just under the nav
    let topContentArea = $(window).scrollTop()+navOffset+20;

    console.log(topContentArea);

    //*loop through each section to see which one is visible in the viewport
    $("section").each(function(){
        // *find the position of the section
        let secTopPos = $(this).offset().top;
        let secBottomPos = $(this).offset().top+$(this).innerHeight();
        let secID = $(this).attr("id");

        console.log(`Section ${secID} -> top: ${secTopPos} bottom: ${secBottomPos}`);

        // *check what section is currently visible in the viewport
        if(topContentArea>=secTopPos && topContentArea<=secBottomPos){
            $(`nav a[href='#${secID}']`).addClass("active");
        }else{
            $(`nav a[href='#${secID}']`).removeClass("active");
        } 
    });
    
    //* animating content into the screen
    $(".revealElement").each(function(){
        // * find the bottom of the object
        let bottomOfObject = $(this).offset().top + $(this).innerHeight();
        // * find where the bottom of the window is
        let bottomOfWindow = topContentArea + $(window).height();
        // * if the item is visible in the window, animate it in
        if(bottomOfObject<bottomOfWindow){
            $(this).animate({opacity:1, marginBottom:0}, 1000, "easeInSine");
        }
    });
});

// * animating in the intro page
$("#intro h1").delay(500).animate(
    {opacity:1},
    1000,
    "easeInSine"
);

$("#intro p").delay(1500).animate(
    {opacity:1},
    1000,
    "easeInSine"
);

// To Reset the GIF Animations

// function resetgif1()
let isAnimating1 = false;
let gif1Image = document.getElementById("gif1image");
let gif1Button = document.getElementById("gif1button");

function resetgif1() {
    if (isAnimating1) {
    gif1Image.src = "Img/menu_static.png";
    gif1Button.textContent = "Click to Animate";
    isAnimating1 = false;
    } else {
    gif1Image.src = "Img/menu_dynamic.gif";
    gif1Button.textContent = "Click to Reset";
    isAnimating1 = true;
    }
}

// function resetgif2()
let isAnimating2 = false;
let gif2Image = document.getElementById("gif2image");
let gif2Button = document.getElementById("gif2button");

function resetgif2() {
    if (isAnimating2) {
    gif2Image.src = "Img/preloader_static.png";
    gif2Button.textContent = "Click to Animate";
    isAnimating2 = false;
    } else {
    gif2Image.src = "Img/preloader_dynamic.gif";
    gif2Button.textContent = "Click to Reset";
    isAnimating2 = true;
    }
}

// function resetgif3()
let isAnimating3 = false;
let gif3Image = document.getElementById("gif3image");
let gif3Button = document.getElementById("gif3button");

function resetgif3() {
    if (isAnimating3) {
    gif3Image.src = "Img/slider_static.png";
    gif3Button.textContent = "Click to Animate";
    isAnimating3 = false;
    } else {
    gif3Image.src = "Img/slider_dynamic.gif";
    gif3Button.textContent = "Click to Reset";
    isAnimating3 = true;
    }
}



// >>>>>>>>>>>>>>>> jQuery Animation <<<<<<<<<<<<<<<<< //






// ------------------ Animate Rectangle ------------------//

$(".btn1").click(function(){
    $(".rec").animate({
        width: "200px",
        height: "200px",
        opacity: "100%"        
    }, 1000, "easeInSine");
});

// ------------------ Animate Image ------------------//

$(".btn2").click(function(){
    $(".img1").animate({
    opacity: "1",
    marginLeft: "0px"
    }, 1000 ,"easeInSine" );
});

// ------------------ Animate Blue Circle ------------//

$(".btn3").click(function(){
    $(".blue").animate({
        marginLeft: "50%"
    }, 1000 ,"easeInSine")
    .animate({
            marginLeft: "0%"
        }, 1000 ,"easeOutSine")
});