import { combineReducers } from 'redux';
import counterReducer from '../pages/HomePage/counterReducer';
import todosReducer from '../pages/TodosPage/todosReducer';
import cartReducer from '../components/Cart/cartReducer';

const rootReducers = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  cart: cartReducer,
});

export default rootReducers;
