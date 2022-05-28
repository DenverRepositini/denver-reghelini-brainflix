import React from 'react'
import './Video.scss'
import data from '../../Data/video-details.json'


const Video = (props) => {
    return (
        <>
            <div className='container'>
                <video className='media' poster={props.poster} controls src=""></video>               
            </div> 
        </>
    );
}

export default Video;