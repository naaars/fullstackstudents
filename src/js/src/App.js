import React, { Component } from "react";
import Container from "./container.js";
import "./App.css";
import { getStudents } from "./client.js";
import { Table, Avatar, Spin } from "antd";

class App extends Component {
    state = {
        students: [],
        isFetching: false
    };

    componentDidMount() {
        this.fetchStudents();
    }

    fetchStudents = () => {
        this.setState({
            isFetching: true
        });
        getStudents().then((res) =>
            res.json().then((students) => {
                this.setState({ students, isFetching: false });
            })
        );
    };

    render() {
        const { students } = this.state;

        if (this.state.isFetching) {
            return (
                <Container>
                    <Spin size="large" />
                </Container>
            );
        }

        if (students && students.length) {
            const columns = [
                {
                    title: "",
                    key: "avatar",
                    render: (text, student) => (
                        <Avatar size="large">
                            {`${student.firstName
                                .charAt(0)
                                .toUpperCase()}${student.lastName
                                .charAt(0)
                                .toUpperCase()}`}
                        </Avatar>
                    )
                },
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
