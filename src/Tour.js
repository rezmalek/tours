import React, { useState } from 'react';

function Tour({ id, name, image, info, price, removeTour }) {
   
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>{info}</p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
