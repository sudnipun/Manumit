/*!
 * jQuery Tiny Pub/Sub - v0.6 - 1/10/2011
 * http://benalman.com/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($){

  // Create a "dummy" jQuery object on which to bind, unbind and trigger event
  // handlers. Note that $({}) works in jQuery 1.4.3+, but because .unbind on
  // a "plain object" throws errors in older versions of jQuery, an element is
  // used here.
  var o = $('<b/>');

  // Subscribe to a topic. Works just like bind, except the passed handler
  // is wrapped in a function so that the event object can be stripped out.
  // Even though the event object might be useful, it is unnecessary and
  // will only complicate things in the future should the user decide to move
  // to a non-$.event-based pub/sub implementation.
  $.subscribe = function( topic, fn ) {

    // Call fn, stripping out the 1st argument (the event object).
    function wrapper() {
      return fn.apply( this, Array.prototype.slice.call( arguments, 1 ) );
    }

    // Add .guid property to function to allow it to be easily unbound. Note
    // that $.guid is new in jQuery 1.4+, and $.event.guid was used before.
    wrapper.guid = fn.guid = fn.guid || ( $.guid ? $.guid++ : $.event.guid++ );

    // Bind the handler.
    o.bind( topic, wrapper );
  };

  // Unsubscribe from a topic. Works exactly like unbind.
  $.unsubscribe = function() {
    o.unbind.apply( o, arguments );
  };

  // Publish a topic. Works exactly like trigger.
  $.publish = function() {
    o.trigger.apply( o, arguments );
  };

})(jQuery);