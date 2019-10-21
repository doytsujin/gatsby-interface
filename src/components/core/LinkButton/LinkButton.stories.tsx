/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf, addParameters } from "@storybook/react"

import README_MAIN from "./README_MAIN.md"
import README_ICONS from "../Button/README_ICONS.md"
import customStyling from "../Button/README_customStyling.md"
import LinkButton, { LinkButtonProps } from "./LinkButton"
import {
  showcaseVariants,
  showcaseSizes,
  showcaseTones,
  showcaseCustomStyles,
  showcaseIcons,
} from "../Button/utils/storybook-styles"

const defaultProps: LinkButtonProps = {
  to: `/`,
}

storiesOf(`core/LinkButton`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README_MAIN,
      includePropTables: [LinkButton],
    },
  })
  .add(...showcaseVariants(LinkButton, defaultProps))
  .add(...showcaseSizes(LinkButton, defaultProps))
  .add(...showcaseTones(LinkButton, defaultProps))
  .add(...showcaseCustomStyles(LinkButton, defaultProps, customStyling))
  .add(...showcaseIcons(LinkButton, defaultProps, README_ICONS))