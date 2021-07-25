import { Container, InputContainer } from "./style";

export const Input = ({ icon: Icon, register, name, error, ...rest }) => {
  return (
    <Container>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon />}
        <input {...register(name)} {...rest} />
      </InputContainer>
      {!!error && <span className="error"> {error} </span>}
    </Container>
  );
};
