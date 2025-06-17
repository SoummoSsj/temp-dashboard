// performance-tests/scalability-test.js
import http from 'k6/http';
export let options = {
  stages: [
    { duration: '1m', target: 200 },    // Ramp to 200 users over 1 minute
    { duration: '2m', target: 1000 },   // Ramp to 1000 users over 2 minutes
    { duration: '1m', target: 1000 },   // Stay at 1000 users for 1 minute
    { duration: '1m', target: 0 }       // Ramp down to 0
  ],
};
export default function () {
 http.get('http://localhost:3000/temperature');

}
