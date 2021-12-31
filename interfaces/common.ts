import { CSSProperties } from 'react';

export interface StyleProps {
  className?: string;
  style?: CSSProperties;
}

export interface Dialog {
  opened: string;
  title: string;
  variables?: unknown;
  onCancel?: unknown;
  onAccept?: unknown;
  onAction?: (actionId: string, id: number) => void;
}

export interface Page {
  title: string;
}

export interface Tab {
  title: string;
}

export interface CommonStore {
  modal?: Dialog;
  drawer?: Dialog;
  page: Page;
  tab: Tab;
}
