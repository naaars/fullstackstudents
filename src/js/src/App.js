import React, { Component } from "react";
import Container from "./container.js";
import "./App.css";
import { getStudents } from "./client.js";
import { Table } from "antd";

class App extends Component {
    state = {
        students: []
    };

    componentDidMount() {
        this.fetchStudents();
    }

    fetchStudents = () => {
        getStudents().then((res) =>
            res.json().then((students) => {
                this.setState({ students });
            })
        );
    };

    render() {
        const { students } = this.state;
        if (students && students.length) {
            const columns = [
                {
                    title: "Id",
                    dataIndex: "studentId",
                    key: "studentId"
                },
                {
                    title: "First Name",
                    dataIndex: "firstName",
                    key: "firstName"
                },
                {
                    title: "Last Name",
                    dataIndex: "lastName",
                    key: "lastName"
                },
                {
                    title: "Email",
                    dataIndex: "email",
                    key: "email"
                },
                {
                    title: "Gender",
                    dataIndex: "gender",
                    key: "gender"
                }
            ];

            return (
                <Container>
                    <Table dataSource={students} columns={columns} />
                </Container>
            );
        }
        return <h1>No students found</h1>;
    }
}

export default App;
