import {React,useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Information = () => {
    let {id} =useParams()
const [table,setTable] = useState([])


useEffect(()=>{
    let category=[]
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        headers: { }
      };
      axios.request(config)
      .then((response) => {
        for (var i = 0; i <= 0; i++) {
            category.push(response.data.meals[i]);
          }
          setTable(category)
      })
      .catch((error) => {
        console.log(error);
      });
},[5])
  return (

    <>
    {
         table.map((res)=>{
     return (
        <div style={{textAlign:"center"}}>
            <div>
                <img src={res.strMealThumb} width={550} />
            </div>
        <h1>{res.strMeal}</h1>
        <h2>{res.strCategory}</h2>
        <h3>{res.strArea}</h3>
        <h4>{res.strInstructions}</h4>
<iframe width="640" height="360" src={res.strYoutube.split("watch?")[0]+/embed/+res.strYoutube.split("?v=")[1]}  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
     )
     }
         
         )

    // table.map((res)=>{
    // <div>{res.idMeal}</div>

    // })
  
  }
    </>
  
    )
}

export default Information