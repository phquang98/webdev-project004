/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from "react";

import { TList } from "types";

// NOTE: make this return a tuple to solidify the position inside the array https://www.puruvj.dev/blog/get-to-know-typescript--react-hooks-return-array-issue
const useListClt = (): [TList[], (listEle: TList) => void] => {
  const [listClt, setListClt] = useState<TList[]>([]);

  const setAddOne = (listEle: TList) => {
    setListClt([...listClt, listEle]);
    console.log("listClt", listClt);
  };

  return [listClt, setAddOne];
};

export { useListClt };

/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/* eslint-enable @typescript-eslint/explicit-function-return-type */
