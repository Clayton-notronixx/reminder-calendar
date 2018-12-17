import React from 'react'
import { Field, reduxForm } from 'redux-form'

let NewReminderForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit} className="row">
            <div className="col-md-2">
                <label>Hour</label>
                <Field name="hour" component="select" className="form-control">
                    <option value="0">00</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                </Field>
            </div>
            <div className="col-md-2">
                <label>Min</label>
                <Field name="min" component="select" className="form-control">
                    <option value="0">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                </Field>
            </div>
            <div className="col-md-5">
                <label>Reminder</label>
                <Field name="reminder" component="input" type="text" className="form-control"/>
            </div>
            <div className="col-md-3">
                <label>Colour</label>
                <Field name="color" component="select" className="form-control">
                    <option value="ForestGreen">Green</option>
                    <option value="Firebrick">Red</option>
                    <option value="Coral">Orange</option>
                    <option value="RoyalBlue">Blue</option>
                </Field>
            </div>
            <div className="col-md-3 mt-2">
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </form>
    )
}

NewReminderForm = reduxForm({
    // a unique name for the form
    form: 'NewReminderForm'
})(NewReminderForm)

export default NewReminderForm