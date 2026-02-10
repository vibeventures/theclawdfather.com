import { getLocale, locales, setLocale } from '@/paraglide/runtime'

export function LocaleSwitcher() {
  const currentLocale = getLocale()

  return (
    <div className="flex gap-2 text-sm">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => setLocale(locale)}
          aria-pressed={locale === currentLocale}
          className={`px-2 py-1 rounded transition-colors ${
            locale === currentLocale
              ? 'text-neutral-100'
              : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
