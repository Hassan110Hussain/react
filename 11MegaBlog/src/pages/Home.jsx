import appwriteService from "../appwrite/configure";
import { Container, PostCard } from "../components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)
  const authStatus = useSelector((state) => state.auth.status)

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) setPosts(posts.documents)
      setLoading(false)
    })
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <span className="text-4xl">✍️</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">No posts yet</h1>
          <p className="text-slate-400 mb-8">
            {authStatus
              ? "Be the first to share something. Create your first post now."
              : "Sign in to read and create posts."}
          </p>
          {authStatus ? (
            <Link
              to="/add-post"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-colors duration-200"
            >
              Create Post
            </Link>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-colors duration-200"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <Container>
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">Latest Posts</h1>
          <p className="text-slate-400 mt-1">{posts.length} {posts.length === 1 ? 'post' : 'posts'} published</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home;
