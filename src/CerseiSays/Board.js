import React from "react";

export default function Board({ board }) {
	return (
		<div className="cerci-says-body">
			{board.map(eaArray => (
				<div className="row">
					<div className={`cube${eaArray[0].cube}`} />
					<div className={`cube${eaArray[1].cube}`} />
				</div>
			))}
		</div>
	);
}
