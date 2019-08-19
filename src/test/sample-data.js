import moment from 'moment'

export default [
    {
        key: "2004ae09-aff0-47dc-b6d1-5418ce737135",
        taskname: "Project A",
        startdate: new moment("2019-09-19"),
        duedate: new moment("2019-10-19"),
        prerequisites: []
    },
    {
        key: "47756a89-1f76-42cc-8931-59d3dec2e7e4",
        taskname: "Project A2",
        startdate: new moment("2019-10-20"),
        duedate: new moment("2019-12-01"),
        prerequisites: ["2004ae09-aff0-47dc-b6d1-5418ce737135"]
    },
    {
        key: "8dbecc80-8293-4e49-bebf-50d30a6a36e9",
        taskname: "Project A3",
        startdate: new moment("2019-12-26"),
        duedate: new moment("2020-02-05"),
        prerequisites: ["47756a89-1f76-42cc-8931-59d3dec2e7e4"]
    },
    {
        key: "889f2ca2-fdeb-4fd8-a762-76a051e35a0c",
        taskname: "Project B",
        startdate: new moment("2019-11-25"),
        duedate: new moment("2020-01-05"),
        prerequisites: []
    },
    {
        key: "48b4a012-5659-4671-af3f-eec78135a3e0",
        taskname: "Project C",
        startdate: new moment("2019-09-15"),
        duedate: new moment("2020-01-28"),
        prerequisites: []
    },
    {
        key: "72938ec3-db69-40a7-a548-11c5dfe4a26a",
        taskname: "Project C2",
        startdate: new moment("2020-01-29"),
        duedate: new moment("2020-02-22"),
        prerequisites: ["48b4a012-5659-4671-af3f-eec78135a3e0"]
    }

] 