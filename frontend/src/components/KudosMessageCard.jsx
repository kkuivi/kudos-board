import React from 'react';
import './KudosMessageCard.css';

const KudosMessageCard = ({ title, message, image, upvotes, onUpvote, onDownvote, onDelete }) => {
  return (
    <div className="kudos-message-card">
      <h2 className="kudos-message-title">{title}</h2>
      <div className="kudos-message-subtitle">{message}</div>
      <img src={image} alt={title} className="kudos-message-image" />
      <div className="kudos-message-card-bottom">
        <div className="kudos-message-votes">
          <button className="kudos-message-upvote" onClick={onUpvote}>▲</button>
          <span className="kudos-message-vote-count">{upvotes}</span>
          <button className="kudos-message-downvote" onClick={onDownvote}>▼</button>
        </div>
        <button className="kudos-message-delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default KudosMessageCard; 