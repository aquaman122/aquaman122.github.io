import * as React from "react";
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page">
        <p>I'm 어쩌구 저쩌구</p>
      </Layout>
    </>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

