import { createSlice } from '@reduxjs/toolkit';
import { serverSide } from '../../utils/axios';
import Swal from 'sweetalert2'

const initialState = {
  list: [],
  hasMore: true,
  loading: false,
  pageNumber: 0,
};

const weaponSlice = createSlice({
  name: 'weapons',
  initialState,
  reducers: {
    setFetchWeapons: (state, { payload }) => {
      const start = state.pageNumber === 0 ? 0 : state.pageNumber * 50;
      const newWeapons = payload.slice(start, start + 50);
      state.list = [...state.list, ...newWeapons];
      state.hasMore = newWeapons.length === 50;
      state.loading = false;
      state.pageNumber += 1;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { setFetchWeapons, setLoading } = weaponSlice.actions;

export const fetchWeapons = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { data } = await serverSide.get('/weapons', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      dispatch(setFetchWeapons(data));
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

export default weaponSlice.reducer;