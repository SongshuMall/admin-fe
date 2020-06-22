/*
* @Author: SongShuhang
* @Date:   2020-06-14 14:32:08
* @Last Modified by:   SongShuhang
* @Last Modified time: 2020-06-14 14:50:48
*/
import React 		from 'react';
import {Link}		from 'react-router-dom';

import PageTitle 	from 'component/page-title/index.jsx';

class ErrorPage extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id="page-wrapper">
				<PageTitle title="出错啦" />
				<div className="row">
					<div className="col-md-12">
						<span>您访问的页面不存在~</span>
						<Link to="/">点击返回首页</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ErrorPage;