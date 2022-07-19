import { ReactNode } from "react";

type PaperProps = {
  className?: string;
  children?: ReactNode;
  width: number;
  height: number;
};

const Paper = (props: PaperProps): JSX.Element => {
  const { className, children } = props;

  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};

export { Paper };
