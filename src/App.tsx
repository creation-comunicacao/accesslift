import { AccessliftApp } from "./accesslift/AccessliftApp";

type AppProps = {
  initialPath?: string;
};

export default function App({ initialPath }: AppProps) {
  return <AccessliftApp initialPath={initialPath} />;
}
