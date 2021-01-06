import "./Header.scss";
import React from "react";

function template() {
  return (
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Disabled</a>
        </li>
        <li class="nav-item allign-right">
          <a class="nav-link" href="#">Registration</a>
        </li>
        <li class="nav-item allign-right">
          <a class="nav-link" href="#">Registration</a>
        </li>
      </ul>
    </nav>
  );
};

export default template;
