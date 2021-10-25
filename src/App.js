//libraries
import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router";
//styles
import "./App.css";
//pages
import DogPage from "./pages/DogPage";
import Index from "./pages/Index";
import MyDogs from "./pages/MyDogs";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Faq from "./pages/Faq";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import Market from "./pages/Market";
import ConvertToNTF from "./pages/ConvertToNFT";
import ConvertToNFT_Page_2 from "./pages/ConvertToNTF_Page_2";
import ConvertNFT_Page_3 from "./pages/ConvertNTF_Page_3";




export const AuthContext = React.createContext(null);

const authReducer = (state, action) => {
  switch (action.type) {
    case "login": {
      return { logged: true };
    }
    case "logout": {
      localStorage.removeItem("userID");
      return { logged: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, {
    logged: !!localStorage.getItem("userID"),
  });
  const value = { state, dispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
const GuardedRoute = ({ component: Component }) => {
  const { state } = useContext(AuthContext);
  return (
    <Route
      render={(props) =>
        (state.logged && <Component {...props} />) || <Redirect to="/" />
      }
    />
  );
};
function App() {
  document.cookie = "user=john; path=/; ";
  console.log(document.cookie);

  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>

        <Route
          path="/convertNTF_page_2/:dogid"
          component={ConvertToNFT_Page_2}
        ></Route>
        <Route
          path="/convertNTF_page_3/:dogid"
          component={ConvertNFT_Page_3}
        ></Route>

        <Route path="/convertNTF">
          <ConvertToNTF />
        </Route>

        <Route path="/transactions">
          <Transactions />
        </Route>

        <Route path="/convertNTF/:dogid" component={ConvertToNTF}></Route>
        <GuardedRoute
          path="/transactions"
          component={Transactions}
        ></GuardedRoute>

        <Route path="/settings">
          <Settings />
        </Route>

        <Route path="/market">
          <Market showElementsStatus={true} ShowConvertPage={false} />
        </Route>
        <GuardedRoute path="/my-dogs" component={MyDogs}></GuardedRoute>

        <Route path="/dog-page/:dogid" component={DogPage}></Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>

        <Route path="/Login" state="bar">
          <Login />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </AuthProvider>
  );
}

export default App;

// FTP - 193.42.110.169 - coindogs_com - 7tJXm&56&Ks%fG2^
// 193.42.110.169 - nft_coindogs_com - 7V*9@#z9Fdd_Bd9M
