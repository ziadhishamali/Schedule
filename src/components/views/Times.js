import React from 'react';

const Times = () => {
    const times = ["8:30 ~ 10:10", "10:20 ~ 12:00", "12:10 ~ 1:50", "2:00 ~ 3:40", "3:50 ~ 5:30", "5:40 ~ 7:20"]
    const timesView = times.map((time, idx) => {
        return (
            <div key={idx} className="divide small berlin">{time}</div>
        )
    })
    const finTimes = timesView.map((time, idx) => {
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
            <div key={idx} className={"time flex-column justify align box-shadow black-text" + background}>
                {timesView}
            </div>
        );
    })
    return (
        <div className="contents flex-column justify align">
            {finTimes}
        </div>
    )
}

export default Times;