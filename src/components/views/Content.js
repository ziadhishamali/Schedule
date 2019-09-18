import React from 'react';

const getAll = (content, type) => {
    return content.map((element, idx) => {
        return (
            <div key={idx} className="divide small berlin">{element[type]}</div>
        )
    })
}

const Content = ({contents}) => {

    const contentTable = contents.map((content, idx) => {
        let background = "";
        let today = new Date().getDay() + 1;
        if (today === 7) {
            today = 0;
        }
        let tomorrow = today + 1;
        if (tomorrow === 7) {
            tomorrow = 6;
        }
        if (idx === today) {
            background = " blue-background white-text";
        }
        if (idx === tomorrow) {
            background = " blue-background-3 white-text";
        }
        if (idx === 5) {
            background = " green-background white-text";
        }
        return (
            <div key={idx} className="flex-row justify align">
                <div className={"content-name flex-column justify align box-shadow black-text" + background}>
                    {getAll(content, "name")}
                </div>
                <div className={"content-instructor flex-column justify align box-shadow black-text" + background}>
                    {getAll(content, "instructor")}
                </div>
                <div className={"content-type flex-column justify align box-shadow black-text" + background}>
                    {getAll(content, "type")}
                </div>
            </div>
        )
    })

    return (
        <div className="contents flex-column justify align">
            {contentTable}
        </div>
    )
}

export default Content;