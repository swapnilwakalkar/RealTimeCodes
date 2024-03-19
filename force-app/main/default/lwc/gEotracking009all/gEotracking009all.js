import { LightningElement } from 'lwc';

export default class GEotracking009all extends LightningElement {

   
        mapMarkers = [
            {
                location: {
                    // Location Information
                    City: 'hyderabad',
                    Country: 'India',
                    PostalCode: '500039',
                    State: 'telangana',
                    Street: 'ramanthapur Road',
                },
                mapIcon: {
                path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
                fillColor: 'gold',
                fillOpacity: 0.8,
                strokeWeight: 0,
                scale: 0.10,
                anchor: {x: 122.5, y: 115}
                },
    
                // For onmarkerselect
                value: 'SF1',
    
                // Extra info for tile in list & info window
                icon: 'standard:account',
                title: 'Julies Kitchen', // e.g. Account.Name
                description: 'This is a long description',
            },
            {
                location: {
                    // Location Information
                    City: 'hyderabad',
                    Country: 'India',
                    PostalCode: '500039',
                    State: 'telangana',
                    Street: 'ramanthapur Road',
                },
                  type: 'Circle',
                radius: 200,
                strokeColor: '#FFF000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FFF000',
                fillOpacity: 0.35,
    
                // For onmarkerselect
                value: 'SF2',
    
                // Extra info for tile in list
                icon: 'standard:account',
                title: 'Tender Greens', // e.g. Account.Name
            },
        ];
        zoomLevel = 15;
        listView = 'visible';
        
        /*markersTitle = 'Coordinates for Centering';
    
       center = {
            location: { Latitude: '40.7831856', Longitude: '-73.9675653' },
        };
        mapOptions = {
            draggable: false,
            disableDefaultUI: true,
        }; */
    
        selectedMarkerValue = 'SF1';
    
        handleMarkerSelect(event) {
            this.selectedMarkerValue = event.target.selectedMarkerValue;
        }
    }
        