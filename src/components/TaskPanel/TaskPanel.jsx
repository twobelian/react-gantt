import React, { Component } from 'react'
import uuid from 'uuidv4'

export default class TaskPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                {
                    key: uuid(),
                    taskname: "task1",
                    startdate: "2019-08-01",
                    duedate: "2019-08-20"
                },
                {
                    key: uuid(),
                    taskname: "task1",
                    startdate: "2019-08-21",
                    duedate: "2019-08-31"
                }
            ]

        }

        this.handleAddTask = this.handleAddTask.bind(this)
    }

    handleAddTask(e) {
        let currtask = this.state.tasks.slice()
        let newtask = {
            key: uuid(),
            taskname: "new",
            startdate: "2019-08-01",
            duedate: "2019-08-20"
        }


        this.setState({
            tasks: [...currtask, newtask]
        })
    }

    render() {

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Start Date</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map((item, index) => {
                            return <tr key={uuid()}>
                                <td><input type="text" defaultValue={item.taskname}></input></td>
                                <td><input type="date" defaultValue={item.startdate}></input></td>
                                <td><input type="date" defaultValue={item.duedate}></input></td>
                            </tr>
                        })}
                        <tr><td><button onClick={this.handleAddTask}>Add New Task</button></td></tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total Duration</td>
                            <td>200</td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        )
    }
}
