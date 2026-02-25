"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const defaultValues = {
  title: "",
  price: "",
  description: "",
  category: "",
};

export default function ProductForm({ initialValues = {}, onSubmit }) {
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
    if (!values.title.trim()) newErrors.title = "Title is required";
    if (!values.price || Number(values.price) <= 0) newErrors.price = "Valid price is required";
    if (!values.category.trim()) newErrors.category = "Category is required";
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
      await onSubmit?.({ ...values, price: Number(values.price) });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      <Input
        id="title"
        name="title"
        label="Product Name"
        placeholder="iPhone 15 Pro"
        value={values.title}
        onChange={handleChange}
        error={errors.title}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          id="price"
          name="price"
          type="number"
          label="Price ($)"
          placeholder="999.00"
          value={values.price}
          onChange={handleChange}
          error={errors.price}
          step="0.01"
          min="0"
        />
        <Input
          id="category"
          name="category"
          label="Category"
          placeholder="electronics, clothing..."
          value={values.category}
          onChange={handleChange}
          error={errors.category}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="description" className="block text-sm font-medium text-gray-300">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Product description..."
          value={values.description}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-3.5 py-2.5 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all duration-200 resize-none"
        />
      </div>

      <div className="pt-2">
        <Button type="submit" loading={loading}>
          {initialValues?.id ? "Update Product" : "Create Product"}
        </Button>
      </div>
    </form>
  );
}