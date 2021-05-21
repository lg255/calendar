import { ReactNode } from 'react';

export interface ModalOptions {
  open: boolean;
  content?: Element | ReactNode;
  title?: string;
}
