import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { colors, textStyles } from '../theme'

const emailRegex = /^[\w.+-]+@[\w-]+\.[a-zA-Z]{2,}$/

const styles = {
  container: {
    minHeight: '100vh',
    maxWidth: 420,
    margin: '0 auto',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8,
  },
  subtitle: { ...textStyles.bodyMd, marginBottom: 16 },
  card: {
    backgroundColor: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: 12,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  forgot: { ...textStyles.bodyMd, color: colors.primary, cursor: 'pointer' },
  status: { ...textStyles.bodyMd, fontWeight: '600', textAlign: 'center' },
  footer: { ...textStyles.bodyMd, textAlign: 'center', marginTop: 16 },
  link: { color: colors.primary, fontWeight: '600', cursor: 'pointer' },
}

function Login({ onRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [status, setStatus] = useState(null) // { message, isError }

  const handleLogin = () => {
    const cleanEmail = email.trim()

    const newEmailError = !cleanEmail
      ? 'Ingresa tu correo electrónico'
      : !emailRegex.test(cleanEmail)
        ? 'Correo electrónico inválido'
        : null
    const newPasswordError = !password ? 'Ingresa tu contraseña' : null

    setEmailError(newEmailError)
    setPasswordError(newPasswordError)

    if (newEmailError || newPasswordError) {
      setStatus({
        message: 'Revisa los campos marcados antes de continuar',
        isError: true,
      })
    } else {
      setStatus({ message: 'Inicio de sesión exitoso', isError: false })
      console.log('Login:', { email: cleanEmail, password })
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={textStyles.headlineLg}>Bienvenido de nuevo</h1>
      <p style={styles.subtitle}>Inicia sesión para continuar tu experiencia</p>

      <div style={styles.card}>
        <Input
          label="Correo electrónico"
          placeholder="alex@ejemplo.com"
          type="email"
          value={email}
          error={emailError}
          onChange={(value) => {
            setEmail(value)
            setEmailError(null)
          }}
        />
        <Input
          label="Contraseña"
          type="password"
          value={password}
          error={passwordError}
          labelRight={<span style={styles.forgot}>¿Olvidaste tu contraseña?</span>}
          onChange={(value) => {
            setPassword(value)
            setPasswordError(null)
          }}
        />
        <Button text="Iniciar sesión" onPress={handleLogin} />
        {status && (
          <p
            style={{
              ...styles.status,
              color: status.isError ? colors.error : colors.success,
            }}
          >
            {status.message}
          </p>
        )}
      </div>

      <p style={styles.footer}>
        ¿No tienes una cuenta?{' '}
        <span style={styles.link} onClick={onRegister}>
          Regístrate
        </span>
      </p>
    </div>
  )
}

export default Login