const PostsDisplay = ({ posts }: any) => {
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
