import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

const weaponSlice = createSlice({
    name:"weapons",
    initialState,
    reducers: {
      setFetchWeapons: (state, {payload}) => {
        state.list = payload
      }
    }
})
export const {setFetchWeapons} = weaponSlice.actions
export default weaponSlice.reducer
// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer