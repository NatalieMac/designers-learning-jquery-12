// Example 1: No Conflict Mode

// jQuery.noConflict();
// var listItems = jQuery('ul li');
// listItems.addClass('highlight');



// Example 2: Using a function
// (function($) {
// 	var listItems = $('ul li');
// 	listItems.addClass('highlight');
// })(jQuery);



// Example 3: Using a custom shorthand

var $j = jQuery.noConflict();

var listItems = $j('ul li');
listItems.addClass('highlight');
