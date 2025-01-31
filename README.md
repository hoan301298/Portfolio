# Portfolio Project

## Overview
This is a personal portfolio project built with a **React.js frontend** and a **Node.js backend**. The backend provides APIs for handling email services and other dynamic functionalities.

### Public Website
[Link](https://www.hoantran.eu)

## Technologies Used
- **Frontend:** React.js (or Create React App)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (or PostgreSQL, if applicable)
- **Deployment:** Render.com, Docker

## API Endpoints
### Send Email
- `POST /api/feedback` - Send Feedback form to [tranhuuphuchoan@gmail.com].
- `POST /api/subscribe` - Subscribe and send email for confirmation.

## Running the Project with Docker

### Prerequisites
- Install [Docker](https://www.docker.com/)
- Clone this repository:
  ```sh
  git clone https://github.com/hoan301298/Portfolio.git
  cd Portfolio
  ```

## Docker

### Download Docker Image on DockerHub (Do not need to clone the repositories)

If you prefer to pull pre-built images from Docker Hub instead of building them locally, you can use the following commands:

#### Frontend
    ```sh
    docker pull hoantran301298/portfolio-frontend
    docker run -p 3000:3000 hoantran301298/portfolio-frontend
    ```

#### Backend
    ```sh
    docker pull hoantran301298/portfolio-backend
    docker run -p 8000:8000 hoantran301298/portfolio-backend
    ```

#### Access:
    localhost:3000

### Docker Setup (When you cloned the repositories)

Both the frontend and backend have their own **Dockerfiles** in their respective directories (`client/` and `server/`). The project uses **Docker Compose** to manage services.

### Running with Docker Compose
1. Ensure your `.env` files are set up in `client/` and `server/` directories.
2. Run the following command to build and start all services:
   ```sh
   docker-compose up --build
   ```
3. Access the application:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000)

### Individual Docker Setup
#### Running the Backend (Node.js)
1. Navigate to the `server/` folder:
   ```sh
   cd server
   ```
2. Build and run the Docker container:
   ```sh
   docker build -t portfolio-backend .
   docker run -p 5000:5000 portfolio-backend
   ```

#### Running the Frontend (React.js)
1. Navigate to the `client/` folder:
   ```sh
   cd client
   ```
2. Build and run the Docker container:
   ```sh
   docker build . -t portfolio-frontend
   docker run -p 3000:3000 portfolio-frontend
   ```

## Environment Variables
Set up the following environment variables in `.env` files:
### Backend (`server/.env`)
```
PORT=5000
MONGO_URI=???
PUBLIC_URL=https://hoantran.eu
PORT=8000
```

### Frontend (`client/.env`)
```
REACT_APP_SERVER_URL=localhost:8000
```

## Contributing
Feel free to fork this repository and make improvements. Pull requests are welcome!

## License
MIT License

