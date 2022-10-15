import React, { useState } from "react";




//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectColor, setSelectColor ] = useState ("amber")
	const [selectPurple, setSelectPurple ] = useState ("green")
	
	return (
		<div className="mainDiv">
			<div className="hanger"></div>
			<div className="background">
				<div onClick  = {() => setSelectColor("red")} className={"red" + (selectColor === "red" ? " glow" : "")}></div>
				<div onClick  = {() => setSelectColor("amber")} className={"amber" + (selectColor === "amber" ? " glow" : "")}></div>
				<div onClick  = {() => setSelectColor("green")} className={selectPurple + (selectColor === "green" ? " glow" : "")}></div>
			</div>
			<div className="buttonDiv">
				<button className = "refresh" onClick={ () => selectPurple == "green" ? setSelectPurple("purple") : setSelectPurple ("green") }>Click to change from green to purple</button>
			</div>
		</div>
	);
};

export default Home;
