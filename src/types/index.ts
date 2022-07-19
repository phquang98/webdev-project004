export type TList = {
  id: string;
  name: string;
  taskClt: TTask[];
};

export type TTask = {
  id: string;
  desc: string;
  status: "finished" | "unfinished";
};
