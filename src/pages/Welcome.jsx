import Button from '../components/Button'
import { colors, textStyles } from '../theme'

const styles = {
  container: {
    minHeight: '100vh',
    maxWidth: 420,
    margin: '0 auto',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 12,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: colors.primary,
    color: colors.surface,
    fontSize: 28,
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: { ...textStyles.headlineLg, fontSize: 32 },
  subtitle: { ...textStyles.bodyMd, marginBottom: 24 },
}

function Welcome({ onLogin, onRegister }) {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>Z</div>
      <h1 style={styles.title}>Bienvenido a IZOK</h1>
      <p style={styles.subtitle}>
        Descubre piezas seleccionadas y sigue tus pedidos en tiempo real.
      </p>
      <Button text="Iniciar sesión" onPress={onLogin} />
      <Button text="Crear cuenta" variant="secondary" onPress={onRegister} />
    </div>
  )
}

export default Welcome