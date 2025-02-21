import { ReactNode, RefObject } from "react";

interface Props {
  button: ReactNode;
  formRef: RefObject<HTMLFormElement | null>;
  children: ReactNode;
}

export default function Modal({ button, formRef, children }: Props) {
  const handleButtonClick = () => {
    formRef.current?.requestSubmit()
  };

  return (
    <div>
      <div>{children}</div>
      <span onClick={handleButtonClick}>
        {button}
      </span>
    </div>
  );
}