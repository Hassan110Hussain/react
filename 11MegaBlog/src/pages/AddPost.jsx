import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-10">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Create New Post</h1>
          <p className="text-slate-400 mt-1">Share your thoughts with the world</p>
        </div>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
