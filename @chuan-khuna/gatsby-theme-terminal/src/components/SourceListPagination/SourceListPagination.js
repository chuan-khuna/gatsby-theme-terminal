import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { useAllMdx } from '../../data'

export const SourceListPagination = ({ filter, children, postPerPage=10 }) => {
  const urlParams = new URLSearchParams(window.location.search)
  const pageParams = urlParams.get('page')

  const currentPage = parseInt(pageParams || 1)
  const startInd = (currentPage - 1) * postPerPage
  return (
    <Fragment>
      {children(useAllMdx(filter).splice(startInd, postPerPage))}
    </Fragment>
  )
}

SourceListPagination.propTypes = {
  /** A string used as a filter for the allMdx GraphQL query */
  filter: PropTypes.string,
  /** React children */
  children: PropTypes.func,
  postPerPage: PropTypes.number,
}
