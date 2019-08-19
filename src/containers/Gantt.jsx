import React, { Component } from 'react'
import TaskPanel from '../components/TaskPanel/TaskPanel.jsx'
import GanttChart from '../components/GanttChart/GanttChart.jsx'
import sample_data from '../test/sample-data'

export default class Gantt extends Component {
    render() {
        return (
            <div>
                <TaskPanel tasks={sample_data} />
                <br />
                <GanttChart />
            </div>
        )
    }
}
