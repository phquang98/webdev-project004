import { MouseEventHandler, ReactNode } from "react";

type BtnProps = {
  className?: string;
  children: ReactNode;
  btnClickHdlr: MouseEventHandler<HTMLButtonElement>;
  btnText?: string;
  color?: string;
  bgColor?: string;
};

const Btn = (props: BtnProps): JSX.Element => {
  const { className, btnClickHdlr, children, btnText } = props;

  return (
    <>
      <div className={className}>
        <button className="btn" onClick={btnClickHdlr}>
          <span className="btn__icon">{children}</span>
          {btnText && <span className="btn__text">{btnText}</span>}
        </button>
      </div>
    </>
  );
};

export { Btn };
