import S from "@sanity/desk-tool/structure-builder"
import EditIcon from "part:@sanity/base/edit-icon"
import EyeIcon from "part:@sanity/base/eye-icon"
import { IoIosBed } from "react-icons/io"
import IframePreview from "../components/previews/iframe/IframePreview"

const previewURL = process.env.SANITY_STUDIO_PREVIEW_URL

export default S.listItem()
  .id("products")
  .title("Товары")
  .schemaType("product")
  .icon(IoIosBed)
  .child(
    S.documentTypeList("product")
      .id("products")
      .title("Товары")
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType("product")
          .views([
            S.view.form().id("editor").title("Редактор").icon(EditIcon),
            S.view
              .component(IframePreview)
              .options({ previewURL })
              .id("webPreview")
              .title("Веб превью")
              .icon(EyeIcon),
          ])
      )
  )
