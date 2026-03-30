import http from 'k6/http';
import { sleep, check } from 'k6';

// Soak (Endurance) Test
// This test evaluates how the system performs under sustained load over an extended period.
// The goal is to detect issues like memory leaks, resource exhaustion, or performance degradation.

export const options = {
  stages: [
    { duration: '5m', target: 200 },   // Ramp up to 200 users
    { duration: '30m', target: 200 },  // Maintain 200 users for long run
    { duration: '5m', target: 0 },     // Ramp down to 0 users
  ],
  thresholds: {
    http_req_failed: ['rate<0.10'],    // Fail if more than 10% of requests fail
    http_req_duration: ['p(95)<5000'], // 95% of requests should complete in under 5 seconds
  },
};

export default function () {
  // Send GET request to the landing page
  const res = http.get('https://staging.alephnull.io/');

  // Check that the response is successful
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // Simulate user think time
  sleep(1);
}