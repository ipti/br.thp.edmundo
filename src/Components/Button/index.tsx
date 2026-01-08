import { Button, ButtonProps } from 'primereact/button'
import { useState } from 'react'

const ButtonComponent = ({ onClick, loading, type, ...rest }: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (type === 'submit') {
      const form = e.currentTarget.closest('form') // Encontra o form mais próximo

      if (form) {
        e.preventDefault() // Previne o envio automático
        setIsLoading(true)

        const submitEvent = new Event('submit', {
          bubbles: true,
          cancelable: true
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const isSubmitted = form.dispatchEvent(submitEvent) // Dispara o evento de submit manualmente

        setInterval(() => setIsLoading(false), 1000) // Simula o carregamento
      }
    }

    if (onClick) {
      setIsLoading(true)
      onClick(e)
      setInterval(() => setIsLoading(false), 1000) // Simula o carregamento
    }
  }

  return (
    <Button
      {...rest}
      type={type ?? 'button'}
      loading={loading ?? isLoading}
      onClick={handleClick}
    />
  )
}

export default ButtonComponent
