import React from 'react'
import { useNavigate } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer'

const CharacterCard = ({ people }) => {
  
  const { store, dispatch } = useGlobalReducer();

  const navigate = useNavigate();

  ///////////////////////////////////
  const isFavorite = store.favorites.includes(people.name)
  const handleFavorite = () => {
    if (isFavorite === true) {
      const action = {
        type: "removeFavorite",
        payload: people.name
      }
      dispatch(action)
        }
        else{
          const action = {
            type: "newFavorite",
            payload: people.name
      }
      dispatch(action)
    }
  }
  return (
    <div className="col">
    <div className="card" style={{ width: "18rem"}}>
      <img src="https://lumiere-a.akamaihd.net/v1/images/databank_admiralcoburn_01_169_8db29cff.jpeg?region=0%2C0%2C1560%2C878" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">
          {people.name}</h5>
        
        <div className="d-flex justify-content-between ">
          <button className="btn btn-primary"
            onClick={() => {
              navigate(`/description/${people.uid}`)
            }}
            >+</button>
          <button type="button" className="btn btn-outline-danger"
            onClick={handleFavorite}
            >
            <i 
            className=
            // {isFavorite ? 
             "fa-solid fa-heart" 
            // : "fa-regular fa-heart"}
            ></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CharacterCard