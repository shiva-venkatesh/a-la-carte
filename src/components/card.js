import React from 'react'

import './css/card.css'

const Card = ({cardText, cardDescription, cardImg, CTAbuttonText, labelText, buttonHandler}) => {
	return(
		<div className="card-element">
			<div className="card-image">
				<img src={cardImg} alt={cardText} />
			</div>
			<div className="card-footer">
				<p className="card-text footer-text">
					{cardText}
				</p>
				<p className="card-description footer-text">
					{cardDescription}
				</p>
				<button className="card-CTA-button" onClick={buttonHandler}>
					{labelText}
				</button>
			</div>
		</div>
		)
}

export default Card
