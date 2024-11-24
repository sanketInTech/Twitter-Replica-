import { ReactCompilerOptions } from "next/dist/server/config-shared";
import { RxValue } from "react-icons/rx";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange
}) => {
  return ( 
    <input 
    disabled={disabled}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    type={type}
    className="
      w-full
      p-4
      text-lg
      bg-black
      border
      border-gray-500
      rounded-md
      outline-none
      text-white
      focus:border-sky-500
      focus:ring-2
      focus:ring-sky-500
      hover:border-sky-500
      transition
      disabled:bg-neutral-900
      disabled:opacity-70
      disabled:cursor-not-allowed
    "
    />
  );
}
export default Input;