import S from "@sanity/base/structure-builder"

export default [
  ...S.defaultInitialValueTemplateItems().filter(
    (templateItem) => templateItem.spec.id !== "siteSettings"
  ),
]
