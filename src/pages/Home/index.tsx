import { createContext } from "react";

import { StyledListSection } from "components/ListSection/styles";
import { StyledTaskSection } from "components/TaskSection/styles";
import { TList } from "types";

type HomePageProps = {
  className?: string;
};

const delListDump: TList[] = [
  {
    id: "1",
    name: "Spotify",
    taskClt: []
  },
  {
    id: "2",
    name: "Games",
    taskClt: []
  },
  {
    id: "3",
    name: "Grocery shopping",
    taskClt: []
  }
];

export const ListCltCtx = createContext<TList[] | null>(null);

const HomePage = (props: HomePageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <div className="container">
          <ListCltCtx.Provider value={delListDump}>
            <StyledListSection />
            <StyledTaskSection />
          </ListCltCtx.Provider>
        </div>
      </div>
    </>
  );
};

export { HomePage };
