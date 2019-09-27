import React from 'react';

const Days = () => {

    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]

    const daysTable = days.map((day, idx) => {
        let background = "";
        let today = new Date().getDay() + 1;
        if (today === 7) {
            today = 0;
        }
        let tomorrow = today + 1;
        if (tomorrow === 7) {
            tomorrow = 0;
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
            <div key={idx} className={"day flex-column justify align box-shadow black-text" + background}>
                <span className="medium forte bold">{day}</span>
            </div>
        )
    })

    return (
        <div className="days flex-column justify align">
            {daysTable}
        </div>
    )
}

export default Days;