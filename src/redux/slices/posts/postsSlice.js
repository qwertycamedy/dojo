import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "First Post!",
      img: "https://indiegamereviewer.com/wp-content/uploads/2008/10/work-731198_960_720.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni suscipit atque excepturi veritatis iure repellendus dolor, voluptas ipsam, explicabo, maxime quasi perspiciatis earum ullam facilis maiores quae beatae eum dolore.",
      author: "Qwerty Camedy",
      likesCount: 0,
      isLiked: false,
    },
    {
      id: 2,
      title: "",
      img: "",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni suscipit atque excepturi veritatis iure repellendus dolor, voluptas ipsam, explicabo, maxime.",
      author: "Qwerty Camedy",
      likesCount: 10,
      isLiked: false,
    },
    {
      id: 3,
      title: "",
      img: "https://assetsio.reedpopcdn.com/hades-2-melinoe-and-hecate.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      text: "",
      author: "Qwerty Camedy",
      likesCount: 17341,
      isLiked: false,
    },
  ],

  isModalActive: false,
  inputValue: "",
  photoValue: '',
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

    createNewPost: (state, action) => {
      state.posts.push(action.payload);
      state.inputValue = "";
      state.photoValue = '';
      state.areaValue = "";
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
});

export const {
  likeInc,
  likeDec,
  setIsModalActive,
  setInputValue,
  setPhotoValue,
  setAreaValue,
  createNewPost,
  removePost,
} = postsSlice.actions;

export const postsSel = state => state.posts;

export default postsSlice.reducer;
