import React, {Component} from "react"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {CalenderActionCreators} from "../redux/actions/calendar";
import CalendarMonth from "./CalendarMonth";
import ReminderModal from "./ReminderModal";
import {getFullMonthName} from "../scripts/dates";

class Calendar extends Component {
    constructor() {
        super()
        this.state = {
            currentMonth: new Date(),
            modalOpen: false,
            activeDate: null
        }
    }

    componentWillMount() {
        this.getData()
    }

    componentWillReceiveProps(props) {
        const {actions} = props
        if(props.addSuccess || props.removeSuccess) {
            actions.getDatesByMonth(this.state.currentMonth.getUTCMonth())
            this.closeModal()
        }

        if(props.addErr || props.removeErr) {
            alert("Something went wrong. Try again later")
        }
    }

    getData = () => {
        const {actions} = this.props
        actions.getDatesByMonth(this.state.currentMonth.getUTCMonth(), this.state.currentMonth.getUTCFullYear())
    }

    handleAdd = activeDate => {
       this.setState({modalOpen: true, activeDate})
    }

    closeModal = () => {
        this.setState({modalOpen: false, activeDate: null})
    }

    lastMonth = () => {
        let currentMonth = new Date(this.state.currentMonth)
        currentMonth.setUTCMonth(currentMonth.getUTCMonth() - 1)
        this.setState({currentMonth})
        this.setState({currentMonth}, () => {
            this.getData()
        })
    }

    nextMonth = () => {
        let currentMonth = new Date(this.state.currentMonth)
        currentMonth.setUTCMonth(currentMonth.getUTCMonth() + 1)
        this.setState({currentMonth}, () => {
            this.getData()
        })
    }

    render() {
        const {currentMonth} = this.state
        return <div className="container mt-5">
            <div className="row">
                <div className="col-8">
                    <h1>{getFullMonthName(currentMonth.getUTCMonth()) + ' ' + currentMonth.getUTCFullYear()}</h1>
                </div>
                <div className="col-2" onClick={this.lastMonth}>
                    <span>Prev Month</span>
                </div>
                <div className="col-2" onClick={this.nextMonth}>
                    <span>Next Month</span>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <div className="day-name">
                        <span>Sunday</span>
                    </div>
                    <div className="day-name">
                        <span>Monday</span>
                    </div>
                    <div className="day-name">
                        <span>Tuesday</span>
                    </div>
                    <div className="day-name">
                        <span>Wednesday</span>
                    </div>
                    <div className="day-name">
                        <span>Thursday</span>
                    </div>
                    <div className="day-name">
                        <span>Friday</span>
                    </div>
                    <div className="day-name">
                        <span>Saturday</span>
                    </div>
                </div>
                <div className="card-body">
                    <CalendarMonth handleAdd={this.handleAdd}/>
                </div>
            </div>
            <ReminderModal open={this.state.modalOpen} close={this.closeModal} activeDate={this.state.activeDate}/>
        </div>
    }
}

const mapStateToProps = (state) => ({
    dates: state.CalendarReducer.dates,
    addSuccess: state.CalendarReducer.addSuccess,
    removeSuccess: state.CalendarReducer.removeSuccess,
    addErr: state.CalendarReducer.addErr,
    removeErr: state.CalendarReducer.removeErr,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CalenderActionCreators, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Calendar)