import React from 'react'

interface PageProps {
  params: {
    id: string;
  };
  searchParams: {
    [key: string]: string | undefined;
  };
}

const page:React.FC<PageProps> = (props) => {
  console.log(props.params.id)

  return (
    <div>
      <p>hello</p>
    </div>
  )
}

export default page