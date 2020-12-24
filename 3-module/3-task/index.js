/**
 * заменит - на CamelCase
 * 
 */
function camelize(str) {
  if (!str) {
    return str
  }

  return str
    .split("-") // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map((element, index) => {
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      if (index === 0) { // Это нужно делать, чтобы не делать заглавной первую часть
        return element
      }

      let firstLetter = element.slice(0, 1)
      let rest = element.slice(1)

      return `${firstLetter.toUpperCase()}${rest}`
    })
    .join('')
}
console.log(camelize("проверка-выполнения-задания"))
