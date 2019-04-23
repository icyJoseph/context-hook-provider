import React from "react";

export function Header({ title, description, children }) {
  return (
    <section className="example-section">
      <h1 className="display-4">{title}</h1>
      <p className="lead">{description} </p>
      <div className="example-container">{children}</div>
    </section>
  );
}

export default Header;
