import React from 'react'
import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthor';
import { selectAllPosts } from './postsSlice';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';

const PostsList = () => {
  const posts = useSelector(selectAllPosts); 
  const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map(post => {
    return <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.slice(0, 100)}</p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
    </article>
  });
  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}
export default PostsList;
