import './src/styles/global.css';
import * as React from "react";
import { MDXProvider } from "@mdx-js/react"

const MyParagraph = props => (
  <p className="text-lg text-center" {...props} />
)
const MyH1 = props => <h1 className="text-3xl text-center mb-6 mt-2" {...props} />

const MyHref = props => <a className="text-orange-700 font-semibold" {...props} />

const components = {
  p: MyParagraph,
  h1: MyH1,
  h2: MyH1,
  a: MyHref
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)