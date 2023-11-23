import { Component } from "react";
import * as basicLightbox from "basiclightbox";
import  css  from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    this.openModal();
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose(); // Закрываем модальное окно при нажатии клавиши Escape
    }
  };
  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose(); // Закрываем модальное окно при клике на фон
    }
  };
openModal() {
  const { largeImageURL } = this.props;

  const instance = basicLightbox.create(`
    <div class="${css.overlay}">
      <div class="${css.modal}">
        <img src="${largeImageURL}" width="800" height="600">
      </div>
    </div>
  `);

  const overlayElement = instance.element().querySelector(`.${css.overlay}`);
  overlayElement.addEventListener("click", this.handleBackdropClick);

  instance.show();
}

  render() {
    return null;
  }
}

export default Modal;
