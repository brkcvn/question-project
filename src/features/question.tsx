import { createSlice } from '@reduxjs/toolkit';

interface ActionState {
    ask: string,
    answer: string
}

const initialState: ActionState = {
    ask: 'First ask',
    answer: 'First answer'
}

export const createData = createSlice({
    name: 'data',
    initialState,
    reducers: {
       
    },
});

// export const { Submit, percantageActions, inpuChangeAction } = createData.actions;

export default createData.reducer;
