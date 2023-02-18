import React from "react";
import './style.css';

function ItemList({title, description, language, id}) {
    return (
    <div className="item-list">
      <strong>{title} - {language}</strong>
      <p>{description}</p>
      <hr />
    </div>
    );
}

export default ItemList;
