"use client";

import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {ReactNode} from "react";
import Image from "next/image";
import Link from "next/link";

type BannerProps = {
  purpose: ReactNode
  imageUrl?: string
  title1?: string
  title2?: string
  desc1?: string
  desc2?: string
  linkName?: string
  buttonText?: string
};

const Banner = (props: BannerProps) => {
  return <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    {props.imageUrl && <Image src={props.imageUrl} width={500} height={300} alt="banner"/>}
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{props.purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{props.title1}<br/>{props.title2}</Text>
      <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3">{props.desc1}<br/>{props.desc2}</Text>
      <Button fontSize="xl">
        <Link href={props.linkName || "/"}>{props.buttonText || "Click Me"}</Link>
      </Button>
    </Box>
  </Flex>
}

export default function Home() {
  return (
      <Box>
        <Flex flexWrap="wrap">

        </Flex>
        <Banner
            purpose='RENT A HOME'
            title1="Rental Homes for"
            title2="Everyone"
            imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
            desc1="Explore aparts, villas, homes"
            desc2="and more"
            linkName="/search?purpose=for-rent"
            buttonText="Explore Renting"
        />
        <Banner
            purpose='BUY A HOME'
            title1="Find and Buy your"
            title2="place"
            imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
            desc1="Explore aparts, villas, homes"
            desc2="and more"
            linkName="/search?purpose=for-sale"
            buttonText="Explore Buying"
        />
      </Box>
  )
}
