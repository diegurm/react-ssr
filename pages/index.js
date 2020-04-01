import React from "react";
import Link from "next/link";
import Head from "next/head";

import withAnalytics from '../src/hocs/withAnalytics';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div>
      <img src="/static/download.png" alt=""/>
      <h1>Hello world</h1>

      <Link href="users">
        <a>Users</a>
      </Link>
    </div>
  </>
);

export default withAnalytics()(Home);
