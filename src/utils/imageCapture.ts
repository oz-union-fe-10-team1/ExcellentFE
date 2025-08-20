// html 요소를 캡쳐하여 이미지로 저장 하는 함수

import html2canvas from 'html2canvas'
export const captureAndSaveImage = (element: HTMLElement) => {
  //인자로 받은 element(html요소)를 사용하여 html2canvas 실행
  html2canvas(element, {
    allowTaint: false,
    useCORS: true,
    scale: 2,
  }).then((canvas) => {
    const image = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = image
    link.download = 'taste-test-result.png'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })
}
