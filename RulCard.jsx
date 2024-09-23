import RulPostCard from "./RulPostCard copy";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingPost from "./LoadingPost";
import Error from "./Erroe";

function RulCard() {

const [ruls, setRuls] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);

useEffect (() => {
    async function fetchRuls() {
        try {
            setIsLoading(true);
            const response = await axios.get('https://d2778d56a9e0c274.mokky.dev/rulet');
            setRuls(response.data);
        } catch(error) {
            setIsError(true);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    fetchRuls();
}, []);

   if  (isError) {
    return <Error />
   }

    return (
        <div class="all-news-block" >
        {isLoading ? (<LoadingPost />): (
            <>
              {ruls.map((rul)=> (
                   <RulPostCard key={rul.id} post={rul} />
                ))}
            </>
        )}
         
        </div>
    );
}

export default RulCard;