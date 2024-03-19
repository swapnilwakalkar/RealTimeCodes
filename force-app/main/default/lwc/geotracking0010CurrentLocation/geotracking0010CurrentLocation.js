import { LightningElement } from 'lwc';

export default class Geotracking0010CurrentLocation extends LightningElement {

        markerVar = [];
            //lstMarkers   
        constructor() {
            super();
            console.log('get current location in constructor');
           this.myCurrentLocationOnGoogleMap();    
        } 
    
        myCurrentLocationOnGoogleMap(){
            if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {            
                        var latVal = position.coords.latitude;
                        var longVal = position.coords.longitude;
                        this.markerVar = [{
                            location : {
                                Latitude: latVal,
                                Longitude : longVal
                            },
    
                        title : 'Your Current Location are here'
                       }];
                });
            }

        }
    
    } 

  