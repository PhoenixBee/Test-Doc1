import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10,
  duration: '1m',
};

// 👉 Replace with your real cookie name + value
const COOKIE = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMTlkOGFkYy1iMTVlLTRlMDUtODllNS1hYzUwMzY2ZjNjMGMiLCJlbWFpbCI6ImNoZUB5b3BtYWlsLmNvbSIsInJvbGUiOiJyZXRhaWwiLCJ0eXBlIjoicmV0YWlsIiwianRpIjoiYTA4Mjc4MjUtNzIyNy00ZWViLTk1YmMtMGZlODIxYTYyZDE4IiwiaWF0IjoxNzc0ODY5NjM4LCJleHAiOjE3NzQ5MTI4Mzh9.0zqdFEeFtAghBQ7rPvk1qF5wEz-6j7y27O1SocfYVhI';

export default function () {
  const res = http.get('https://staging.alephnull.io', {
    headers: {
      Cookie: COOKIE,
    },
  });

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}