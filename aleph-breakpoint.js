import http from 'k6/http';
import { sleep, check } from 'k6';

// Breakpoint Test
// This test gradually increases load to determine the maximum capacity
// the system can handle before performance degrades or failures occur.

export const options = {
  stages: [
    { duration: '2m', target: 100 },   // Ramp up to 100 users
    { duration: '2m', target: 300 },   // Increase to 300 users
    { duration: '2m', target: 600 },   // Increase to 600 users
    { duration: '2m', target: 1000 },  // Increase to 1000 users
    { duration: '2m', target: 1500 },  // Push beyond expected capacity
  ],
  thresholds: {
    http_req_failed: ['rate<0.10'],    // Fail if more than 10% of requests fail
    http_req_duration: ['p(95)<5000'], // 95% of requests should complete in under 5 seconds
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