WORKDIR /usr/scr/app

COPY package*.json ./

RUN npm install 

# Copy whatever it is here, we will copy it over to this file. 
COPY . .

EXPOSE 3000

# RUN npm run build
# this work?

CMD ["npm", "start"]