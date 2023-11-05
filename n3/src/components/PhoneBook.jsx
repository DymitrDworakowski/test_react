const PhoneBook = ({ handleSubmit, handleChangeInput }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>PhoneBook</h1>
      <p>Name</p>
      <input type="text" name="name"  required placeholder="name." onChange={handleChangeInput}/>
      <p>Number</p>
      <input type="tel" name="number"  required placeholder="tel." onChange={handleChangeInput} />
      <button type="submit" >
        Add contct
      </button>
    </form>
  );
};

export default PhoneBook;
