import type { OnChange } from "@monaco-editor/react";
import type { I18NextJsonFormFieldValues } from "@/types/editor";

import { Stack, Button } from "@chakra-ui/react";

import JsonEditorCard from "./json-editor-card";
import SelectLanguage from "./select-language";

type Props = {
  isSubmitting: boolean;
  formFieldValues: I18NextJsonFormFieldValues;
  validate: { [key in keyof I18NextJsonFormFieldValues]: boolean };
  onChange: (key: keyof I18NextJsonFormFieldValues, value: string) => void;
  onValidate: (key: keyof I18NextJsonFormFieldValues, valid: boolean) => void;
  onReset: () => void;
  onTranslate: () => void;
  onCopy: () => void;
};

const I18nextJsonFormView = ({
  isSubmitting,
  formFieldValues,
  validate,
  onChange,
  onValidate,
  onReset,
  onTranslate,
  onCopy,
}: Props) => {
  const handleChangeSource: OnChange = (value) => {
    onChange("source", value ?? "");
  };

  const handleChangeTarget: OnChange = (value) => {
    onChange("translated", value ?? "");
  };

  return (
    <Stack spacing={5}>
      <Stack direction="row" justifyContent="space-between">
        <SelectLanguage
          value={formFieldValues.targetLanguage}
          onChange={onChange}
        />
        <Stack direction="row">
          <Button
            colorScheme="teal"
            variant="outline"
            isDisabled={isSubmitting}
            onClick={onReset}
            sx={{
              paddingX: "8px",
            }}
          >
            Reset
          </Button>

          <Button
            colorScheme="teal"
            isDisabled={
              formFieldValues.source.length === 0 ||
              formFieldValues.targetLanguage === null ||
              validate.source === false
            }
            isLoading={isSubmitting}
            onClick={onTranslate}
            sx={{
              paddingX: "8px",
            }}
          >
            Translate
          </Button>
        </Stack>
      </Stack>
      <JsonEditorCard
        title="Source"
        value={formFieldValues.source}
        onChange={handleChangeSource}
        onValidate={(isValid) => onValidate("source", isValid)}
      />
      {formFieldValues.translated && !isSubmitting && (
        <>
          <Button
            colorScheme="yellow"
            color="white"
            onClick={onCopy}
            sx={{
              marginLeft: "auto",
              paddingX: "12px",
            }}
          >
            Copy
          </Button>
          <JsonEditorCard
            title="Translated"
            value={formFieldValues.translated}
            onChange={handleChangeTarget}
            onValidate={(isValid) => onValidate("translated", isValid)}
          />
        </>
      )}
    </Stack>
  );
};

export default I18nextJsonFormView;
