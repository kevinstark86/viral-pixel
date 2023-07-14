import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

type Categories = {
    id: string,
    name: string,
}

type CategoryData = {
    docs: Categories[]
}

type Posts = {
    docs: [];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number;
    page: number;
    pagingCounter: number;
    prevPage: null | boolean | number;
    totalDocs: number;
    totalPages: number;
};

type Tags = {
    id: string;
    name: string;
};

type TagsData = {
    docs: Tags[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: null | boolean | number;
    nextPage: null | boolean | number;
};

export const blogPostsApi = createApi({
    reducerPath: 'blogPostsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://payload-cms-test-production.up.railway.app/api/'}),
    endpoints: (builder) => ({
        getAllPosts: builder.query<Posts, number>({
            query: (page = 1) => `posts?limit=6&page=${page}`,
        }),
        getPostsByTag: builder.query<Posts, string>({
            query: (tag) => `posts?where[tags.name][equals]=${tag}&limit=6&page=1`,
        }),
        getAllTags: builder.query<TagsData, void>({
            query: () => `tags`,
        }),
        getAllCategories: builder.query<CategoryData, void>({
            query: () => `categories`
        }),
        getPopularGuides: builder.query<Posts, void>({
            query: () => `posts?where[tags.name][equals]=Guides&limit=4&page=1`
        })
    })
})

export const {useGetAllPostsQuery, useGetPostsByTagQuery, useGetAllTagsQuery, useGetAllCategoriesQuery, useGetPopularGuidesQuery} = blogPostsApi;