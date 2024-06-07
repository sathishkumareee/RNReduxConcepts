import { createSlice } from '@reduxjs/toolkit'

interface Task {
    id: number;
    // Define other properties of your task here
    task: string;
    taskDesc: string;
}

interface TaskState {
    tasklist: Task[];
    selectedtask: Task | null | {};
}

const initialState: TaskState = {
    tasklist: [],
    selectedtask: {}
}

export const TaskSlice = createSlice({
    name: 'taskslice',
    initialState: initialState,
    reducers: {
        addtask: (state, action) => {
            const id = Math.random() * 100
            const task = { ...action.payload, id }
            state.tasklist.push(task)
        },
        removetask:(state,action)=>{
            state.tasklist=state.tasklist.filter((data)=>data.id !==action.payload.id)
        },
        updatetask:(state,action)=>{
            state.tasklist=state.tasklist.map((data)=> data.id ===action.payload.id ? action.payload:data)
        },
        setselectedtask:(state,action)=>{
            state.selectedtask=action.payload
        }
    }
})

export const { addtask,removetask,updatetask,setselectedtask } = TaskSlice.actions
export default TaskSlice.reducer
