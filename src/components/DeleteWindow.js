import React from 'react'

const DeleteWindow = ({setDeleteWindow, itemToDelete, todos, setTodos}) => {



    //Function that finally delete the item
    const handleDeleteFinish = () => {
        const deleteItem = todos.filter(item => item.id !== itemToDelete);
        setTodos(deleteItem);
        setTimeout(() => {
            setDeleteWindow(false);
        }, 200)
    }

    return (
        <div className='delete_wrapper'>
            <div className='delete'>
                <div className='question'>Da li ste sigurni da zelite da obrisete ovu stavku?</div>
                <div className='events'>
                    <button onClick={() => setDeleteWindow(false)} className='cancel'>Cancel</button>
                    <button onClick={handleDeleteFinish}  className='del'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteWindow;
