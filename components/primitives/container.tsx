interface ContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div id={id} className={`mx-auto w-full max-w-[90rem] px-6 lg:px-20 ${className}`}>
      {children}
    </div>
  )
}
