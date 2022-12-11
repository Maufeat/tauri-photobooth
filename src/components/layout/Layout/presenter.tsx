import { ComponentProps } from "react";
import { Layout } from ".";

type Props = Pick<ComponentProps<typeof Layout>, "children">;

export const LayoutPresenter: React.FC<Props> = ({ children }) => {
  return <article>{children}</article>;
};
