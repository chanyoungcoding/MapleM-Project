"use client"

import { useEffect, useState } from 'react'

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timeValue = setTimeout(() => {
      setDebouncedValue(value);
    }, delay)

    return () => {
      clearTimeout(timeValue)
    }

  }, [value, delay])

  return debouncedValue
}

export default useDebounce
