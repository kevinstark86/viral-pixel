import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {blogPostsApi} from "@/redux/services/blogPosts";

export const store = configureStore({reducer: {
    [blogPostsApi.reducerPath]: blogPostsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogPostsApi.middleware)
})