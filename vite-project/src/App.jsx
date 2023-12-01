import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntakeForm from './pages/IntakeForm.jsx';
import Form2 from './pages/Form2.jsx'; // Assuming this is your form component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/form1" element={<IntakeForm />} />
          <Route path="/form2" element={<Form2 />} />
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
