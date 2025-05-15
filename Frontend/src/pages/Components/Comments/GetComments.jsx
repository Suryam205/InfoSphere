import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../config/api';
import './Comment.css';

const AddComment = ({ userId, contentId, contentType, onCommentAdded }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post(`${API_URL}/comment/addComment`, {
        userId,
        contentId,
        contentType,
        text,
      });

      if (res.data.success) {
        setText('');
        onCommentAdded(); // Notify parent to refresh comments
      } else {
        setError(res.data.message || 'Failed to post comment');
      }
    } catch (err) {
      setError('Something went wrong: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <textarea
          className="comment-textarea"
          placeholder="Place your comment here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="3"
          required
        />
        <button type="submit" className="comment-button" disabled={loading}>
          {loading ? 'Posting...' : 'Post Comment'}
        </button>
        {error && <p className="comment-error">{error}</p>}
      </form>
    </div>
  );
};

export default AddComment;


