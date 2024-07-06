# GPS Toll-Based System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction
The **GPS Toll-Based System** is a comprehensive solution for managing toll collection using GPS technology. This system tracks vehicles' journeys, calculates toll charges, provides invoices, and issues penalties for unpaid tolls. The project includes a front-end developed with HTML, CSS, and JavaScript, and a back-end powered by Django and SQLite. 

## Features
- Real-time vehicle tracking using GPS
- Automated toll calculation based on vehicle journey
- Toll invoices generation
- Google Authentication for secure access
- Penalty and warning system for unpaid tolls

## Technologies Used
- **Front-end**: HTML, CSS, JavaScript
- **Back-end**: Django, SQLite
- **Libraries**: NumPy, Zendpanda, Geopanda, SleepleteJS
- **Hardware**: Arduino, GSM800 module

## Setup and Installation
To run this project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/gps-toll-based-system.git
    ```

2. **Navigate to the project directory**
    ```bash
    cd gps-toll-based-system
    ```

3. **Install the required dependencies**
    ```bash
    pip install -r requirements.txt
    ```

4. **Apply database migrations**
    ```bash
    python manage.py migrate
    ```

5. **Run the development server**
    ```bash
    python manage.py runserver
    ```

## Usage
1. Access the application at `http://localhost:8000`.
2. Register or log in using Google Authentication.
3. Connect the Arduino and GSM800 module to start tracking.
4. View toll charges, invoices, and penalty warnings on your dashboard.

## Project Structure
