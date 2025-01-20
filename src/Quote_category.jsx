import { useState } from 'react'
import axios from "axios"
import Button from "./button.jsx"
import data from './data.js'
import { Link } from 'react-router-dom'
import "./QuoteBycat.css"

const QuoteBycategory=()=>
{
  const [quote,Setquote]=useState({quote:"Random quotes!!",author:" "});
  const[category,Setcategory] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
 
  const Getquote=async()=>
  {
      
  const {data}=await axios.get('https://api.api-ninjas.com/v1/quotes?category='+category,{
     headers: {
       'X-Api-Key': API_KEY
  }});
  if(category!=null)
  {
    Setquote({...quote,author:"- "+data[0].author,quote:data[0].quote});
    if(data[0].author===null)
    {
    Setquote({...quote,quote:data[0].quote,author:"- Anonymous"});
    }
  }
  else
  {
    alert("Please select the category of Quote");
  }
  }

  return(
    <article className="card-QBC">
      <div className='catgeory_buttons-QBC'>
      { data.map((data)=>{
        return(
          <aside  key={data.id}>
            <Button category={category} Setcategory={Setcategory} data={data.category}/>
          </aside>
        )
      })
      }
      </div> 
      <div className='outer-div-QBC'>
        <h1 className='title-QBC'>Quote of the day!!!</h1>
        <h2 className='quote-QBC'>"{quote.quote}"</h2>
        <h3 className='author-QBC'>{quote.author}</h3>
        <button className='btn-QBC' onClick={Getquote}>Get quote</button>
      </div>
      <div className='Link-QBC'>
      <Link className="Back-QBC" to="/">Back</Link>
      </div>

  </article>
  
  )  
}

export default QuoteBycategory;