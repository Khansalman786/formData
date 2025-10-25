const observer = new MutationObserver(() => {
    let toggle = document.getElementById("tp-header-setting-toggle");
    let menu = document.getElementById("custom-menu");

    let cartOpenBtn = document.querySelector(".cartmini-open-btn");
    let cartMiniArea = document.querySelector(".cartmini__area");
    let bodyOverlay = document.querySelector(".body-overlay");
    let cartCloseBtn = document.querySelector(".cartmini-close-btn");

    let headerInitialized = false;
    let cartInitialized = false;

    // ✅ Header Setting Toggle Logic
    if (toggle && menu && !headerInitialized) {
        console.log("✅ #tp-header-setting-toggle & #custom-menu found!");

        toggle.addEventListener("click", function (event) {
            menu.classList.toggle("tp-setting-list-open");
            event.stopPropagation(); // Prevent closing when clicking toggle
        });

        document.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && !toggle.contains(event.target)) {
                menu.classList.remove("tp-setting-list-open"); // Close menu
            }
        });

        headerInitialized = true;
    }

    // ✅ Cart Mini Toggle Logic
    if (cartOpenBtn && cartMiniArea && bodyOverlay && cartCloseBtn && !cartInitialized) {
        console.log("✅ Cart mini elements found!");

        cartOpenBtn.addEventListener("click", function (event) {
            // **Header Menu Close when Cart opens**
            menu.classList.remove("tp-setting-list-open"); // ✅ Close Header Menu

            cartMiniArea.classList.add("cartmini-opened");
            bodyOverlay.classList.add("opened");
            event.stopPropagation(); // Prevent event bubbling
        });

        cartCloseBtn.addEventListener("click", function () {
            cartMiniArea.classList.remove("cartmini-opened");
            bodyOverlay.classList.remove("opened");
        });

        document.addEventListener("click", function (event) {
            if (
                !cartMiniArea.contains(event.target) &&
                !cartOpenBtn.contains(event.target)
            ) {
                cartMiniArea.classList.remove("cartmini-opened");
                bodyOverlay.classList.remove("opened");
            }
        });

        cartInitialized = true;
    }

    // ✅ Disconnect observer only when both functionalities are initialized
    if (headerInitialized && cartInitialized) {
        observer.disconnect();
    }
});

// Start observing changes in the body
observer.observe(document.body, { childList: true, subtree: true });
