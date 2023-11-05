const PhoneBook = ({ onClick, eventTargetInput }) => {
  return (
    <div>
      <h1>PhoneBook</h1>
      <p>Name</p>
      <input
        type="text"
        name="name"
        required
        onChange={eventTargetInput}
        placeholder="name."
      />

      <h1>Number</h1>
      <input
        type="tel"
        name="number"
        required
        placeholder="tel."
        onChange={eventTargetInput}
      />
      <button type="button" onClick={onClick}>
        Add contct
      </button>
    </div>
  );
};

export default PhoneBook;
