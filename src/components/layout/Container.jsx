import './Container.css'

export default function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`container ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
