import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../Home';
import "./Comment.css"


const GetComments = ({contentId , contentType }) => {
    const [comments , setComments] = useState([]);

    useEffect(()=>{
         const handleGetComments = async()=>{
        try{
            const res = await axios.get(`${API_URL}/comment/getComments` , {
                params: {contentId , contentType},
            });
            if(res.data.success){
                setComments(res.data.comments);
            }
            else{
                console.log("Error while fetching")
            }
          }
        catch(err){
                console.error("Error internally while fetching"+err.message);
        }
    }
        handleGetComments();
    }, []);

  return (
    <div className="comment-section">
        <h3 className="comment-title">Spread Your Thoughts</h3>

        {comments.length === 0 ? (
            <p className="no-comments">No comments yet. Be the first to comment!</p>
        ) : (
            comments.map((comment) => (
            <div key={comment._id} className="comment-card">
                <strong className="comment-author">{comment.userId.fullName}</strong>
                <p className="comment-text">{comment.text}</p>
            </div>
            ))
        )}
    </div>
  )
}

export default GetComments
