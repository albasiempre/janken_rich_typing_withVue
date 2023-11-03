// filters: {
//   // ゼロ埋めフィルタ 引数に桁数を入力する
//   // ※ String.prototype.padStart() は IEじゃ使えない
//   zeroPad: function(value, num){
//     var num = typeof num !== 'undefined' ? num : 2;
//     return value.toString().padStart(num,"0");
//   }
// }

const array = [ 'flower',
'donuts',
'pancake',
'refugee',
'speaker',
'hexagon',
'world',
'champion',
'words',
'hell',];

const selected = randomSelect(array.slice(), 3);
 
function randomSelect(array, num)
{
  let newArray = [];
  
  while(newArray.length < num && array.length > 0)
  {
    // 配列からランダムな要素を選ぶ
    const rand = Math.floor(Math.random() * array.length);
    // 選んだ要素を別の配列に登録する
    newArray.push(array[rand]);
    // もとの配列からは削除する
    array.splice(rand, 1);
  }
  
  return newArray;
}