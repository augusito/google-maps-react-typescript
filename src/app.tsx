import './app.css';
import { Map, Marker, Wrapper } from './components/map';

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || '';

function App() {
  const center = { lat: -1.272941, lng: 36.8111434 };
  const zoom = 18;

  return (
    <Wrapper apiKey={GOOGLE_API_KEY}>
      <Map center={center} zoom={zoom}>
        <Marker position={center} title="Hello World!" />
      </Map>
    </Wrapper>
  );
}

export default App;
