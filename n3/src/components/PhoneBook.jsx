const PhoneBook = ({ onClick, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>PhoneBook</h1>
      <p>Name</p>
      <input type="text" name="name" required placeholder="name." />
      <p>Number</p>
      <input type="tel" name="number" required placeholder="tel." />
      <button type="submit" onClick={onClick}>
        Add contct
      </button>
    </form>
  );
};
// import { Component } from "react";

// class PhoneBook extends Component {

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" name="name" />
//         <input type="tel" name="number" />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
// }

export default PhoneBook;
