import { ButtonProps } from "./Interfaces"

export default function Button({ text, style, type, onClick }: ButtonProps) {
    return (
      <div>
        <button type={type} onClick={onClick} className={`${style} font-semibold  rounded-xl hover:text-white`}>
          {text}
        </button>
      </div>
    );
  }