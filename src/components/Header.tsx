import { type FC, HTMLAttributes } from "react";

export const Header: FC<HTMLAttributes<HTMLElement>> = function Header(props) {
  return (
    <header className={"bg-blue-600 py-3"}>
      {props.children}
    </header>
  );
};
