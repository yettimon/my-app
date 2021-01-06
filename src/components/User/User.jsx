import "./User.scss";
import React from "react";

function template() {
  return (
    <form onSubmit={this.addUser}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            onChange={this.updateInput}
            value={this.state.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.updateInput}
            value={this.state.email}
          />
          <button type="submit">Submit</button>
        </form>
  );
};

export default template;