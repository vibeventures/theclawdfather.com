'use client'

import { motion } from 'motion/react'
import { User, Bot } from 'lucide-react'

interface ViewToggleProps {
  isAgent: boolean
  onToggle: () => void
}

export function ViewToggle({ isAgent, onToggle }: ViewToggleProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full shadow-lg backdrop-blur-sm"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-xs text-neutral-500 uppercase tracking-wider">
          View for
        </span>
        <div className="relative flex items-center bg-neutral-800 rounded-full p-1">
          <motion.div
            className="absolute h-6 w-6 bg-neutral-100 rounded-full"
            animate={{ x: isAgent ? 24 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
          <div
            className={`relative z-10 w-6 h-6 flex items-center justify-center rounded-full transition-colors ${
              !isAgent ? 'text-neutral-900' : 'text-neutral-500'
            }`}
          >
            <User size={14} />
          </div>
          <div
            className={`relative z-10 w-6 h-6 flex items-center justify-center rounded-full transition-colors ${
              isAgent ? 'text-neutral-900' : 'text-neutral-500'
            }`}
          >
            <Bot size={14} />
          </div>
        </div>
        <span className="text-sm font-medium text-neutral-100 min-w-[60px]">
          {isAgent ? 'Agents' : 'Humans'}
        </span>
      </motion.button>
    </div>
  )
}
