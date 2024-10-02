import './App.css';
import Admin from './components/admin/Admin';
import Utilisateur from './pages/utilisateurs/Utilisateur';
import LoginForm from './pages/connexion/LoginForm';
function App() {
  return (
    <div className="App">
      <h1>Material-UI Buttons</h1>
      <h1>Resouder un bug</h1>
      <Admin />
      <Utilisateur />
      <LoginForm />
    </div>
  );
}

export default App;
