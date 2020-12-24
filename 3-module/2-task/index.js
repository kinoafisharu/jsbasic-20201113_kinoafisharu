/**
 * Пример работы числового фильтра.
 * Нужно отфильтровать массив по заданному диапазону
 * 
 * в стрелочной функции - действие с каждым 
 * элементом массива
 */
function filterRange(arr, a, b) {
  return arr.filter((elArr) => {
                    return a <= elArr && elArr <= b
                   })
}
console.log(filterRange([1,2,3,5,10], 1, 5))
