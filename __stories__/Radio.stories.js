import React, { Fragment, useState } from "react"
import styled from "react-emotion"

import { storiesOf } from "@storybook/react"
import { radios, boolean } from "@storybook/addon-knobs"

import { Radio, RadioSkeleton } from "../src/components/Radio"
import { fontFamilies, fontSizes, palette, spaces } from "../src/utils/presets"

const Form = styled(`form`)`
  min-width: 20rem;
`

const CustomRadio1 = styled(Radio)`
  & > label {
    & > span {
      display: flex;
      flex-direction: column;

      strong {
        font-size: ${fontSizes.l};
        font-weight: 800;
        font-family: ${fontFamilies.headerFontFamily};
      }

      span {
        color: ${palette.grey[600]};
        font-size: ${fontSizes.xs};
        margin: 0;
        margin-top: ${spaces[`2xs`]};
      }
    }
  }
`

const CustomRadio2 = styled(Radio)`
  label {
    &.emphasized {
      padding: ${spaces.l} ${spaces.xl};

      :after,
      :before {
        display: none;
      }

      & > span {
        display: flex;
        flex-direction: column;

        strong {
          font-size: ${fontSizes.l};
          font-weight: 800;
          font-family: ${fontFamilies.headerFontFamily};
        }

        span {
          color: ${palette.grey[600]};
          font-size: ${fontSizes.xs};
          margin: 0;
          margin-top: ${spaces[`2xs`]};
        }
      }
    }
  }
  &.selected {
    label {
      &.emphasized {
        padding: ${spaces.l} ${spaces.xl};
      }
    }
  }
`

const selectionStyles = {
  standard: `standard`,
  emphasized: `emphasized`,
}

const options = [
  {
    value: 1,
    label: `First Option`,
  },
  {
    value: 2,
    label: `Second Option`,
  },
  {
    value: 3,
    label: `Third Option`,
  },
]

storiesOf(`Radio`, module)
  .add(
    `RadioSkeleton`,
    () =>
      React.createElement(() => {
        const [fieldValue, setFieldValue] = useState(1)

        return options.map(option => (
          <RadioSkeleton
            key={`field${option.value}`}
            fieldName="field"
            id={`field${option.value}`}
            label={option.label}
            value={option.value}
            optionValue={fieldValue}
            onChange={() => setFieldValue(option.value)}
          />
        ))
      }),
    {
      info: {
        text: `
          It's a functional unstyled building block, on which Radio components is built on. 
        `,
      },
    }
  )
  .add(`Radio`, () =>
    React.createElement(() => {
      const [fieldValue, setFieldValue] = useState(1)

      return (
        <Form>
          {options.map(option => (
            <Radio
              key={`field${option.value}`}
              fieldName="field"
              id={`field${option.value}`}
              label={option.label}
              value={option.value}
              optionValue={fieldValue}
              onChange={() => setFieldValue(option.value)}
              selectionStyle={radios(
                `selectionStyle`,
                selectionStyles,
                `standard`
              )}
            />
          ))}
        </Form>
      )
    })
  )

storiesOf(`Radio/in use`, module)
  .add(`Radio with HTML content label`, () =>
    React.createElement(() => {
      const [fieldValue, setFieldValue] = useState(1)

      return (
        <Form>
          {options.map(option => (
            <CustomRadio1
              key={`field${option.value}`}
              fieldName="field"
              id={`field${option.value}`}
              label={`<span><strong>${
                option.label
              }</strong><span>This is label with HTML content</span></span>`}
              value={option.value}
              optionValue={fieldValue}
              onChange={() => setFieldValue(option.value)}
              selectionStyle="emphasized"
            />
          ))}
        </Form>
      )
    })
  )
  .add(`Radio without input symbol`, () =>
    React.createElement(() => {
      const [fieldValue, setFieldValue] = useState(1)

      return (
        <Form>
          {options.map(option => (
            <CustomRadio2
              key={`field${option.value}`}
              fieldName="field"
              id={`field${option.value}`}
              label={`<span><strong>${
                option.label
              }</strong><span>This is label with HTML content</span></span>`}
              value={option.value}
              optionValue={fieldValue}
              onChange={() => setFieldValue(option.value)}
              selectionStyle="emphasized"
            />
          ))}
        </Form>
      )
    })
  )