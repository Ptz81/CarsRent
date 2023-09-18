// import { createContacts, deleteContacts, fetchContacts } from "./api";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { createCars, deleteCar, fetchCars } from "./api.jsx";
import { handleFulfilled, handleFulfilledCreate, handleFulfilledDelete, handleFulfilledGet, handlePending, handleRejected, thunkFunction } from "./service.jsx";

const initialState = {
      items: [],
      isLoading: false,
      error: null
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled,handleFulfilledGet)
      .addCase(createCars.fulfilled, handleFulfilledCreate)
      .addCase(deleteCar.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(
        ...thunkFunction('fulfilled')
      ), handleFulfilled
      )
      .addMatcher(isAnyOf(
        ...thunkFunction('pending')
      ), handlePending
      )
      .addMatcher(isAnyOf(
        ...thunkFunction('rejected')
      ), handleRejected
    )
  }
});
export const carsReducer = carsSlice.reducer;