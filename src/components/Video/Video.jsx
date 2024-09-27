import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import './Video.css'
import ReactPlayer from 'react-player'
import FallbackSpinner from '../FallbackSpinner';


export default function Video(props) {
    const {video} = props;
    const [hasLoaded, setHasLoaded] = React.useState(false)
    return (
      <div className="video--parent">
       <h1 className="video--title">'{video.title}'</h1>
       <div className="videoContainer">
          <ReactPlayer controls className="video" url={video.url}/>
        </div>
      </div>
    );
}

Video.propTypes = {
  embedID: PropTypes.object
};