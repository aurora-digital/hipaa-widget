import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "root/pages/Home";
import Questions from "root/pages/Questions";
import Results from "root/pages/Results";

import "./Inner.css";

function Inner({ location, history }) {
  const current = useSelector(state => state.current);

  useEffect(() => {
    if (current > 8) history.push("/results");
  }, [current]);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, stiffness: 0.1 }}
      >
        <div className="wrapper">
          <div className="page">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/questions" component={Questions} />
              <Route exact path="/results" component={Results} />
            </Switch>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

Inner.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(Inner);
