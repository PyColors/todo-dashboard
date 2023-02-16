import { createSlice } from '@reduxjs/toolkit';


// Slice Object
///////////////////////////////////////

export const todosSlice = createSlice({
  name: "name",
  initialState: {
    entries: [
      { text: "Call my colleagues", isDone: false },
      { text: "Book my holiday", isDone: true },
      { text: "Make some music", isDone: false }
    ],
    doneEntries: []
  },
  reducers: {
    addTodoEntry: (state, action) => {
      state.entries.push({ text: action.payload, isDone: false })
    },
    removeEntry: (state, action) => {
      state.entries.splice(action.payload, 1);
    },
    toggleEntryDone: (state, action) => {
      state.entries[action.payload].isDone = !state.entries[action.payload].isDone;
    }
  }
});

export const { addTodoEntry, removeEntry, toggleEntryDone } = todosSlice.actions;
export default todosSlice.reducer;


// Selectors
///////////////////////////////////////
// export const selectTodos = (state) => state.todo;

// export const selectTodos = (state) => state.todo;
