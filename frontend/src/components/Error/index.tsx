import React from "react";
import { createDataTestId } from "../../lib/create-data-testid";
import { Button, VStack, Heading, Center, Image } from "@chakra-ui/react";
// @ts-ignore-next
import graphic from "./error-graphic.png";
import Router, { useRouter } from "next/router";

export const componentDataTestId = createDataTestId("Error ");

export const dataTestIds = {};

interface IProps {}

const Error: React.FunctionComponent<IProps> = (props) => {
  const router = useRouter();

  return (
    <Center
      width={["100vw", "90vw", "90vw", "70vw"]}
      {...{
        background: "linear-gradient(342.98deg, #013A6D 0%, #0055AC 56.01%, #0065D0 93.35%)",
        borderRadius: "16px",
      }}
    >
      <VStack spacing={8} p={10}>
        <Heading
          as="h3"
          {...{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            color: "#FFFFFF",
          }}
        >
          Oops, something went wrong :(
        </Heading>
        <Image src={graphic}></Image>
        <Button
          {...{
            border: "1px solid #FFFFFF",
            boxSizing: "border-box",
            borderRadius: "32px",
            color: "#FFFFFF",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
          }}
          _hover={{ border: "1px solid grey" }}
          width={350}
          height={"56px"}
          variant="outline"
          onClick={(): void => {
            router.back();
          }}
        >
          Try again
        </Button>
      </VStack>
    </Center>
  );
};

export { Error };
