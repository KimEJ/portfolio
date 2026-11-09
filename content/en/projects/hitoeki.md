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
links: [{"label": "TestFlight", "url": "https://testflight.apple.com/join/fRBQEEaN"}]
metrics: [{"value": "628 station choices", "label": "Available when issuing a ticket"}, {"value": "2 ways to ride", "label": "Destination ticket or IKA free ride"}, {"value": "5 UI languages", "label": "Korean, English, Japanese, Simplified and Traditional Chinese"}]
code: "EJ102"
status: {"label": "TestFlight beta", "tone": "go"}
---

## Problem

Timer apps feel dry when you want to focus or unwind. I wanted something closer to picking two stations, getting a paper ticket, boarding, and looking out the window until the time has passed.

## What I built

An iPhone and iPad app that takes you from choosing stations and receiving a ticket through boarding, riding, and arrival. Choose a destination ticket, or use IKA free ride to choose a train and a stop at which to get off. Platforms, window scenery, and transfers are rendered in Metal, while a Live Activity and widgets show progress on the Lock Screen.

## Design decisions

- **A continuous journey.** A 2D map supports ticketing and route review, while Metal scenes connect the platform, ride, and transfer experiences.
- **Load only the map data needed.** Japan's GSI PMTiles are read with HTTP Range requests and cached, avoiding a full map download in advance.
- **Distinguishing reality from the simulation.** Missing building heights are not invented, and the app avoids information that could be mistaken for real fares or a reservation service. IKA is a virtual way to ride and does not process real payments.
- **Only finished journeys count.** A trip you abandon is not recorded.

## Status

The beta is available through TestFlight.

<small>Maps: GSI Japan tiles · Terrain: PLATEAU (CC BY 4.0)</small>
