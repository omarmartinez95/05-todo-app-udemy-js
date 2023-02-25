import { Todo } from '../todos/models/todo.model';

// Implementacion del store.

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma.'),
        new Todo('Piedra del infinito.'),
        new Todo('Piedra del tiempo.'),
        new Todo('Piedra perdida.')
    ],
    filter: Filters.All
}

// Va inicializarlo y cargar la data que esta.
const initStore = () => {
    console.log(state);
    console.log('InitStore.');
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done)
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)
        default:
            throw new Error (`Option ${ } isn't valid`);
    }
}


/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if(!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));
}

/**
 * 
 * @param {String} todoId identificador unico del TODO 
 */
const toggleTodo = ( todoId ) =>{
    state.todos = state.todos.map( todo => {
        if(todo.id === todoId ){
            todo.done = !todo.done;
        }
        return todo;
    });
}

/**
 * 
 * @param {String} todoId identificador unico del TODO 
 */
const deleteTodo = (todoId) => {
   state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = ()=> {
    state.todos = state.todos.filter(todo => todo.done);
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All)=>{
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter
}