import './Button.css'

// variant: 'primary' | 'secondary'. Renderiza <a> si recibe href (solo visual, sin envío).
export default function Button({ variant = 'primary', size = 'lg', href, children, ...rest }) {
  const cls = `btn btn--${variant} btn--${size}`
  return href ? (
    <a className={cls} href={href} {...rest}>{children}</a>
  ) : (
    <button className={cls} type="button" {...rest}>{children}</button>
  )
}
