import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
             <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
      <div className="descriptionbox-description">
        <p>
          This is a sample product description. You can add more details about the product here.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
