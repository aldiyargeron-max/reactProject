import { FC, useState } from "react";
import { Header } from "./src/components/Header";
import { Button } from "./src/shared/ui/Button";
import { Card } from "./src/shared/ui/Card";
import { Typography } from "./src/shared/ui/Typography";

const data = ["Банан", "Яблоко", "Апельсин"];

export const App: FC = function App() {
  const [count, setCount] = useState<number>(0);

  const list = data.map((item) => (
    <li key={item}>
      <Card>
        <Typography size={20} align={"center"} className={"mb-3"}>
          {item}
        </Typography>
        <Button mode={"dark"} onClick={() => setCount(count + 1)}>
          {"Купить"}
        </Button>
      </Card>
    </li>
  ));
  return (
    <>
      <Header count={count} />
      <ul>{list}</ul>
    </>
  );
};
