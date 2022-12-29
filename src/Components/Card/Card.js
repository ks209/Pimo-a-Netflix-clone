import React from 'react';
import './Card.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Card(props) {
  const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;
  const [video, setVideo] = useState('');
  const [isHovered, setIsHovered] = useState('');
  const youtubeUrl = `https://www.youtube.com/embed/`;

  const handleMouseEnter = () => {
    setIsHovered(false);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const fetchURL = async () => {
    try {
      const response = await axios.get(`/movie/${props.id}`, {
        params: {
          append_to_response: 'videos',
        },
      });
      if (response.data.videos.results.length > 0) {
        //setVideo(response.data.video.results[1].key);
        console.log(response)
      }
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    fetchURL();
  }, []);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {!isHovered ? (
        <img className='card_poster' src={imageUrl} alt='poster' />
      ) : (
        <div className='fra'>
        <iframe
          allow='autoplay;picture-in-picture'
          allowFullScreen
          title='YouTube video player'
          width='333.33px'
          height='200px'
          frameBorder='0'
          src={`${youtubeUrl}${video}`}
        ></iframe>
        </div>
      )}
    </div>
  );
}