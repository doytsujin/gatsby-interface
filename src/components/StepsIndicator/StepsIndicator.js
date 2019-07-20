import React from "react"
import { keyframes, css } from "emotion"
import PropTypes from "prop-types"
import { MdCheck, MdClose, MdRefresh } from "react-icons/md"
import { palette, spaces, fontFamilies, fontSizes } from "../../utils/presets"

const loading = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Indicator = ({ status, label, expanded }) => {
  const defaultLeftMargin = `1.2rem`
  const icons = {
    SUCCESS: MdCheck,
    IN_PROGRESS: MdRefresh,
    FAILED: MdClose,
  }
  const styles = {
    SUCCESS: {
      background: palette.green[500],
      width: `1.5rem`,
      height: `1.5rem`,
      svg: {
        color: palette.white,
      },
    },
    IN_PROGRESS: {
      background: palette.yellow[600],
      width: `2rem`,
      height: `2rem`,
      ":after": {
        content: `""`,
        background: palette.yellow[600],
        width: `100%`,
        height: `100%`,
        position: `absolute`,
        borderRadius: `50%`,
        transform: `scale(1.5)`,
        zIndex: `-1`,
      },
      svg: {
        color: palette.grey[900],
        fontSize: `1.5rem`,
        animation: `${loading} 1s linear infinite`,
      },
    },
    NOT_STARTED: {
      background: `#D9D7E0`,
      width: `1rem`,
      height: `1rem`,
      marginLeft: expanded ? 0 : spaces.l,
      marginTop: expanded ? spaces.l : 0,
      ":before": {
        display: `none`,
      },
      ":last-of-type": {
        marginRight: expanded ? 0 : spaces.m,
        marginBottom: expanded ? spaces.m : 0,
      },
    },
    FAILED: {
      background: palette.red[500],
      "& > span": {
        background: palette.red[500],
        borderRadius: `50%`,
        transform: `scale(1.3)`,
      },
      svg: {
        color: palette.white,
        fontSize: `1.2rem`,
      },
    },
  }
  const Icon = icons[status]
  return (
    <span
      key={status}
      className={css({
        alignItems: `center`,
        borderRadius: `50%`,
        display: `flex`,
        justifyContent: `center`,
        marginLeft: expanded ? 0 : defaultLeftMargin,
        marginTop: expanded ? defaultLeftMargin : 0,
        position: `relative`,
        width: `2rem`,
        height: `2rem`,
        ":before": {
          content: `""`,
          width: expanded ? `2px` : defaultLeftMargin,
          height: expanded ? defaultLeftMargin : `2px`,
          position: `absolute`,
          left: expanded ? `50%` : 0,
          top: expanded ? 0 : `50%`,
          transform: expanded
            ? `translate(-50%, -100%)`
            : `translate(-100%, -50%)`,
          background: palette.green[500],
          zIndex: `-1`,
        },
        ":first-of-type": {
          marginTop: expanded ? spaces.xs : 0,
          marginLeft: expanded ? 0 : spaces.xs,
          ":before": {
            display: `none`,
          },
        },
        ":last-of-type": {
          marginRight: spaces.xs,
        },
        ...styles[status],
      })}
    >
      <span
        className={css({
          alignItems: `center`,
          display: `flex`,
          justifyContent: `center`,
          height: `100%`,
          width: `100%`,
        })}
      >
        {Icon && <Icon />}
      </span>
      {label && expanded && <Label expanded={expanded}>{label}</Label>}
    </span>
  )
}

Indicator.propTypes = {
  steps: PropTypes.array,
}

const Label = ({ children, expanded = false }) => (
  <span
    className={css({
      fontFamily: fontFamilies.bodyFontFamily,
      fontSize: fontSizes.m,
      paddingLeft: spaces.m,
      position: expanded ? `absolute` : `static`,
      left: expanded ? spaces.xl : 0,
      whiteSpace: `nowrap`,
    })}
  >
    {children}
  </span>
)

const StepsIndicator = ({ steps, expanded = false }) => {
  let label
  if (steps.find(step => step.status === `IN_PROGRESS`)) {
    label = steps.find(step => step.status === `IN_PROGRESS`).label
  } else if (steps.find(step => step.status === `FAILED`)) {
    label = steps.find(step => step.status === `FAILED`).label
  } else {
    label = steps[steps.length - 1].label
  }

  return (
    <div
      className={css({
        alignItems: `center`,
        display: `flex`,
        flexWrap: `wrap`,
      })}
    >
      <div
        className={css({
          alignItems: `center`,
          background: palette.grey[100],
          borderRadius: `9999px`,
          display: `inline-flex`,
          flexDirection: expanded ? `column` : `row`,
          zIndex: `-1`,
        })}
      >
        {steps.map((step, index) => (
          <Indicator
            status={step.status}
            label={step.label}
            key={index}
            expanded={expanded}
          />
        ))}
      </div>
      {label && !expanded && <Label>{label}</Label>}
    </div>
  )
}

StepsIndicator.propTypes = {
  steps: PropTypes.array,
}

export default StepsIndicator
