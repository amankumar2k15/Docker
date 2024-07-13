#Code of Multi stage build

# Stage 1: Build the application 
FROM node:18 as builder
WORKDIR /build
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build


#Stage 2 :Create a lightweight image to run the application
FROM node:18 as runner
WORKDIR /app
# Copy the build artifacts from the previous stage
COPY --from=builder build/package*.json ./
COPY --from=builder build/node_modules node_modules/
COPY --from=builder build/dist dist/


CMD ["npm","start"]
