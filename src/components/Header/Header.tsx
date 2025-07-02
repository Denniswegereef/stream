import { Logo } from '../../svg/Logo'
import { Button } from '../../ui/Button'

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Logo className="text-primary" />

      <Button variant="primary">Airbnb Setup</Button>
    </header>
  )
}
