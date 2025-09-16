import React from "react";

const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId(children);
  return (
    <div className="form-control">
      {label && (
        <label htmlFor={id} className="auth-label">
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <small role="alert" className="text-red-600 m-0 p-0">
          {error.message}
        </small>
      )}
    </div>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);
  if ("id" in child.props) {
    return child.props.id;
  }
};

export default Field;
