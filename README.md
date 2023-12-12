# Django And React TODO Application

## Overview

Welcome to the Django TODO Application, a semi-functional project designed to showcase expertise in Python and backend APIs. This project is intended for demonstration 
purposes only and is not meant for commercial use. It serves as a comprehensive example of various features and practices within the Django framework.

## Features

* Django REST APIs for Backend Functionalities
* React Basic frontend
* React Django integration
* Django CRUD operations

## Video of the project
[![Watch the video](https://github.com/lollinng/NOTES_APP/assets/55660103/ecee7a4c-5bc8-45cd-b65f-3980bf95526d)](https://www.youtube.com/watch?v=PN4HcdqirOQ)

## Getting Started
To explore and run this project locally, follow the steps below:

1. Clone the repository:
  ```bash
  git clone https://github.com/lollinng/NOTES_APP.git
  ```
2. Install Dependencies using virutal env
  ```bash
  python -m venv env
  env\Scripts\activate.bat
  pip install -r requirements.txt
  ```
3. Integrate django data models to databasae
  ```bash
  python manage.py makemigrations
  python manage.py migrate
  ```
4. RUN build in REACT
  ```bash
  cd frontend
  npm run build
  ```
5. Run the application
  ```bash
  cd ..
  python manage.py runserver.
  ```

## Disclaimer
This project is purely a demonstration of skills and is not intended for production use. Any code snippets or functionalities should be adapted and validated according to best practices before implementation in a live environment.
