FROM node:6.16.0
RUN mkdir /proxy
ADD . /proxy
WORKDIR /proxy
RUN npm install

EXPOSE 3010
CMD ["node", "server/index.js"]