import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 1
}

const count = createSlice({
    name: 'count',
    initialState,
    reducers: {
        addCount(state) {
            state.count += 1
        }
    }
});

export const { addCount } = count.actions

export default count.reducer