import markdownStyles from './markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'
import figure from "./figure"

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    figure: figure,
  },
  marks: {
    internalLink: ({children, mark}) => <a href={mark.slug.current}>{children}</a>,
    link: ({children, mark}) => 
      mark.blank ? (
         <a href={mark.href} target="_blank" rel="noopener noreferer">{children}</a>
      ) : (
        <a href={mark.href}>{children}</a>
      )
  }
}


export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent blocks={content} serializers={serializers} className={markdownStyles.markdown} />
    </div>
  )
}
