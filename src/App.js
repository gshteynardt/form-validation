import React from 'react';
import { Auth } from "./containers/Auth/Auth";
import { QuizCreator } from "./containers/QuizCreator/QuizCreator";
import { Quiz } from "./containers/Quiz/Quiz";
import { Layout } from "./hocs/Layout/Layout";
import { QuizList } from "./containers/QuizList/QuizList";
import { Route, Switch } from "react-router-dom";


export const App = () => {
  return (
    <Layout>
      <Switch>

        <Route path={'/auth'}>
          <Auth/>
        </Route>

        <Route path={'/quiz-creator'}>
          <QuizCreator/>
        </Route>

        <Route path={'/quiz/:id'}>
          <Quiz/>
        </Route>

        <Route path={'/'}>
          <QuizList/>
        </Route>

      </Switch>
    </Layout>
  );
}

