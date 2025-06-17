import http from 'k6/http';

export let options = {
  stages: [
    { duration: '1m', target: 200 },
    { duration: '2m', target: 1000 },
    { duration: '1m', target: 1000 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  http.get('https://temperature-api-3rg8.onrender.com/temperature');
}
