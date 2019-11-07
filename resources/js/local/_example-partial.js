
// add a class of 'intro' to the first paragraph
// do this on every page apart from the blog page
if ( !page('blog') )
{

    document.querySelector('.content > p').classList.add('intro')

}

function validateForm( form ) {
  var isFormValid = true;
  var invalidClassName = 'error-input-gradient';
  var inputs = form.find('input, select, textarea');
  inputs.each(function() {
    $(this).parent().removeClass(invalidClassName);
    if ($(this)[0].checkValidity() == false) {
      isFormValid = false;
      $(this).parent().addClass(invalidClassName);
    }
  });

  if (isFormValid == true) {
    return true;
  }
}

$('#contact-form input, #contact-form select, #contact-form textarea').on('blur', function() {
  var invalidClassName = 'error-input-gradient';
  $(this).parent().removeClass(invalidClassName);
  if ($(this)[0].checkValidity() == false) {
    $(this).parent().addClass(invalidClassName);
  }
});

$("#contact-form").submit(function(e) {
  e.preventDefault();

  let form = $(this);
  let validForm = validateForm(form);
  if (validForm) {
    form.slideUp();
    $('#form-loading').fadeIn();
    $.post(form.attr("action"), form.serialize()).then(function() {
      $('#form-loading').fadeOut('slow', function() {
        $('#form-success').fadeIn();
      });
    });
  }
});

$('a[href="#contact"]').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top,
  }, 500);
});