import React, { useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../constants";

function PostDetails() {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCurrentPost = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if (response.ok) {
                    const json = await response.json();
                    setPost(json);
                } else {
                    throw new Error("HTTP error " + response.status);
                }
            } catch (e) {
                console.log("An error occured:", e);
            }
        }
        fetchCurrentPost();
    }, [id]);

    if (!post) return <h2>Loading...</h2>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p><strong>Description:{post.body}</strong></p>
            <Link to="/">Back to Posts</Link>
        </div>
    );
}

export default PostDetails;