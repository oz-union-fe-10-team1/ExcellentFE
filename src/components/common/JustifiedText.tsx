export const JustifiedText = (text: string) =>
  [...text].map((char, index) => {
    return (
      <span className="inline-block" key={index}>
        {char}
      </span>
    )
  })
