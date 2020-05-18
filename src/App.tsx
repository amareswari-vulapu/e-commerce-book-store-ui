// The Parent component of the application.
import React from "react";
import { Provider } from "react-redux";
import { ApplicationState } from "./store";
import { Store } from "redux";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./routes";

interface MainProps {
  store: Store<ApplicationState>;
  history: History;
}

const App: React.FC<MainProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
    </Provider>
  );
};

export default App;
