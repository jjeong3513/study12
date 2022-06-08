
import './App.css';
import Header from './components/Header/Header';
import MainFeed from './components/MainFeed/MainFeed';

function App() {
  return (
    <div className="App">
        <Header /> {/* 컴포넌트 이름 불러오기 */}
        <MainFeed />
    </div>
  );
}

export default App;
