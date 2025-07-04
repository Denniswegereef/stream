import { cn } from '../../helpers/cn'

interface EmbedMapProps {
  ariaLabel: string
  className?: string
}

export const EmbedMap = ({ ariaLabel, className }: EmbedMapProps) => {
  return (
    <div
      className={cn(
        'flex aspect-[20/13] min-h-[230px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#b2e6f4] shadow-sm lg:aspect-[20/19]',
        className
      )}
    >
      <iframe
        title={ariaLabel}
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15027.332393361814!2d4.904040787819383!3d52.37034153544847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1751648771642!5m2!1sen!2snl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
