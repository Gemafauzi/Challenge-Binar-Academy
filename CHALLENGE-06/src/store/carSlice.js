import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCars = createAsyncThunk('cars/getCars', async (_, { errorValue }) => {
    try{
        const response = await axios.get('https://rent-cars-api.herokuapp.com/admin/car')
        return response;
    } catch(err){
        return errorValue(
            'Opps there seems to be an error'
        )
    }

})

export const getCar = createAsyncThunk('car/getCar', async (id, {errorValue}) => {
    try{
        const response = await axios.get(`https://rent-cars-api.herokuapp.com/admin/car/${id}`)
        return response;
    } catch(err){
        return errorValue(
            'Opps there seems to be an error'
        )
    }
})

export const carSlice = createSlice({
  name: 'car',
  initialState: {
    cars: [],
    car:[],
    datas:{
        'jumlahPenumpang' : '4 orang',
        'typeKendaraan' : 'Manual',
        'tahunKendaraan' : '2019'
    },
    carsState : 'fill',
    carState : 'fill',
    error : null
},
reducers:{},
extraReducers:{
    [getCars.pending]: (state) => {
        state.statusCars = 'loading'
    },
    [getCars.fulfilled]: (state, action) => {
        state.cars = action.payload.data
        state.statusCars = 'succeeded'
    },
    [getCars.rejected]: (state, action) =>{
        console.log(action.error.message);
    },
    [getCar.pending]: (state) => {
        state.statusCar = 'loading'
    },
    [getCar.fulfilled]: (state, action) => {
        state.car = action.payload.data
        state.statusCar = 'succeeded'
    },
    [getCar.rejected]: (state, action) =>{
        console.log(action.error.message);
    },
},
});

export default carSlice.reducer