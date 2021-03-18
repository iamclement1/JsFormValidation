function validate() {
  var validationField = document.getElementById('validation-txt');
  var password = document.getElementById('password-2');

  var content = password.value;
  var errors = [];
}
if (content.length < 8) {
  errors.push('Your password must be at least 8 characters');
}
