export const Modal = {
  wrapper: document.querySelector('.model-wrapper'),
  message: document.querySelector('#msgIMC'),
  buttonClose: document.querySelector('#closeButton'),


  open: () => {
    Modal.wrapper.classList.add('open')
  },
  close: () => {
    Modal.wrapper.classList.remove('open')
  }
}



Modal.buttonClose.onclick = () => {
  Modal.close()
  location.reload()
}

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(e) {
  if(e.key === 'Escape'){
    Modal.close()
  }
}

