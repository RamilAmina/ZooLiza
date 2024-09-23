import PostCard from "./PostCard";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingPost from "./LoadingPost";
import Error from "./Erroe";

function Postlist() {

const [posts, setPosts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);

useEffect (() => {
    async function fetchPosts() {
        try {
            setIsLoading(true);
            const response = await axios.get('https://d2778d56a9e0c274.mokky.dev/post');
            setPosts(response.data);
        } catch(error) {
            setIsError(true);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    fetchPosts();
}, []);

   if  (isError) {
    return <Error />
   }

    return (
        <div class="all-news-block" >
        {isLoading ? (<LoadingPost />): (
            <>
              {posts.map((post)=> (
                   <PostCard key={post.id} post={post} />
                ))}
            </>
        )}
         
        </div>
    );
}

export default Postlist;