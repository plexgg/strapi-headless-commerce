import { FieldError } from 'react-hook-form'

export const handleErrorMessages = (error?: FieldError) => {
  const messages: {
    [key: string]: string
  } = {
    required: 'Required field.',
  }

  if (error && error.type) {
    if (messages[error.type]) {
      return messages[error.type]
    }

    return error.message
  }

  return null
}
