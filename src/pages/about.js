import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <>
      <Layout pageTitle="About Me">
        <p>Hi there! I'm 어쩌구 저쩌구</p>
      </Layout>
    </>
  );
}

export const Head = () => <title>About Me</title>

export default AboutPage