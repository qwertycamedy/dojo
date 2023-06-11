import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const postsUrl = "https://6485fc1ca795d24810b78e08.mockapi.io/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios.get(postsUrl);
  return res.data;
});

export const submitNewPost = createAsyncThunk("posts/submitNewPost", async newPost => {
  const res = await axios.post(postsUrl, newPost);
  return res.data
});

export const loadStatus = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const initialState = {
  posts: [],
  postsLoadStatus: "loading",
  isModalActive: false,
  inputValue: "",
  photoValue: "",
  areaValue: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setIsModalActive: (state, action) => {
      state.isModalActive = action.payload;
    },

    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },

    setPhotoValue: (state, action) => {
      state.photoValue = action.payload;
    },

    setAreaValue: (state, action) => {
      state.areaValue = action.payload;
    },

    removePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },

    likeInc: (state, action) => {
      const findPost = state.posts.find(post => post.id === action.payload);

      if (findPost) {
        findPost.likesCount++;
        findPost.isLiked = true;
      }
    },

    likeDec: (state, action) => {
      const findPost = state.posts.find(post => post.id === action.payload);

      if (findPost) {
        findPost.likesCount--;
        findPost.isLiked = false;
      }
    },
  },

  extraReducers: builder => {
    builder
      //fetch
      .addCase(fetchPosts.pending, state => {
        state.postsLoadStatus = loadStatus.LOADING;
        state.posts = [];
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.postsLoadStatus = loadStatus.SUCCESS;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, state => {
        state.posts = [];
        state.postsLoadStatus = loadStatus.ERROR;
      })
      //submit
      .addCase(submitNewPost.pending, state => {
        state.postsLoadStatus = loadStatus.LOADING;
      })
      .addCase(submitNewPost.fulfilled, (state, action) => {
        state.postsLoadStatus = loadStatus.SUCCESS;
        state.posts.push(action.payload);
        state.inputValue = "";
        state.photoValue = "";
        state.areaValue = "";
        console.log(state.posts, action.payload);
      })
      .addCase(submitNewPost.rejected, state => {
        state.posts = [];
        state.postsLoadStatus = loadStatus.ERROR;
      });
  },
});

export const {
  likeInc,
  likeDec,
  setIsModalActive,
  setInputValue,
  setPhotoValue,
  setAreaValue,
  removePost,
} = postsSlice.actions;

export const postsSel = state => state.posts;

export default postsSlice.reducer;
