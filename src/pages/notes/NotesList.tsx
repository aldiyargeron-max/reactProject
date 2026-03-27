import { FC } from "react";
import { useNavigate } from "@tanstack/react-router";
import { COLORS_BORDER } from "../../shared/ui/colors";
import { Button } from "../../shared/ui/Button";
import { Card } from "../../shared/ui/Card";
import { Typography } from "../../shared/ui/Typography";

interface Props {}

export const NotesList: FC<Props> = function NotesList() {
  const navigate = useNavigate();

  return (
    <div className="gap-6">
      <Button onClick={() => navigate({ to: "/notes/add" })}>{"+"}</Button>
      <ul className="flex gap-4 flex-wrap">
        <li className="w-full">
          <Card className={`${COLORS_BORDER.secondary100} border-2`}>
            <Typography size={20} weight={600}>
              {"Заголовок"}
            </Typography>
            <Typography size={16}>{"Описание заметки"}</Typography>
          </Card>
        </li>
      </ul>
    </div>
  );
};
