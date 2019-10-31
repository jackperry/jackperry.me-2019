
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
    $('#form-loading').before('<div class="bg-green-lightest border border-green-light text-green-dark px-4 py-3 rounded" role="alert"><strong>Thanks for your message.</strong> I usually respond within 48 hours, so you should hear from me soon!</div>');
    $('#form-loading').fadeOut();
  });
});  