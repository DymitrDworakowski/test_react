import { Component } from "react";
import './Modal.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

class Modal extends Component {




  handleKeyDown = (event) => {
    if (event.code === "Escape") { 
      this.props.onClose();
    }
  };


  render() {
   
const { largeImageURL,tags,openModal,onClose } = this.props;
    return (
      <div className="overlay" >
        
        <Rodal  visible={openModal} closeOnEsc={true} onClose={onClose}>
        <div className="modal">
          <img src={largeImageURL} alt={tags} />
        </div>
        </Rodal>
        
      </div>
    );
  }
}

export default Modal;
