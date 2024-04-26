import React from "react";
import Head from "next/head";
import { Container, Main, Title, Description } from "@/components/sharedstyles";
import Link from "next/link";

import Form from "@/components/Form";
export default function Newsletter() {
  return (
    <Container>
      <Head>
        <title>Newsletter</title>
        <meta
          name="description"
          content="Subscribe to my newsletter to get updates on my latest blog posts and projects."
        />
      </Head>
      <Main>
        <Link href="/">&larr; Go Back</Link>
        <Title>Newsletter</Title>
        <Description>Subscribe to newsletter</Description>

        <Form />
      </Main>
    </Container>
  );
}
