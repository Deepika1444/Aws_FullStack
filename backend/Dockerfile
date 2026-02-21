FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000
ENV MONGO_URI=mongodb://65.0.103.72:27017/register_db

EXPOSE 5000

CMD ["npm", "start"]
