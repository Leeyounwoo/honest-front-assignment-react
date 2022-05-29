import { Navigate, Route, Routes } from 'react-router';
import IdentityAuthentication from './pages/IdentityAuthentication';
import PhoneCertification from './pages/PhoneCertification';
import './styles.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/identity-authentication" replace />}
      />
      <Route
        path="/identity-authentication"
        element={<IdentityAuthentication />}
      />
      <Route path="/phone-certification" element={<PhoneCertification />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
