import {
  ChangeEvent,
  FunctionComponent,
  useRef,
  useState,
  RefObject,
} from "react";
import { StyledContactForm, InputWrapper } from "./ContactForm.styles";
import { useModal } from "components/other/ContactResultModal/useModal";
import Button from "components/other/ButtonLink/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

type FormValues = {
  name: string;
  email: string;
  msg: string;
};

const ContactForm: FunctionComponent = () => {
  const [inputsValues, setInputsValues] = useState<FormValues>({
    name: "",
    email: "",
    msg: "",
  });

  const {
    ModalComponent,
    isOpen,
    openHandle,
    ComponentsList,
    changeComponentHandle,
  } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const formRef: RefObject<HTMLFormElement> = useRef(null);

  const sendEmail = async () => {
    formRef.current &&
      emailjs
        .sendForm(
          "service_xb6s4de",
          "template_haa544v",
          formRef.current,
          "user_tXPh9Gj8Um52yxFhQMhF8"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    try {
      if (formRef.current) {
        openHandle(true, ComponentsList.Loader);
        await emailjs.sendForm(
          "service_xb6s4de",
          "template_haa544v",
          formRef.current,
          "user_tXPh9Gj8Um52yxFhQMhF8"
        );
        reset();
        setInputsValues({
          name: "",
          email: "",
          msg: "",
        });
        changeComponentHandle(ComponentsList.SendingResult);
      }
    } catch (error: any) {
      console.error(error);
      changeComponentHandle(ComponentsList.SendingResult);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => sendEmail();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputsValues((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputsValues((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const emailRegex = new RegExp(
    // eslint-disable-next-line no-control-regex
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  );
  return (
    <>
      <StyledContactForm
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
      >
        <InputWrapper>
          <input
            type="text"
            {...register("name", { required: true })}
            id="name"
            onChange={(e) => onChangeInput(e)}
          />
          <label
            htmlFor="name"
            className={inputsValues.name ? "not-empty" : ""}
          >
            Name
          </label>
          {errors.name && errors.name.type === "required" && (
            <span>This is required</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: emailRegex,
            })}
            id="email"
            onChange={(e) => onChangeInput(e)}
          />
          <label
            htmlFor="email"
            className={inputsValues.email ? "not-empty" : ""}
          >
            Email
          </label>
          {errors.email && errors.email.type === "required" && (
            <span>This is required</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span>Please enter a valid email address</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <textarea
            {...register("msg", { required: true })}
            id="msg"
            onChange={(e) => onChangeTextArea(e)}
          />
          <label htmlFor="msg" className={inputsValues.msg ? "not-empty" : ""}>
            Message
          </label>
          {errors.msg && errors.msg.type === "required" && (
            <span>This is required</span>
          )}
        </InputWrapper>

        <Button type="submit" text="Send" customMarginTop={"2rem"} />
      </StyledContactForm>
      {isOpen && <ModalComponent />}
    </>
  );
};

export default ContactForm;
