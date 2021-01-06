import React    from "react";
import template from "./User.jsx";
import firebase from "../Firestore"

class User extends React.Component {

  constructor(){
    super();
    this.state = {
      email:"",
      name:""
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();

    db.settings({
      timestampsInSnapshots: true
    });

    db.collection("users").add({
      name: this.state.name,
      email: this.state.email
    });  
    this.setState({
      name: "",
      email: ""
    });
  };
  
  render() {
    return template.call(this);
  }
}

export default User;
