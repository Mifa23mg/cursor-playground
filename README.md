# Territory Highlights - Lightning Web Components

This project contains a 1:1 representation of the Territory Highlights dashboard using **Lightning Design System (SLDS)** components and styling, aligned with the Lightning Web Components extension blueprints.

## Project Structure

```
Cursor Playground/
├── index.html              # Standalone preview (open in browser)
├── sfdx-project.json       # Salesforce DX project config
├── force-app/
│   └── main/
│       └── default/
│           └── lwc/
│               └── territoryHighlights/   # LWC component for Salesforce
│                   ├── territoryHighlights.html
│                   ├── territoryHighlights.js
│                   ├── territoryHighlights.css
│                   └── territoryHighlights.js-meta.xml
└── README.md
```

## Quick Preview (No Salesforce Required)

Open `index.html` in a browser to see the dashboard. It uses:
- **Lightning Design System (SLDS)** CSS from CDN
- SLDS component classes (`slds-card`, `slds-tabs_scoped`, `slds-table`, etc.)
- Animated donut charts on first load

## Deploy to Salesforce

1. Install [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli)
2. Authenticate: `sf org login web`
3. Deploy: `sf project deploy start --source-dir force-app`
4. Add the `territoryHighlights` component to an App Page, Home Page, or Record Page

## LWC Components Used (from extension blueprints)

| Blueprint | Component | Usage |
|-----------|-----------|-------|
| lwc-card | lightning-card | Main container, account section, donut cards, events, tasks |
| lwc-tabset | lightning-tabset | My Accounts / Unread Emails tabs |
| lwc-tab | lightning-tab | Tab panels |
| lwc-datatable | lightning-datatable | Accounts table with sortable columns |
| lwc-button | lightning-button | View All Accounts, View Report, View All |
| lwc-button-icon | lightning-button-icon | Refresh, Settings, Expand |
| lwc-progress-ring | lightning-progress-ring | Donut chart placeholders |
| lwc-input-checkbox | lightning-input | Task checkboxes |
| lwc-formatted-url | lightning-formatted-url | Event links |

## Styling

All styling follows the Lightning Design System. The LWC component uses SLDS utility classes (`slds-grid`, `slds-p-around_medium`, etc.) and custom CSS only where needed (e.g., donut chart positioning).
