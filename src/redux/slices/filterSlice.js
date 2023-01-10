import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filterID: 0,
  filterData: ['All', 'Game consoles', 'Smartphones', 'TV', 'Notebooks'],
  sortName: {
              localName: 'Popularity', globalName: '-rating'
            },
  sortData: [
              {localName: 'Popularity', globalName: '-rating'},
              {localName: 'Name', globalName: 'name'},
              {localName: 'Price up', globalName: 'price'},
              {localName: 'Price down', globalName: '-price'},
            ],
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action){
      state.filterID = action.payload
    },
    setSort(state, action) {
      state.sortName = action.payload
    }
  }
});


export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;