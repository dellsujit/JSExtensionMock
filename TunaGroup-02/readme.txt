# Tuna TenderHalo Application

## Overview
The **Tuna TenderHalo Application** is a POS extension for the Simphony system that integrates tender management logic based on employee data and employee class. It utilizes Simphony's extensibility features to interact with the system via custom event handling, allowing for customized functionality during operations such as check initialization and tender processing.

## Features
- **Employee Lookup**: Fetches employee information based on ID, including employee class and associated properties.
- **Event-Based Architecture**: Uses event handlers (`OnOpsInitEvent` and `OnOpsBeginCheck`) to trigger logic during the initialization and beginning of checks.
- **Data Store Interaction**: Reads and logs data about employees and employee classes from the mock Simphony DataStore.

## Prerequisites

1. **Node.js**: Ensure you have Node.js installed to run the application.
2. **Simphony POS System** (or a mock): The application is designed to interact with Simphony POS, but a mock context and data store are provided for testing purposes.

## Test

1.Test the Application on commandline using npm test
