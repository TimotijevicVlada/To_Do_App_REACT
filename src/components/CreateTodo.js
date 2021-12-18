import React from "react";
import { useFormik } from "formik";

const CreateTodo = () => {
  //Custom form validation
  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Title is required!";
    } else if (values.title.length < 2 && values.title.length > 15) {
      errors.title = "Must be beteween 2 and 15 caracters!";
    }

    if (!values.description) {
      errors.description = "Description is required!";
    } else if (values.description.length < 5 && values.description.length > 20) {
      errors.description = "Must be beteween 5 and 20 caracters!";
    } 

    if (!values.date) {
      errors.date = "Date is required!";
    } 

    return errors;
  };

  //Formik library
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
    },
    validate,
    onSubmit: (values) => {
      //console.log(values)
     
    },
  });

  return (
    <div className="create_form">
      <form onSubmit={formik.handleSubmit} className="form">
        <div>
          <label htmlFor="title">Title</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            type="text"
            name="title"
          />
        </div>
        {formik.touched.title && formik.errors.title && <div>{formik.errors.title}</div>}
        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            type="text"
            name="description"
          />
        </div>
        {formik.touched.description && formik.errors.description && <div>{formik.errors.description}</div>}
        <div>
          <label htmlFor="date">Date</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            type="text"
            name="date"
            id="date"
          />
        </div>
        {formik.touched.date && formik.errors.date && <div>{formik.errors.date}</div>}
        <div>
          <button type="submit">Add new todo</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
