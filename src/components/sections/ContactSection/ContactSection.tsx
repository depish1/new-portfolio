import { FunctionComponent, useEffect } from "react";
import SectionContainer from "components/other/SectionContainer/SectionContainer";
import ArticleContainer from "components/other/ArticleContainer/ArticleContainer";
import ContactForm from "components/other/ContactForm/ContactForm";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactSection: FunctionComponent = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <SectionContainer id="contact">
      <ArticleContainer headlineText="Contact me" aos="fade-down">
        <ContactForm />
      </ArticleContainer>
    </SectionContainer>
  );
};

export default ContactSection;
