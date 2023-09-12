//액션타입, 액션생성함수, 리듀서
//1.액션타입
//할일 추가, 할일 삭제, 할 일 값 변경
const ADD_TODO = 'todos/ADD_TODO'
const DELETTE_TODO = 'todos/DELETTE_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

//2.액션생성함수
let nextId = 1; //todo데이터에서 사용할 고유 ID
export const addtodo = text => ({
    type: ADD_TODO,
    todo: {
        text: text,
        id: nextId++,
        isDone: false
    }
})

export const deletetodo = id => ({
    type: DELETTE_TODO,
    id: id
})

export const toggletodo = id => ({
    type: TOGGLE_TODO,
    id: id
})

//초기상태 선언
const initialState = [];

//3.리듀서
export default function todos(state=initialState, action) {
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                action.todo
            ];
            case DELETTE_TODO:
            return state.filter(todo => todo.id !== action.id);
            case TOGGLE_TODO:
                //배열요서의 todo가 가지고있는 id와 액션객체가 가지고 있는 id가 일치하는지
                //일치하면 isDone을 반전시키고 리턴, 일치하지 않으면 todo 리턴
                return state.map(todo => todo.id ? {...todo, isDone: !todo.isDone} : todo);
            default:
                return state;
    }
}