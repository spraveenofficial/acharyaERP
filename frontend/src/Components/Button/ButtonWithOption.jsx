import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Tabs,
  TabPanels,
  TabPanel,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRef } from "react";

const ButtonQuickAction = ({ children }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef(null);
  return (
    <Flex justifyContent="center">
      <Popover
        placement="bottom"
        isLazy
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        closeOnBlur={true}
      >
        <PopoverTrigger>
          <Button
            rightIcon={<ChevronDownIcon />}
            colorScheme="green"
            w="fit-content"
            // onClick={onOpen}
          >
            Quick Actions
          </Button>
        </PopoverTrigger>

        <PopoverContent _focus={{ boxShadown: "none" }}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="bold">Quick Actions</PopoverHeader>
          <PopoverBody w="full">
            <Tabs isLazy colorScheme="green">
              <TabPanels h="fit-content">
                {children ? (
                  children
                ) : (
                  <>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Architecto doloremque vel nam sapiente omnis, eius aliquid
                      fugit commodi! Earum aperiam beatae dolorum ipsum totam!
                      Sunt iusto quae non obcaecati itaque.
                    </Text>
                    <Button onClick={onClose}>Kick This User</Button>
                  </>
                )}
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export { ButtonQuickAction };
