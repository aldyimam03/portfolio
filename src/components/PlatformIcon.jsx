function PlatformIcon({ name, className = '' }) {
  const textMarkProps = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': 'true',
  }

  const sharedProps = {
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '1.8',
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
  }

  if (name === 'github') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .5C5.65.5.5 5.8.5 12.35c0 5.24 3.3 9.68 7.88 11.25.58.11.79-.26.79-.58 0-.28-.01-1.03-.02-2.03-3.21.72-3.89-1.58-3.89-1.58-.53-1.37-1.29-1.73-1.29-1.73-1.06-.74.08-.73.08-.73 1.17.09 1.79 1.25 1.79 1.25 1.04 1.83 2.73 1.3 3.4.99.11-.78.41-1.3.74-1.6-2.56-.3-5.26-1.31-5.26-5.86 0-1.3.45-2.36 1.2-3.19-.12-.3-.52-1.53.11-3.18 0 0 .98-.32 3.2 1.22a10.8 10.8 0 0 1 5.82 0c2.22-1.54 3.2-1.22 3.2-1.22.63 1.65.23 2.88.11 3.18.75.83 1.2 1.89 1.2 3.19 0 4.56-2.7 5.55-5.28 5.84.42.37.79 1.09.79 2.2 0 1.59-.02 2.86-.02 3.25 0 .32.21.7.8.58 4.57-1.57 7.87-6.01 7.87-11.25C23.5 5.8 18.35.5 12 .5Z" />
      </svg>
    )
  }

  if (name === 'html') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 2.5h16l-1.45 16.2L12 21.5l-6.55-2.8L4 2.5Zm4.35 4.35.18 2.05H15l-.23 2.25H8.73l.55 5.54L12 17.77l2.73-1.08.28-2.8h-2.34l-.1 1.1-.57.23-.58-.23-.15-1.56H7.15l.35 4.78L12 20l4.5-1.79.62-7.02.42-4.34H8.35Z" />
      </svg>
    )
  }

  if (name === 'tailwind') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 6.2c-2.67 0-4.34 1.33-5 4 1-.67 1.88-.92 2.63-.75.43.1.73.41 1.07.76.56.58 1.22 1.26 2.65 1.26 2.67 0 4.34-1.34 5-4-1 .67-1.88.92-2.63.75-.43-.1-.73-.41-1.07-.76-.56-.58-1.22-1.26-2.65-1.26Zm-5.35 6.33c-2.67 0-4.34 1.34-5 4 1-.66 1.88-.91 2.63-.74.43.1.73.41 1.07.76.56.58 1.22 1.25 2.65 1.25 2.67 0 4.34-1.33 5-4-1 .67-1.88.92-2.63.75-.43-.1-.73-.41-1.07-.76-.56-.58-1.22-1.26-2.65-1.26Z" />
      </svg>
    )
  }

  if (name === 'javascript') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2.4" />
        <path d="M9.2 16.1c.35.58.77.93 1.45.93.62 0 .95-.3.95-1.17V9.2h1.85v6.7c0 1.91-1.12 2.78-2.75 2.78-1.47 0-2.32-.76-2.75-1.68l1.25-.9Zm5.2-.2c.5.81 1.16 1.18 2.04 1.18.68 0 1.12-.34 1.12-.81 0-.57-.45-.77-1.21-1.1l-.52-.22c-1.2-.51-2-1.16-2-2.52 0-1.25.96-2.21 2.45-2.21 1.06 0 1.83.37 2.38 1.34l-1.3.83c-.29-.52-.6-.72-1.08-.72-.49 0-.8.31-.8.72 0 .5.31.71 1.04 1.02l.52.22c1.42.61 2.22 1.23 2.22 2.63 0 1.51-1.18 2.34-2.77 2.34-1.55 0-2.56-.74-3.05-1.71l1.34-.78Z" fill="#1f2937" />
      </svg>
    )
  }

  if (name === 'blade') {
    return (
      <svg {...sharedProps}>
        <path d="M6 4.5h9.2L19 8.3v11.2H6a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z" />
        <path d="M15 4.7v3.8h3.8" />
        <path d="M8.2 12.3h2.7a1.45 1.45 0 0 1 0 2.9H8.2V9.1h2.35a1.35 1.35 0 0 1 0 2.7H8.2" />
      </svg>
    )
  }

  if (name === 'api' || name === 'rest-api') {
    return (
      <svg {...sharedProps}>
        <path d="M8.2 7.2 3.8 12l4.4 4.8" />
        <path d="m15.8 7.2 4.4 4.8-4.4 4.8" />
        <path d="m13.3 5.8-2.6 12.4" />
      </svg>
    )
  }

  if (name === 'laravel') {
    return (
      <svg {...sharedProps}>
        <path d="m4 6 5 2.8v5.6l-5-2.8V6Z" />
        <path d="m9 8.8 5-2.8 5 2.8-5 2.8-5-2.8Z" />
        <path d="m14 11.6 5-2.8v5.6l-5 2.8v-5.6Z" />
        <path d="m9 14.4 5 2.8 5-2.8" />
      </svg>
    )
  }

  if (name === 'mysql') {
    return (
      <svg {...sharedProps}>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
        <path d="M5 12v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" />
      </svg>
    )
  }

  if (name === 'sqlserver') {
    return (
      <svg {...sharedProps}>
        <path d="M5 4h14v16H5z" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
        <path d="M8 16h8" />
        <path d="M11 4v16" />
      </svg>
    )
  }

  if (name === 'auth') {
    return (
      <svg {...sharedProps}>
        <path d="M12 3.5 19 6v5.3c0 4.2-2.8 7.6-7 9.2-4.2-1.6-7-5-7-9.2V6l7-2.5Z" />
        <path d="M9.4 12.2 11.2 14l3.6-4" />
      </svg>
    )
  }

  if (name === 'git-github') {
    return (
      <svg {...sharedProps}>
        <path d="M8.4 5.4 12 9l3.6-3.6" />
        <path d="M12 9v6" />
        <circle cx="8.4" cy="5.4" r="2" />
        <circle cx="15.6" cy="5.4" r="2" />
        <circle cx="12" cy="17" r="2" />
        <path d="M6.5 14.8a5.8 5.8 0 1 1 11 0" />
      </svg>
    )
  }

  if (name === 'postman') {
    return (
      <svg {...sharedProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m8.2 13.7 5.7-5.7 2.1 2.1-5.7 5.7H8.2v-2.1Z" />
        <path d="m13.1 8.8 2.1 2.1" />
      </svg>
    )
  }

  if (name === 'swagger') {
    return (
      <svg {...sharedProps}>
        <path d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z" />
        <path d="M9.1 9.1c.5-.95 1.45-1.5 2.9-1.5 1.73 0 2.82.78 2.82 2.05 0 1.05-.63 1.55-1.82 1.9l-1.8.52c-1.2.35-1.8.86-1.8 1.9 0 1.26 1.08 2.02 2.82 2.02 1.45 0 2.4-.55 2.9-1.5" />
      </svg>
    )
  }

  if (name === 'phpunit') {
    return (
      <svg {...textMarkProps}>
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <text x="12" y="14.2" fill="currentColor" textAnchor="middle" fontSize="5" fontWeight="800">
          PHPUnit
        </text>
      </svg>
    )
  }

  if (name === 'eloquent') {
    return (
      <svg {...sharedProps}>
        <path d="M6 6.5h12" />
        <path d="M6 12h12" />
        <path d="M6 17.5h12" />
        <path d="M8.5 4v16" />
        <path d="M15.5 4v16" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.98 3.5A1.98 1.98 0 1 0 5 7.46 1.98 1.98 0 0 0 4.98 3.5ZM3.25 8.75h3.46V20.5H3.25V8.75Zm5.63 0h3.31v1.6h.05c.46-.87 1.59-1.8 3.27-1.8 3.5 0 4.14 2.35 4.14 5.4v6.55h-3.45v-5.81c0-1.39-.03-3.17-1.9-3.17-1.9 0-2.2 1.51-2.2 3.07v5.91H8.88V8.75Z" />
      </svg>
    )
  }

  if (name === 'portfolio') {
    return (
      <svg {...sharedProps}>
        <path d="M3.5 7.5h17" />
        <path d="M6.5 5.5h11l1.5 2v10a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17.5v-10l1.5-2Z" />
        <path d="M10 12h4" />
      </svg>
    )
  }

  if (name === 'email') {
    return (
      <svg {...sharedProps}>
        <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    )
  }

  if (name === 'top') {
    return (
      <svg {...sharedProps}>
        <path d="m12 18 0-12" />
        <path d="m7.5 10.5 4.5-4.5 4.5 4.5" />
      </svg>
    )
  }

  return (
    <svg {...sharedProps}>
      <circle cx="12" cy="12" r="8" />
    </svg>
  )
}

export default PlatformIcon
