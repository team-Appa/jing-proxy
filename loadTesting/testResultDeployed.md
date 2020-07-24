# Load Testing Result

- Using k6

```sh
import http from 'k6/http';

export let options = {
  stages: [
    { duration: '1m', target: 1 }, // below normal load
    { duration: '1m', target: 10 },
    { duration: '2m', target: 50 },
    { duration: '5m', target: 50 }, // around the breaking point
  ],
};

export default function () {
  var rand = Math.floor(Math.random() * 10) + 9999000;
  // var rand = Math.floor(Math.random() * 9999999);
  let responses = http.get(`http://54.237.209.206:3010/?id=${rand}`);
```

## Deployed Proxy Cloud Testing

### Testing one api endpoint, /api/reviews/?id={randomId}, id randomirized between 9999000 and 9999010 since k6 only allow 50vus and upda to 500 unique URL.

### - 50 max vus:

![K6 Report](https://drive.google.com/file/d/1xkD3mHWumZlYbXqxlj3CdcIZHJ_ioKt_/view?usp=sharing)