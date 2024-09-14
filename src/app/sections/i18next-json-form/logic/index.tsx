import type { I18NextJsonFormFieldValues } from "@/types/editor";

import { useState, useEffect } from "react";

import I18nextJsonFormView from "../view";

type Props = {
  translatedJson: string;
  onTranslate: (sourceJson: string) => void;
};

const I18nextJsonFormLogic = ({ translatedJson, onTranslate }: Props) => {
  const [formFieldValues, setFormFieldValues] =
    useState<I18NextJsonFormFieldValues>({
      source: "",
      target: "",
    });

  const [validate, setValidate] = useState<{
    [key in keyof I18NextJsonFormFieldValues]: boolean;
  }>({
    source: true,
    target: true,
  });

  const handleChange = (
    key: keyof I18NextJsonFormFieldValues,
    value: string
  ) => {
    setFormFieldValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleValidate = (
    key: keyof I18NextJsonFormFieldValues,
    isValid: boolean
  ) => {
    setValidate((prev) => ({ ...prev, [key]: isValid }));
  };

  const handleTranslate = () => {
    if (validate.source === false) {
      return;
    }

    onTranslate(formFieldValues.source);
  };

  useEffect(() => {
    setFormFieldValues((prev) => ({ ...prev, target: translatedJson }));
  }, [translatedJson]);

  return (
    <I18nextJsonFormView
      formFieldValues={formFieldValues}
      validate={validate}
      onChange={handleChange}
      onValidate={handleValidate}
      onTranslate={handleTranslate}
    />
  );
};

export default I18nextJsonFormLogic;
