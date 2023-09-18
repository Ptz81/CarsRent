import { createSelector } from "@reduxjs/toolkit";

export const getCars = state => state.cars.items;
export const getFilter = state => state.filter;
export const getError = state => state.cars.error;
export const getIsLoading = state => state.cars.isLoading;

export const filteredCars = createSelector(
  [getCars, getFilter],
  (cars, filter) => {
    return cars.filter(({ model }) =>
      model.toLowerCase().includes(filter.toLowerCase())
    );
  }
);