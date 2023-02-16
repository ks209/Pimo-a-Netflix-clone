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
    setIsHovered(true);
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
        setVideo(response.data.videos.results[0].key);
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
      ) : (<div className='t'>
        <div className='fra'>
        <iframe
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          mozallowfullscreen="true"
          title='YouTube video player'
          frameBorder='0'
          width='533.33px'
          webkitallowfullscreen="true"
          height='300px'
          modestbranding='1'
          controls='0'
          src={`${youtubeUrl}${video}?rel=0&amp%3Bcontrols=0&amp&amp%3Bshowinfo=0&amp%3Bmodestbranding=0&ampautoplay=1`}
          
        ></iframe>
        </div>
        <img className='card_posters' src={imageUrl} alt='poster' />
        </div>
      )}
    </div>
  );
}