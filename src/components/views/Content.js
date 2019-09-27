import React, { Component } from 'react';
import Loader from './Loader';
import firebase from '../Firebase';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editStatus: null,
            contentStatus: null,
            uid: null,
        }
    }

    componentDidMount() {
        let editStatus = [];
        let contentStatus = [];
        for (let i = 0; i < 6; i++) {
            editStatus.push([]);
            contentStatus.push([]);
            for (let j = 0; j < 3; j++) {
                editStatus[i].push([]);
                contentStatus[i].push([]);
                for (let k = 0; k < 6; k++) {
                    editStatus[i][j].push(false);
                    contentStatus[i][j].push("");
                }
            }
        }
        this.setState({editStatus, contentStatus});
        firebase.auth().onAuthStateChanged(user => {
            this.setState({uid: user.uid});
        })
    }

    changeContent = (day, i, idx, e) => {
        let contentStatus = [...this.state.contentStatus];
        contentStatus[day][i][idx] = e.target.value;
        this.setState({contentStatus});
    }

    updateContent = (day, i, idx, e) => {
        e.preventDefault();
        if (this.state.uid === null) {
            let email = prompt("Enter your email");
            let password = prompt("Enter your password");
            if (email === null || password === null) {
                let editStatus = [...this.state.editStatus];
                    editStatus[day][i][idx] = false;
                    console.log(this.state.contentStatus[day][i][idx]);
                    this.setState({editStatus});
            } else {
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    console.log(user);
                    let editStatus = [...this.state.editStatus];
                    editStatus[day][i][idx] = false;
                    console.log(this.state.contentStatus[day][i][idx]);
                    this.setState({editStatus});
                    this.updateDatabase(day, i, idx);
                })
                .catch(err => {
                    console.log(err);
                    let editStatus = [...this.state.editStatus];
                    editStatus[day][i][idx] = false;
                    console.log(this.state.contentStatus[day][i][idx]);
                    this.setState({editStatus});
                })
            }
        } else {
            let editStatus = [...this.state.editStatus];
            editStatus[day][i][idx] = false;
            console.log(this.state.contentStatus[day][i][idx]);
            this.setState({editStatus});
            this.updateDatabase(day, i, idx);
        }
    }

    updateDatabase = (day, i, idx) => {
        let type = "";
        switch (i) {
            case 0:
                type = "name";
                break;
            case 1:
                type = "instructor";
                break;
            case 2:
                type = "type";
                break;
            default:
        }
        let content = [...this.props.contents[day]];
        content[idx][type] = this.state.contentStatus[day][i][idx];
        console.log(content[idx][type], this.props.ids[day]);
        console.log(content, this.props.contents);
        this.props.csedRef.doc(this.props.ids[day]).update({
            content: content,
        })
    }
    
    toggleStatus = (day, i, idx) => {
        let type = "";
        switch (i) {
            case 0:
                type = "name";
                break;
            case 1:
                type = "instructor";
                break;
            case 2:
                type = "type";
                break;
            default:
        }
        console.log("toggle");
        let editStatus = [...this.state.editStatus];
        let contentStatus = [...this.state.contentStatus];
        editStatus[day][i][idx] = true;
        contentStatus[day][i][idx] = this.props.contents[day][idx][type];
        this.setState({editStatus, contentStatus});
    }
    
    getAll = (day, i, content, type) => {
        return content.map((element, idx) => {
            if (this.state.editStatus[day][i][idx] === true) {
                return (
                    <form key={idx} className="input divide small berlin" onSubmit={(e) => this.updateContent(day, i, idx, e)}>
                        <input className="divide small berlin" autoFocus value={this.state.contentStatus[day][i][idx]} onChange={(e) => this.changeContent(day, i, idx, e)} />
                    </form>
                )
            } else {
                return (
                    <div key={idx} className="divide small berlin" onDoubleClick={() => this.toggleStatus(day, i, idx)}>{element[type]}</div>
                )
            }
        })
    }

    render() {

        const contentTable = this.props.contents ? (
            this.props.contents.map((content, day) => {
                let background = "";
                let today = new Date().getDay() + 1;
                if (today === 7) {
                    today = 0;
                }
                let tomorrow = today + 1;
                if (tomorrow === 7) {
                    tomorrow = 0;
                }
                if (day === today) {
                    background = " blue-background-2 white-text";
                }
                if (day === tomorrow) {
                    background = " blue-background-4 white-text";
                }
                if (day === 5) {
                    background = " green-background-2 white-text";
                }
                return (
                    <div key={day} className="flex-row justify align">
                        <div className={"content-name flex-column justify align box-shadow black-text" + background}>
                            {this.getAll(day, 0, content, "name")}
                        </div>
                        <div className={"content-instructor flex-column justify align box-shadow black-text" + background}>
                            {this.getAll(day, 1, content, "instructor")}
                        </div>
                        <div className={"content-type flex-column justify align box-shadow black-text" + background}>
                            {this.getAll(day, 2, content, "type")}
                        </div>
                    </div>
                )
            })
        ) : (
            new Array(6).fill(0).map((ele, idx) => {
                return (
                    <div key={idx} className="flex-row justify align">
                        <div className={"content-name flex-column justify align box-shadow black-text"}>
                            <Loader />
                        </div>
                        <div className={"content-instructor flex-column justify align box-shadow black-text"}>
                            <Loader />
                        </div>
                        <div className={"content-type flex-column justify align box-shadow black-text"}>
                            <Loader />
                        </div>
                    </div>
                )
            })
        )

        return (
            <div className="contents flex-column justify align">
                {contentTable}
            </div>
        );
    }
}

export default Content;