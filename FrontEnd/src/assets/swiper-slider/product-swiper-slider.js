 // First, initialize the thumbnail slider
        var swiperThumbs = new Swiper(".swiper-thumbs", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });

        // Then, initialize the main slider
        var swiperMain = new Swiper(".swiper-main", {
            spaceBetween: 10,
            
            // --- NEW: Autoplay Configuration ---
            autoplay: {
                delay: 3000, // Time in ms between slides
                disableOnInteraction: false, // Continue autoplay after user interaction
            },

            // --- NEW: Navigation Arrows ---
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            
            thumbs: {
                swiper: swiperThumbs, // Link to the thumbnail Swiper instance
            },
        });

        // --- NEW: Pause autoplay on mouse hover ---
        const galleryContainer = document.querySelector('.product-gallery');
        galleryContainer.addEventListener('mouseenter', () => {
            swiperMain.autoplay.stop();
        });
        galleryContainer.addEventListener('mouseleave', () => {
            swiperMain.autoplay.start();
        });