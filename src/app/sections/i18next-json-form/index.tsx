"use client";
import { useState } from "react";

import I18nextJsonFormLogic from "./logic";

const I18NextJsonForm = () => {
  const [translated, setTranslated] = useState("");

  const handleTranslate = (sourceJson: string) => {};

  return (
    <I18nextJsonFormLogic
      translatedJson={translated}
      onTranslate={handleTranslate}
    />
  );
};

export default I18NextJsonForm;
