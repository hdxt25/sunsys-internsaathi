# Stage 1: Build Dependencies
FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY . .

# Stage 2: Distroless Runtime
FROM gcr.io/distroless/nodejs22-debian12
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3000
CMD ["server.js"]
