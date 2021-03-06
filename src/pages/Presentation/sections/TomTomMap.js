/* eslint-disable no-unused-vars */
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

import * as React from "react";
import { useState, useEffect, useRef } from "react";

import Container from "@mui/material/Container";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";

// eslint-disable-next-line no-unused-vars
import crimeSearch from "./CrimeSearch";

// https://developer.tomtom.com/blog/build-different/adding-tomtom-maps-modern-react-app

function TomTomMap() {
  const tomTomMap = useRef();
  const [lng, setLng] = useState(34.047548);
  const [lat, setLat] = useState(-118.256836);
  const [mapZoom, setZoom] = useState(13);
  const [map, setMap] = useState({});

  const addMarker = (locLng, locLat, toMap) => {
    // eslint-disable-next-line no-unused-vars
    const marker = new tt.Marker().setLngLat([locLng, locLat]).addTo(toMap);
  };

  const getCrimes = (toMap) => {
    crimeSearch().then((crimes) => {
      // eslint-disable-next-line array-callback-return
      crimes.map((item) => {
        addMarker(parseFloat(item.lon), parseFloat(item.lat), toMap);
      });
    });
  };

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const map = tt.map({
      key: "acTmhfIVvSA0PkBJ16eOMWz5bfCrXW5G",
      container: tomTomMap.current,
      center: [lat, lng],
      zoom: mapZoom,
    });
    setMap(map);
    getCrimes(map);
    return () => map.remove();
  }, []);

  return (
    <div className="MapComponent">
      <Container>
        <MKTypography variant="h2">Crime Map</MKTypography>
        <div ref={tomTomMap} className="mapDiv" style={{ width: "100%", height: "80vh" }} />
      </Container>
    </div>
  );
}

export default TomTomMap;
