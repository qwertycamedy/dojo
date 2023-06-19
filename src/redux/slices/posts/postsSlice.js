import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loadStatus } from "../../loadStatus";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const postsUrl = "https://6485fc1ca795d24810b78e08.mockapi.io/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const res = await getDocs(collection(db, "posts"));
    const newData = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));

    console.log(res);
    return newData;
  } catch (err) {
    console.log(err);
  }
});

export const submitNewPost = createAsyncThunk(
  "posts/submitNewPost",
  async newPost => {
    try {
      await addDoc(collection(db, "posts"), newPost);
      return newPost;
    } catch (err) {
      console.error("Error adding post: ", err);
    }
  }
);

export const deletePost = createAsyncThunk("posts/deletePost", async postId => {
  await axios.delete(`${postsUrl}/${postId}`);
  return postId;
});

export const likeInc = createAsyncThunk("posts/likeInc", async updPost => {
  const res = await axios.put(`${postsUrl}/${updPost.id}`, updPost);
  return res.data;
});

export const likeDec = createAsyncThunk("posts/likeDec", async updPost => {
  const res = await axios.put(`${postsUrl}/${updPost.id}`, updPost);
  return res.data;
});

const initialState = {
  posts: [],
  postsLoadStatus: "loading",
  likesLoadStatus: "idle",
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
      state.inputValue = '';
      state.photoValue = '';
      state.areaValue = '';
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
      //submit new post
      .addCase(submitNewPost.pending, state => {
        state.postsLoadStatus = loadStatus.LOADING;
      })
      .addCase(submitNewPost.fulfilled, (state, action) => {
        state.postsLoadStatus = loadStatus.SUCCESS;
        state.posts.push(action.payload);
        state.inputValue = "";
        state.photoValue = "";
        state.areaValue = "";
      })
      .addCase(submitNewPost.rejected, state => {
        state.posts = [];
        state.postsLoadStatus = loadStatus.ERROR;
      })
      //delete
      .addCase(deletePost.pending, state => {
        state.postsLoadStatus = loadStatus.LOADING;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.postsLoadStatus = loadStatus.SUCCESS;
        state.posts = state.posts.filter(post => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, state => {
        state.postsLoadStatus = loadStatus.ERROR;
      })
      //likeInc
      .addCase(likeInc.pending, state => {
        state.likesLoadStatus = loadStatus.LOADING;
      })
      .addCase(likeInc.fulfilled, (state, action) => {
        state.likesLoadStatus = loadStatus.SUCCESS;

        state.posts = state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        );
      })
      .addCase(likeInc.rejected, state => {
        state.likesLoadStatus = loadStatus.ERROR;
      })
      //likeDec
      .addCase(likeDec.pending, state => {
        state.likesLoadStatus = loadStatus.LOADING;
      })
      .addCase(likeDec.fulfilled, (state, action) => {
        state.likesLoadStatus = loadStatus.SUCCESS;

        state.posts = state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        );
      })
      .addCase(likeDec.rejected, state => {
        state.likesLoadStatus = loadStatus.ERROR;
      });
  },
});

export const { setIsModalActive, setInputValue, setPhotoValue, setAreaValue } =
  postsSlice.actions;

export const postsSel = state => state.posts;

export default postsSlice.reducer;
