1. Run old style
- npm start
2. Send heap signal
- kill -USR2 <pid>
3. Generate some requests:
- ab -c 50 -n 1000000 -k http://localhost:5001/
4. Send heap signal
- kill -USR2 <pid>

5. clear down modules
- rm -rf node_modules
- nvm use 6
- npm install
6. Run with modern inspect:
- npm run start-inspect
Generate some requests:
- ab -c 50 -n 1000000 -k http://localhost:5001/

Sides:
Memory Leak:
https://docs.google.com/presentation/d/1lHjM6Nb996G7jTTPEAf-b2olFQUFuJJa-yG4_bsA1Lo/edit#slide=id.p
