import { createSlice } from '@reduxjs/toolkit';
import { serverSide } from '../../utils/axios';
import Swal from 'sweetalert2'

const initialState = {
  list: [],
  hasMore: true,
  loading: false,
  pageNumber: 0,
};

const armorSlice = createSlice({
  name: 'armors',
  initialState,
  reducers: {
    setFetchArmors: (state, { payload }) => {
      const start = state.pageNumber === 0 ? 0 : state.pageNumber * 50;
      const newArmors = payload.slice(start, start + 50);
      state.list = [...state.list, ...newArmors];
      state.hasMore = newArmors.length === 50;
      state.loading = false;
      state.pageNumber += 1;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { setFetchArmors, setLoading } = armorSlice.actions;

export const fetchArmors = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { data } = await serverSide.get('/armors', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      dispatch(setFetchArmors(data));
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

export default armorSlice.reducer;