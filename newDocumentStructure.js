import S from "@sanity/base/structure-builder"

console.log(S.defaultInitialValueTemplateItems())

export default [
  ...S.defaultInitialValueTemplateItems().filter(
    (templateItem) => templateItem.spec.id !== "siteSettings"
  ),
]
