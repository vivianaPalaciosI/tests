import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css';
import '../../App.css';
import Search from '../../components/search/search';

class Articles extends React.Component {
	state = {
		data: []
	}
	handleClick  = this.handleClick.bind(this);
	
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.location.state.articlesList
		}
		this.handleClick  = this.handleClick.bind(this);
	}
	componentDidUpdate(oldProps) {
		if(oldProps.location.state.articlesList !== this.props.location.state.articlesList) {
		  
		  this.setState({
			data: this.props.location.state.articlesList
		  });
		}
	}

	handleClick (item){
		this.setState({
			data: this.state.data.filter((a) => a.url.trim() != item.currentTarget.getAttribute('data-url').trim() )
		});
	}

	render() {
		const comp = this;
		return (
			<div className="container container-news"> 
				<div>
				<ul className="nav">
				<li className="nav-item">
    				<a className="nav-link active" >top news</a>
  				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">country</a>
					<div className="dropdown-menu">
					<a className="dropdown-item" >US</a>
					</div>
				</li>
				</ul>
				</div>
				<div className="row">
				<Search></Search>
				</div>
				<div className="spacer-48"></div>
				<div className="row">
					{
						this.state.data.map(function(item, i){
							return <div className="col-sm-4 col-md-4 col-lg-4"  key={i}>
								<div className="card" >
								<img src={item.urlToImage} className="card-img-top" height="150px" alt={item.title} />
								<div className="card-body">
									<h5 className="card-title">{item.title}</h5>
									<div className="card-text"> 
										<span>{item.description}</span>
									</div>
									<div className="spacer-8 "></div>
									
									<div className="link">
										<a href={item.url} target="_blank">Go to page</a>
									</div>
								</div>
								<div className="card-footer text-muted">
									{item.source.name}
									<div className="link">
										<a onClick={comp.handleClick} data-url={item.url} >hide</a>
									</div>
								</div>
								</div>
								<div className="spacer-24 "></div>
							</div>
						})
					}
					
				</div>
			</div>
		);
	}
}
export default Articles;