const container = document.querySelector('.container')

/* 
pt.1 
이미지 배치를 가져 와서 컨테이너 DIV에 추가하십시오.
*/
// 1 부터 10까지의 랜덤 숫자를 반환하는 함수
function getRandomNum() {
  return Math.floor(Math.random() * 10) + 1
}

// img 폴더 내의 10개의 파일을 랜덤으로 선택하여 화면에 보여주는 함수
function loadImages(numImages = 10) {
  let i = 0
  while (i < numImages) {
    const img = document.createElement('img')
    img.classList.add('img')
    img.src = `img/${getRandomNum()}.webp`
    container.appendChild(img)
    i++
  }
}

loadImages()

/*
pt.2
창 하단에 도달하면 스크롤 이벤트를 상황에 맞게 
더 많은 이미지를 로드하십시오.
*/

// 스크롤 위치가 scrollHeight 값보다 크면 추가로 10개의 이미지를 불러오는 함수
window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    loadImages(10)
  }
})
