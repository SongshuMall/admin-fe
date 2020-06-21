/*
* @Author: SongShuhang
* @Date:   2020-06-09 18:59:02
* @Last Modified by:   SongShuhang
* @Last Modified time: 2020-06-17 21:02:34
*/

import React 		     from 'react';
import ReactDOM 	     from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

//基础布局
import Layout 		     from 'component/layout/index.jsx';
//页面
import Home 		     from 'page/home/index.jsx';
import Login 		     from 'page/login/index.jsx';
import ProductRouter     from 'page/product/router.jsx';
import UserList 	     from 'page/user/index.jsx';
import ErrorPage 	     from 'page/error/index.jsx';

class App extends React.Component{
	render(){
        let LayoutRouter = (
            <Layout> 
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/product" component={ProductRouter}/>
                    <Route path="/product-category" component={Home}/>
                    <Route path="/order/index" component={Home}/>
                    <Route path="/order/detail/:orderNumber" component={Home}/>
                    <Route path="/user/index" component={UserList}/>
                    <Redirect exact from="/order" to="/order/index"/>
                    <Redirect exact from="/user" to="/user/index"/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Layout>
        );
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={ props => LayoutRouter}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);