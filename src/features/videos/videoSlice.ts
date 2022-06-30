import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

type PlaylistProps = {
    id: string;
    description: string;
    url: string;
}

const initialState: Array<PlaylistProps> = [
    // {
    //     id: string;
    //     description: "Funny CATS can make you CRY OUT OF LAUGHTE",
    //     url: "https://www.youtube.com/watch?v=21oQ4X2NxIs"
    // },
    // {
    //     description: "Funny CATS can make you CRY OUT OF LAUGHTE",
    //     url: "https://www.youtube.com/watch?v=21oQ4X2NxIs"
    // },
    // {
    //     description: "Funny CATS can make you CRY OUT OF LAUGHTE",
    //     url: "https://www.youtube.com/watch?v=21oQ4X2NxIs"
    // },
]

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        addVideo: (state, action) => {
            state.push(action.payload);
        },
        deleteVideo: (state, action) => {
            return state.filter((videoItem) => videoItem.id !== action.payload); 
        }
    }
})

export const { addVideo, deleteVideo } = videoSlice.actions;

export const selectVideo = (state: RootState) => state.video;
export default videoSlice.reducer;