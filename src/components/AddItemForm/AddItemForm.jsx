import { useDispatch } from 'react-redux';
import { useState } from 'react';
//import for functionality

function AddItemForm() {

    //hold new item in state
    const [newItem, setNewItem] = useState({
        description: '',
        image_url: '',
    });

    //function to send new item to the saga, then to the reducer
    const addNewItem = (event) => {
        event.preventDefault();
        dispatchEvent({ type: 'ADD_ITEM', payload: newItem });
        console.log(`clicked, added a new item`);
    }

    //ADD AN ITEM FORM 

    return (<>
        <form onSubmit={addNewItem}>
            <input
                placeholder="description"
                type="text"
                value={newItem.description}
                onChange={(event) => handlePropertyChange(event, 'description')}
            > </input>

        </form>

    </>
    )
}
export default AddItemForm;