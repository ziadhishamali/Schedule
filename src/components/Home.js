import React, { Component } from 'react';
import Table from './Table';
import firebase from './Firebase';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getUniqueID = () => {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            // eslint-disable-next-line no-mixed-operators
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    componentDidMount() {
        const db = firebase.firestore();
        let csedRef = db.collection('CSED21');
        // this was for writing the whole table from here to the firestore
        /*for (let i = 0; i < this.state.data.length; i++) {
            let uid = this.getUniqueID()
            csedRef.doc(uid).set({
                day: i,
                content: this.state.data[i],
            })
        }*/

        csedRef.orderBy("day", "asc").onSnapshot(querySnapshot => {
            let data = [];
            let ids = [];
            querySnapshot.forEach(doc => {
                data[doc.data().day] = doc.data().content;
                ids[doc.data().day] = doc.id;
            })
            this.setState({data, ids, csedRef});
        })
    }

    render() { 
        return (
            <div className="home flex-column justify align">
                <Table data={this.state.data} ids={this.state.ids} csedRef={this.state.csedRef} />
            </div>            
        );
    }
}
 
export default Home;