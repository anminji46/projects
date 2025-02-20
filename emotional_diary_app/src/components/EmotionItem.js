import React from 'react';
import './EmotionItem.scss';

const EmotionItem = ({id, img, name, onClick, isSelected}) => {
  const handleonClick = () => {
    onClick(id);
  };

  return (
    <div 
      className={[
        'EmotionItem', 
        isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`,
      ].join(" ")}
      onClick={handleonClick}
    >
      <img alt={`emotion${id}`} src={img} />
      <span>{name}</span>
    </div>
  )
}

export default React.memo(EmotionItem);
