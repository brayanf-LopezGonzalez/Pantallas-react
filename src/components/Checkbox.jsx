import { colors } from '../theme'

function Checkbox({ checked, onChange }) {
  const style = {
    width: 20,
    height: 20,
    flexShrink: 0,
    borderRadius: 4,
    border: `1.5px solid ${checked ? colors.primary : colors.border}`,
    backgroundColor: checked ? colors.primary : colors.surface,
    color: colors.surface,
    fontSize: 13,
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: 0,
  }

  return (
    <button type="button" style={style} onClick={() => onChange(!checked)}>
      {checked ? '✓' : ''}
    </button>
  )
}

export default Checkbox