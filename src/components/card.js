import React from 'react'

import './css/card.css'

const Card = ({cardText, cardDescription, cardImg, CTAbuttonText, labelText, buttonHandler}) => {
	return(
		<div className="card-element">
			<div className="card-image">
				<img className="card-img" src={cardImg} alt={cardText} />
			</div>
			<div className="card-footer">
				<div className="footer-text">
					<div className="card-text">
						{cardText}
					</div>
				</div>
				<div className="second-row">
					<div className="card-description">
						<p className="desc left">
							{cardDescription}
						</p>
					</div>
					<button className="card-CTA-button right" onClick={buttonHandler}>
						{labelText}
					</button>
				</div>
			</div>
		</div>
		)
}

export default Card
