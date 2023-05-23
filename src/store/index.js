import {createSlice, configureStore} from '@reduxjs/toolkit';

const formSlice = createSlice({
    name:'forms',
    initialState: [],
    reducers:{
        addFinancialInfo: (state,action)=>{ 
            state.push(action.payload);
        },
    },
});

const form2Slice = createSlice({
    name:'form2',
    initialState: [],
    reducers:{
        addTradingInfo: (state,action)=>{
            
            state.push(action.payload);
        },
    },
});
const store=configureStore({
    reducer:{
      financial: formSlice.reducer,
      trading: form2Slice.reducer,
    } 
  })
  
export const {addTradingInfo} = form2Slice.actions;


export const {addFinancialInfo} = formSlice.actions;
export default store;

