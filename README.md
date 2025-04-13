## Simple intro Docker Project

<p>This is the project to get started with docker, learn about docker images, containers, compose files and also how microservices works using docker. For this following project I have used vite react and a express server. In frontend directory I have created docker image for frontend container and in backend directory I have created backend image for backend container. Lastly, I setup the a docker compose file int root directory. </p>

<p><b>Prerequisites:</b></p>
Download and install docker desktop:
https://www.docker.com/products/docker-desktop/

## To Run the project

1. Clone this repo:
   
   <code> git clone https://github.com/EclipseDaemon/Docker-Intro </code>

2. Open Docker Desktop.
3. In the root directory wher you have cloned the project, run this following command:
   
   <code>docker compose up -d --build</code>

4. It will take 2-3 minutes for project to be live after you see the created and build in the terminal. Check docker desktop you can see two images created and two containers running.
5. Visit <code>localhost:5173</code> to check frontend and visit <code>localhost:3000</code> to check the backend.


<h4>Thank You</h4>

   


