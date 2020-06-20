import PropTypes from "prop-types"
import React from "react"
import styles from "./IframePreview.css"

const assembleProjectUrl = ({ displayed, options }) => {
  const { slug } = displayed
  const { previewURL } = options
  if (!slug || !previewURL) {
    console.warn("Missing slug or previewURL", { slug, previewURL })
    return ""
  }
  return `${previewURL}/products/${slug.current}`
}

class IframePreview extends React.PureComponent {
  static propTypes = {
    document: PropTypes.object,
  }

  static defaultProps = {
    document: null,
  }

  render() {
    const { options } = this.props
    const { displayed } = this.props.document
    if (!displayed) {
      return (
        <div className={styles.componentWrapper}>
          <p>Документ для превью не был предоставлен.</p>
        </div>
      )
    }

    const url = assembleProjectUrl({ displayed, options })

    if (!url) {
      return (
        <div className={styles.componentWrapper}>
          <p>Не получилось сгенерировать ссылку на превью.</p>
        </div>
      )
    }

    return (
      <div className={styles.componentWrapper}>
        <div className={styles.iframeContainer}>
          <iframe src={url} frameBorder={"0"} />
        </div>
      </div>
    )
  }
}

export default IframePreview
