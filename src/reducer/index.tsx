import {ISetVisibilityAction , TodoAction, } from '../actions';
import { ADD_TODO,SET_VISIBLE_FILTER, TOGGLE_TODO,  } from '../constants';
import { TODO, VisibleFilters } from '../types'
import {combineReducers} from 'redux';

// 处理并返回 state 
const dataList = (state: TODO[]=[], action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          status: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((elem: TODO): TODO =>
        elem.id === action.id ? { ...elem, status: !elem.status } : elem
      )
    default:
      return state
  }
}

const visibilityFilter = (state= VisibleFilters.SHOW_ALL, action: ISetVisibilityAction) => {
  switch (action.type) {
    case SET_VISIBLE_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default combineReducers({
  dataList,
  visibilityFilter
})
