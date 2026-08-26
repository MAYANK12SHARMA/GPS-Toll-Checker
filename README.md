
![image](https://github.com/user-attachments/assets/2a836d30-73b7-4b3d-b12e-97af0445ae21)

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
    git clone https://github.com/MAYANK12SHARMA/GPS-Toll-Checker.git
    ```

2. **Navigate to the project directory**
    ```bash
    cd GPS_Toll_Tax
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


## Screenshots

<img width="1917" height="1078" alt="Screenshot 2026-08-27 003909" src="https://github.com/user-attachments/assets/1831d0b5-43fe-415f-9747-daa6dfcb65e0" />

<img width="1917" height="1078" alt="Screenshot 2026-08-27 003917" src="https://github.com/user-attachments/assets/232f95db-424b-48e0-9f60-b15e8b373fba" />

<img width="1917" height="1078" alt="Screenshot 2026-08-27 004544" src="https://github.com/user-attachments/assets/bc90b5c8-acd2-493a-851f-bd98408c97f1" />

<img width="1917" height="1078" alt="Screenshot 2026-08-27 004550" src="https://github.com/user-attachments/assets/33b1e172-28d1-45c7-846b-4831ba3d40dc" />

<img width="1765" height="997" alt="Screenshot 2026-08-27 004608" src="https://github.com/user-attachments/assets/f5ed3885-5cbf-4522-a12f-b89dcad930e3" />

<img width="1152" height="942" alt="Screenshot 2026-08-27 004614" src="https://github.com/user-attachments/assets/ef8db307-93ed-4fa4-9508-3975a61befce" />

<img width="1152" height="942" alt="Screenshot 2026-08-27 004614" src="https://github.com/user-attachments/assets/1514ca9c-e1ed-47e5-b811-8f4a3129de25" />

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- **Intel Unity Program** for project support
- **GLA University** for mentorship and resources


## Contact
- **Mayank Sharma**
  - Email: [mayank.sharma_cs.h23@gla.ac.in](mailto:mayank.sharma_cs.h23@gla.ac.in)



