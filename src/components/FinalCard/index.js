import React from "react";
import useStore from "root/shared/useStore";

import Card from "../Card";

function FinalCard() {
  const { dispatch } = useStore();

  const handleBack = () => dispatch({ type: "select_question", payload: 10 });

  return (
    <Card>
      Game Over
      <button type="button" onClick={handleBack}>
        Go Back
      </button>
    </Card>
  );
}

export default FinalCard;
