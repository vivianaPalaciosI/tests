import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css';
import '../../App.css';
import Search from '../../components/search/search';


class Home extends React.Component {
  render() {
		return (
			<div className="container container-news"> 
				<div className="row">
					<div >
						<h1> Search News</h1>
						<div className="spacer-24"></div>
						<h6 className="font-weight-100"> Search through millions of articles from over 30,000 large and small news sources and blogs.</h6>
						<h6 className="font-weight-100"> This includes breaking news as well as lesser articles.</h6>
						<div className="spacer-24"></div>
						<Search></Search>
					</div>
				</div>
			</div>
		);
  }
}
export default Home;