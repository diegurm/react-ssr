import React from "react";
import Link from "next/link";
import Head from "next/head";

import withAnalytics from "../src/hocs/withAnalytics";
import styled from "styled-components";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div>
      <img src="/static/download.png" alt="" />
      <Title>Hello world</Title>

      <Link href="users">
        <a>Users</a>
      </Link>
    </div>
  </>
);

export default withAnalytics()(Home);
