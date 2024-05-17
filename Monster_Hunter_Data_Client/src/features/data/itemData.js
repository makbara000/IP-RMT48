import { createSlice } from '@reduxjs/toolkit';
import { monsterHunterWorld } from '../../utils/axios';
import Swal from 'sweetalert2'

const initialState = {
  list: [],
  hasMore: true,
  loading: false,
  pageNumber: 0,
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setFetchItems: (state, { payload }) => {
      const start = state.pageNumber === 0 ? 0 : state.pageNumber * 50;
      const newItems = payload.slice(start, start + 50);
      state.list = [...state.list, ...newItems];
      state.hasMore = newItems.length === 50;
      state.loading = false;
      state.pageNumber += 1;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { setFetchItems, setLoading } = itemSlice.actions;

export const fetchItems = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { data } = await monsterHunterWorld.get('/items');
      dispatch(setFetchItems(data));
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'back',
      });
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export default itemSlice.reducer;