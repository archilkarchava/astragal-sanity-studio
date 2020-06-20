import defaultResolve, {
  DiscardChangesAction,
  PublishAction,
} from "part:@sanity/base/document-actions"

export default function resolveDocumentActions(props) {
  console.log(PublishAction)
  if (props.type === "siteSettings") {
    return [PublishAction, DiscardChangesAction]
  }
  return [...defaultResolve(props)]
}
