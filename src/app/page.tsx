"use client";

import { useEffect } from "react";

import request from "@/api/request";

export default function Home() {
  // Test
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
  return <div></div>;
}
