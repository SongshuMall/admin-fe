/*
* @Author: SongShuhang
* @Date:   2020-06-09 18:59:02
* @Last Modified by:   SongShuhang
* @Last Modified time: 2020-06-13 10:31:26
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

//基础布局
import Layout from 'component/layout/index.jsx';
//页面
import Home from 'page/home/index.jsx';

class App extends React.Component{
	render(){
		return(
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/"  component={Home} />
						<Route path="/product"  component={Home} />
						<Route path="/product-category"  component={Home} />
						<Route path="/order"  component={Home} />
						<Route path="/user"  component={Home} />
					</Switch>
				</Layout>
			</Router>
		)
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);