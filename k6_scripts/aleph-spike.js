import http from 'k6/http';
import { sleep, check } from 'k6';

// Spike Test
// This test evaluates how the system handles a sudden and significant increase in traffic.
// The goal is to ensure the system remains stable and performs well during unexpected spikes.

export const options = {
  stages: [
    { duration: '1m', target: 50 },     // Ramp up to 50 users
    { duration: '30s', target: 1000 },  // Sudden spike to 1000 users
    { duration: '2m', target: 1000 },   // Maintain 1000 users for a short period
    { duration: '1m', target: 50 },     // Ramp down to 50 users
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