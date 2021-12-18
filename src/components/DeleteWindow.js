import React, {useRef} from "react";

const DeleteWindow = ({ setDeleteWindow, itemToDelete, todos, setTodos }) => {

  const deleteRef = useRef();

  //Function that exit the delete page when we click out of
  const handleExit = (e) => {
    if (!deleteRef.current.contains(e.target)) {
        setDeleteWindow(false);
    }
  };

  //Function that finally delete the item
  const handleDeleteFinish = () => {
    const deleteItem = todos.filter((item) => item.id !== itemToDelete);
    setTodos(deleteItem);
    setDeleteWindow(false);
  };

  //Getting item for deleting and put into a question
  const itemForDeleting = todos.filter((item) => item.id === itemToDelete);

  return (
    <div onClick={handleExit} className="delete_wrapper">
      <div ref={deleteRef} className="delete">
        <div className="question">
          Are you sure you want to delete "{itemForDeleting[0]?.title}"
        </div>
        <div className="events">
          <button onClick={() => setDeleteWindow(false)} className="cancel">
            Cancel
          </button>
          <button onClick={handleDeleteFinish} className="del">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWindow;
