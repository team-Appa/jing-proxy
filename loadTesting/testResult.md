# Load Testing Result

- Using K6
- Test scenario
  - randomly generating id everytime
  - ramp up virtual user from 1 to 200
  - Can reach over 2K RPS

```sh
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
```

## Local Service

### Testing one api endpoint, /api/reviews/?id={randomId}, retrieve reviews for the same itemid

### - 200 max vus:

- Output:

  execution: local

       output: -
       script: loadTesting/loadTesting.js

      duration: -,  iterations: -
           vus: 1, max: 200

      done [==========================================================] 11m0s / 11m0s

      data_received..............: 2.0 GB  3.1 MB/s
      data_sent..................: 132 MB  199 kB/s
      http_req_blocked...........: avg=1.65µs   min=0s       med=1µs     max=9.23ms   p(90)=2µs     p(95)=3µs
      http_req_connecting........: avg=34ns     min=0s       med=0s      max=681µs    p(90)=0s      p(95)=0s
      http_req_duration..........: avg=58.55ms  min=333µs    med=74.78ms max=414.74ms p(90)=92.89ms p(95)=102.59ms
      http_req_receiving.........: avg=143.12µs min=12µs     med=21µs    max=199.07ms p(90)=42µs    p(95)=55µs
      http_req_sending...........: avg=9.24µs   min=4µs      med=8µs     max=61.37ms  p(90)=13µs    p(95)=16µs
      http_req_tls_handshaking...: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s
      http_req_waiting...........: avg=58.4ms   min=305µs    med=74.73ms max=376.28ms p(90)=92.47ms p(95)=102.06ms
      http_reqs..................: 1447075 2192.537841/s
      iteration_duration.........: avg=58.6ms   min=371.47µs med=74.82ms max=414.83ms p(90)=92.94ms p(95)=102.66ms
      iterations.................: 1447075 2192.537841/s
      vus........................: 200     min=1   max=200
      vus_max....................: 200     min=200 max=200
