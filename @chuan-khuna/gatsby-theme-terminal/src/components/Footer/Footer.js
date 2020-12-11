import React, { Fragment } from 'react'
import { Text, Flex, Box, Link } from 'theme-ui'

export const Footer = () => {
  return (
    <Fragment>
      <Box sx={{ mb: -48, mt: 64, pt: 3, pb: 2 }}>
        <Flex sx={{ justifyContent: 'center' }}>
          <Text variant="styles.small">
            Based on
            <Link
              href="https://github.com/chuan-khuna/gatsby-theme-terminal"
              sx={{ textDecoration: 'none' }}
            >
              {' gatsby-theme-terminal'}
            </Link>
          </Text>
        </Flex>
      </Box>
    </Fragment>
  )
}
