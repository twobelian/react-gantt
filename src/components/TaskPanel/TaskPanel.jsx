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
                    switch (target.name) {
                        case 'duration':
                            if (!!parseInt(e.target.value)) {
                                let baseDate = new moment(task.startdate)
                                baseDate.add(parseInt(e.target.value), "days")
                                task.duedate = baseDate
                            }
                            break;
                        case 'startdate':
                        case 'duedate':
                            task[target.name] = moment(target.value)
                            break;
                        default:
                            task[target.name] = target.value
                    }
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
    render() {
        return (
            <div>
                <table>
                    <TableHead />
                    <TableBody
                        tasks={this.state.tasks}
                        handleChange={this.handleChange}
                        handleDelete={this.handleDelete}
                    />
                    <TableFoot tasks={this.state.tasks} />
                </table>
                <button onClick={this.handleAddTask}>Add New Task</button>
            </div>
        )
    }
}

const TableHead = () => (
    <thead>
        <tr>
            <th>Task Name</th>
            <th>Start Date</th>
            <th>Due Date</th>
            <th>Duration</th>
        </tr>
    </thead>
)

const TableBody = (props) => {
    return (
        <tbody>{
            props.tasks.map(item =>
                <Row
                    item={item}
                    handleChange={props.handleChange}
                    handleDelete={props.handleDelete}
                    key={item.key}
                />
            )
        }
        </tbody>
    )
}

const TableFoot = (props) => (
    <tfoot>
        <tr>
            <td>Total Duration</td>
            <td>
                {
                    props.tasks.map((task) =>
                        task.duedate.diff(task.startdate, 'days')
                    ).reduce((acc, cValue) => acc + cValue, 0)
                }
            </td>
        </tr>
    </tfoot>
)



const Row = (props) => {
    const {
        taskname,
        key,
        startdate,
        duedate
    } = props.item
    const {
        handleChange,
        handleDelete
    } = props


    return (
        <tr>
            <td>
                <input
                    type="text"
                    name="taskname"
                    defaultValue={taskname}
                    onChange={(e) => handleChange(e, key)}>
                </input>
            </td>
            <td>
                <input
                    type="date"
                    name="startdate"
                    value={startdate.format(InputeDateString)}
                    onChange={(e) => handleChange(e, key)}>
                </input>
            </td>
            <td>
                <input
                    type="date"
                    name="duedate"
                    value={duedate.format(InputeDateString)}
                    onChange={(e) => handleChange(e, key)}>
                </input>
            </td>
            <td>
                <input
                    type="text"
                    name="duration"
                    value={duedate.diff(startdate, 'days')}
                    onChange={(e) => handleChange(e, key)}>
                </input>
            </td>
            <td>
                <input
                    type="button"
                    name="delete"
                    value="delete"
                    onClick={() => handleDelete(key)}>
                </input>
            </td>
        </tr>
    )
}


const newTask = () => (
    {
        key: uuid(),
        taskname: "new task",
        startdate: new moment(),
        duedate: new moment().add(7, "days"),
        // tasks must be done before this task start
        prerequisites: []
    }
)

const InputeDateString = "YYYY-MM-DD"