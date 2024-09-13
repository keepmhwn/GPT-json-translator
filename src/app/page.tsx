"use client";

import { useEffect, useRef } from "react";

import request from "@/api/request";

import { Editor, type OnMount, OnChange } from "@monaco-editor/react";
import * as monacoEditor from "monaco-editor";

export default function Home() {
  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(
    null
  );

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  const handleChangeCode: OnChange = (value: string | undefined) => {
    console.log(value);
  };

  useEffect(() => {
    const translate = async () => {
      const response = await request({
        path: "/api/translate",
        method: "POST",
        body: {
          text: "사과",
          targetLanguage: "ko",
        },
      });

      console.log(response);
    };

    translate().then();
  }, []);

  return (
    <div>
      <Editor
        defaultLanguage="JSON"
        onMount={handleEditorDidMount}
        onChange={handleChangeCode}
      />
    </div>
  );
}
