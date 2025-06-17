// performance-tests/rate-limit-test.js
import http from 'k6/http';
export const options = {
  scenarios: {
    high_req_rate: {
      executor: 'constant-arrival-rate',
      rate: 200,           // 200 iterations per second
      timeUnit: '1s',
      duration: '10s',
      preAllocatedVUs: 50,
      maxVUs: 100,
    },
  },
};
export default function () {
  http.get('http://localhost:3000/temperature');
}
