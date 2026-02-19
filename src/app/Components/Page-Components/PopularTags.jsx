'use client'
import React, { useState, useMemo } from 'react'
import Image from 'next/image'

const defaultTags = [
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

export const PopularTags = ({ tags = [], onTagChange }) => {
  const [activeTags, setActiveTags] = useState([])
  const [tagsLoadmore, setTagsLoadmore] = useState(6)
  // Extract unique tags from the tags array
  const uniqueTags = useMemo(() => {
    if (!tags || tags.length === 0) return defaultTags;

    const tagSet = new Set();

    tags.forEach(tag => {
      if (tag) {
        // Handle comma-separated tags
        if (typeof tag === 'string' && tag.includes(',')) {
          tag.split(',').forEach(t => {
            const trimmed = t.trim();
            if (trimmed) tagSet.add(trimmed);
          });
        } else if (typeof tag === 'string') {
          tagSet.add(tag.trim());
        }
      }
    });

    const uniqueArray = Array.from(tagSet);
    return uniqueArray.length > 0 ? uniqueArray : defaultTags;
  }, [tags]);

  const toggleTag = (tag) => {
    setActiveTags((prev) => {
      const newActiveTags = prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag];

      // Notify parent component about tag changes
      if (onTagChange) {
        onTagChange(newActiveTags);
      }

      return newActiveTags;
    });
  }

  const orderedTags = [
    ...activeTags,
    ...uniqueTags.filter((tag) => !activeTags.includes(tag)),
  ]
  const visibleTags = orderedTags.slice(0, tagsLoadmore);
  const hasMore = orderedTags.length > tagsLoadmore;

  const handleLoadMore = () => {
    setTagsLoadmore(tagsLoadmore + 6);
  };
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

      <div className="pt-3 flex flex-wrap gap-3 ps-4 max-h-[300px] overflow-y-auto">
        {visibleTags.length > 0 ? (
          visibleTags.map((tag, index) => {
            const isActive = activeTags.includes(tag)

            return (
              <span
                key={`${tag}-${index}`}
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
          })
        ) : (
          <p className="text-gray-500">No tags available</p>
        )}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4129BA] transition-colors"
          >
            Load More Tags
          </button>
        </div>
      )}
    </div>
  )
}
