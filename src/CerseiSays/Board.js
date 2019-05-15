import React from "react";

export default function Board({ board, clickHandler }) {

	return (
		<div className="cersei-says-board">
			<div className="cersei-says-body">
				{board.map((eaObj, i)=> (
						// <div key={eaObj.cube} className={`cube ${eaObj.className}`}>
							<img
								key={i}
								src={eaObj.image}
								className={`cube ${eaObj.className}`}
								id={`cube${eaObj.cube}`}
								onClick={()=>{
									clickHandler(eaObj)
								}}
								alt='cube'
							/>
							
						// </div>
				))}
			</div>
		</div>
	);
}
