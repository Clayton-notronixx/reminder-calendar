import React, {Component} from "react"
import Modal from "react-modal";
import NewReminderForm from "./NewReminderForm";
import {bindActionCreators} from "redux";
import {CalenderActionCreators} from "../redux/actions/calendar";
import connect from "react-redux/es/connect/connect";
import ModalReminders from "./ModalReminders";

class ReminderModal extends Component {
    renderContent = () => {
        if(this.props.activeDate) {
            return <div>
                    <h3>{this.props.activeDate.date.toDateString()}</h3>
                    <hr/>
                {this.props.activeDate.reminders.length > 0 && <div>
                    <h4>All Reminders</h4>
                    <ModalReminders reminders={this.props.activeDate.reminders} delete={this.handleDelete}/>
                    <hr/>
                </div>}
                <div>
                    <h4>New Reminder</h4>
                    <NewReminderForm onSubmit={this.handleSave} initialValues={{hour: "10", min: "15", color: "ForestGreen"}}/>
                </div>
            </div>
        }
        return null
    }

    handleSave = data => {
        const {actions, activeDate} = this.props
        actions.addReminder(data, activeDate.date, activeDate.reminders)
    }

    handleDelete = (index, reminders) => {
        const {actions, activeDate} = this.props
        reminders = [...reminders]
        reminders.splice(index, 1)
        actions.removeReminder(reminders, activeDate.date)
    }

    render() {
        return <Modal
            className="reminder-modal"
            isOpen={this.props.open}
            onRequestClose={this.props.close}>
            {this.renderContent()}
        </Modal>
    }
}

const mapStateToProps = (state) => ({
    dates: state.CalendarReducer.dates,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CalenderActionCreators, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(ReminderModal)