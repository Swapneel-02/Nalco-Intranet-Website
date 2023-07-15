import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import axios from 'axios';
import { useState } from 'react';

const Flash = () => {
  const[data,setdata]=useState([]);
  const getcontent=()=>{
    axios.get("https://newsdata.io/api/1/news?apikey=pub_103768b7e3375a6b6778cce86a9b1348bbc37&q=india")
    .then((res)=>{
      setdata(res.data.results);
    })
    // axios.get("https://newsapi.org/v2/everything?q=tesla&from="+a+"&sortBy=publishedAt&apiKey=d24d19a86f0948b3ac5fb71ee3cb004f")
    // .then((res)=>{
    //   setdata(res.data.articles);
    // })
  }
  useEffect(()=>{
getcontent();
  },[])
  return (
    <>
    <div className='flash'>
            <Marquee speed={200} pauseOnHover={true} >
      <span id='move'> 
      {
        data.map((value)=>{
          return(
            <>
            <span>flash news&nbsp;&nbsp;&nbsp;</span>
       <div style={{display:"inline-block"}}>{value.title}</div>
            </>
          );
        })
      }
      </span>
     </Marquee>
    </div>
    </>
  )
}

export default Flash