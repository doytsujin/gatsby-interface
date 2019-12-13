/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import colors from "../../theme/colors"

import {  fontSizes } from "../../utils/presets"
import space from  "../../theme/space"

const baseStyles = {
  color: colors.grey[70],
  display: `block`,
  fontSize: fontSizes[`2xs`],
  margin: `0 0 ${space[3]} ${space[2]}`,
}

const Label = ({ children, id, variant = `DEFAULT` }) => {
  const labelStyles = {
    BIG: {
      fontSize: fontSizes.s,
    },
    SMALL: {
      color: colors.grey[50],
      display: `block`,
      fontSize: fontSizes.xs,
      svg: {
        color: colors.grey[40],
        marginRight: space[2],
        verticalAlign: `text-top`,
      },
    },
  }
  return (
    <label
      htmlFor={id}
      css={{
        ...baseStyles,
        ...labelStyles[variant],
      }}
    >
      {children}
    </label>
  )
}

Label.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.oneOf([`DEFAULT`, `SMALL`, `BIG`]),
  children: PropTypes.node,
}

export default Label
