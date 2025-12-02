import { refs } from './refs';

//!================================================
export function showModal() {
  refs.modal.classList.add('modal--is-open');
}

export function hideModal() {
  refs.modal.classList.remove('modal--is-open');
}

//!================================================

refs.closeModal.addEventListener('click', hideModal);
//!================================================
