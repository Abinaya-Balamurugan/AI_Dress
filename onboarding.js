// ================= SWIPER SETUP =================

const swiper = new Swiper(".mySwiper", {

    loop: false,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});




// ================= NEXT BUTTON =================

const nextButtons = document.querySelectorAll(".next");


nextButtons.forEach((button)=>{


    button.addEventListener("click",()=>{


        if(swiper.activeIndex < swiper.slides.length - 1)
        {

            swiper.slideNext();

        }


    });


});





// ================= PREVIOUS BUTTON =================


const previousButtons = document.querySelectorAll(".prev");



previousButtons.forEach((button)=>{


    button.addEventListener("click",()=>{


        if(swiper.activeIndex > 0)
        {

            swiper.slidePrev();

        }


    });



});







// ================= UPDATE PREVIOUS BUTTON =================


function updatePreviousButton(){


    previousButtons.forEach((button)=>{


        if(swiper.activeIndex === 0)
        {

            button.disabled = true;

        }
        else
        {

            button.disabled = false;

        }


    });


}




// When slide changes

swiper.on("slideChange",()=>{

    updatePreviousButton();

});



// First load check

updatePreviousButton();







// ================= SKIP BUTTON =================

// Skip goes to Terms & Conditions page


const skipButtons = document.querySelectorAll(".skip");



skipButtons.forEach((button)=>{


    button.addEventListener("click",()=>{


        // Terms page is slide number 7
        // Array starts from 0
        // 0,1,2,3,4,5 = onboarding pages
        // 6 = Terms page


        swiper.slideTo(6);



    });



});







// ================= TERMS & CONDITIONS =================


const continueButton = document.getElementById("continueBtn");

const agreeCheckbox = document.getElementById("agree");





continueButton.addEventListener("click",()=>{


    if(agreeCheckbox.checked)
    {


        // Move to dashboard page

        window.location.href = "dashboard.html";


    }

    else
    {


        alert("Please accept the Terms & Conditions before continuing.");


    }



});






// ================= CHECKBOX CLICK TEST =================


agreeCheckbox.addEventListener("change",()=>{


    if(agreeCheckbox.checked)
    {

        console.log("Terms Accepted");

    }
    else
    {

        console.log("Terms Not Accepted");

    }


});