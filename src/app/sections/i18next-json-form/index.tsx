"use client";
import { useState } from "react";

import I18nextJsonFormLogic from "./logic";

import request from "@/api/request";
import { I18NextJsonFormFieldValues } from "@/types/editor";

const I18NextJsonForm = () => {
  const [translated, setTranslated] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTranslate = async (
    formFieldValues: I18NextJsonFormFieldValues
  ) => {
    setIsSubmitting(true);
    const { source, targetLanguage } = formFieldValues;
    try {
      const { translated } = await request({
        path: "/api/translate",
        method: "POST",
        body: {
          sourceJson: source,
          targetLanguage,
        },
      });

      setTranslated(translated.content);
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <I18nextJsonFormLogic
      isSubmitting={isSubmitting}
      translatedJson={translated}
      onTranslate={handleTranslate}
    />
  );
};

export default I18NextJsonForm;
