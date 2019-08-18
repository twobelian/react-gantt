import React, { Component } from 'react'
import uuid from 'uuidv4'
import moment from 'moment'

export default class TaskPanel extends Component {
    constructor(props) {
        super(props)

        this.handleAddTask = this.handleAddTask.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

        this.state = {
            tasks: [
                newTask()
            ]
        }
    }

    handleAddTask() {
        this.setState((prevState) => ({ tasks: [...prevState.tasks, newTask()] }))
    }

    handleChange(e, key) {
        const target = e.target

        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) => {
                if (task.key == key) {
                    task[target.name] = target.value
                }
                return task
            })
        }))
    }

    handleDelete(key) {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => task.key !== key)
        }))
    }


    renderRows() {
        return this.state.tasks.map(item =>
            <Row
                item={item}
                handleChange={this.handleChange}
                handleDelete={this.handleDelete}
                key={item.key}
            />
        )
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
                        {this.renderRows()}
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

const newTask = () => (
    {
        key: uuid(),
        taskname: "new task",
        startdate: moment().format("YYYY-MM-DD"),
        duedate: moment().add(7, "days").format("YYYY-MM-DD"),
        dureation: 0,
        // tasks must be done before this task start
        prerequisites: []
    }
)

const Row = (props) => {
    const item = props.item
    const handleChange = props.handleChange
    const handleDelete = props.handleDelete
    return (
        <tr>
            <td>
                <input
                    type="text"
                    name="taskname"
                    defaultValue={item.taskname}
                    onChange={(e) => handleChange(e, item.key)}>
                </input>
            </td>
            <td>
                <input
                    type="date"
                    name="startdate"
                    defaultValue={item.startdate}
                    onChange={(e) => handleChange(e, item.key)}>
                </input>
            </td>
            <td>
                <input
                    type="date"
                    name="duedate"
                    defaultValue={item.duedate}
                    onChange={(e) => handleChange(e, item.key)}>
                </input>
            </td>
            <td>
                <input
                    type="button"
                    name="delete"
                    value="delete"
                    onClick={() => handleDelete(item.key)}>
                </input>
            </td>
        </tr>
    )
}