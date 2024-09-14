"use client";

import { useRef } from "react";

import { Box, Spinner } from "@chakra-ui/react";

import {
  Editor,
  type OnMount,
  type OnChange,
  type OnValidate,
} from "@monaco-editor/react";
import * as monacoEditor from "monaco-editor";

type Props = {
  value: string;
  onChange: OnChange;
  onValidate: (isValid: boolean) => void;
};

const JsonEditor = ({ value, onChange, onValidate }: Props) => {
  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(
    null
  );

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  const handleValidate: OnValidate = (markers) => {
    const isValid = markers.length === 0;
    onValidate(isValid);
  };

  return (
    <Box
      width="100%"
      height="100%"
      padding="16px"
      borderWidth="1px"
      borderRadius="lg"
    >
      <Editor
        width="100%"
        height="100%"
        language="json"
        value={value}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        loading={<Spinner size="xl" />}
        onMount={handleEditorDidMount}
        onValidate={handleValidate}
        onChange={onChange}
      />
    </Box>
  );
};

export default JsonEditor;
