export interface PrintElement {
    text: string;
    bold?: boolean;
    underline?: boolean;
    align?: 'LEFT' | 'CENTER' | 'RIGHT';
    size?: number; //'SMALL' | 'NORMAL' | 'LARGE';
    lineBreak?: boolean;
  }