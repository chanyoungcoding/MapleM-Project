import React, { useState, useTransition } from 'react'

const page = () => {

  const [number, setNumber] = useState("");
  const [delayNumber, setDelayNumber] = useState("");
  const [isPending, startTransition] = useTransition();

  const update = () => {
    setNumber("급한문제");

    startTransition(() => {
      setDelayNumber("급하지 않은 문제")
    })
  }

  return (
    <div>
      <h1>{number}</h1>
      {isPending ? <p>로딩중입니다..</p> : <p>{delayNumber}</p>}
    </div>
  )
}

export default page