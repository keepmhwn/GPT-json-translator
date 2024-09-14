import type { OnChange } from "@monaco-editor/react";
import type { I18NextJsonFormFieldValues } from "@/types/editor";

import { Stack, Button } from "@chakra-ui/react";

import JsonEditorCard from "./json-editor-card";

type Props = {
  formFieldValues: I18NextJsonFormFieldValues;
  validate: { [key in keyof I18NextJsonFormFieldValues]: boolean };
  onChange: (key: keyof I18NextJsonFormFieldValues, value: string) => void;
  onValidate: (key: keyof I18NextJsonFormFieldValues, valid: boolean) => void;
  onTranslate: () => void;
};

const I18nextJsonFormView = ({
  formFieldValues,
  validate,
  onChange,
  onValidate,
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
      <JsonEditorCard
        title="Source"
        value={formFieldValues.source}
        onChange={handleChangeSource}
        onValidate={(isValid) => onValidate("source", isValid)}
      />
      <Button
        colorScheme="teal"
        isDisabled={
          formFieldValues.source.length === 0 || validate.source === false
        }
        onClick={onTranslate}
      >
        Translate
      </Button>
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
