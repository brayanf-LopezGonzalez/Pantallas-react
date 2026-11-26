import { useState } from 'react'
import { colors, textStyles } from '../theme'

const styles = {
  wrapper: { display: 'flex', flexDirection: 'column', gap: 6 },
  labelRow: { display: 'flex', justifyContent: 'space-between' },
  label: { ...textStyles.bodyMd, fontWeight: '600', color: colors.textPrimary },
  field: {
    height: 48,
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    ...textStyles.bodyLg,
    fontFamily: 'inherit',
  },
  toggle: {
    border: 'none',
    background: 'transparent',
    color: colors.primary,
    fontSize: 13,
    cursor: 'pointer',
  },
  error: { fontSize: 12, color: colors.error },
}

function Input({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  error,
  labelRight,
}) {
  const [focused, setFocused] = useState(false)
  const [visible, setVisible] = useState(false)
  const isPassword = type === 'password'

  const borderColor = error
    ? colors.error
    : focused
      ? colors.primary
      : colors.border

  return (
    <div style={styles.wrapper}>
      <div style={styles.labelRow}>
        <label style={styles.label}>{label}</label>
        {labelRight}
      </div>
      <div
        style={{
          ...styles.field,
          border: `${focused || error ? 1.5 : 1}px solid ${borderColor}`,
        }}
      >
        <input
          style={styles.input}
          type={isPassword && visible ? 'text' : type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {isPassword && (
          <button
            type="button"
            style={styles.toggle}
            onClick={() => setVisible(!visible)}
          >
            {visible ? 'Ocultar' : 'Mostrar'}
          </button>
        )}
      </div>
      {error && <span style={styles.error}>{error}</span>}
    </div>
  )
}

export default Input