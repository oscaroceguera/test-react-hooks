import React, { useRef, useContext } from "react";
import { Store } from "./store";
import { createNewListitem, deleteNewListItem } from "./actions";
import './app.scss';

function App() {
  const { state, dispatch } = useContext(Store);

  const input = useRef();

  const onFormSubmit = event => {
    event.preventDefault();

    const listItemValue = input.current.value

    if (listItemValue !== "") {
      createNewListitem({
        dispatch,
        payload: { listItemValue: input.current.value }
      });

      input.current.value = ""
    }
  };

   const onDeleteListItem = uuid => {
     deleteNewListItem({
       dispatch,
       payload: {
         uuid
       }
     });
   };

  return (
    <main className="app">
      <h1 className="app__title">To do list</h1>
      <form className="app__form" onSubmit={onFormSubmit}>
        <input type="text" className="app__input" ref={input} />
        <input
          type="submit"
          className="app__input-submit"
          value="Add to list"
        />
      </form>
      <ul className="app__list">
        {state.list.map((listItem, index) => (
          <li className="app__list-item" key={`list-item-${index}`}>
            {listItem.listItemValue}
            <button
              className="app__list-item-delete"
              onClick={() => onDeleteListItem(listItem.uuid)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
