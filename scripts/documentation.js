function initializeScrolling(columnSelector, fixmeSelector) {
	var col = $(columnSelector);
	var fixme = $(fixmeSelector);
	var fixmeTop = fixme.offset().top;
	var height_logo = document.getElementById('logo').offsetHeight;
	var mediaQuery = window.matchMedia('(min-width: 991px)');

	//scroll event listener on the window
	$(window).scroll(function() {
		// is a method provided by jQuery. 
		//It retrieves the vertical scrollbar position for the first element in the set of matched elements, 
		//which, in this case, is the window. It returns the number of pixels that the document is currently scrolled vertically.
		var currentScroll = $(window).scrollTop();
		var colTop = col.offset().top;
		var colBottom = colTop  + (col.height() - fixme.height());
		var viewportBottom = currentScroll + $(window).height() - fixme.height()

		//The current scroll position is greater than or equal to the top position of the fixed column
		//The top position of the scrolling column is less than or equal to the bottom of the viewport.
		//The bottom of the scrolling column is greater than or equal to the current scroll position.
		if (mediaQuery.matches && currentScroll >= fixmeTop && currentScroll >= colTop && colTop <= viewportBottom && colBottom >= currentScroll) {
			if (fixme.height() <= $(window).height()) {
				fixme.css({
					position: 'fixed',
					top: 45 + height_logo,
					width: fixme.width() // Set the width explicitly
				});
			} else {
				fixme.css({
					position: 'static',
				});
			}
		} else {
			fixme.css({
				position: 'static',
			});
		}
	});
}

// Example usage
initializeScrolling('.scrolling-column1', '#fix-me1');
initializeScrolling('.scrolling-column2', '#fix-me2');
initializeScrolling('.scrolling-column3', '#fix-me3');
initializeScrolling('.scrolling-column4', '#fix-me4');
initializeScrolling('.scrolling-column5', '#fix-me5');
initializeScrolling('.scrolling-column6', '#fix-me6');
initializeScrolling('.scrolling-column7', '#fix-me7');