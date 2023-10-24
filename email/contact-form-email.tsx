import { Html, Head, Heading, Preview, Body, Container, Section, Text, Hr } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import React from "react";

type ContactFormEmailProps = {
  absender: string;
  message: string;
};

export default function ContactFormEmail({ absender, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{message}</Preview>
      {/* <Tailwind> */}
      <Body style={{ backgroundColor: "whitesmoke" }}>
        <Container>
          <Section style={{ backgroundColor: "white", borderRadius: 12, padding: 10, paddingLeft: 20 }}>
            <Heading>You have a message from {absender}</Heading>
            <Hr />
            <Text style={{ fontSize: 18 }}>{message}</Text>
          </Section>
        </Container>
      </Body>
      {/* </Tailwind> */}
    </Html>
  );
}
