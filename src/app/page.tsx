import { Stack, Text } from "@chakra-ui/react";

import I18NextJsonForm from "./sections/i18next-json-form";

export default function Home() {
  return (
    <>
      <Stack spacing={4} alignItems="center" padding={8}>
        <Stack alignItems="center" spacing={0}>
          <Text
            as="b"
            fontSize="2xl"
            bgClip="text"
            bgGradient="linear(to-r, yellow.400, teal)"
          >
            JSON Value Translator
          </Text>
          <Text
            as="b"
            fontSize="xl"
            bgClip="text"
            bgGradient="linear(to-r, yellow.400, teal)"
          >
            by GPT
          </Text>
        </Stack>
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
