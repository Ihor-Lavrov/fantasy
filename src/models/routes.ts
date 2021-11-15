import { ReactNode } from "react";

export interface Route {
  path: string;
  Component: any;
  exact?: boolean;
}
