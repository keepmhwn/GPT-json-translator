"use client";
import { useState } from "react";

import I18nextJsonFormLogic from "./logic";

import request from "@/api/request";

const I18NextJsonForm = () => {
  const [translated, setTranslated] = useState("");

  const handleTranslate = async (sourceJson: string) => {
    try {
      const { translated } = await request({
        path: "/api/translate",
        method: "POST",
        body: {
          sourceJson,
          targetLanguage: "Japanese",
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
