FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/JoshuaTechInfo/Jovia-Md /root/Jovia
WORKDIR /root/Jovia/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
 