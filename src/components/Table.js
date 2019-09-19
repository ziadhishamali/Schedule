import React, { Component } from 'react';
import Days from './views/Days';
import Content from './views/Content';
import Times from './views/Times';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            day: new Date().getDay()
        }
    }

    render() {
        console.log(this.props.data, this.state.day);
        return ( 
            <div className="table flex-row justify align">
                <Days />
                <Times />
                <Content contents={this.props.data}/>
            </div>
        );
    }
}
 
export default Table;