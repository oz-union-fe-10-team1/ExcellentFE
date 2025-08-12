export const insertLineBreaks = (
  text: string,
  delimiter = '.',
  isDouble = false
) => {
  const escapedDelimiter =
    delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ' '
  const regex = new RegExp(`${escapedDelimiter}`, 'g')
  return text.replace(regex, `${delimiter}${isDouble ? '\n\n' : '\n'}`)
}
