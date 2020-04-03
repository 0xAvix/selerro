import React, { useEffect, lazy, Suspense } from "react";
import Header from "./components/header/header.component.jsx";
import Footer from "./components/footer/footer.component.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors.js";
import { checkCurrentUser } from "./redux/user/user.actions.js";
import { GlobalStyle } from "./global.styles.js";
import Spinner from "./components/spinner/spinner.component.jsx";
import ErrorBoundary from "./components/error-boundary/error-boundary.component.jsx";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component.jsx"));
const SignInAndSignUpPage = lazy(() =>
  import("./components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx")
);
const AboutPage = lazy(() => import("./pages/about/about.component"));
const ContactPage = lazy(() => import("./pages/contact/contact.component"));
const CheckoutPage = lazy(() =>
  import("./pages/checkout/checkout.component.jsx")
);

const App = ({ checkCurrentUser, currentUser }) => {
  useEffect(() => {
    checkCurrentUser();
  }, [checkCurrentUser]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route
              exact
              path="/checkout"
              component={currentUser ? CheckoutPage : SignInAndSignUpPage}
            />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkCurrentUser: () => dispatch(checkCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
