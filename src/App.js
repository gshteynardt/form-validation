import './App.css';
import { Auth } from "./containers/Auth/Auth";
import {QuizCreator} from "./containers/QuizCreator/QuizCreator";

function App() {
  return (
    <div className="App">
      <Auth/>
      <QuizCreator/>
    </div>
  );
}

export default App;
