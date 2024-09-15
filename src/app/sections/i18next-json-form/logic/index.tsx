import type { I18NextJsonFormFieldValues } from "@/types/editor";

import { useState, useEffect } from "react";

import I18nextJsonFormView from "../view";

type Props = {
  translatedJson: string;
  onTranslate: (formFieldValues: I18NextJsonFormFieldValues) => void;
};

const INITIAL_FORM_FIELD_VALUES: I18NextJsonFormFieldValues = {
  source: "",
  target: "",
  targetLanguage: null,
};

const INITIAL_VALIDATE_VALUES: {
  [key in keyof I18NextJsonFormFieldValues]: boolean;
} = {
  source: true,
  target: true,
  targetLanguage: true,
};

const I18nextJsonFormLogic = ({ translatedJson, onTranslate }: Props) => {
  const [formFieldValues, setFormFieldValues] =
    useState<I18NextJsonFormFieldValues>({
      source: "",
      target: "",
      targetLanguage: null,
    });

  const [validate, setValidate] = useState<{
    [key in keyof I18NextJsonFormFieldValues]: boolean;
  }>({
    source: true,
    target: true,
    targetLanguage: true,
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

  const handleReset = () => {
    setFormFieldValues(INITIAL_FORM_FIELD_VALUES);
    setValidate(INITIAL_VALIDATE_VALUES);
  };

  const handleTranslate = () => {
    if (formFieldValues.targetLanguage === null) {
      setValidate((prev) => ({ ...prev, targetLanguage: false }));
      return;
    }

    setValidate((prev) => ({ ...prev, targetLanguage: true }));

    if (validate.source === false) {
      return;
    }

    onTranslate(formFieldValues);
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
      onReset={handleReset}
      onTranslate={handleTranslate}
    />
  );
};

export default I18nextJsonFormLogic;
