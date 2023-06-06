export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonColour = 'default' | 'primary' | 'secondary' | 'black' | 'text';

export interface ButtonProps {
  colour: ButtonColour;
  type: ButtonType;
}
