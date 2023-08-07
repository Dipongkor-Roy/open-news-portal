import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div>
            <p>Titel: {news.title}</p>
        </div>
    );
};

export default NewsCard;