import type { OnChange } from "@monaco-editor/react";

import { Card, CardHeader, CardBody, Text } from "@chakra-ui/react";

import JsonEditor from "@/components/json-editor";

type Props = {
  title: string;
  value: string;
  onChange: OnChange;
  onValidate: (isValid: boolean) => void;
};

const JsonEditorCard = ({ title, value, onChange, onValidate }: Props) => {
  return (
    <Card
      width={{
        base: "300px",
        sm: "400px",
        md: "550px",
        lg: "800px",
      }}
      height="400px"
    >
      <CardHeader>
        <Text as="h3" fontSize="md" fontWeight={600}>
          {title}
        </Text>
      </CardHeader>
      <CardBody padding="0px 16px">
        <JsonEditor value={value} onChange={onChange} onValidate={onValidate} />
      </CardBody>
    </Card>
  );
};

export default JsonEditorCard;
