# AlephNull Load & Performance Testing (k6)

This repository contains **load, performance, and stress testing scripts** for the AlephNull application, implemented using [k6.io](https://k6.io/). The tests simulate various user scenarios to assess system stability, scalability, and performance.

## Test Scenarios

- **Nominal Load** – Typical user traffic.  
- **Soak / Endurance** – Sustained moderate traffic over time.  
- **Stress Test** – Gradually increasing user load to identify breaking points.  
- **Spike Test** – Sudden surges of traffic to assess system recovery.  
- **Breakpoint / Maximum Capacity** – Maximum concurrent users the system can handle.

## Features

- Supports **authenticated session-based tests** using real session cookies.  
- Configurable **virtual users (VUs)** and test durations.  
- Includes **response time** and **error rate checks** aligned with SLA targets.  
- Generates **k6 metrics and thresholds** for performance evaluation.

## Purpose

- Validate system stability and scalability.  
- Identify performance bottlenecks under various load scenarios.  
- Provide actionable insights for production readiness and optimization.

## Usage

1. Clone the repository:  
   ```bash
   git clone https://github.com/PhoenixBee/Load-Stress-k6.git
   
3. Install k6
4. Run tests using: k6 run <script.js>
5. Analyze results via terminal output or export to JSON/CSV for visualization: k6 run --out json=results.json <script.js>
