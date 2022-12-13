import React, { useEffect, useState } from 'react'
function App() {

  const [query, setQuery] = useState('')
  const [container, setcontainer] = useState([])
  const [endPoint,setEndPoint] = useState('')
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e0706107ffmsh08901071d94fd2ep161febjsn6cf9c19ac2eb',
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
  };

  useEffect(() => {

  fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=+${query}`, options)
    .then(response => {
      return response.json()

    })
    // .then(response => console.log(response))
    .then((data) => setcontainer(data.hints))
    .catch(err => console.error(err));

  },[endPoint])

  const onSubmitHandler = e =>{
    e.preventDefault()
    setEndPoint(query)
  }


    const onChangeHandler = (e) => {
      setQuery(e.target.value)

    }
  return (

    <div className='container'>
      <h1 className='heading'>Food App</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={query} onChange={onChangeHandler} className='input'/>
        <button>Submit</button>
      </form>


      <div className='card'>
        {container.map((item) => {
          return <div key={item.id}>
            <img src={item.food.image} alt =''/>
            <p>{item.food.label}</p>
          </div>
        })}
      </div>
      </div>


      
  )
}

export default App