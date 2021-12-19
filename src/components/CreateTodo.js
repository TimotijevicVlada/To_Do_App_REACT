import React, { useState, useRef} from "react";
import { useFormik } from "formik";

const CreateTodo = ({setCreateTodoVisible, todos, setTodos}) => {

  const [successMessage, setSuccessMessage] = useState(false);

  const formRef = useRef();

  //Function that exit the form when we click out of the form
  const handleExit = (e) => {
    if(!formRef.current.contains(e.target)) {
      setCreateTodoVisible(false);
    }
  }

  //Custom form validation
  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Title is required!";
    } else if (values.title.length < 2 || values.title.length > 15) {
      errors.title = "Must be beteween 2 and 15 caracters!";
    }

    if (!values.description) {
      errors.description = "Description is required!";
    } else if (
      values.description.length < 5 ||
      values.description.length > 20
    ) {
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
      setTodos([...todos, {
        id: Math.random() * 10000,
        title: values.title,
        desc: values.description,
        time: values.date
      }])
      setSuccessMessage(true);
    },
  });

  return (
    <div onClick={handleExit} className="create_form">
      <form ref={formRef} onSubmit={formik.handleSubmit} className="form">
        <div className="create_title">
          <h3>Create new todo</h3>
        </div>
        <div className="form_content">
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
          {formik.touched.title && formik.errors.title && (
            <div className="error">{formik.errors.title}</div>
          )}
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
          {formik.touched.description && formik.errors.description && (
            <div className="error">{formik.errors.description}</div>
          )}
          <div>
            <label htmlFor="date">Date</label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              type="date"
              name="date"
              id="date"
            />
          </div>
          {formik.touched.date && formik.errors.date && (
            <div className="error">{formik.errors.date}</div>
          )}
          <div className="create_btn">
            <button type="submit">Add new todo</button>
          </div>
          {successMessage && <div className="success_msg">Todo has been created!</div>}
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
