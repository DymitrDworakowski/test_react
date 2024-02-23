import Modal from "@mui/material/Modal";

const ModalEdit =({_id,handleSubmit,name,phone,email,openId,handleClose})=>{



    
    return (
        <>
    <Modal
            open={openId === _id}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div >
              <form  onSubmit={handleSubmit}>
                <p>Name</p>
                <input
                  
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={name}
                />
                <p>Email</p>
                <input
                  
                  type="email"
                  name="email"
                  placeholder="Email"
                  defaultValue={email}
                />
                <p>Number</p>
                <input
                 
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  defaultValue={phone}
                />
                <button type="submit" >
                  Confirm changes
                </button>
              </form>
            </div>
          </Modal>
          </>
    );
}

export default ModalEdit;