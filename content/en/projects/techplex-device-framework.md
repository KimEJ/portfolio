---
kind: "company"
tier: "archive"
order: 111
title: "Device Control Framework"
summary: "Desktop app, server, and web for devices built on an in-house LTE modem"
period: {"start": "2019-01", "end": "2020-06"}
role: "Desktop, server, web"
stack: ["Electron", "Vue", "TypeScript", "Node.js", "AWS"]
platforms: ["desktop", "web", "server"]
cover: "/work/techplex/bike/overview.png"
images: [{"src": "/work/techplex/bike/overview.png", "alt": "System overview"}, {"src": "/work/techplex/bike/app-main.png", "alt": "App home"}, {"src": "/work/techplex/bike/web-main.png", "alt": "Web home"}, {"src": "/work/techplex/bike/web-gps.png", "alt": "Location detail"}]
links: []
code: "EJ911"
status: {"label": "Arrived", "tone": "go"}
---

## Problem

Devices using the in-house LTE modem needed to be controlled directly in the field, with their status and location also available on the web.

## What I built

I developed a desktop application for connecting to a device and checking its status and settings, along with a server and web app to record and control device status. The web app displays the device list, battery status, and location.

## Architecture

The desktop app connects to the device over serial, while the device communicates with AWS IoT Core over MQTT. The server and web app provide access to device information.
