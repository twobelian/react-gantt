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

    handleAddTask() {
        let currtasks = this.state.tasks.slice()
        let newtask = {
            key: uuid(),
            taskname: "new",
            startdate: "2019-08-01",
            duedate: "2019-08-20"
        }


        this.setState({
            tasks: [...currtasks, newtask]
        })
    }

    handleChange(e, key) {
        let currtasks = this.state.tasks.slice()

        for (let i = 0; i < currtasks.length; i++) {
            if (currtasks[i].key == key) {
                currtasks[i][e.target.name] = e.target.value
            }
            break;
        }

        this.setState({
            tasks: currtasks
        })

    }

    render() {
        console.log(this.state)
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
                            return <tr key={item.key}>
                                <td>
                                    <input
                                        type="text"
                                        name="taskname"
                                        defaultValue={item.taskname}
                                        onChange={(e) => this.handleChange(e, item.key)}>
                                    </input>
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        name="startdate"
                                        defaultValue={item.startdate}
                                        onChange={(e) => this.handleChange(e, item.key)}>
                                    </input>
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        name="duedate"
                                        defaultValue={item.duedate}
                                        onChange={(e) => this.handleChange(e, item.key)}>
                                    </input>
                                </td>
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
