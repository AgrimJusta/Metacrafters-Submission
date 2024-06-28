# UniversityAttendance

## Overview

UniversityAttendance is a Solidity smart contract designed for managing student attendance on the Ethereum blockchain. The contract allows a designated teacher to add students, mark their attendance, and check their attendance status. This ensures transparency and accountability in managing university-level attendance records.

## Table of Contents

- [Features](#features)
- [Contract Details](#contract-details)
  - [State Variables](#state-variables)
  - [Structs](#structs)
  - [Events](#events)
  - [Modifiers](#modifiers)
- [Functions](#functions)
- [Error Handling](#error-handling)
- [Usage](#usage)
- [Development](#development)
- [Developer](#developer)

## Features

- **Teacher Functions**: 
  - Add new students to the attendance record.
  - Mark attendance for students.
  
- **Security**:
  - Restricts functions to only the designated teacher (onlyTeacher modifier).
  - Validates student IDs and attendance status before updating.

## Contract Details

### State Variables

- **teacher**: Address of the teacher who deploys the contract and manages student attendance.
- **studentCount**: Total number of students currently enrolled.

### Structs

- **Student**: 
  - `id`: Unique identifier for the student.
  - `name`: Name of the student.
  - `present`: Boolean indicating whether the student is present or not.

### Events

- **StudentAdded**: Emitted when a new student is successfully added, logging the student's ID and name.
- **AttendanceMarked**: Emitted when attendance is marked for a student, logging the student's ID and their attendance status.

### Modifiers

- **onlyTeacher**: Ensures that only the designated teacher can execute specific functions.

## Functions

- **addStudent(string memory _name)**: 
  - Adds a new student to the attendance record.
  - Only callable by the designated teacher.

- **markAttendance(uint _id, bool _present)**: 
  - Marks the attendance of a student identified by `_id`.
  - Only callable by the designated teacher.

- **checkAttendance(uint _id) public view returns (bool)**: 
  - Retrieves the attendance status (present or not) of a student identified by `_id`.

## Error Handling

- **require**: Ensures that specific conditions are met before executing functions, such as valid student IDs and unique attendance markings.

## Usage

1. **Deploy the Contract**: Deploy the contract using a Solidity-compatible development environment or Remix IDE.
2. **Add Students**: The teacher uses the `addStudent` function to register new students with their names.
3. **Mark Attendance**: The teacher uses the `markAttendance` function to record student attendance with the appropriate status.
4. **Check Attendance**: Anyone can use the `checkAttendance` function to view the current attendance status of a student.

## Development

To develop and test the UniversityAttendance contract, you can use Remix IDE or you will need the following tools:

- Solidity: Programming language for writing smart contracts.
- Ethereum: Blockchain platform to deploy the contract.
- Truffle: Development framework for Ethereum.
- Ganache: Personal blockchain for Ethereum development.
- MetaMask: Browser extension for interacting with Ethereum.

## Developer

- **Author**: Agrim Justa
- **Contact**: agrimjusta@gmail.com
