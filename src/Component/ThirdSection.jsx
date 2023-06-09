import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Information from "./information";
const ThirdSection = () => {
  const [food, setFood] = useState([]);
  const [searchFood, setsearchFood] = useState([]);
  const [List, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [newfood, setnewFood] = useState([]);
  const [category_output, setcategory_output] = useState([]);

  function handleChange(event) {
    event.preventDefault();

    let finalValue = [];
    let config = {
      method: "get",
      url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    };

    axios
      .request(config)
      .then((response) => {
        for (var i = 0; i < 10; i++) {
          finalValue.push(response.data.meals[i]);
        }
        console.log(response.data, search);
        setsearchFood(finalValue);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(search);
  }
  useEffect(() => {
    let respone = [];
    let list = [];

    let config = {
      method: "get",
      url: "https://www.themealdb.com/api/json/v1/1/filter.php?i=",
    };

    axios
      .request(config)
      .then((response) => {
        for (var i = 0; i < 10; i++) {
          respone.push(response.data.meals[i]);
        }
        console.log(respone);
        setFood(respone);
      })
      .catch((error) => {
        console.log(error);
      });
    let config_list = {
      method: "get",
      url: "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
    };

    axios
      .request(config_list)
      .then((response) => {
        for (var i = 0; i < 10; i++) {
          list.push(response.data.meals[i]);
        }
        console.log(list, " ");
        setList(list);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const call = (_a) => {
    console.log(_a);
    let category = [];

    let config_category = {
      method: "get",
      url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${_a}`,
    };

    axios
      .request(config_category)
      .then((response) => {
        for (var i = 0; i < 10; i++) {
          category.push(response.data.meals[i]);
        }
        console.log(category, "this is the category list ");
        setcategory_output(category);
        setsearchFood(category);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const callByid = (id) => {
    const list = [];

    console.log(id, "this");

    let config_list = {
      method: "get",
      url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    };

    axios
      .request(config_list)
      .then((response) => {
        for (var i = 0; i <= 0; i++) {
          list.push(response.data.meals[0]);
        }
        console.log(list, " ");
        setnewFood(list);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <h1>Our Famouse Recipe</h1>
      </div>
      <div className="foodlist">
        {food.map((res) => {
          return (
            <div className="First" style={{ margin: 20 }}>
              <div>
                <img src={res.strMealThumb} width={350} />
              </div>
              <div className="text">{res.strMeal}</div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {List.map((res) => {
          return (
            <div
              className="List"
              onClick={() => {
                call(res.strCategory);
              }}
            >
              <div className="List_div">{res.strCategory}</div>
            </div>
          );
        })}
      </div>

      <div>
        {category_output.map((res) => {
          <div>{res?.strMeal || "null"}</div>;
        })}
      </div>

      <div className="searchbox">
        <form onSubmit={handleChange}>
          <label>
            Search:
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <button type="submit" style={{ display: "none" }}></button>
        </form>

        <p>you have Search {searchFood[0]?.strMeal || null}</p>

        <div className="Search_First">
          {searchFood.map((res) => {
            return (
              <div style={{ padding: 20, textAlign: "center" }}>
                <div>
                <Link to={`/search/${res?.idMeal}`} >
                  <img src={res?.strMealThumb || null} width={350} />
                  </Link>

                </div>
                <div className="text">{res?.strMeal || null}</div>
                <br />
                <div>
                  <button onClick={() => callByid(res.idMeal)}>
                    Click Here To Know More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {newfood &&
        newfood.map((res) => {
          return (
            <>
              <table>
                <tbody>
                  <tr>
                    <th>Image</th>
                    <td>
                      <img src={res.strMealThumb} width={150} />
                    </td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{res.strMeal}</td>
                  </tr>
                  <tr>
                    <th>Area</th>
                    <td>{res.strArea}</td>
                  </tr>
                  <tr>
                    <th>Category</th>
                    <td>{res.strCategory}</td>
                  </tr>
                  <tr>
                    <th>Ingredient</th>
                    <td>
                      {res.strIngredient1},{res.strIngredient2},
                      {res.strIngredient3},{res.strIngredient4},
                      {res.strIngredient5},{res.strIngredient6},
                      {res.strIngredient7},{res.strIngredient8},
                      {res.strIngredient9}
                    </td>
                  </tr>
                  <tr>
                    <th>Instructions</th>
                    <td>{res.strInstructions}</td>
                  </tr>
                  <tr>
                    <th>Watch Here </th>
                    <td>
                      <a href={res.strYoutube} target="_blank">
                        CLick Here
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          );
        })}
    </>
  );
};

export default ThirdSection;
