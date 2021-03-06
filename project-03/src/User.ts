import { name, address } from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'blue';

    constructor() {
        this.name = name.firstName();
        this.location = {
            lat: parseFloat(address.latitude()),
            lng: parseFloat(address.longitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}