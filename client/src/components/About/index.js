import React from 'react';
import Navbar from '../Navbar';
import './style.css'
class About extends React.Component {
	render() {
		const { auth } = this.props;
		return (
			<div>
				<Navbar auth={auth} />
				<div className="container">
					<div>
						<h1>RateMyProfessor, but for boba.</h1>
					</div>
					<div>
						<h1>Inspiration</h1>
						<p>To create a community where users can share how they like their boba and for the public to go and give it a try.</p>
						<p>On Yelp, many post about the service, not actually about the drink itself. If it is about the drink, most just say what drink they bought.
						This is okay, but I wanted to dive deeper. Many stores give the option to change sweetness, ice, and even tea levels of the drink. This
						plays a huge part in determining how good the drink is towards the buyer. Many people have different taste buds; some like sweeter drinks
						and some like bitter drinks. This site was created for this purpose. Users have the ability to post their drinks and the many different options
						(sweetness level, ice level, toppings, more to come) that a drink can have. Not only that, users can add a small description of the drink that can
						be used to write something such as recommendations. You guys decide :)</p>
					</div>
				</div>
			</div>
		)
	}
}

export default About;
