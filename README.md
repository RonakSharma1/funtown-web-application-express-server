# Development environment

## Scripts

In the project directory, you can run:

### `npm start`

Runs the express server in the development mode.
Naviagate [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Docker

- Ensure this repo i.e.[FunTown-Server](https://github.com/RonakSharma1/funtown-web-application-express-server) and [FunTown-Web-App](https://github.com/RonakSharma1/funtown-web-application) are moved to a common root directory
- Move the `docker-compose.yml` to the top level of directory
Then run the following command;

### `docker-compose up`
This builds and automatically runs both the images in dev environment using `Dockerfile.dev`. This already defines the port mapping. Therefore, naviagate [http://localhost:3000](http://localhost:3000) to view it in the browser. 

# Production environment

## Docker

### Running existing image
To use an existing image, run the following commands
 - `docker pull ronaksharma/multi-funtownserver`
 - `docker run -p 5000:5000 ronaksharma/multi-funtownserver`
 
### Creating new image
To create a new image, run the following commands
 - `docker login`
 - `docker build -t givenName .` : Uses `Dockerfile` to create a production build. For this both prod and dev Dockerfiles are same
 - `docker push` : Pushes image to DockerHub
 - `docker run -p 5000:5000 givenName`: Runs the image using nginx server on port 3000 (localhost:docker)
 
 Note: This will push the image to your dockerHub and will not update the existing image
 
### Testing running image
To test any running image you can call the `BoredApi` without requiring an api-key as follows;
 - `http://localhost:5000/boredApi?numberOfParticipants=2`