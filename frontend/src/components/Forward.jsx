import React from 'react'
import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Forward = () => {
    const navigate = useNavigate()

    const handleForward = () => {
        navigate(1)
    }
  return (
    <div className='cursor-pointer' onClick={handleForward}><ChevronRight /></div> 
  )
}

export default Forward