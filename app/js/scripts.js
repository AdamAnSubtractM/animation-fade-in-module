jQuery(document).ready(function($){
    console.log('ready');
    // Set selector caching for elements that will be anitmated
    var animationElements = $('.animate');
    // Store the window object in a variable
    var viewport = $(window);
    // Since we're calculating positions of elements based on width and height,
    // the calculations will need re-dun on re-size, Therefore, we check on scroll and resize
    viewport.on('scroll resize', checkPosition);
    // Force trigger a scroll event on load in case any animated elements are already in
    // view on page load
    viewport.trigger('scroll');

    // Detects the sroll position and if it's in view
    function checkPosition() {
        var windowHeight = viewport.height();
        var windowTopPosition = viewport.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each(animationElements, function() {
            var _$t = $(this);
            var elementHeight = _$t.outerHeight();
            var elementTopPosition = _$t.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            //check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
                _$t.addClass('in-view');
            } else {
                _$t.removeClass('in-view');
            }
        });
    } //end checkPosition();
});


