# syntax=docker/dockerfile:1.4

# Create image based on the official Node image from dockerhub
FROM node:lts-buster AS development

# Create app directory
WORKDIR /front
# Copy dependency definitions
COPY package.json /front
COPY yarn.lock /front

# Install dependecies
#RUN npm set progress=false \
#    && npm config set depth 0 \
#    && npm i install
# RUN npm ci

# Get all the code needed to run the app
COPY . /front
# Expose the port the app runs in
EXPOSE 3001
RUN yarn install
CMD ["yarn", "start"]

FROM development as dev-envs
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD [ "npm", "start" ]