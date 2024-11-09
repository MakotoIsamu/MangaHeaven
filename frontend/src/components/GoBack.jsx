import React from 'react'
import { ChevronLeft } from 'lucide-react'
import {useNavigate} from 'react-router-dom'

const GoBack = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
  return (
    <div className='cursor-pointer' onClick={handleBack}><ChevronLeft /></div>
  )
}

export default GoBack