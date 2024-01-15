  export interface ButtonProps {
    text?: string;
    style: string;
    type?: "button" | "submit" | "reset";  // Added specific types for button types
    onClick?: () => void;  // Updated onClick type to a function that takes no arguments and returns void
  }
  
  export interface InputProps {
    type: string;
    name?: string;
    id?: string;
    value?: string;
    className: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;  // Updated onChange type
    onSubmit?: (e: React.FormEvent) => void;  // Updated onSubmit type
  }
  
  export interface Item {
    id: number;
    text: string;
    completed: boolean;
  }
  
