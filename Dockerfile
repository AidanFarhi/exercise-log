FROM node:20-alpine as builder

WORKDIR /app

COPY . .

# npm ci ensures exact versions in the lockfile get used
RUN npm ci

CMD npm run start
