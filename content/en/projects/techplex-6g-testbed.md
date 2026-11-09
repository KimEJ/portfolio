---
kind: "company"
tier: "archive"
order: 113
title: "6G Base Station Test System"
summary: "Desktop app for testing and monitoring partner 6G base stations on a testbed"
period: {"start": "2021-04", "end": "2022-07"}
role: "Desktop app"
stack: ["Electron", "Vue", "TypeScript"]
platforms: ["desktop"]
cover: "/work/techplex/6G/overview.png"
images: [{"src": "/work/techplex/6G/overview.png", "alt": "System overview"}, {"src": "/work/techplex/6G/InterfaceCheck.png", "alt": "Interface check"}, {"src": "/work/techplex/6G/FileSend.png", "alt": "File transfer test"}, {"src": "/work/techplex/6G/RXTX.png", "alt": "Throughput test"}]
links: []
code: "EJ913"
status: {"label": "Arrived", "tone": "go"}
---

## Problem

Testing a partner's 6G base stations on a testbed required a tool for checking interfaces and data transmission status.

## What I built

I built an Electron desktop application to run testbed tests and inspect results, including interface checks, file transfer tests, and send and receive throughput tests.

## Architecture

The desktop app connects to a server over TCP, and the server communicates with the testbed.
