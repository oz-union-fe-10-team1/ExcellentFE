export const JustifiedText = (text: string) =>
  [...text].map((char, index) => {
    return (
      <span key={index} style={{ display: 'inline-block' }}>
        {char}
      </span>
    )
  })
