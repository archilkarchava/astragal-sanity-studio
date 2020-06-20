import S from "@sanity/desk-tool/structure-builder"
import products from "./products"
import siteSettings from "./siteSettings"

// Web preview configuration
const remoteURL = "https://astragal74.ru"
const localURL = "http://localhost:8000"
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL

export default () => {
  return S.list()
    .id("content")
    .title("Контент")
    .items([
      products,
      ...S.documentTypeListItems().filter(
        (listItem) => !["siteSettings", "product"].includes(listItem.getId())
      ),
      S.divider(),
      siteSettings,
    ])
}
