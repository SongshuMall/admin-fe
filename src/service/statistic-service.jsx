/*
* @Author: SongShuhang
* @Date:   2020-06-14 14:27:05
* @Last Modified by:   SongShuhang
* @Last Modified time: 2020-06-14 14:29:16
*/
import MUtil        from 'util/mm.jsx'

const _mm   = new MUtil();

class Statistic{
    // 首页数据统计
    getHomeCount(){
        return _mm.request({
            url     : '/manage/statistic/base_count.do'
        });
    }

}

export default Statistic;
