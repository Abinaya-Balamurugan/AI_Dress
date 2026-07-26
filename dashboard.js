// ===============================
// QR Scanner
// ===============================

let qrScanner;

document.getElementById("startScanner").addEventListener("click", function () {

    qrScanner = new Html5Qrcode("reader");

    qrScanner.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 250
        },

        function (decodedText) {

            document.getElementById("storeLink").value = decodedText;

            qrScanner.stop();

            alert("QR Code Scanned Successfully!");

        },

        function (error) {

            // Ignore scanning errors

        }

    );

});

// ===============================
// Load Website
// ===============================

document.getElementById("loadBtn").addEventListener("click", function () {

    let url = document.getElementById("storeLink").value.trim();

    if (url == "") {

        alert("Please paste a website link.");

        return;

    }

    if (!url.startsWith("http")) {

        url = "https://" + url;

    }

    // Because Amazon/Flipkart block iframe,
    // open the retailer in a new tab

    window.open(url, "_blank");

});

// ===============================
// Upload Image Preview
// ===============================

document.getElementById("photoUpload").addEventListener("change", function (event) {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        const img = document.getElementById("previewImage");

        img.src = e.target.result;

        img.style.display = "block";

    };

    reader.readAsDataURL(file);

});

// ===============================
// AI Try-On Button
// ===============================

const aiButton = document.querySelector(".upload button");

aiButton.addEventListener("click", function () {

    const file = document.getElementById("photoUpload").files[0];

    if (!file) {

        alert("Please upload your photo first.");

        return;

    }

    alert("AI Virtual Try-On feature will be integrated here.");

    // Future:
    // Send image + selected dress
    // to your Node.js backend
    // and receive AI-generated result.

});

// ===============================
// Category Filter
// ===============================

const categoryButtons = document.querySelectorAll(".category-list button");

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        categoryButtons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        alert("Selected Category: " + this.innerText);

        // Future:
        // Load products from database
        // according to selected category

    });

});

// ===============================
// Product Buttons
// ===============================

const productButtons = document.querySelectorAll(".product button");

productButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert("Dress selected.\nProceed to AI Virtual Try-On.");

        // Later:
        // Save selected product
        // Navigate to Try-On page

    });

});
document.getElementById("loadBtn").onclick=function(){

let link=document.getElementById("storeLink").value;

document.getElementById("websiteFrame").src=link;

};