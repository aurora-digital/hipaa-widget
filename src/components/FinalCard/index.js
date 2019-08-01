import React, { useContext } from "react";
import StoreContext from "../StoreProvider/StoreContext";
import Card from "../Card";

function FinalCard() {
  const { dispatch } = useContext(StoreContext);

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
