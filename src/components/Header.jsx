import { Avatar, Box, Button, Container, Flex, Text, useColorMode, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import ContactModal from "./ContactModal.jsx";

const Header = () => {
  const { colorMode } = useColorMode();
  const { isOpen: isContactOpen, onOpen: onContactOpen, onClose: onContactClose } = useDisclosure();

  return (
    <>
      <Flex direction="column" justify="center">
        <Container maxW="7xl">
          <motion.div
            initial={ { opacity: 0, y: 50 } }
            animate={ {
              opacity: 1, y: 0,
              transition: { type: "spring", delay: 0.1, duration: 0.5 },
            } }
          >
            <Flex
              width="full" justify="space-between" direction={ { base: "column-reverse", md: "row" } }
              align={ { base: "flex-start", md: "center" } } pt={ { base: "20", md: "24" } } pb="28"
            >
              <Box mr={ { base: 0, lg: 5 } } mt={ { base: 6, lg: 0 } }>
                <Text fontSize={ { base: '1.7rem', md: '2.2rem' } } fontWeight="medium">
                  Hello! 👋🏽
                </Text>
                <Text
                  fontSize={ { base: '1.7rem', md: '2.2rem' } } maxW="700" pr="10" mt={ { base: 12, md: 8 } }
                  lineHeight="1.6" verticalAlign="middle"
                >
                  I'm <Text as="span" fontWeight="semibold">Oluwagbemiga Sunday Stephen</Text>, a full stack developer with a great passion
                  of working with wonderful team in creating beautiful, intuitive, and accessible experiences. Find some of my projects below.
                </Text>
                <Flex align="center" mt="4">
                  <Button
                    onClick={ onContactOpen } rounded="full" mt="10" rightIcon={ <HiArrowRight/> } px="6"
                    backgroundColor={ colorMode === 'light' ? 'gray.800' : 'gray.200' }
                    color={ colorMode === 'light' ? '#fff' : 'gray.900' }
                    _hover={ { background: colorMode === 'light' ? 'gray.700' : 'gray.50' } }
                    _active={ { background: colorMode === 'light' ? 'gray.600' : 'gray.400' } }
                  >
                    Get in touch
                  </Button>
                </Flex>
              </Box>
              <Avatar
                display={ { base: 'none', md: 'block' } }
                width={ { base: '150px', lg: '230px' } } height={ { base: '150px', lg: '230px' } }
                src="/images/profile.jpg" alt="Oluwagbemiga Stephen"
              />
            </Flex>
          </motion.div>
        </Container>
      </Flex>

      <ContactModal
        isOpen={ isContactOpen }
        onClose={ onContactClose }
      />
    </>
  );
};

export default Header;
