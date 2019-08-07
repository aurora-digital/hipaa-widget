import { useContext } from "react";
import StoreContext from "root/components/StoreProvider/StoreContext";

function useStore() {
  const { state, dispatch } = useContext(StoreContext);

  const customDispatch = args => {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log(`[DEBUG] Action dispatched: ${JSON.stringify(args)}`);
    }

    return dispatch(args);
  };

  return { state, dispatch: customDispatch };
}

export default useStore;
