import React from 'react';
import Post from '../Posts/Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

function Posts({ setCurrentId }) {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  return (
    <>
      {posts.length === 0 ? (
        <h2>No Posts</h2>
      ) : (
        <>
          <Grid
            className={classes.mainContainer}
            container
            alignItems="stretch"
            spacing={3}
          >
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
    // !posts.length ? <CircularProgress /> : (

    // )
  );
}

export default Posts;
