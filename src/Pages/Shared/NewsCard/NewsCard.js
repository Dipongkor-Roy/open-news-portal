import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import {HiBookmark,HiShare} from "react-icons/hi"
import {FaStar,FaEye} from "react-icons/fa"



const NewsCard = ({news}) => {
    const {_id,title,image_url,total_view,author,details,rating}=news;
    return (
        <Card className=" mb-3">
        <Card.Header className='d-flex align-items-center justify-content-between'>
            <div className='d-flex'>
               <Image roundedCircle className='me-2' src={author?.img} style={{height:'60px'}}></Image>
              <div>
              <p className='mb-0'>{author.name}</p>
               <p >{author?.published_date}</p>
              </div>
            </div>
            <div>
            <HiBookmark/>
            <HiShare/>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > '250'?
            <p>{details.slice(0,250)+'...'}<Link to={`/news/${_id}`}>Read More</Link></p>
            :
            <p>{details}</p>
            }
          </Card.Text>
         
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between">
          <div className='d-flex align-items-center' >
          <FaStar className='text-warning me-1'></FaStar>
          <span>{rating.number}</span>
          </div>
          <div>
            <FaEye className='me-1'></FaEye>
            <span>{total_view}</span>

          </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsCard;