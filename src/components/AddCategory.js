import React, { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ setCategory }) => {
  const [input, setInput] = useState("");
  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input || !input.trim()) return alert("Please enter a valid category");
    setCategory((prev) => [input, ...prev]);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Category</h2>
      <input type="text" value={input} onChange={handleChange} />
      <button>Add</button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
export default AddCategory;
