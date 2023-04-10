import { createSlice } from '@reduxjs/toolkit';

interface ActionState {
    question: [
        {
            ask: string,
            answer: string
        }
    ]
}

const initialState: ActionState = {
    question: [
        {
            ask: 'First ask',
            answer: 'First answer'
        }
    ]
}

export const createData = createSlice({
    name: 'data',
    initialState,
    reducers: {
        submitQuestion: (state:any, action) => {
            state.question.push(action.payload);
        }
    },
});

export const { submitQuestion } = createData.actions;

export default createData.reducer;
