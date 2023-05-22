import { InputTexts } from "@/styled-components/typography.styled";

export const CustomButton = ({
  buttonClass = "",
  onClick,
  text = undefined,
  disabled = false,
  children
}) => {
  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {text ? <InputTexts>{text}</InputTexts> : children}
    </button>
  );
};
