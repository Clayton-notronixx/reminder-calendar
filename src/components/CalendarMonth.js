import React, {Component} from "react"
import {connect} from "react-redux"
import CalendarDay from "./CalendarDay";

class CalendarMonth extends Component {
    renderDates = () => {
        return this.props.dates.map((date, index) => {
            let dayOfWeek = date.date.getUTCDay()
            let returnDates = []
            if(index === 0 && dayOfWeek !== 0) {
                for(let i = 1; i <= dayOfWeek; i++) {
                    returnDates.push(<CalendarDay blank key={i}/>)
                }
            }
            returnDates.push(<CalendarDay key={date} date={date} handleAdd={this.props.handleAdd}/>)
            return returnDates
        })
    }

    render() {
        return <div className="month">
            {this.renderDates()}
        </div>
    }
}

const mapStateToProps = (state) => ({
    dates: state.CalendarReducer.dates,
});


export default connect(mapStateToProps, null)(CalendarMonth)