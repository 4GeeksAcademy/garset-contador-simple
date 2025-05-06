import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digi } from "./Digi.jsx";

//create your first component
const Home = () => {

	const [timer, setTimer] = useState (0)
	const [active, setActive] = useState (false)
	const [isCountDown, setIsCountDown] = useState (false)
	const [alert, setAlert] = useState (0)

	useEffect (() => {
		if (timer == alert && alert != 0) window.alert("Tiempo cumplido")
		if (active) {
			setTimeout (()=>{
				setTimer (value => value + 1)	
			},1000)
		}
		if (isCountDown) {
			setTimeout (()=>{
				setTimer (value => value - 1)	
			},1000)
		}
		
	},[timer, active, isCountDown])

    const startStop = () => setActive(value => !value)
	const resetTimer = () => setTimer(value => value=0)
	const handleChange = e =>  setTimer (value=> value= e.target.value)

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
			<section className="container text-center my-5">
				<h1>Control del contador</h1>
					<div>
						<button disabled={active} onClick={startStop} className="mx-2 btn btn-success">Inicio</button>
						<button disabled={!active} onClick={startStop} className="mx-2 btn btn-danger">Detener</button>
						<button onClick={resetTimer} className="mx-2 btn btn-warning">Reiniciar</button>
					</div>
			</section>
			<section className="container text-center my-5">
				<h1>Cuenta Regresiva</h1>
				<form className="form-control" onSubmit={e=>(e.preventDefault())}>
				<label className="form-text">
					Cantidad para empezar
				<input className="form-control" type="number" value={timer} onChange={e=> handleChange(e)}/>	
				</label>
					<div>
						<input disabled={isCountDown} onClick={()=>setIsCountDown (value => !value)} className="m-2 btn btn-success" type="submit" value={"Enviar"}/>	
						<input disabled={!isCountDown} onClick={()=>setIsCountDown (value => !value)} className="m-2 btn btn-danger" type="submit" value={"Detener"}/>	
					</div>
				</form> 
			</section>
			<section className="container text-center my-5">
				<h1>Crear Alerta</h1>
				<form className="form-control" onSubmit={e => e.preventDefault()}>
				<label className="form-text">
					Alertar a:
				<input className="form-control" type="number" onChange={e => setAlert (value => value = e.target.value)}/>	
				</label>
					<div>
					<input onClick={()=> window.alert("Alerta creada")} className="m-2 btn btn-success" type="submit" value={"Crear"}/>	
					</div>
				</form>
			</section>

		</main>
	);
};

export default Home;