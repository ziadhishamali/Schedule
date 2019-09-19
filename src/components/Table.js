import React, { Component } from 'react';
import Days from './views/Days';
import Content from './views/Content';
import Times from './views/Times';
import Banner from './views/Banner';

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
            <div className="flex-column justify align">
                <div className="flex-row justify align">
                    <Banner title="Day" className="day orange-background"/>
                    <Banner title="Time" className="time orange-background-2"/>
                    <Banner title="Subject" className="content-name orange-background-2"/>
                    <Banner title="Instructor" className="content-instructor orange-background-2"/>
                    <Banner title="Type" className="content-type orange-background-2"/>
                </div>
                <div className="table flex-row justify align">
                    <Days />
                    <Times />
                    <Content contents={this.props.data}/>
                </div>
            </div> 
        );
    }
}
 
export default Table;