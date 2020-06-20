import S from "@sanity/desk-tool/structure-builder"
import { MdSettings } from "react-icons/md"

export default () => {
  return S.list()
    .id("content")
    .title("Контент")
    .items([
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !["siteSettings"].includes(listItem.getId())
      ),
      S.listItem()
        .id("siteSettings")
        .title("Настройки сайта")
        .icon(MdSettings)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
    ])
}
