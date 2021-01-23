import defaultResolve from 'part:@sanity/base/document-actions';

function RemoveDup(props) { 
  let resolves = defaultResolve();
  resolves.splice(3,1)
  return resolves 
}

export default function resolveDocumentActions(props) {
  if (props.type !== 'portfolio') {
    return defaultResolve(props)
  }
  return [...RemoveDup(props)]
}