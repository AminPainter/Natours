import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { useTheme } from '@mui/material';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYW1pbi11ZC1kYXVsYSIsImEiOiJja2J5cTZ2bXMxMjk5MzNteDRrd3ZjaXpmIn0.bRBsSq1jnudprMURHfaN5A',
});

const TourMap = () => {
  const theme = useTheme();

  return (
    <Map
      style='mapbox://styles/amin-ud-daula/ckbyqljju23961iqrnbxjz3pk'
      containerStyle={{
        height: '28rem',
        width: '100%',
        marginTop: theme.margin.skewCover,
        clipPath: theme.clipPath.singleWedge,
      }}>
      <Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  );
};

export default TourMap;
