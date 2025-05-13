import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../Home';
import "./Comment.css"


const GetComments = ({contentId , contentType , role }) => {
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

    
    const handleDeleteComment = async(id)=>{
        try{
            const res = await axios.delete(`${API_URL}/comment/deleteComment/${id}`);
            if(res.data.success){
                alert("Comment deleted!")
            }
            else{
                alert("Try another time")
            }
        }catch(err){
            console.error("Error deleting comment:", err);
            alert("Internal Error occurred");
        }
    }
      
    console.log(role);

  return (
    <div className="comment-section">
        <h3 className="comment-title">Your thoughts are the real trend- Share them below</h3>

        {comments.length === 0 ? (
            <p className="no-comments">No comments yet. Be the first to comment!</p>
        ) : (
            comments.map((comment) => (
            <div key={comment._id} className="comment-card">
                
                <strong className="comment-author">{comment.userId.fullName}</strong>
                <p className="comment-text">{comment.text}</p>
                {role === "vendor" &&(
                     <button className="delete-comment" onClick={() => handleDeleteComment(comment._id)}>X</button>
                )}
                
            </div>
            ))
        )}
    </div>
  )
}

export default GetComments

