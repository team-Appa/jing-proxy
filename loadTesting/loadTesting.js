import http from 'k6/http';

export let options = {
  stages: [
    { duration: '1m', target: 1 }, // below normal load
    { duration: '1m', target: 10 },
    { duration: '2m', target: 50 },
    { duration: '5m', target: 50 }, // around the breaking point
    // { duration: '5m', target: 100 }, // around the breaking point
    // { duration: '5m', target: 200 }, // around the breaking point
  ],
};

export default function () {
  var rand = Math.floor(Math.random() * 10) + 9999000;
  // var rand = Math.floor(Math.random() * 9999999);
  let responses = http.get(`http://54.237.209.206:3010/?id=${rand}`);
}
