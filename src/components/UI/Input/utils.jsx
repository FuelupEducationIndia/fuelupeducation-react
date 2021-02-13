/* eslint-disable no-use-before-define */
import { useFormContext } from 'react-hook-form'

export function getIsFieldTouched(value, defaultValue) {
  return (
    !!value ||
    value === 0 ||
    value === false ||
    !!defaultValue ||
    defaultValue === 0 ||
    defaultValue === false
  )
}

export const useFormInput = props => {
  const { name } = props

  const { register, control, watch } = useFormContext() || {}

  if (!register) {
    alert('Form Input component can only be used inside FormProvider')
    throw new Error('Form Input component can only be used inside FormProvider')
  }

  const value = watch(name)
  const isTouched = getIsFieldTouched(value)

  return {
    inputRef: register(),
    control,
    value,
    isTouched,
  }
}
