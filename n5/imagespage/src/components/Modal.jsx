
import './Modal.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Modal =({ largeImageURL,tags,openModal,onClose })=> {

    return (
      <div className="overlay" >
        
        <Rodal customStyles={{background:'none'}} width={800} height={600} visible={openModal} closeOnEsc={true} onClose={onClose}>
          <div className="modal">
            <img
              src={largeImageURL}
              alt={tags}
              style={{ maxWidth: "100%", maxHeight: "100%", display: "block", margin: "auto" }}
            />
          </div>
        </Rodal>
        
      </div>
    );
  
}

export default Modal;
