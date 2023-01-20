import { useState } from "react";
import Button from "./Button";

const Form = ({ onChange }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      alert("must not be empty");
      return;
    }
    setTitle(title);
    onChange(title);
    setTitle("");
  };
  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <label>what needs to be done</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <Button color="steelblue">ADD TODO</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
