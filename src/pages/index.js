import React, { Component } from 'react';
import '../scss/main.scss'
import Layout from '../layout/layout'
import SEO from '../layout/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <div className="indexPage">
        Boilerplate, ready to go yo
      </div>
    </Layout>
    
  )
}

export default IndexPage
