import http from 'k6/http';
import { check, sleep } from 'k6';

// Baseline (Nominal) Load Test
// Measure performance under normal expected traffic conditions

export const options = {
  vus: 10,             // number of virtual users
  duration: '20s',     // test duration

  thresholds: {
    http_req_failed: ['rate<0.10'],     // <10% request failures
    http_req_duration: ['p(95)<2000'],  // 95% of requests under 2s
  },
};

export default function () {
  // Hit the main landing page
  const res = http.get('https://staging.alephnull.io/');

  // Validate main page response
  check(res, {
    'landing page status is 200': (r) => r.status === 200,
  });

  // Simulate user think time
  sleep(1);
}