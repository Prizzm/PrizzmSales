//= require jquery
//= require jquery_ujs
//= require bootstrap.min
//= require jquery.smooth-scroll.min
//= require modernizr-2.5.3.min
//= require script
//= require_self

$(document).ready(function() {
  $('#footer-signup').bind('click', function(e) {
    e.preventDefault();
    $(this).closest('form').submit();
  });
})
