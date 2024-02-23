import Modal from "@mui/material/Modal";
import React from "react";

const ContactModal = React.memo(
  ({ open, handleClose, handleSubmit, name, email, phone }) => {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Confirm changes</button>
          </form>
        </div>
      </Modal>
    );
  }
);

export default ContactModal;
