import $ from 'jquery';

class Modal {
  constructor() {
    this.modal = $('.modal');
    this.openModalBtn = $('.open-modal');
    this.closeModalBtn = $('.modal__close');
    this.events();
  }

  events() {
    // clicking open btn
    this.openModalBtn.click(this.openModal.bind(this));
    
    // clicking x close btn
    this.closeModalBtn.click(this.closeModal.bind(this));

    // hitting esc key to x close
  }

  openModal() {
    this.modal.addClass('modal--visible');
    return false;
  }

  closeModal() {
    this.modal.removeClass('modal--visible');
  }
}



// class Modal {
//   constructor() {
//     this.openModalBtn = $('.open-modal');
//     this.modal = $('.modal');
//     this.closeModal = $('.modal__close');
//     this.events();
//   }

//   events() {
//     // clicking open btn
//     this.openModalBtn.click(this.openModal);
//     // clicking x close btn
//     this.closeModal.click(this.closeModal.bind(this));
//     // push esc key
//   }

//   openModal() {
//     this.modal.addClass('modal--visible');
//     return false;
//   }

//   closeModal() {
//     this.modal.removeClass('modal--visible');
//   }
// }


export default Modal;