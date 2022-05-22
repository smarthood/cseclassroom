import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Back() {
  return (
    <div>
        <Link to="/">
        <BiArrowBack />
        </Link>
    </div>
  )
}
