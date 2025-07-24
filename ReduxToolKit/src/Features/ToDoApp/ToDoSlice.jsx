import { createSlice, nanoid } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodo:{
            reducer:(state,action)=>{
                state.push(action.payload);
            },
            prepare:(text)=>{
                return{
                    payload:{
                        id:nanoid(),
                        text:text,
                    }
                }
            }
        },
        deleteTodo:(state,action)=>{
            return state.filter(todo =>todo.id !==action.payload)
        },
    }
})

export const {addTodo,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer