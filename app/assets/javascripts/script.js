$(function(){
  $('a.callout').smoothScroll({offset: -100});

  $('#twitter').popover({
    'placement': 'bottom',
    'trigger': 'click'
  }).popover('show');

  $('#facebook').popover({
    'placement': 'right',
    'trigger': 'click'
  }).popover('show');

});