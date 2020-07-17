import http from 'k6/http';

export let options = {
  stages: [
    { duration: '1m', target: 1 }, // below normal load
    { duration: '1m', target: 10 },
    { duration: '2m', target: 100 },
    { duration: '2m', target: 200 }, // around the breaking point
    { duration: '5m', target: 200 }, // around the breaking point
  ],
};

export default function () {
  var rand = Math.floor(Math.random() * 9999999);
  let responses = http.get(`http://localhost:3010/?id=${rand}`);
}
