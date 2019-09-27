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
        return (
            <div className="flex-column justify align">
                <div className="flex-row justify align">
                    <Banner title="Day" className="day day-2 green-background"/>
                    <Banner title="Time" className="time green-background-2"/>
                    <Banner title="Subject" className="content-name green-background-2"/>
                    <Banner title="Instructor" className="content-instructor green-background-2"/>
                    <Banner title="Type" className="content-type content-type-2 green-background-2"/>
                </div>
                <div className="table flex-row justify align">
                    <Days />
                    <Times />
                    <Content contents={this.props.data} ids={this.props.ids} csedRef={this.props.csedRef} />
                </div>
            </div> 
        );
    }
}
 
export default Table;