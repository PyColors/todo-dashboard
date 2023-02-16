import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '../features/todos/todosSlice';
import quoteReducer from '../features/quote/quoteSlice';

export default configureStore({
  reducer: {
    todo: todoReducer,
    quote: quoteReducer
  }
})
