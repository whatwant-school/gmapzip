FROM node:14.15.1

WORKDIR /src
COPY . .

RUN npm install
RUN npm run build

EXPOSE 8080
CMD npm run start
