import { useState } from 'react'
import { IoMdStar, IoMdStarOutline } from 'react-icons/io'
import { ScrollAnimationOnTrigger } from '../FrameMotion/FrameMotion'

export function CommentRating({
  description,
  stars,
  authorName,
}) {
  const [rating, setRating] = useState(stars)

  const handleClick = newRating => {
    setRating(newRating)
  }

  return (
    <div className="md:mt-0 flex flex-col gap-4">
      <img src="/imgs/aspas.png" width="40px" alt="" />
      <div className="w-full xl:w-[28vw] text-[1.7rem] xl:text-2xl mt-4 text-primary">
        <ScrollAnimationOnTrigger>
          <p>{description}</p>
        </ScrollAnimationOnTrigger>
      </div>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => {
          const ratingValue = i + 1
          const isFilled = ratingValue <= rating

          return (
            <span key={i}>
              {isFilled ? (
                <IoMdStar
                  className="text-[#FFDD55]"
                  size={37}
                />
              ) : (
                <IoMdStarOutline
                  className="text-gray-300 stroke-current stroke-2"
                  size={37}
                />
              )}
            </span>
          )
        })}
      </div>
      <div className="font-bold text-xl  text-primary">
        -
        <br />
        {authorName}
      </div>
    </div>
  )
}
