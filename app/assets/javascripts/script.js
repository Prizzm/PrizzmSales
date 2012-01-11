/* Author: ohsogeoff

*/

$(function(){
  
  $('[placeholder]').focus(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
      input.removeClass('placeholder');
    }
  }).blur(function() {
    var input = $(this);
    if (input.val() == '' || input.val() == input.attr('placeholder')) {
      input.addClass('placeholder');
      input.val(input.attr('placeholder'));
    }
  }).blur();
  
  $('[placeholder]').parents('form').submit(function() {
    $(this).find('[placeholder]').each(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    })
  });
  
  $(".why").show();
  
  $('#info nav ul > li').click(function(){
    $("#info nav ul").find("li.active").removeClass("active");
    $(this).addClass("active");
    
    $('#info div').slideUp('1500');
    $('#info div:eq(' + $('#info nav ul > li').index(this) + ')').slideDown('1500');
    
    return false;
  });
  
});