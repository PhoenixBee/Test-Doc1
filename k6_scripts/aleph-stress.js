import http from 'k6/http';
import { sleep, check } from 'k6';

// Stress Test
// increases load to evaluate system performance under high traffic
// and identify when performance degradation or failures begin.

export const options = {
  stages: [
    { duration: '2m', target: 50 },    // Ramp up to 50 users
    { duration: '3m', target: 50 },    // Hold at 50

    { duration: '2m', target: 100 },   // Ramp up to 100 users
    { duration: '3m', target: 100 },   // Hold at 100

    { duration: '2m', target: 250 },   // Ramp up to 250 users
    { duration: '5m', target: 250 },   // Hold at 250

    { duration: '3m', target: 500 },   // Ramp up to 500 users
    { duration: '5m', target: 500 },   // Hold at 500

    { duration: '3m', target: 1000 },  // Ramp up to 1000 users
    { duration: '5m', target: 1000 },  // Hold at 1000 (stress zone)

    { duration: '3m', target: 0 },     // Ramp down (recovery)
  ],
  thresholds: {
    http_req_failed: ['rate<0.10'],    // <10% failures acceptable under stress
    http_req_duration: ['p(95)<5000'], // 95% of requests under 5s
  },
};

export default function () {
  // Send request to landing page
  const res = http.get('https://staging.alephnull.io/');

  // Validate response
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // Simulate user think time
  sleep(1);
}