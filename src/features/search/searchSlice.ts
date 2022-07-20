import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type SearchListProps = {
    [x: string]: any;
    id: string;
    description: string;
    image: string;
}

const initialState: Array<SearchListProps> = [

]

export const searchSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addSearchList: (state, action) => {
            state.push(action.payload);
        },
        cleanState: (state, action) => {
            return state = [];
        }
    }
})

export const { addSearchList, cleanState } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.list;
export default searchSlice.reducer;
