import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AddCommentFormSchema} from 'features/AddCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
};
export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setTest (state, action:PayloadAction<string>) {
            state.text = action.payload;
        }
    },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
