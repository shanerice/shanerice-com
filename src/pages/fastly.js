import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Page extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Fastly" />
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <a href="https://docs.google.com/presentation/d/10mYhOxhiNvL55Q0RhcBNw87-POaQavmBuxMAf8K-g9Y/edit?usp=sharing">Fastly presentation</a>
                </h3>
              </header>
              <p>
                Hey friends! Thought it'd be easier to share the link to my presentation here for anyone who wanted to pull it up and follow along remotely.
              </p>
      </Layout>
    )
  }
}

export default Page