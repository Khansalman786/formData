//document.addEventListener("DOMContentLoaded", function () {
//    const shareButton = document.querySelector('.share');
//    const socialDiv = document.querySelector('.social');
//    const closeIcon = document.querySelector('.close-icon');

//    // Click on "Share" button
//    shareButton.addEventListener('click', function () {
//        socialDiv.classList.toggle('active'); // Show/Hide social div
//    });

//    // Click on "Close" icon
//    closeIcon.addEventListener('click', function () {
//        socialDiv.classList.remove('active'); // Hide social div
//    });
//});


document.addEventListener("DOMContentLoaded", function () {

    document.body.addEventListener('click', function (event) {

        // --- Check for click on the main SHARE toggle button ---
        const shareButton = event.target.closest('.share');
        if (shareButton) {
            event.preventDefault(); // Prevent any default action if it's a link/button

            // Find the '.social' element relative to the clicked button
            const shareWrapper = shareButton.closest('.share-wrapper');
            if (shareWrapper) {
                const socialDiv = shareWrapper.querySelector('.social');
                if (socialDiv) {
                    socialDiv.classList.toggle('active'); // Show/Hide social div
                } else {
                    console.error("Could not find '.social' element within the share wrapper for toggle.");
                }
            } else {
                console.error("Could not find '.share-wrapper' ancestor for the toggle button.");
            }
            return; // Handled toggle, no further action needed for this click
        }

        // --- Check for click on a specific SOCIAL SHARE link (inside the list) ---
        const socialLink = event.target.closest('.social li a');
        if (socialLink) {
            event.preventDefault(); // IMPORTANT: Prevent the link from navigating to '#'

            const pageUrl = window.location.href;
            let productTitle = document.title; // Fallback to page title

            // Attempt to find the product title within the same product details section
            const productDetailsWrapper = socialLink.closest('.tp-product-details-wrapper');
            if (productDetailsWrapper) {
                const titleElement = productDetailsWrapper.querySelector('h3.tp-product-details-title');
                if (titleElement) {
                    productTitle = titleElement.textContent.trim(); // Get specific product title
                }
            }

            const service = socialLink.getAttribute('title').toLowerCase(); // Get 'facebook', 'whatsapp', etc.
            let shareUrl = '';

            // Encode components for the URL parameters
            const encodedUrl = encodeURIComponent(pageUrl);
            const encodedTitle = encodeURIComponent(productTitle); // Encode title for potential use

            console.log(`Sharing on: ${service}`);
            console.log(`URL: ${pageUrl}`);
            console.log(`Title: ${productTitle}`);

            // Construct the specific share URL based on the service
            switch (service) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                    break;

                case 'whatsapp':
                    // Create a text message including the title and the URL
                    const whatsappText = encodeURIComponent(`${productTitle}\n\nCheck out this product:\n${pageUrl}`);
                    // Use the web API link - works on desktop and mobile should prompt app selection
                    shareUrl = `https://api.whatsapp.com/send?text=${whatsappText}`;
                    // Alternative: Direct app link (might not work reliably on all desktops)
                    // shareUrl = `whatsapp://send?text=${whatsappText}`;
                    break;

                case 'twitter': // Example
                    const twitterText = encodeURIComponent(`${productTitle} - ${pageUrl}`); // Max length limits apply
                    shareUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;
                    break;

                case 'linkedin': // Example
                    // LinkedIn requires the URL to be shared, title/summary are fetched by LinkedIn itself
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                    break;

                // Add cases for other services like 'google', 'pinterest', etc. if needed

                default:
                    console.warn(`Sharing service "${service}" logic not implemented.`);
                    // Optionally open the original href if it's a real link
                    // window.open(socialLink.href, '_blank');
                    return; // Don't proceed if the service isn't handled
            }

            // Open the constructed URL in a new window/tab (popup style)
            if (shareUrl) {
                // Use 'noopener noreferrer' for security
                window.open(shareUrl, '_blank', 'width=600,height=400,noopener,noreferrer');
            }

            // Optional: Close the social dropdown after clicking a share link
            const shareWrapper = socialLink.closest('.share-wrapper');
            if (shareWrapper) {
                const socialDiv = shareWrapper.querySelector('.social');
                if (socialDiv) {
                    socialDiv.classList.remove('active');
                }
            }

            return; // Handled share action
        }


        // --- Check for click on the CLOSE icon (if you add one) ---
        const closeIcon = event.target.closest('.close-icon');
        if (closeIcon) {
            event.preventDefault(); // Optional

            // Find the related social div to close
            const shareWrapper = closeIcon.closest('.share-wrapper');
            if (shareWrapper) {
                const socialDiv = shareWrapper.querySelector('.social');
                if (socialDiv) {
                    socialDiv.classList.remove('active'); // Hide social div
                }
            }
            return; // Handled close action
        }

    });
});