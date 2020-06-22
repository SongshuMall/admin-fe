/*
* @Author: SongShuhang
* @Date:   2020-06-14 15:03:08
* @Last Modified by:   SongShuhang
* @Last Modified time: 2020-06-14 15:26:39
*/
import React 		from 'react';
import RcPagination 	from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

// 通用分页组件
class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination {...this.props} 
                        hideOnSinglePage
                        showQuickJumper/>
                </div>
            </div>
        );
    }
}

export default Pagination;