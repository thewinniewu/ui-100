$(document).on('ready', function() {
  $("#submit_button").click(function() {
    validateForm();
    return false;
  });

  function validateForm() {
    let fields = $("#signup_form").find("input");
    for (element of fields) {
      validateElement(element);
    }
  }

  function validateElement(element) {
    $(element).removeClass("field-error");
    if (!element.value) {
      $(element).addClass("field-error");
    }
  }
});
