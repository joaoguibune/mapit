import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  //zoomLevel
  zoom: number = 13;
  //Start Position
  lat: number = -25.4289541;
  lng: number = -49.267137;
  //Markers
  markers : marker[] = [
    {
      name:'Ônibus 1',
      lat: -25.4477902,
      lng:-49.2918833,
      draggable: true
    },
    {
      name:'Ônibus 2',
      lat: -25.4482116,
      lng:-49.2769866,
      draggable: true
    },
    {
      name:'Ônibus 3',
      lat: -25.421124,
      lng:-49.259533,
      draggable: true
    }
  ]

  constructor(){
    
  }
  clickedMarker(marker:marker, index:number){
    console.log()
  }

  mapClicked($event:any){
    var newMarker = {
      name:'Untitled',
      lat:$event.coords.lat,
      lng: $event.coords.lng,
      draggable:false
    }
    this.markers.push(newMarker)
  }
  markerDragEnd(marker:any, $event:any){
    var updMarker ={
      name:marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable:false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }
}

interface marker{
  name?:string;
  lat:number;
  lng:number;
  draggable:boolean;
}
