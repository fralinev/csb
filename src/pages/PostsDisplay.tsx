const PostsDisplay = ({ posts }: any) => {
  if (posts.length === 0) {
    return <div>Loading...</div>; // Or any other loading state component
  }
  return (
    <div>
      <div>
        {posts.map((post: any) => {
          return (
            <div key={post._id}>
              <div>{post.title}</div>
              <div>{post.author}</div>
              <div>{post.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PostsDisplay;
