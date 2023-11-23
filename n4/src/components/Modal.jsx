import{ Component } from "react";
import * as basicLightbox from "basiclightbox";
import './Modal.css';

class Modal extends Component {
  componentDidMount() {
    this.openModal();
  }
   
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose(); // Закрываем модальное окно при нажатии клавиши Escape
    }
  };

  openModal() {
    const { largeImageURL, onClose } = this.props;

    const instance = basicLightbox.create(`
  <div className="overlay" onClick="${onClose}">
    <div className="modal">
      <img src="${largeImageURL}" width="800" height="600">
    </div>
  </div>
`);
    instance.show();
  }

  render() {
    return null;
  }
}

export default Modal;