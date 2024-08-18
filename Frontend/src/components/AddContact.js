// import React from "react";

// class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };

//   add = async (e) => {
//     e.preventDefault();
//     if (this.state.name === "" || this.state.email === "") {
//       alert("ALl the fields are mandatory!");
//       return;
//     }
//     this.props.addContactHandler(this.state);
//     this.setState({ name: "", email: "" });
//   };
//   render() {
//     return (
//       <div className="ui main">
//         <h2>Add Contact</h2>
//         <form className="ui form" onSubmit={this.add}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />
//           </div>
//           <button className="ui button blue">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContact;



import axios from 'axios';
import React from 'react';

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = async (e) => {
    e.preventDefault();

    // Validate form input
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }

    // Create the request body
    const contactData = {
      name: this.state.name,
      email: this.state.email,
    };

    try {
      // Send POST request with request body
      const response = await axios.post('http://localhost:5000/api/contacts', contactData);
      console.log("Contact added:", response.data);
    } catch (error) {
      console.error("There was an error adding the contact!", error);
    }

    // Clear form and call parent handler
    this.setState({ name: "", email: "" });
    this.props.addContactHandler(contactData);
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
