import React, {Component} from "react"
import CalendarReminders from "./CalendarReminders";

class CalendarDay extends Component {
    render() {
        const {blank, date, handleAdd} = this.props
        if(blank) return <div className="day-block blank"/>
        return <div className="day-block" onClick={() => {handleAdd(date)}}>
            <span>{date.date.getUTCDate()}</span>
            <CalendarReminders reminders={date.reminders}/>
        </div>
    }
}

export default CalendarDay