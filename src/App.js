import './App.css';
import Header from "src\components\Header.js";
import Sidebar from "src\components\Sidebar.js"

function App() {
  return (
    // We will use React Router for chat screen it will quickly change the screen without refreshing the page
    // BEM(Block Element Modifier) naming convention
    <div className="app">
      <h1>Let's build Slack clone</h1> 
      <Header/>
      <div className="app_body">
        <Sidebar/> 
      </div>
    </div>
  );
}

export default App;
 