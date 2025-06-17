import http from 'k6/http';

export const options = {
  scenarios: {
    high_req_rate: {
      executor: 'constant-arrival-rate',
      rate: 200,
      timeUnit: '1s',
      duration: '10s',
      preAllocatedVUs: 50,
      maxVUs: 100,
    },
  },
};

export default function () {
  http.get('https://temperature-api-3rg8.onrender.com/temperature');
}
