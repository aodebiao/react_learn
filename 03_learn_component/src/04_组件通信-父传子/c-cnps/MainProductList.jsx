import React, {Component} from 'react';

class MainProductList extends Component {

    render() {
        const {productList} = this.props
        return (
            <div>
                <h2>ๅๅๅ่กจ</h2>
                <ul>
                    {
                        productList.map(item=>{
                            return <li key={item.acm}>{item.title}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MainProductList;