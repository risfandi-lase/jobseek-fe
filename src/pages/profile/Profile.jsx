import { useState } from "react";

export default function Profile() {
  const [form, setForm] = useState({
    title: "",
    major: "",
    company: ""
  });
  const [errors, setErrors] = useState({ title: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "title") {
      if (value.length <= 8) {
        setErrors((prev) => ({ ...prev, title: "Title must be more than 8 characters." }));
      } else {
        setErrors((prev) => ({ ...prev, title: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            style={{ borderColor: errors.title ? "red" : undefined }}
          />
          {errors.title && (
            <div style={{ color: "red", marginTop: 4 }}>{errors.title}</div>
          )}
        </div>
        <div>
          <label htmlFor="major">Major:</label>
          <input type="text" id="major" name="major" value={form.major} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" name="company" value={form.company} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}