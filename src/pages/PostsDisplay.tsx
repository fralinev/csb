const PostsDisplay = ({ posts }: any) => {
  return (
    <div>
      <div>
        {posts.map((post: any) => {
          return (
            <div>
              <div>{post._id}</div>
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
