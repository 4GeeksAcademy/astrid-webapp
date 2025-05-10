

// import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; //importar 
import  React, { useEffect, useState } from "react";


export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer(); //declarar
	// const navigate = useNavigate();
	const [likes, setLikes] = useState();
	///borrar
	
	const remove = (removeLike) => {
		const action = {
			type: "removeFavorite",
			payload: removeLike
		}
		dispatch(action)
	}

	
	useEffect(() => {
		setLikes(store.favorites.length);
	}, [store.favorites])
	return (
		<nav className="navbar">
			<div className="container">
				{/* <img className="logo btn"
					onClick={() => {
						navigate("/")
					}}
					src="" alt="img" /> */}
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="badge text-bg-secondary">{likes}</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((value, index) => {
								return (
								<li key={index}>
									<div className="menu ms-2">
										<span>{value}</span>
										<button className="btn ms-2"
										onClick={()=> remove(value)}><i className="fa-solid fa-trash"></i></button>
									</div>
								</li>
							)})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};