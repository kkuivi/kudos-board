import React from "react";
import "./KudosBoardCard.css";

const KudosBoardCard = ({ image, title, description, category, onViewBoard, onDelete }) => {
  return (
    <div className="kudos-card">
      <img src={image} alt={title} className="kudos-card-image" />
      <h2 className="kudos-card-title">{title}</h2>
      <div className="kudos-card-description">{description}</div>
      <div className="kudos-card-category">{category}</div>
      <div className="kudos-card-buttons">
        <button className="kudos-btn kudos-btn-outline" onClick={onViewBoard}>View Board</button>
        <button className="kudos-btn kudos-btn-filled" onClick={onDelete}>Delete Board</button>
      </div>
    </div>
  );
};

export default KudosBoardCard; 