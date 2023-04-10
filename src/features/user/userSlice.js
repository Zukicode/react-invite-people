import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/api';

export const getUsers = createAsyncThunk('user/getUsers', async value => {
	const { data } = await axios.get(BASE_URL);
	return data.data;
});

const initialState = {
	users: [],
	invited: [],
	isSuccess: false,
	search: '',
	status: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		changeOnPress: (state, { payload }) => {
			state.search = payload;
		},
		invitePeople: (state, { payload }) => {
			state.invited.push(payload);
		},
		removePeople: (state, { payload }) => {
			state.invited = payload;
		},
		sendSuccess: (state, { payload }) => {
			state.isSuccess = payload;
		},
	},
	extraReducers: {
		[getUsers.pending]: state => {
			state.status = 'loading';
		},
		[getUsers.fulfilled]: (state, { payload }) => {
			state.status = 'succses';
			state.users = payload;
		},
		[getUsers.rejected]: state => {
			state.status = 'failed';
		},
	},
});

export const { changeOnPress, invitePeople, removePeople, sendSuccess } =
	userSlice.actions;

export default userSlice.reducer;
