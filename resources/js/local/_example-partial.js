
// add a class of 'intro' to the first paragraph
// do this on every page apart from the blog page
if ( !page('blog') )
{

    document.querySelector('.content > p').classList.add('intro')

}

$("#contact-form").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $form.slideUp();
  $('#form-loading').fadeIn();
  $.post($form.attr("action"), $form.serialize()).then(function() {
    $('#form-loading').fadeOut('slow', function() {
      $('#form-success').fadeIn();
    });
  });
});

$('a[href="#contact"]').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top,
  }, 500);
});