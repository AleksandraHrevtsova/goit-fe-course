import {
  TODOS_ADD,
  TODOS_REMOVE,
  TODOS_TOGGLE_COMPLETE,
} from '../../utils/constants';

const initialTodos = [
  {
    title: 'todo 1',
    description: 'descr',
    id: 'adsasdad',
    isCompleted: false,
    cost: 40.5,
  },
  {
    title: 'todo 2',
    description: 'deasdasdasdscr',
    id: 'aoiqwsdad',
    isCompleted: true,
    cost: 77.3,
  },
];

const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case TODOS_ADD:
      return [...state, action.payload];
    case TODOS_REMOVE:
      return state.filter(el => el.id !== action.payload);
    case TODOS_TOGGLE_COMPLETE:
      return state.map(el => {
        if (el.id === action.payload) {
          return {
            ...el,
            isCompleted: !el.isCompleted,
          };
        }
        return el;
      });
    default:
      return state;
  }
};

export default todosReducer;
