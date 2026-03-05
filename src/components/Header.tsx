import { type FC } from "react";
import { COLORS_TEXT } from "../shared/ui/colors";
import { Typography } from "../shared/ui/Typography";

interface Props {
  count: number;
}

export const Header: FC<Props> = function Header(props) {
  return (
    <header className={"bg-blue-600 py-3"}>
      <Typography size={24} color={COLORS_TEXT.alternative} align={"center"}>
        {props.count}
      </Typography>
    </header>
  );
};
