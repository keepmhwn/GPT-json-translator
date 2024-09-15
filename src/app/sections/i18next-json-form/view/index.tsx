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
};

const I18nextJsonFormView = ({
  isSubmitting,
  formFieldValues,
  validate,
  onChange,
  onValidate,
  onReset,
  onTranslate,
}: Props) => {
  const handleChangeSource: OnChange = (value) => {
    onChange("source", value ?? "");
  };

  const handleChangeTarget: OnChange = (value) => {
    onChange("target", value ?? "");
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
          >
            Reset
          </Button>
          <Button
            colorScheme="teal"
            isDisabled={
              formFieldValues.source.length === 0 || validate.source === false
            }
            isLoading={isSubmitting}
            onClick={onTranslate}
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
      {formFieldValues.target && (
        <JsonEditorCard
          title="Traget"
          value={formFieldValues.target}
          onChange={handleChangeTarget}
          onValidate={(isValid) => onValidate("target", isValid)}
        />
      )}
    </Stack>
  );
};

export default I18nextJsonFormView;
