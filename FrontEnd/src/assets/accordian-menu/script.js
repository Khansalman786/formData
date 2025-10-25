//$(function() {
//	var Accordion = function(el, multiple) {
//		this.el = el || {};
//		this.multiple = multiple || false;

//		// Variables privadas
//		var links = this.el.find('.link');
//		// Evento
//		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
//	}

//	Accordion.prototype.dropdown = function(e) {
//		var $el = e.data.el;
//			$this = $(this),
//			$next = $this.next();

//		$next.slideToggle();
//		$this.parent().toggleClass('open');

//		if (!e.data.multiple) {
//			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
//		};
//	}	

//	var accordion = new Accordion($('#accordion'), false);
//});

$(function () {
    // Get all accordion list items
    var accordionItems = $('#accordion li.category-menu');

    // --- Initialize Accordion States on Page Load ---
    accordionItems.each(function () {
        var $this = $(this);
        var $link = $this.children('.link');
        var $subMenu = $this.children('ul.category-list');
        // Icon is not manipulated, so no $icon variable needed for class changes here.

        if ($this.hasClass('open')) {
            // If the item has the 'open' class (e.g., Clinical Solutions)
            $subMenu.show(); // Show the submenu immediately (no animation on load)
            $link.addClass('active'); // Optional: add an 'active' class to the link
            // Icon class remains as defined in HTML
        } else {
            // If the item does NOT have the 'open' class (e.g., Laboratory Solution)
            $subMenu.hide();   // Hide the submenu immediately
            $link.removeClass('active'); // Ensure no 'active' class
            // Icon class remains as defined in HTML
        }
    });

    // --- Handle Click Events ---
    $('#accordion .link').click(function (e) {
        e.preventDefault();  // Prevent default link behavior
        e.stopPropagation(); // Stop event from bubbling up

        var $thisLink = $(this);
        var $parentLi = $thisLink.parent('li.category-menu');
        var $subMenu = $parentLi.children('ul.category-list');
        // Icon is not manipulated, so no $icon variable needed for class changes here.

        var wasOpen = $parentLi.hasClass('open'); // Check state BEFORE toggling

        // Option: Close other open items (classic accordion behavior)
        // If you want only one item open at a time, and you are opening a new one:
        if (!wasOpen) { // Only close others if we are about to open this one
            $('#accordion li.category-menu.open').each(function () {
                var $otherOpenLi = $(this);
                // Do not close the item we are currently interacting with,
                // though this check is somewhat redundant if wasOpen is false.
                if ($otherOpenLi[0] !== $parentLi[0]) {
                    $otherOpenLi.removeClass('open');
                    $otherOpenLi.children('.link').removeClass('active');
                    $otherOpenLi.children('ul.category-list').stop(true, true).slideUp();
                }
            });
        }

        // Toggle the clicked item
        if (wasOpen) {
            // It was open, so close it
            $subMenu.stop(true, true).slideUp(function () {
                // It's important to remove 'open' class AFTER animation
                // to correctly reflect state if another click happens quickly.
                // However, for "close others" logic, we might need to rethink
                // if we rely on 'open' class strictly for what IS visually open.
                // For now, this reflects the visual state change.
            });
            $parentLi.removeClass('open'); // Remove class to reflect its new state
            $thisLink.removeClass('active');
            // Icon class remains as defined in HTML
        } else {
            // It was closed, so open it
            $parentLi.addClass('open'); // Add class to reflect its new state
            $thisLink.addClass('active');
            $subMenu.stop(true, true).slideDown();
            // Icon class remains as defined in HTML
        }
    });
});