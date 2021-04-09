import React from 'react'
import { withPrefix, Link } from 'gatsby'
import slugify from 'slugify'

function padHrefWithAnchor(href, anchor) {
  if (anchor) {
    return `${href}#${slugify(anchor)}`
  }
  return href
}

const AnchorTag = ({
  title,
  href,
  references = [],
  ...restProps
}) => {
  const anchorSlug = href

  const ref = references.find((x) => {
    return (
      `/${x.refWord}` === href ||
      withPrefix(x.target?.fields.slug || '') === withPrefix(anchorSlug)
    )
  })

  let child

  if (ref && ref.target) {
    const fileds = ref.target.fields
    title = title || ref.refWord
    child = (
      <Link
        {...restProps}
        to={padHrefWithAnchor(fileds.slug, ref.targetAnchor)}
        title={title}
      >
        {title}
      </Link>
    )
  } else {
    child = (
      <a
        {...restProps}
        href={
          !href || (href.indexOf && href.indexOf('#') === 0)
            ? href
            : withPrefix(href)
        }
        title={title}
      />
    )
  }

  return child
}

export default AnchorTag
