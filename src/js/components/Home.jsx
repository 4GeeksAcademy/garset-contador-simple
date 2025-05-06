import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digi } from "./Digi.jsx";

//create your first component
const Home = () => {

	const [timer, setTimer] = useState (0)
	
	useEffect (() => {

		setTimeout (()=>{
			setTimer (value => value + 1)	
		},1000)

	},[timer])

	return (
		<main className="text-center">
			<section className="counter-holder">
				<Digi number={<span className="fa fa-clock"></span>}/>
				<Digi number={Math.floor(timer/100000)%10}/>
				<Digi number={Math.floor(timer/10000)%10}/>
				<Digi number={Math.floor(timer/1000)%10}/>
				<Digi number={Math.floor(timer/100)%10}/>
				<Digi number={Math.floor(timer/10)%10}/>
				<Digi number={Math.floor(timer%10)}/>
			</section>
		</main>
	);
};

export default Home;