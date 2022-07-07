import React, { useState, useEffect } from 'react';
import './App.css'; 
import Axios from 'axios';
import Card from './components/cards/card';

function App() {
  const [values, setValue] = useState()
  const [listGames, setListGames] = useState()

  function handleChangeValues(value){
    setValue(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  function handleClickButton(){
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      setListGames([
        ...listGames,
        {
          id: response[0].id,
          name: values.name,
          cost: values.cost,
          category: values.category,
        }
      ])
    })
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListGames(response.data)
    })
  }, []);

  return (
   <div className='app--container'>
    <div className='register--container'>
      <h1 className='register--title'>Scrim Shop</h1>
       <input onChange={handleChangeValues} type='text' name='name' placeholder='Name' className='register--input'/>
       <input onChange={handleChangeValues} type='text' name='cost' placeholder='Preço' className='register--input'/>
       <input onChange={handleChangeValues} type='text' name='category' placeholder='Categoria' className='register--input'/>
        
       <button className="register--button" 
       onClick={() => handleClickButton()}
       >
        Cadastrar
        </button>
    </div>
    {typeof listGames !== "undefined" && 
    listGames.map((card) => {
     return <Card 
     key={card.idgames}
     listCard={listGames}
     setListCard={setListGames}
     id={card.idgames}
     name={card.name}
     cost={card.cost}
     category={card.category}
     />
    })}
   </div>

   
  );
}

export default App;
