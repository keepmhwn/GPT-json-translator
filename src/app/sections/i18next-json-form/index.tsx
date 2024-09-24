"use client";
import type { NextResponseError } from "@/types/error";
import type { I18NextJsonFormFieldValues } from "@/types/editor";

import { useState } from "react";

import { useToast } from "@chakra-ui/react";

import I18nextJsonFormLogic from "./logic";

import request from "@/api/request";
import delay from "@/app/utils/delay";
import stringToPrimaryKey from "@/app/utils/string-to-primary-key";
import SessionCache from "@/app/utils/session-cache";

const I18NextJsonForm = () => {
  const toast = useToast();

  const [translated, setTranslated] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTranslate = async (
    formFieldValues: I18NextJsonFormFieldValues
  ) => {
    setIsSubmitting(true);

    const { source, targetLanguage } = formFieldValues;

    try {
      const primaryKey = stringToPrimaryKey(
        JSON.stringify({ language: targetLanguage, json: source })
      );
      const sessionCache = SessionCache(primaryKey);
      const cached = sessionCache.get();

      if (cached) {
        const cachedToJson = JSON.parse(cached);
        setTranslated(cachedToJson);
        await delay(150);
        return;
      }

      const result = await request({
        path: "/api/translate",
        method: "POST",
        body: {
          sourceJson: source,
          targetLanguage,
        },
      });

      if (result.error) {
        throw result.error;
      }

      const { content: translatedJson } = result.translated;
      sessionCache.set(JSON.stringify(translatedJson));
      setTranslated(translatedJson);
    } catch (e) {
      const responseError = e as NextResponseError;

      toast({
        title: responseError.code,
        description: responseError.message,
        status: "error",
        isClosable: true,
        duration: 3000,
      });
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
