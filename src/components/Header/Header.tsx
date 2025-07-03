import { CONTENT } from '../../data/content'
import { cn } from '../../helpers/cn'
import { useScroll } from '../../hooks/useScroll'
import { Logo } from '../../icons/Logo'
import { Link } from '../../ui/Link'

export const Header = () => {
  const { y } = useScroll()

  return (
    <header
      className={cn(
        'container-padding sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between transition-[border-color] duration-300 md:border-b md:border-transparent md:bg-white/90 md:backdrop-blur-sm',
        y > 1 && 'md:border-default-border'
      )}
    >
      <div
        className={cn(
          'flex h-[var(--header-height)] items-center transition-[translate,opacity] duration-300',
          y > 100 &&
            'translate-y-[-100%] opacity-0 md:translate-y-0 md:opacity-100'
        )}
      >
        <a
          href="/"
          // Increase click target size by using a pseudo-element
          aria-label={CONTENT.header.logo.ariaLabel}
          className="relative before:absolute before:-inset-3 before:z-[1] before:content-['']"
        >
          <Logo className="text-primary" />
        </a>
      </div>

      <div className="border-default-border/80 fixed bottom-0 left-0 w-full border-t bg-white/50 px-6 py-4 backdrop-blur-sm md:relative md:w-auto md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none">
        <Link
          variant="primary"
          className="w-full md:w-auto"
          href={CONTENT.header.button.href}
        >
          {CONTENT.header.button.text}
        </Link>
      </div>
    </header>
  )
}
