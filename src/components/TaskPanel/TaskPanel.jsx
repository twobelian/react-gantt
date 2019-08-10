import React, { Component } from 'react'

export default class TaskPanel extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Start Date</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Task 1</td>
                            <td>2019/08/01</td>
                            <td>2019/08/20</td>
                        </tr>
                        <tr>
                        <td>Task 2</td>
                            <td>2019/08/12</td>
                            <td>2019/08/31</td>
                        </tr>
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
