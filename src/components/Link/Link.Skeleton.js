import React from "react"
import PropTypes from "prop-types"
import styled from "react-emotion"
import { Link } from "gatsby"

export const SkeletonStyledComponent = styled(Link)``

export const linkPropTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
}

const linkSkeletonPropTypes = {
  ...linkPropTypes,
  StyledComponent: PropTypes.any,
}

const linkSkeletonDefaultPropTypes = {
  StyledComponent: SkeletonStyledComponent,
}

const LinkSkeleton = ({ StyledComponent, children, href, to, ...rest }) => {
  if (href) {
    const ComponentAsExternalLink = StyledComponent.withComponent(`a`)
    return (
      <ComponentAsExternalLink href={href}>{children}</ComponentAsExternalLink>
    )
  }

  if (to) {
    return (
      <StyledComponent to={to} {...rest}>
        {children}
      </StyledComponent>
    )
  }

  return null
}

LinkSkeleton.propTypes = linkSkeletonPropTypes
LinkSkeleton.defaultProps = linkSkeletonDefaultPropTypes

export default LinkSkeleton