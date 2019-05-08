import { ADD_TODO, SET_VISIBLE_FILTER, TOGGLE_TODO, } from '../constants';
import { VisibleFilters } from '../types'

let nextId = 0;

export interface IADDAction {
    id: number;
    text: string;
    type: ADD_TODO;
}

export interface ITOGGLEAction {
    id: number;
    type: TOGGLE_TODO;
}
export type TodoAction = IADDAction | ITOGGLEAction;

export interface ISetVisibilityAction {
    filter: VisibleFilters;
    type: SET_VISIBLE_FILTER,
}


// 增加 state 次数的方法
export const addTodo = (text: string): IADDAction => ({
    id: nextId++,
    text,
    type: ADD_TODO,
})

// 减少 state 次数的方法
export const toggleTodo = (id: number): ITOGGLEAction => ({
    id,
    type: TOGGLE_TODO,
})

export const setVisibilityFilter = (filter: VisibleFilters): ISetVisibilityAction => ({
    filter,
    type: SET_VISIBLE_FILTER,
})

