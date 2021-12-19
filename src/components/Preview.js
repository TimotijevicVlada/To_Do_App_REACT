import React, {useRef} from "react";

const Preview = ({ previewTodo, setPreviewVisible }) => {

    const previewRef = useRef();

  //Function that exit the preview when we click out of 
  const handleExit = (e) => {
    if (!previewRef.current.contains(e.target)) {
        setPreviewVisible(false);
    }
  };

  return (
    <div onClick={handleExit} className="preview_wrapper">
      <div ref={previewRef} className="preview">
        <div className="preview_title">
          <h2>{previewTodo.title}</h2>
        </div>
        <div className="preview_text">
          <p>{previewTodo.desc}</p>
        </div>
        <div className="preview_date">
          <span>{new Date(previewTodo.time).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Preview;
