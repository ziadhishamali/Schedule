import React from 'react';

const Days = () => {

    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]

    const daysTable = days.map((day, idx) => {
        let background = "";
        let today = new Date().getDay() + 1;
        if (today === 7) {
            today = 6;
        }
        let tomorrow = today + 1;
        if (tomorrow === 7) {
            tomorrow = 6;
        }
        if (idx === today) {
            background = " blue-background-2 white-text";
        }
        if (idx === tomorrow) {
            background = " blue-background-4 white-text";
        }
        if (idx === 5) {
            background = " green-background-2 white-text";
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