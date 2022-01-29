FROM node

WORKDIR /the/workdir/path

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev", "--inspect"]