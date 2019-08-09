import React, { Component } from 'react'
import TaskPanel from '../components/TaskPanel/TaskPanel.jsx'
import GanttChart from '../components/GanttChart/GanttChart.jsx'

export default class Gantt extends Component {
    render() {
        return (
            <div>
                <TaskPanel />
                <GanttChart />
            </div>
        )
    }
}
