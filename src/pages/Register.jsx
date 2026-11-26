import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
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
    gap: 16,
  },
  subtitle: { ...textStyles.bodyMd, marginBottom: 8 },
  terms: { display: 'flex', gap: 10, alignItems: 'flex-start' },
  termsText: textStyles.bodyMd,
  status: { ...textStyles.bodyMd, fontWeight: '600', textAlign: 'center' },
  footer: { ...textStyles.bodyMd, textAlign: 'center' },
  link: { color: colors.primary, fontWeight: '600', cursor: 'pointer' },
}

function Register({ onLogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // { message, isError }

  const clearError = (field) => setErrors((prev) => ({ ...prev, [field]: null }))

  const handleRegister = () => {
    const cleanEmail = email.trim()

    const newErrors = {
      name: !name.trim() ? 'Ingresa tu nombre completo' : null,
      email: !cleanEmail
        ? 'Ingresa tu correo electrónico'
        : !emailRegex.test(cleanEmail)
          ? 'Correo electrónico inválido'
          : null,
      password: password.length < 8 ? 'Mínimo 8 caracteres' : null,
      confirmPassword:
        confirmPassword !== password ? 'Las contraseñas no coinciden' : null,
    }
    setErrors(newErrors)

    const hasErrors = Object.values(newErrors).some(Boolean)

    if (hasErrors) {
      setStatus({
        message: 'Revisa los campos marcados antes de continuar',
        isError: true,
      })
    } else if (!acceptedTerms) {
      setStatus({
        message: 'Debes aceptar los Términos de Servicio',
        isError: true,
      })
    } else {
      setStatus({ message: 'Cuenta creada exitosamente', isError: false })
      console.log('Registro:', { name: name.trim(), email: cleanEmail, phone })
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={textStyles.headlineLg}>Crea tu cuenta</h1>
      <p style={styles.subtitle}>
        Únete para una experiencia de compra personalizada y seguimiento en
        tiempo real de tus pedidos.
      </p>

      <Input
        label="Nombre completo"
        placeholder="Ej. Elena Rostova"
        value={name}
        error={errors.name}
        onChange={(value) => {
          setName(value)
          clearError('name')
        }}
      />
      <Input
        label="Correo electrónico"
        placeholder="nombre@ejemplo.com"
        type="email"
        value={email}
        error={errors.email}
        onChange={(value) => {
          setEmail(value)
          clearError('email')
        }}
      />
      <Input
        label="Teléfono móvil"
        placeholder="+52 612 345 6789"
        type="tel"
        value={phone}
        onChange={setPhone}
      />
      <Input
        label="Contraseña"
        placeholder="Mínimo 8 caracteres"
        type="password"
        value={password}
        error={errors.password}
        onChange={(value) => {
          setPassword(value)
          clearError('password')
        }}
      />
      <Input
        label="Confirmar contraseña"
        placeholder="Repite la clave"
        type="password"
        value={confirmPassword}
        error={errors.confirmPassword}
        onChange={(value) => {
          setConfirmPassword(value)
          clearError('confirmPassword')
        }}
      />

      <div style={styles.terms}>
        <Checkbox checked={acceptedTerms} onChange={setAcceptedTerms} />
        <span style={styles.termsText}>
          Acepto los Términos de Servicio y la Política de Privacidad.
        </span>
      </div>

      <Button text="Crear cuenta" onPress={handleRegister} />
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

      <p style={styles.footer}>
        ¿Ya tienes una cuenta?{' '}
        <span style={styles.link} onClick={onLogin}>
          Inicia sesión
        </span>
      </p>
    </div>
  )
}

export default Register