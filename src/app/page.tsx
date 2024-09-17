import { Stack, Text } from "@chakra-ui/react";

import I18NextJsonForm from "./sections/i18next-json-form";

export default function Home() {
  return (
    <>
      <Stack spacing={4} alignItems="center" padding={8}>
        <Text as="b" fontSize="2xl" color="green">
          i18next JSON Translator
        </Text>
        <I18NextJsonForm />
        <footer>
          <Text as="i" fontSize="sm" color="blackAlpha.500">
            Please contact us to add a language to support.
          </Text>
          <Text fontSize="sm" textAlign="center" color="blackAlpha.500">
            mhko0411@gmail.com
          </Text>
        </footer>
      </Stack>
    </>
  );
}
