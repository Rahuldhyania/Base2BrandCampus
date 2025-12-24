'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const popularTags = [
  'Tutorial',
  'Guide',
  'Tips',
  'Strategy',
  'Beginner',
  'Advanced',
  'Tools',
  'Resources',
  'Case Study',
  'Best Practices',
];

export const PopularTags = () => {
  const [activeTags, setActiveTags] = useState([])

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    )
  }
  const orderedTags = [
    ...activeTags,
    ...popularTags.filter((tag) => !activeTags.includes(tag)),
  ]
   console.log(activeTags);
   
  return (
    <div className="bg-white rounded-2xl py-6 px-6">
      <h5 className="text-2xl text-secondary flex items-center gap-3">
        <Image
          src="/icons/tagprimary.svg"
          alt=""
          width={24}
          height={24}
        />
        Popular Tags
      </h5>

      <div className="pt-3 flex flex-wrap gap-3 ps-4">
        {orderedTags.map((tag, index) => {
          const isActive = activeTags.includes(tag)

          return (
            <span
              key={index}
              onClick={() => toggleTag(tag)}
              className={`flex items-center gap-2 px-4 py-1 rounded-3xl cursor-pointer transition-all
                ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'bg-[#e8e8e8] text-secondary'
                }
              `}
            >
              {tag}

              {isActive && (
                <span
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleTag(tag)
                  }}
                  className="w-4 h-4 text-xs bg-white text-primary rounded-full flex items-center justify-center"
                >
                  ✕
                </span>
              )}
            </span>
          )
        })}
      </div>
    </div>
  )
}
