import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/configure";
import { Container, PostForm } from "../components";
import { useState, useEffect } from "react";

function EditPost() {
    const [posts, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

  return (
    <div>EditPost</div>
  )
}

export default EditPost