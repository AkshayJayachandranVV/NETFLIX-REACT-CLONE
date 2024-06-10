import React,{useEffect, useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,Api_Key} from '../../Constants/Constants'
import YouTube from 'react-youtube'
function RowPost(props) {
   const[movie,setMovie]=useState([])
   const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
                console.log(response.data)
                setMovie(response.data.results)
    }).catch(err=>{
      // alert("Network Error")
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Api_Key}`)
    .then((response)=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          movie.map((obj)=>
            <img onClick={()=>{
              handleMovie(obj.id)
            }} className={props.isSmall ? 'smallPoster' : 'img'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
          )
        }
      </div>
      {
        urlId && <YouTube opts={opts} videoId={urlId.key} />
      }
    </div>
  )
}

export default RowPost
