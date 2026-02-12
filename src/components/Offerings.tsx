import { useState } from 'react'
import { Calendar, User, Building2 } from 'lucide-react'
import * as m from '@/paraglide/messages'

const CAL_LINK =
  'https://cal.com/peetzweg/50min?user=peetzweg&overlayCalendar=true'

type OfferingType = 'personal' | 'company'

export function Offerings() {
  const [activeTab, setActiveTab] = useState<OfferingType>('personal')

  return (
    <section aria-labelledby="offerings-title" className="mt-16">
      <h2
        id="offerings-title"
        className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6"
      >
        {m.offerings_title()}
      </h2>

      {/* Mobile: Tabs */}
      <div className="md:hidden mb-6">
        <div className="flex gap-2 p-1 bg-neutral-900 rounded-lg">
          <button
            onClick={() => setActiveTab('personal')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'personal'
                ? 'bg-neutral-800 text-neutral-100'
                : 'text-neutral-400 hover:text-neutral-300'
            }`}
            aria-pressed={activeTab === 'personal'}
          >
            <User size={16} aria-hidden="true" />
            {m.offering_personal_title()}
          </button>
          <button
            onClick={() => setActiveTab('company')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'company'
                ? 'bg-neutral-800 text-neutral-100'
                : 'text-neutral-400 hover:text-neutral-300'
            }`}
            aria-pressed={activeTab === 'company'}
          >
            <Building2 size={16} aria-hidden="true" />
            {m.offering_company_title()}
          </button>
        </div>
      </div>

      {/* Mobile: Single card based on active tab */}
      <div className="md:hidden">
        {activeTab === 'personal' ? <PersonalCard /> : <CompanyCard />}
      </div>

      {/* Desktop: Side by side */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-6">
        <PersonalCard />
        <CompanyCard />
      </div>
    </section>
  )
}

function PersonalCard() {
  return (
    <article
      className="p-6 bg-neutral-900 rounded-lg border border-neutral-800"
      itemScope
      itemType="https://schema.org/Offer"
    >
      <div className="flex items-center gap-2 mb-3">
        <User size={20} className="text-neutral-400" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-neutral-100" itemProp="name">
          {m.offering_personal_title()}
        </h3>
      </div>

      <p className="text-neutral-200 font-medium mb-1">
        {m.offering_personal_subtitle()}
      </p>
      <p className="text-sm text-neutral-400 mb-4">
        {m.offering_personal_tagline()}
      </p>

      <p className="text-sm text-neutral-300 mb-4" itemProp="description">
        {m.offering_personal_description()}
      </p>

      <div className="mb-4">
        <p className="text-sm font-medium text-neutral-200 mb-2">
          {m.offering_personal_includes()}
        </p>
        <ul className="space-y-1.5 text-sm text-neutral-400" role="list">
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_personal_item_1()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_personal_item_2()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_personal_item_3()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_personal_item_4()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_personal_item_5()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_personal_item_6()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_personal_item_7()}
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-neutral-200 mb-2">
          {m.offering_personal_for_you()}
        </p>
        <ul className="space-y-1.5 text-sm text-neutral-400" role="list">
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_personal_for_you_1()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_personal_for_you_2()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_personal_for_you_3()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_personal_for_you_4()}
          </li>
        </ul>
      </div>

      <div className="pt-4 border-t border-neutral-800">
        <p className="text-lg font-semibold text-neutral-100 mb-1" itemProp="price">
          {m.offering_personal_price()}
        </p>
        <p className="text-xs text-neutral-500 mb-3">
          {m.offering_personal_price_note()}
        </p>
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-neutral-800 text-neutral-100 font-medium rounded-lg hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 focus:ring-offset-neutral-900"
          aria-label={`${m.offering_personal_cta()} - Opens cal.com in new window`}
        >
          <Calendar size={18} aria-hidden="true" />
          {m.offering_personal_cta()}
        </a>
      </div>
    </article>
  )
}

function CompanyCard() {
  return (
    <article
      className="p-6 bg-neutral-900 rounded-lg border border-neutral-800"
      itemScope
      itemType="https://schema.org/Offer"
    >
      <div className="flex items-center gap-2 mb-3">
        <Building2 size={20} className="text-neutral-400" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-neutral-100" itemProp="name">
          {m.offering_company_title()}
        </h3>
      </div>

      <p className="text-neutral-200 font-medium mb-1">
        {m.offering_company_subtitle()}
      </p>
      <p className="text-sm text-neutral-400 mb-4">
        {m.offering_company_tagline()}
      </p>

      <p className="text-sm text-neutral-300 mb-4" itemProp="description">
        {m.offering_company_description()}
      </p>

      <div className="mb-4">
        <p className="text-sm font-medium text-neutral-200 mb-2">
          {m.offering_company_includes()}
        </p>
        <ul className="space-y-1.5 text-sm text-neutral-400" role="list">
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_company_item_1()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_company_item_2()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_company_item_3()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_company_item_4()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_company_item_5()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_company_item_6()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_company_item_7()}
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-neutral-200 mb-2">
          {m.offering_company_for_you()}
        </p>
        <ul className="space-y-1.5 text-sm text-neutral-400" role="list">
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_company_for_you_1()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_company_for_you_2()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_company_for_you_3()}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-600 mt-0.5" aria-hidden="true">
              •
            </span>
            {m.offering_company_for_you_4()}
          </li>
        </ul>
      </div>

      <div className="pt-4 border-t border-neutral-800">
        <p className="text-lg font-semibold text-neutral-100 mb-1" itemProp="price">
          {m.offering_company_price()}
        </p>
        <p className="text-xs text-neutral-500 mb-3">
          {m.offering_company_price_note()}
        </p>
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-neutral-100 text-neutral-900 font-medium rounded-lg hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-100 focus:ring-offset-2 focus:ring-offset-neutral-900"
          aria-label={`${m.offering_company_cta()} - Opens cal.com in new window`}
        >
          <Calendar size={18} aria-hidden="true" />
          {m.offering_company_cta()}
        </a>
      </div>
    </article>
  )
}
