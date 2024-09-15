"use client";
import type { NextResponseError } from "@/types/error";

import { useState } from "react";

import { useToast } from "@chakra-ui/react";

import I18nextJsonFormLogic from "./logic";

import request from "@/api/request";
import { I18NextJsonFormFieldValues } from "@/types/editor";

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

      setTranslated(result.translated.content);
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
