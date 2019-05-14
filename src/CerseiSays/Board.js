import React from "react";

export default function Board({ board, clickHandler }) {
	return (
		<div className="cersei-says-board">
			<div className="cersei-says-body">
				{board.map(eaObj=> (
						<div key={eaObj.cube} className={`cube ${eaObj.className}`}>
							<img
							src={eaObj.image}
							onClick={()=>{
								clickHandler(eaObj)
							}}
							/>
							
						</div>
				))}
			</div>
		</div>
	);
}
