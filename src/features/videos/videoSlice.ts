import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { collection, getDocs, query } from 'firebase/firestore';
import { RootState, AppThunk } from '../../app/store';
import { deleteDocument } from '../../utils/firebase/firebase';

type PlaylistProps = {
    id: string;
    description: string;
    // url: string;
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
            if(state.some(video => video.id === action.payload.id)){
                console.log("no puede añadir 2 veces");
            }else {
                state.push(action.payload);
            }
        },
        deleteVideo: (state, action) => {
            console.log("payload delete: ", action.payload);
            return state.filter((videoItem) => videoItem.id !== action.payload); 
        },
        getVideo: (state, action) => {
            return state = action.payload;
        }
    }
})

export const { addVideo, deleteVideo, getVideo } = videoSlice.actions;

export const selectVideo = (state: RootState) => state.video;
export default videoSlice.reducer;