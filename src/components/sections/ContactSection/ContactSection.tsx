import { FunctionComponent } from "react";
import SectionContainer from "components/other/SectionContainer/SectionContainer";
import ArticleContainer from "components/other/ArticleContainer/ArticleContainer";
import ContactForm from "components/other/ContactForm/ContactForm";
import { theme } from "assets/styles/theme";

const ContactSection: FunctionComponent = () => {
  const { black, yellow } = theme.colors;
  return (
    <SectionContainer bgColor={black} textColor={yellow}>
      <ArticleContainer
        bgColor={black}
        borderColor={yellow}
        headlineText="Contact me"
      >
        <ContactForm />
      </ArticleContainer>
    </SectionContainer>
  );
};

export default ContactSection;
