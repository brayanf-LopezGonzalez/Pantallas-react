import { useState } from 'react'
import { colors, textStyles } from '../theme'

function Button({ text, onPress, variant = 'primary' }) {
  const [pressed, setPressed] = useState(false)
  const isPrimary = variant === 'primary'

  const style = {
    height: 48,
    width: '100%',
    borderRadius: 8,
    border: isPrimary ? 'none' : `1px solid ${colors.border}`,
    backgroundColor: isPrimary
      ? pressed ? colors.primaryPressed : colors.primary
      : colors.surface,
    color: isPrimary ? colors.surface : colors.textPrimary,
    cursor: 'pointer',
    ...textStyles.labelLg,
  }

  return (
    <button
      style={style}
      onClick={onPress}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
    >
      {text}
    </button>
  )
}

export default Button