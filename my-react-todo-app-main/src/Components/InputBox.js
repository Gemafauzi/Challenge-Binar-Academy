import React, { useState } from "react";
import { KEY_RETURN } from "keycode-js";

const InputBox = (props) => {
  const [value, setValue] = useState("");

  const handleChangeEvent = (event) => {
    setValue(event.target.value);
  };

  const handleKeyUpEvent = (event) => {
    if (event.keyCode === KEY_RETURN) {
      props.addNewItem(event.target.value);
      setValue("");
    }
  };

  return (
    <input
      type="text"
      className="form-control add-todo"
      placeholder="Add New"
      onKeyUp={handleKeyUpEvent}
      onChange={handleChangeEvent}
      value={value}
    />
  );
};

export default InputBox;
