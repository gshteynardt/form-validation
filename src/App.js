import './App.css';
import { Auth } from "./containers/Auth/Auth";
import { QuizCreator } from "./containers/QuizCreator/QuizCreator";
import Layout from "./hocs/Layout/Layout";
import {Quiz} from "./containers/Quiz/Quiz";

function App() {
  return (
    <Layout>
      <Auth/>
      <QuizCreator/>
      <Quiz/>
    </Layout>
  );
}

export default App;
