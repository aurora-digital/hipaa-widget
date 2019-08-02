import { useContext } from "react";
import StoreContext from "root/components/StoreProvider/StoreContext";

function useStore() {
  return useContext(StoreContext);
}

export default useStore;
