
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from 'react'
import CharacterCard from '../components/CardCharacter.jsx'


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	function apiPersonaje() {
		fetch("https://www.swapi.tech/api/people")
			.then((response) => { return response.json() })
			.then((data) => {
				dispatch({
					type: "set_personajes",
					payload: { personaje: data.results }
				})
			})
			.catch((err) => { return err })
	}

	useEffect(() => {
		apiPersonaje()

	}, [])


	return (
		<div className="container ">
			<h1>Personajes</h1>
			

				<div className="d-flex flex-row overflow-scroll ">
					{store.characters.map((value, index) => {
						return (
							<CharacterCard key={index} people={value} />
						)
					})}
				</div>
			
		</div>
	);
}; 