import './app.css';
import { GoogleMap, Marker, Wrapper } from './components/google-map';

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || '';

function App() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return (
    <Wrapper apiKey={GOOGLE_API_KEY}>
      <GoogleMap center={center} zoom={zoom}>
        <Marker position={center} title="Hello World!" />
      </GoogleMap>
    </Wrapper>
  );
}

export default App;
