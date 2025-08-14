import React, { useEffect, useState } from "react";
import { data } from '../store/dataapi'

export default function DynamicForm() {
  const [formConfig, setFormConfig] = useState(null);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormConfig(data);
  }, []);

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    for (let field of formConfig.fields) {
      const rules = formConfig.validation[field.name];
      if (rules?.required && !formData[field.name]) {
        newErrors[field.name] = `.${field.label}. is required`;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted: " + JSON.stringify(formData, null, 2));
    }
  };

  if (!formConfig) return <p>Loading form...</p>;

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.fields.map(field => {
        // Conditional rendering
        if (field.showWhen) {
          const targetValue = formData[field.showWhen.field];
          if (targetValue !== field.showWhen.equals) return null;
        }

        return (
          <div key={field.name} style={{ marginBottom: "10px" }}>
            <label>
              '{field.label}:{" "}
              {field.type === "select" ? (
                <select
                  value={formData[field.name] || ""}
                  onChange={e => handleChange(field.name, e.target.value)}
                >
                  <option value="">Select...</option>
                  {field.options.map(opt => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  value={formData[field.name] || ""}
                  onChange={e => handleChange(field.name, e.target.value)}
                />
              )}
            </label>
            {errors[field.name] && (<div style={{ color: "red" }}>,{errors[field.name]}</div>)}
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
}
