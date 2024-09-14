import { Stack, Text } from "@chakra-ui/react";

import I18NextJsonForm from "./sections/i18next-json-form";

export default function Home() {
  return (
    <Stack spacing={4} alignItems="center">
      <Text as="b" fontSize="2xl" color="green">
        i18next JSON Translator
      </Text>
      <I18NextJsonForm />
    </Stack>
  );
}
