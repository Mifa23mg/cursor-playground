import { LightningElement } from 'lwc';

export default class TerritoryHighlights extends LightningElement {
    tableColumns = [
        { label: 'Territory', fieldName: 'territory', type: 'text', sortable: true },
        { label: 'Account Name', fieldName: 'accountName', type: 'text', sortable: true },
        { label: 'Last Visit', fieldName: 'lastVisit', type: 'text', sortable: true },
        { label: 'Location', fieldName: 'location', type: 'text', sortable: true },
        { label: 'Predicted Risk Score', fieldName: 'riskScore', type: 'text', sortable: true },
        { label: 'PCAs', fieldName: 'pcas', type: 'text', sortable: true },
        { label: 'Delivered Education', fieldName: 'education', type: 'text', sortable: true },
        { label: 'Overall Risk', fieldName: 'overallRisk', type: 'text', sortable: true },
        { label: 'Specialty', fieldName: 'specialty', type: 'text', sortable: true }
    ];

    tableData = [
        { id: '1', territory: '—', accountName: '—', lastVisit: '—', location: '—', riskScore: '—', pcas: '—', education: '—', overallRisk: '—', specialty: '—' },
        { id: '2', territory: '—', accountName: '—', lastVisit: '—', location: '—', riskScore: '—', pcas: '—', education: '—', overallRisk: '—', specialty: '—' },
        { id: '3', territory: '—', accountName: '—', lastVisit: '—', location: '—', riskScore: '—', pcas: '—', education: '—', overallRisk: '—', specialty: '—' },
        { id: '4', territory: '—', accountName: '—', lastVisit: '—', location: '—', riskScore: '—', pcas: '—', education: '—', overallRisk: '—', specialty: '—' },
        { id: '5', territory: '—', accountName: '—', lastVisit: '—', location: '—', riskScore: '—', pcas: '—', education: '—', overallRisk: '—', specialty: '—' },
        { id: '6', territory: '—', accountName: '—', lastVisit: '—', location: '—', riskScore: '—', pcas: '—', education: '—', overallRisk: '—', specialty: '—' },
        { id: '7', territory: '—', accountName: '—', lastVisit: '—', location: '—', riskScore: '—', pcas: '—', education: '—', overallRisk: '—', specialty: '—' }
    ];
}
