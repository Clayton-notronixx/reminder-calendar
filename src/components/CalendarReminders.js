import React, {Component} from "react"
import {reorderArray} from "../scripts/misc";

class CalendarReminders extends Component {
    render() {
        let theReminders = reorderArray(this.props.reminders, 'rawTime', 0)
        return <div className="day-reminders">
            {theReminders.map(r => {
                return <div key={r.reminder} className="day-reminder" style={{background:r.color}}>
                    <span>{r.hour}:{r.min}</span>
                    <span>{r.reminder.substr(0,5).trim() + (r.reminder.length > 5 ? "..." : "")}</span>
                </div>
            })}
        </div>

    }
}

export default CalendarReminders