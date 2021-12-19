import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { validate } from "../validation/Validation";

const UpdateTodo = ({ itemToUpdate, setUpdateVisible, todos, setTodos }) => {

  const [successMessage, setSuccessMessage] = useState(false);
  const formRef = useRef();

  //Function that exit the form when we click out of the form
  const handleExit = (e) => {
    if (!formRef.current.contains(e.target)) {
      setUpdateVisible(false);
    }
  };

  //Formik library
  const formik = useFormik({
    initialValues: {
      title: itemToUpdate.title,
      description: itemToUpdate.desc,
      date: itemToUpdate.time,
    },
    validate,
    onSubmit: (values) => {
      const updatedTodos = todos.map((item) =>
        item.id === itemToUpdate.id ? {
              ...item,
              title: values.title,
              desc: values.description,
              time: values.date,
            } : item);
      setTodos(updatedTodos);
      setSuccessMessage(true);
    },
  });

  return (
    <div onClick={handleExit} className="update_form">
      <form ref={formRef} onSubmit={formik.handleSubmit} className="update">
        <div className="update_title">
          <h3>Update Todo</h3>
        </div>
        <div className="update_content">
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </div>
          {formik.touched.title && formik.errors.title && (
            <div className="error">{formik.errors.title}</div>
          )}
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </div>
          {formik.touched.description && formik.errors.description && (
            <div className="error">{formik.errors.description}</div>
          )}
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
            />
          </div>
          {formik.touched.date && formik.errors.date && (
            <div className="error">{formik.errors.date}</div>
          )}
          <div className="update_btn">
            <button type="submit">Update todo</button>
          </div>
          {successMessage && <div className="success_msg">Todo has been updated!</div>}
        </div>
      </form>
    </div>
  );
};

export default UpdateTodo;
