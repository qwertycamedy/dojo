import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadStatus } from "../../loadStatus";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const res = await getDocs(collection(db, "posts"));
    const newData = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));

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
  try {
    const postRef = doc(db, "posts", postId);
    await deleteDoc(postRef);
    return postId;
  } catch (err) {
    console.log(`ошибка удаления поста: ${err}`);
  }
});

export const toggleLike = createAsyncThunk("posts/likeInc", async updPost => {
  try {
    const postRef = doc(db, "posts", updPost.id);
    console.log(postRef, updPost)

    await updateDoc(postRef, updPost)
    return updPost;
  } catch (err) {
    console.log(`ошибка лайка: ${err}`);
  }
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
      state.inputValue = "";
      state.photoValue = "";
      state.areaValue = "";
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
      //toggleLike
      .addCase(toggleLike.pending, state => {
        state.likesLoadStatus = loadStatus.LOADING;
      })
      .addCase(toggleLike.fulfilled, (state, action) => {
        state.likesLoadStatus = loadStatus.SUCCESS;

        state.posts = state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        );
      })
      .addCase(toggleLike.rejected, state => {
        state.likesLoadStatus = loadStatus.ERROR;
      })
  },
});

export const { setIsModalActive, setInputValue, setPhotoValue, setAreaValue } =
  postsSlice.actions;

export const postsSel = state => state.posts;

export default postsSlice.reducer;
