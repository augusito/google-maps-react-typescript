import './app.css';
import { GoogleMap, Marker, Wrapper } from './components/google-map';

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || '';

function App() {
  const center = { lat: -1.272941, lng: 36.8111434 };
  const zoom = 18;

  return (
    <Wrapper apiKey={GOOGLE_API_KEY}>
      <GoogleMap center={center} zoom={zoom}>
        <Marker position={center} title="Hello World!" />
      </GoogleMap>
    </Wrapper>
  );
}

export default App;
