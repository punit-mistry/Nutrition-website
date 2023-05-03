import {React, useState,useEffect} from 'react'
import axios from "axios";
const ThirdSection = () => {
const [food,setFood] =useState([])
const [searchFood,setsearchFood] =useState([])
const [search, setSearch] = useState('');

  function handleChange(event) {
    event.preventDefault();

   
    let finalValue =[]
    let config = {
      method: 'get',
      url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    };
    
    axios.request(config)
    .then((response) => {
      for(var i=0; i<10; i++) {
        finalValue.push(response.data.meals[i]);
      
      }
      console.log(response.data,search)
      setsearchFood(finalValue)
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(search);
  }
useEffect(() => {
let respone=[];
  let config = {
    method: 'get',
    url: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
  };
  
  axios.request(config)
  .then((response) => {
    for(var i=0; i<10; i++) {
      respone.push(response.data.meals[i]);
    
    }
    console.log(respone)
    setFood(respone)
  })
  .catch((error) => {
    console.log(error);
  });
  
  
},[0]);

  return (
   <>
<div>
<h1>Our Famouse Recipe</h1>
</div>
<div className='foodlist' >

{food.map((res)=>{
  return(
      <div className='First' style={{margin:20,}}>
    <div ><img src={res.strMealThumb} width={350}/></div>
    <div className='text'>{res.strMeal}</div>
      </div>
  )
})}
</div>

<div className='searchbox'>
      <form onSubmit={handleChange}>
        <label>
          Search:
          <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
        <button type='submit' style={{display:"none"}}></button>
      </form>


     
      <p>you have Search {searchFood[0]?.strMeal || null}</p>
      <div className='Search_First'>{
      searchFood.map((res)=>{
        return(

          <div style={{padding:20,textAlign:"center"}}>
        <div ><img src={res?.strMealThumb || null} width={350}/></div>
        <div className='text'>{res?.strMeal || null}</div>
        <br/>
        <div><button onClick={()=>{console.log(res.idMeal)}}>Click Here To Know More</button></div>
          </div>
         
        )
      })
    }
     </div>
     
    </div>

   </>
  )
}

export default ThirdSection