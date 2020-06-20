import S from "@sanity/desk-tool/structure-builder"
import { MdSettings } from "react-icons/md"

export default S.listItem()
  .id("siteSettings")
  .title("Настройки сайта")
  .child(
    S.document()
      .id("siteSettings")
      .schemaType("siteSettings")
      .documentId("siteSettings")
  )
  .icon(MdSettings)
