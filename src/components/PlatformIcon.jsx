function PlatformIcon({ name, className = '' }) {
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
