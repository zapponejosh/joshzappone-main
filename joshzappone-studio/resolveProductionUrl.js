const previewSecret = 'secret_time' // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = 'https://www.joshzappone.tech'

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}