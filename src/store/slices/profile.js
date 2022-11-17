import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '张三',
    salary: 100
}

const profile = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addSalary(state) {
            state.salary += 10
        }
    }
});

export const { addSalary } = profile.actions

export default profile.reducer