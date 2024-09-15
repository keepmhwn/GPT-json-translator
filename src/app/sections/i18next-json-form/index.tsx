"use client";
import { useState } from "react";

import I18nextJsonFormLogic from "./logic";

import request from "@/api/request";
import { I18NextJsonFormFieldValues } from "@/types/editor";

const I18NextJsonForm = () => {
  const [translated, setTranslated] = useState("");

  const handleTranslate = async (
    formFieldValues: I18NextJsonFormFieldValues
  ) => {
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
    }
  };

  return (
    <I18nextJsonFormLogic
      translatedJson={translated}
      onTranslate={handleTranslate}
    />
  );
};

export default I18NextJsonForm;
