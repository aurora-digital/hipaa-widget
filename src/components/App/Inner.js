import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, withRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "root/pages/Home";
import Questions from "root/pages/Questions";

import "./Inner.css";

function Inner({ location }) {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, stiffness: 0.1 }}
      >
        <div className="wrapper">
          <div className="page">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/questions" component={Questions} />
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
  }).isRequired
};

export default withRouter(Inner);
