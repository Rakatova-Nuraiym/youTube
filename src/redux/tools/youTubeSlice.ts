import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Todo from "../../type";
import axios from "axios";

interface TodoPost {
  name: string;
  link: string;
  type: string;
}

const initialState: Todo = {
  todo: [],
  type: "all",
};

const url =
  "https://api.elchocrud.pro/api/v1/a1c772f8a537d4bf192a67189b5a87e0/youtube";

export const getVideo = createAsyncThunk("todo/getVideo", async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// !
export const postVideo = createAsyncThunk(
  "todo/postVideo",
  async (newData: TodoPost) => {
    console.log("post", newData);

    try {
      const response = await axios.post(url, newData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
// !
export const deleteVideo = createAsyncThunk(
  "todo/deleteVideo",
  async (_id: number) => {
    try {
      const response = await axios.delete(`${url}/${_id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
// !
export const editVideo = createAsyncThunk(
  "todo/editVideo",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async ({ newData, _id }: any) => {
    try {
      const response = await axios.patch(`${url}/${_id}`, newData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
// !
const youTubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
    filtered: (state, action: PayloadAction<string>) => {
      // return console.log(action.payload);
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVideo.fulfilled, (state, action) => {
        state.todo = action.payload;
      })
      .addCase(postVideo.fulfilled, (state, action) => {
        state.todo = action.payload;
      })
      .addCase(deleteVideo.fulfilled, (state, action) => {
        state.todo = action.payload;
      })
      .addCase(editVideo.fulfilled, (state, action) => {
        state.todo = action.payload;
      });
  },
});

export default youTubeSlice;
export const { filtered } = youTubeSlice.actions;
