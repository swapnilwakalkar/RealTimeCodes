import { LightningElement } from 'lwc';

export default class Geotracking007staticmap extends LightningElement {
    mapMarkers = [
        {
            location: {
                Street: '1000 5th Ave',
                City: 'New York',
                State: 'NY',
            },

            title: 'Metropolitan Museum of Art',
            description:
                'A grand setting for one of the greatest collections of art, from ancient to contemporary.',
        },
    ];
    mapOptions = {
        draggable: false,
        disableDefaultUI: true,
    };
}