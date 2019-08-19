/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import { styles, spaces } from "../../utils/presets"
import searchInputBg from "../../assets/searchInputBg.svg"

const TextInput = ({
  id,
  placeholder,
  type = `text`,
  defaultValue,
  value,
  disabled,
  onChange,
  variant = `DEFAULT`,
}) => {
  const inputStyles = {
    SEARCH: {
      backgroundImage: `url(${searchInputBg})`,
      backgroundPosition: `left 0.4rem center`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `1.3rem 1.3rem`,
      paddingLeft: spaces.xl,
      position: `relative`,
    },
  }
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      disabled={disabled}
      css={{
        ...styles.input,
        ...inputStyles[variant],
      }}
    />
  )
}

TextInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf([`DEFAULT`, `SEARCH`]),
}

export default TextInput