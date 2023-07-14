import {useState} from 'react';
// @mui
import Masonry from '@mui/lab/Masonry';
import {Button, Stack, Typography, CircularProgress} from '@mui/material';

import Iconify from '@/components/common/Iconify';
//
import PostItem from './PostItem';

// Redux stuff
import {useGetAllPostsQuery} from "@/redux/services/blogPosts";

// ----------------------------------------------------------------------


export default function BlogCareerPosts() {
    const [page, setPage] = useState(1);
    const {data, error, isLoading} = useGetAllPostsQuery(page)
    if(data) {
        console.log('here are the blog posts', data.docs)
    }
  return (
      <>
          {error ? (<Typography variant="body1" color="red">There has been an error</Typography>) : isLoading ? (<CircularProgress/>) : data ? (<>
              <Masonry
                  columns={{ xs: 1, sm: 2 }}
                  spacing={4}
                  defaultColumns={1}
                  defaultSpacing={4}
                  sx={{
                      mx: { xs: 'unset', sm: 0 },
                  }}
              >
                  {data.docs.map((post, index) => {
                      // @ts-ignore
                      return <PostItem key={post.id} post={post} index={index} />
                  } )}
              </Masonry>

              <Stack
                  alignItems="center"
                  sx={{
                      pt: 5,
                      pb: { xs: 10, md: 0 },
                  }}
              >
                  <Button
                      size="large"
                      color="inherit"
                      variant="outlined"
                      endIcon={<Iconify icon="carbon:arrow-down" />}
                  >
                      Load more
                  </Button>

              </Stack>
          </>) : null }
      </>
  );
}
