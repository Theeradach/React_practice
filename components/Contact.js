import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;

    return (
      <div>
        <h4>
          <ul>
            <li>Name : {name}</li>
            <li>Email : {email}</li>
            <li>Phone : {phone}</li>
          </ul>
        </h4>
      </div>
    );
  }
}

export default Contact;
