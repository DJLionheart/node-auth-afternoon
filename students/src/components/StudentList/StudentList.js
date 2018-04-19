import React, { Component } from 'react';


class StudentList extends Component {
    constructor() {
        super();
        this.state = {
            students: []
        }
    }

    render() {
        return(
            <div>
                <h2>Student List</h2>
            </div>
        )
    }



}

export default StudentList;