import { MyButton } from "./style";

export const Button = ({ children, whiteStyle, ...rest }) => {
  return (
    <MyButton whiteStyle={whiteStyle} {...rest}>
      {children}
    </MyButton>
  );
};
