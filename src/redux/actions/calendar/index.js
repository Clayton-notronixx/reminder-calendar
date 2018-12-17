import {CalendarActionTypes} from "../types";
import {getDaysInMonth} from "../../../scripts/dates";
import {reset} from 'redux-form';

export const CalenderActionCreators = {
    getDatesByMonth: (month, year) => async (dispatch) => {
        try {
            let allReminders = localStorage.getItem('reminders')
            if(!allReminders) allReminders = {}
            else allReminders = JSON.parse(allReminders)
            let firstDay = new Date()
            firstDay.setUTCFullYear(year)
            firstDay.setUTCDate(1)
            firstDay.setUTCMonth(month)
            let daysInMonth = getDaysInMonth(firstDay.getUTCMonth(),firstDay.getUTCFullYear())
            let allDates = []
            for(let i = 1; i <= daysInMonth; i++) {
                let theDate = new Date(firstDay.getTime())
                theDate.setDate(i)
                let reminders = allReminders[theDate.getUTCFullYear() + '-' + theDate.getUTCMonth() + '-' + theDate.getUTCDate()]
                if(!reminders) reminders = []
                allDates.push({
                    date: theDate,
                    reminders})
            }
            dispatch({
                type: CalendarActionTypes.DATES_BY_MONTH,
                payload: allDates,
                error: null
            })
        } catch (e) {
            dispatch({
                type: CalendarActionTypes.DATES_BY_MONTH,
                error: JSON.stringify(e)
            })
        }
    },
    addReminder: (reminder, date, dateReminders) => async (dispatch) => {
        try {
            let allReminders = localStorage.getItem('reminders')
            if(!allReminders) allReminders = {}
            else allReminders = JSON.parse(allReminders)
            reminder.rawTime = Number(reminder.hour + reminder.min)
            dateReminders.push(reminder)
            allReminders[date.getUTCFullYear() + '-' + date.getUTCMonth() + '-' + date.getUTCDate()] = dateReminders
            localStorage.setItem('reminders', JSON.stringify(allReminders))
            dispatch(reset('NewReminderForm'))
            dispatch({
                type: CalendarActionTypes.ADD_REMINDER,
                payload: true,
                error: null
            })
        } catch (e) {
            dispatch({
                type: CalendarActionTypes.ADD_REMINDER,
                error: JSON.stringify(e)
            })
        }
    },
    removeReminder: (reminders, date) => async (dispatch) => {
        try {
            let allReminders = localStorage.getItem('reminders')
            if(!allReminders) allReminders = {}
            else allReminders = JSON.parse(allReminders)
            allReminders[date.getUTCFullYear() + '-' + date.getUTCMonth() + '-' + date.getUTCDate()] = reminders
            localStorage.setItem('reminders', JSON.stringify(allReminders))
            dispatch({
                type: CalendarActionTypes.ADD_REMINDER,
                payload: true,
                error: null
            })
        } catch (e) {
            dispatch({
                type: CalendarActionTypes.ADD_REMINDER,
                error: JSON.stringify(e)
            })
        }
    }
}