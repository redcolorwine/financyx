import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Plans from './components/plans/plans';
import Reports from './components/reports/reports';
import Review from './components/review/review';
import ReviewContainer from './components/review/reviewContainer';
import Transactions from './components/transactions/transactions';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_wrapper">
        <Routes>
          <Route path='/review' element={<ReviewContainer />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='*' element={<ReviewContainer />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
