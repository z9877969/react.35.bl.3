import { useContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";
import TransactionHistoryPage from "../_pages/TransactionHistoryPage";
import { BaseContext } from "../BaseProvider/BaseProvider";
import queryString from "query-string";
import AuthPage from "../_pages/AuthPage";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authActions";
import { useEffect } from "react";
import { getCurUser } from "../../redux/auth/authOperations";

// const parse = queryString.parse("?color=green&size=m");
// console.log("parse :>> ", parse);

const App = () => {
  const dispatch = useDispatch();
  const { costs, incomes, toggleActivePage } = useContext(BaseContext);
  const isAuth = useSelector(getIsAuth);

  const transactions = [...incomes, ...costs];
  const closeActivePage = () => toggleActivePage();

  useEffect(() => {
    isAuth && dispatch(getCurUser());
  }, []);

  return (
    <>
      {isAuth ? (
        <>
          <button onClick={() => dispatch(logOut())} type="button">
            LogOut
          </button>
          <Switch>
            <Route
              path="/transaction/:transType"
              exact
              component={TransactionPage}
            />
            <Route
              path="/history/:transType"
              component={TransactionHistoryPage}
            />
            <Route
              path="/balance"
              render={(routerProps) => (
                <BalancePage
                  {...routerProps}
                  transactions={transactions}
                  closeActivePage={closeActivePage}
                />
              )}
            />
            <Route path="/" exact component={MainPage} />
            {/* <Route path="/notFound">
            <h1>PageNotFound</h1>
          </Route> */}
            <Redirect to="/" />
          </Switch>
        </>
      ) : (
        <Switch>
          <Route path="/auth/:authType" component={AuthPage} />
          <Redirect to="/auth/login" />
        </Switch>
      )}
    </>
  );
};

export default App;
