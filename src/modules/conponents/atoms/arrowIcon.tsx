import React from "react"

// 未使用
interface ArrowIconProps {
  direction: "top" | "bottom"
  color: "black" | "white"
  size: 20 | 40
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ direction, color, size }) => {
  const sizeClasses =
    size === 20 ? "before:w-1.5 before:h-1.5 before:border-2" : "before:w-3 before:h-3 before:border-4"
  const baseClasses = `${sizeClasses} before:content-[''] before:inline-block`
  const colorClasses = color === "black" ? "before:border-black" : "before:border-white"
  const directionClasses =
    direction === "top"
      ? "before:border-b-0 before:border-l-0 before:-rotate-45"
      : "before:border-t-0 before:border-l-0 before:rotate-45"

  return (
    <i
      className={`relative inline-block before:absolute before:inset-0 before:m-auto ${baseClasses} ${directionClasses} ${colorClasses}`}
      style={{ paddingLeft: `${size}px` }}
    ></i>
  )
}

export default ArrowIcon
