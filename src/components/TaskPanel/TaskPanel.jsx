import React, { Component } from 'react'

export default class TaskPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                {
                    taskname: "task1",
                    startdate: "2019/08/01",
                    duedate: "2019/08/20"
                },
                {
                    taskname: "task1",
                    startdate: "2019/08/01",
                    duedate: "2019/08/20"
                }
            ]

        }
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
                        {this.state.tasks.map((value, index) => {
                            return <tr>
                                <td><input type="text"></input></td>
                                <td><input type="date"></input></td>
                                <td><input type="date"></input></td>
                            </tr>
                        })}
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
