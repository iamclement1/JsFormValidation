var state = fasle;
function toggle() {
  if (state) {
    document.getElementByI('password').setAttribute('type', 'password');
    state = false;
  } else {
    document.getElementByI('password').setAttribute('type', 'text');
    state = true;
  }
}
