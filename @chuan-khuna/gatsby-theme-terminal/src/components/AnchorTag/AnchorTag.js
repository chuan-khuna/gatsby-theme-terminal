import React from 'react'
import { withPrefix, Link as GatsbyLink } from 'gatsby'
import { Link } from 'theme-ui'
import slugify from 'slugify'

function padHrefWithAnchor(href, anchor) {
  if (anchor) {
    return `${href}#${slugify(anchor)}`
  }
  return href
}

export const AnchorTag = ({ title, href, references = [], ...restProps }) => {
  const anchorSlug = href

  const ref = references.find((x) => {
    let matched = `/${x.refWord}` === href
    if (matched) return matched
    if (x.target) {
      const frontmatter = x.target.frontmatter || {}
      matched =
        frontmatter.title === title ||
        frontmatter.alias === title ||
        (frontmatter.aliases || []).includes(title) ||
        withPrefix(x.target.fields.slug || '') === withPrefix(anchorSlug)
    }
    return matched
  })

  let child

  if (ref && ref.target.fields.slug && title) {
    const fileds = ref.target.fields
    title = title || ref.refWord
    child = (
      <Link
        as={GatsbyLink}
        {...restProps}
        to={padHrefWithAnchor(fileds.slug, ref.targetAnchor)}
        title={title}
        sx={{ color: 'secondary' }}
      >
        {title}
      </Link>
    )
  } else {
    child = (
      <Link
        {...restProps}
        href={
          !href || (href.indexOf && href.indexOf('#') === 0)
            ? href
            : withPrefix(href)
        }
        title={title}
      ></Link>
    )
  }

  return child
}
