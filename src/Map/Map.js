import React,{useState, useEffect} from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken='pk.eyJ1IjoidGhhbmhkYW5oIiwiYSI6ImNrbmN4YTUzZTBqZTUydnA1bnJueWM2YjcifQ.fbz9CqvNw6kLUok0E9HNQQ';
export default function Map({latitude, lngitude}) {
  
  const lat1 = parseFloat(latitude)
  const lng1 = parseFloat(lngitude)
  const [viewport, setViewport] = useState({
    latitude: lat1,
    longitude: lng1,
    zoom: 17
  }); 
  useEffect(() =>{
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/thanhdanh/cknqv1b400b1317pj6amljuvc', 
      center: [viewport.longitude, viewport.latitude],
      zoom: viewport.zoom
  })
    // const marker = new mapboxgl.Marker()
    // .setLngLat([viewport.longitude,viewport.latitude])
    // .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    //   .setHTML('<h3>' + "marker.properties.title" + '</h3><p>' + "marker.properties.description" + '</p>'))
    // .addTo(map);
    const marker =  new mapboxgl.Marker()
    .setLngLat([viewport.longitude,viewport.latitude])
    .setPopup(new mapboxgl.Popup({offset:25}).setHTML(<h1>+"addrees"+</h1>)).addTo(map)
  })
  return (
    <>
   
        <div id="map" className="map" style={{width:"100%",height:"100vh"}}>
        </div>
   
   
    </>
  )
}
