# Use an official Node.js Alpine image as a parent image
FROM node:14-alpine

RUN addgroup  app && adduser -S -G app app

USER app

# Set the working directory in the container
WORKDIR /usr/src/app



# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all local files into the image
COPY . .

# Expose the port your app runs on (e.g., 3000)
EXPOSE 8080

# Define the command to run your app
CMD ["npm", "start"]  
