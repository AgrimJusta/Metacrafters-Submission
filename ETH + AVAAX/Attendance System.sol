// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UniversityAttendance {
    address public teacher;
    uint public studentCount = 0;

    struct Student {
        uint id;
        string name;
        bool present;
    }

    modifier onlyTeacher() {
        require(msg.sender == teacher, "Only teacher can perform this action");
        _;
    }

    constructor() {
        teacher = msg.sender;
    }

    mapping(uint => Student) public students;

    event StudentAdded(uint id, string name);
    event AttendanceMarked(uint id, bool present);

    function addStudent(string memory _name) public onlyTeacher {
        studentCount++;
        students[studentCount] = Student(studentCount, _name, false);
        emit StudentAdded(studentCount, _name);
    }

    function markAttendance(uint _id, bool _present) public onlyTeacher {
        require(_id > 0 && _id <= studentCount, "Invalid student ID");

        Student storage student = students[_id];
        require(student.present != _present, "Attendance already marked with this value");

        student.present = _present;
        emit AttendanceMarked(_id, _present);
    }

    function checkAttendance(uint _id) public view returns (bool) {
        require(_id > 0 && _id <= studentCount, "Invalid student ID");

        return students[_id].present;
    }
}
