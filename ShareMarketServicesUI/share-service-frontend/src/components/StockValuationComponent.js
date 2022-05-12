import React from 'react';


class StockValuationComponent extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         StockId: ""
    //     }
    // }

    componentDidMount(){
        console.log('in stock valuation componentDidMount')
    }

    render(){
       return (
            <div>
                <h1>This component is for showing the values of single stock.</h1>              
            </div>
           
       )
    }
}

export default StockValuationComponent