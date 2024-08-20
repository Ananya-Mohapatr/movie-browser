import {createSlice} from '@reduxjs/toolkit'
const FavSlice = createSlice({
    name:'favourites',
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
          state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            console.log("action",action.payload.id,"state",state.items)
            state.items = state.items.filter(i=>i.id!==action.payload.id);
        },
        clearItems:(state,action)=>{
            state.items.length = 0
        }
    }
});
export const {addItems,removeItem,clearItems} = FavSlice.actions
export default FavSlice.reducer