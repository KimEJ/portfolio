---
kind: "personal"
tier: "featured"
order: 2
title: "Hitoeki"
summary: "A virtual Japanese train ride for iPhone, starting with a paper ticket"
period: {"start": "2026-10"}
role: "Product, design, engineering"
stack: ["Swift", "SwiftUI", "Metal", "ActivityKit", "WidgetKit", "PMTiles", "PLATEAU"]
platforms: ["ios"]
images: []
links: []
metrics: [{"value": "628", "label": "selectable stations"}, {"value": "96", "label": "UI tests"}, {"value": "5", "label": "languages"}]
code: "EJ102"
status: {"label": "In development", "tone": "wait"}
---

## Problem

Timer apps feel dry when you want to focus or unwind. I wanted something closer to picking two stations, getting a paper ticket, boarding, and looking out the window until the time has passed.

## What I built

An iPhone and iPad app that runs the whole trip: pick stations, receive a ticket, board, ride, arrive. Platforms, window scenery, and transfers are rendered in Metal, and progress shows on the Lock Screen through a Live Activity and widgets. Route, journey, and persistence logic lives in a local Swift package (HitoekiCore).

## Design decisions

- **Never download the whole map.** Japan's GSI PMTiles are read with HTTP Range requests, one tile at a time. A cached tile is reused only when its URL, ETag, and length all match.
- **No map SDK.** The 2D map and the Metal views share one loader with hard cache limits: 24 MiB for 2D raster, 48 MiB for Metal vectors, 64 MiB on disk.
- **No invented data.** When building heights are missing, the app does not make them up. It also shows no fake fares or serial numbers.
- **Only finished journeys count.** A trip you abandon is not recorded.

## Status

In development and not yet submitted to the App Store.

<small>Maps: GSI Japan tiles · Terrain: PLATEAU (CC BY 4.0)</small>
