---
kind: "company"
tier: "archive"
order: 112
title: "Vehicle Tracking System"
summary: "Stores and visualizes trip logs from in-vehicle devices"
period: {"start": "2020-01", "end": "2021-03"}
role: "Server and web"
stack: ["Node.js", "MongoDB", "Docker", "Vue", "TypeScript"]
platforms: ["web", "server"]
cover: "/work/techplex/car-tracking/overview.png"
images: [{"src": "/work/techplex/car-tracking/overview.png", "alt": "System overview"}, {"src": "/work/techplex/car-tracking/main.png", "alt": "Home"}, {"src": "/work/techplex/car-tracking/detail.png", "alt": "Trip log"}]
links: []
code: "EJ912"
status: {"label": "Arrived", "tone": "go"}
---

## Problem

The team needed a way to receive vehicle device records and inspect travel routes and status over time.

## What I built

I built a server to receive trip records from in-vehicle devices and a web app to browse them. Users can search by date and vehicle, see routes on a map, and inspect trip details, speed, and distance in tables and charts.

## Architecture

Devices send records over MQTT to the server for storage; the web app retrieves them for display.
