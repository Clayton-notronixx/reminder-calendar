import React, {Component} from "react"
import {reorderArray} from "../scripts/misc";

class ModalReminders extends Component {
    render() {
        let theReminders = reorderArray(this.props.reminders, 'rawTime', 0)
        return <div className="modal-reminders">
            {theReminders.map((r, index) => {
                return <div className="modal-reminder row" key={r}>
                    <div className="col-2">
                        <span style={{display:'inline-block', marginRight: 5, background:r.color, borderRadius: '50%', height: 10, width: 10}}/>
                        {r.hour}:{r.min}
                    </div>
                    <span className="col-6">{r.reminder}</span>
                    <span className="col-4 delete" onClick={() => this.props.delete(index, theReminders)}>Delete</span>
                </div>
            })}
        </div>

    }
}

export default ModalReminders