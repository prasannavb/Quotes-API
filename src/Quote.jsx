import { useState } from 'react'
import axios from "axios"
import "./Quote.css"
import {Link} from "react-router-dom"

const  Quote=()=> 
{
  const [quote,Setquote]=useState({text:"Random quotes!!",author:" "});
  const url="https://type.fit/api/quotes";

  const Getquote=async()=>
  {
    try
    { 
      const {data} = await axios.get(url)
      const random=Math.ceil((Math.random()*15));
      Setquote({...quote,text:data[random].text,author:"- "+data[random].author.split(",")[0]});
      if(data[random].author==="type.fit")
     {
      Setquote({...quote,text:data[random].text,author:"- Anonymous"});
     }  
    }
    catch(error)
    {
      console.log(error);
    }
  }

  return(
    <article className="card-Quote">
      <div className='outer-div-Quote'>
        <h1 className='title-Quote'>Quote of the day!!!</h1>
        <h2 className='quote-Quote'>"{quote.text}"</h2>
        <h3 className='author-Quote'>{quote.author}</h3>
        <button className='btn-Quote' onClick={Getquote}>Get quote</button>
         <Link className="Back-Quote" to="/">Back</Link>
      </div>
    </article>
  ) 
}
export default Quote;
