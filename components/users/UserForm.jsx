"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  role: "",
};

export default function UserForm({ initialValues = {}, onSubmit }) {
  const [values, setValues] = useState({ ...defaultValues, ...initialValues });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors = {};
    if (!values.firstName.trim()) newErrors.firstName = "First name is required";
    if (!values.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!values.email.trim()) newErrors.email = "Email is required";
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await onSubmit?.(values);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      <div className="grid grid-cols-2 gap-4">
        <Input
          id="firstName"
          name="firstName"
          label="First Name"
          placeholder="John"
          value={values.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <Input
          id="lastName"
          name="lastName"
          label="Last Name"
          placeholder="Doe"
          value={values.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
      </div>

      <Input
        id="email"
        name="email"
        type="email"
        label="Email"
        placeholder="john@example.com"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />

      <Input
        id="phone"
        name="phone"
        label="Phone"
        placeholder="+1 (555) 123-4567"
        value={values.phone}
        onChange={handleChange}
      />

      <Input
        id="role"
        name="role"
        label="Role"
        placeholder="Admin, Editor, Viewer..."
        value={values.role}
        onChange={handleChange}
      />

      <div className="pt-2">
        <Button type="submit" loading={loading}>
          {initialValues?.id ? "Update User" : "Create User"}
        </Button>
      </div>
    </form>
  );
}