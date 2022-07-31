import React from 'react'

const AddMenuItem = () => {
  return (
    <div>
        <form onSubmit={addItem}>
            <input 
            value={newMenuItem}
            onChange={handleNewMenuItem}/>
            <button type="submit">save</button>
        </form> 
    </div>
  )
}

export default AddMenuItem