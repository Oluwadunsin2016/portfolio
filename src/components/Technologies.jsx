import React from 'react';
import { Container, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { SiDocker, SiGit, SiMysql, SiNodedotjs, SiNuxtdotjs, SiTailwindcss, SiFlutter } from "react-icons/si";
import { RiAngularjsFill, RiReactjsFill, RiVuejsFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { CgFigma } from "react-icons/cg";

const items = [
  { name: 'Node JS', link: 'https://nodejs.org', icon: <SiNodedotjs size="65"/>, },
  { name: 'React JS', link: 'https://reactjs.org', icon: <RiReactjsFill size="65"/>, },
  { name: 'Next JS', link: 'https://nextjs.org', icon: <TbBrandNextjs size="65"/>, },
  { name: 'Tailwind CSS', link: 'https://tailwindcss.com', icon: <SiTailwindcss size="65"/> },
  { name: 'Vue JS', link: 'https://vuejs.org', icon: <RiVuejsFill size="65"/> },
  { name: 'Angular JS', link: 'https://angular.io', icon: <RiAngularjsFill size="65"/> },
  { name: 'MySql', link: 'https://www.mysql.com/', icon: <SiMysql size="65"/> },
];

const Technologies = () => {
  return (
    <Container maxW="7xl" py="20">
      <Text fontSize={ { base: '1.7rem', md: '2.2rem' } } maxW="550" fontWeight="medium">
        A few technologies I've been working with recently
      </Text>
      <SimpleGrid
        display={ { base: 'grid', md: 'none' } } columns={ { base: 3, md: 6 } }
        spacing="10" mt="20" textAlign="center"
      >
        {
          items.map((item, index) => {
            return (
              <Flex
                as="a" href={ item.link } target="_blank" key={ index } title={ item.name } align="center" opacity=".9"
                transform="scale(.9)"
              >
                { item.icon }
              </Flex>
            );
          })
        }
      </SimpleGrid>
      <VStack display={ { base: 'none', md: 'flex' } } spacing="10" align="stretch" mt="10">
        <Flex direction="row" justify="space-between" align="center">
          {
            items.slice(0, 6).map((item, index) => (
              <Flex as="a" href={ item.link } target="_blank" key={ index } title={ item.name } opacity=".9">
                { item.icon }
              </Flex>
            ))
          }
        </Flex>
        <Flex direction="row" justify="space-between" align="center">
          {
            items.slice(6, 12).map((item, index) => (
              <Flex as="a" href={ item.link } target="_blank" key={ index } title={ item.name } opacity=".9">
                { item.icon }
              </Flex>
            ))
          }
        </Flex>
      </VStack>
    </Container>
  );
};

export default Technologies;
