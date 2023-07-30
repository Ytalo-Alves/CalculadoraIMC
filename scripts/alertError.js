export const messageAlertError = {
  element : document.querySelector('.alert-error'),

  open() {
    messageAlertError.element.classList.add('open');
  },
  close() {
    messageAlertError.element.classList.remove('open');
  }
}

