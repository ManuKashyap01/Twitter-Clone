import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
function App() {
  return (
    // BEM-convention for classnames
    <div className="app">
      {/* Sidebar */}
      <Sidebar/>
      {/* Feed */}
      <Feed/>
      {/* Widgets */}
      <Widget/>
    </div>
  );
}

export default App;
