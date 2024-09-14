"use client";

import { Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack spacing={4} alignItems="center">
      <Text as="b" fontSize="2xl" color="green">
        i18next JSON Translator
      </Text>
    </Stack>
  );
}
