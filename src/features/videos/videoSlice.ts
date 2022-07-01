import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { collection, getDocs, query } from 'firebase/firestore';
import { RootState, AppThunk } from '../../app/store';
import { addCollectionAndDocuments, db, deleteDocument, getPlaylistAndDocuments } from '../../utils/firebase/firebase'

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
            state.push(action.payload);
            // addCollectionAndDocuments('playlist', action.payload); 
        },
        deleteVideo: (state, action) => {
            // deleteDocument('playlist', 'documentID');
            return state.filter((videoItem) => videoItem.id !== action.payload); 
        },
        getVideo: (state, action) => {
            return state = action.payload;
            // console.log("state: ", action.payload);
        }
    }
})

export const { addVideo, deleteVideo, getVideo } = videoSlice.actions;

export const selectVideo = (state: RootState) => state.video;
export default videoSlice.reducer;