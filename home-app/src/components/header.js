import React from 'react';

import '../styles/header.css';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	

		};
	}

	render() {
		return(
			<div className="front-header">
				<div className="header-background">
					<img className="stars svg" src={require("../assets/images/yrs.svg")} alt="" />
				</div>
				<div className="main">
					<p>
						Hello, my name is Sem Spanhaak. Today the day I'm a junior sales assistant at <a href="//azerty.nl/">Azerty</a>.
						Quit my jobs <a href="//www.diellepelletkachel.nl/">here</a> as a webmaster and <a href="//azerty.nl/">here</a> as a logistical assistant.
						Last year I did my internship over <a href="//egmmedia.nl">here</a>. Currently doing my intership at <a href="//iqmedia.nl">IQ-Media</a>.
						I also like to explore the world and it's remote places.
						You can find me on <a href="//twitter.com/semspanhaak">Twitter</a> also at <a href="https://www.linkedin.com/in/semspanhaak">LinkedIn</a>.
						If you want to mail me, you can! You can mail to <a href="mailto:info@semspanhaak.nl">info@semspanhaak.nl</a>.
						I also like to talk about games and technology.
					</p>
				</div>
			</div>
		)
	}
}
  