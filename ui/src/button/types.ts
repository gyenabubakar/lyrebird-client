export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonStyle =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'text';

export interface ButtonProps {
  style: ButtonStyle;
  type: ButtonType;
}
