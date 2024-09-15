import type { I18NextJsonFormFieldValues } from "@/types/editor";

import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

type Props = {
  value: string | null;
  onChange: (
    key: keyof Pick<I18NextJsonFormFieldValues, "targetLanguage">,
    value: string
  ) => void;
};

const SelectLanguage = ({ value, onChange }: Props) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        minWidth="220px"
        textAlign="start"
        bg="white"
      >
        {value ? value : "Translation Language"}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          value={value ?? ""}
          title="Translation Language"
          onChange={(value) => onChange("targetLanguage", value as string)}
        >
          {SUPPORTED_LANGUAGE_LIST.map((language) => (
            <MenuItemOption key={language} value={language}>
              {language}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

const SUPPORTED_LANGUAGE_LIST = [
  "Chinese",
  "English",
  "French",
  "German",
  "Japanese",
  "Korean",
  "Russian",
  "Spanish",
  "Vietnamese",
];

export default SelectLanguage;
