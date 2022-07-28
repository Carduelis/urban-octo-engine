import { FC, useRef } from "react";

export interface PersonalAccessKeyFormProps {
  setKey: (value: string | null) => void;
}

const parseInputValue = (value: FormDataEntryValue) => {
  if (typeof value !== "string") {
    return null;
  }
  if (value === "") {
    return null;
  }
  return value;
};

export const KEY_INPUT_NAME = "personalAccessKey";

export const PersonalAccessKeyForm: FC<PersonalAccessKeyFormProps> = ({
  setKey,
}) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(ref.current);
        setKey(parseInputValue(formData.get(KEY_INPUT_NAME)));
      }}
    >
      <input
        type="text"
        name={KEY_INPUT_NAME}
        placeholder="Enter key"
        defaultValue={process.env.NEXT_PUBLIC_PERSONAL_ACCESS_KEY}
      />
      <button type="submit">Send</button>
    </form>
  );
};
