import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Flex, Button, Box } from 'theme-ui'
import { useAllMdx } from '../../data'
import { Link as GatsbyLink } from 'gatsby'

export const PaginationButton = ({ filter, children, postPerPage=10 }) => {
  const urlParams = new URLSearchParams(window.location.search)
  const pageParams = urlParams.get('page')

  const currentPage = parseInt(pageParams || 1)

  const arr = useAllMdx(filter)
  const lastPage = Math.ceil(arr.length / postPerPage)
  var nextUrl = ''
  var prevUrl = ''

  // newer post
  nextUrl = '?page=' + (currentPage - 1)
  // older post
  prevUrl = '?page=' + (currentPage + 1)

  if (currentPage === 1 || arr.length <= postPerPage) nextUrl = '/'
  if (currentPage === lastPage || arr.length <= postPerPage) prevUrl = '/'

  return (
    <Fragment>
      <Flex>
        <Box
          sx={{
            p: 3,
            mb: 3,
            maxWidth: ['100%'],
            width: ['100%'],
            flex: '1 1 auto',
          }}
        >
          <center>
            {nextUrl !== '/' && (
              <Button as={GatsbyLink} to={nextUrl} variant="secondary">
                {'< Next'}
              </Button>
            )}
          </center>
        </Box>
        <Box
          sx={{
            p: 3,
            mb: 3,
            maxWidth: ['100%'],
            width: ['100%'],
            flex: '1 1 auto',
          }}
        >
          <center>
            {prevUrl !== '/' && (
              <Button as={GatsbyLink} to={prevUrl} variant="secondary">
                {'Prev >'}
              </Button>
            )}
          </center>
        </Box>
      </Flex>
    </Fragment>
  )
}

PaginationButton.propTypes = {
  /** A string used as a filter for the allMdx GraphQL query */
  filter: PropTypes.string,
  /** React children */
  children: PropTypes.func,
  postPerPage: PropTypes.number,
}
