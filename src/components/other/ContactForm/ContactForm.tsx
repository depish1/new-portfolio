import { FunctionComponent } from "react";
import { StyledContactForm, InputWrapper } from "./ContactForm.styles";
import { theme } from "assets/styles/theme";
import ButtonLink from "components/other/ButtonLink/ButtonLink";

const ContactForm: FunctionComponent = () => {
  const { yellow, black } = theme.colors;
  return (
    <StyledContactForm>
      <InputWrapper>
        <input type="text" name="name" id="name" required />
        <label htmlFor="name">Name</label>
      </InputWrapper>
      <InputWrapper>
        <input type="email" name="email" id="email" required />
        <label htmlFor="email">Email</label>
      </InputWrapper>
      <InputWrapper>
        <textarea name="msg" id="msg" required />
        <label htmlFor="msg">Message</label>
      </InputWrapper>
      <ButtonLink text="Send" bgColor={yellow} textColor={black} />
    </StyledContactForm>
  );
};

export default ContactForm;
