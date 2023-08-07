import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const detailsNews=useLoaderData();
    console.log(detailsNews)
    const {details,image_url,title,category_id}=detailsNews
    return (
        <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
         <Link to={`/category/${category_id}`}>
         <Button variant="primary">Go to Categories</Button>
         </Link>
        </Card.Body>
      </Card>
  
    );
};

export default News;