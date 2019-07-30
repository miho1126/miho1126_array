// ## 配列
// 二次元配列
// 二つの配列

// apple りんご
// orange みかん

// pink ピンク
// red 赤

let fruit_list = [
  ['apple','りんご','orange','みかん'],
  ['pink','ピンク','red','赤']
]

let fruit = {
  apple :'りんご',
  orange :'みかん'
};

let fruit2 = {
  pink : 'ピンク',
  red : '赤'
}

let fruits = [fruit,fruit2];


let arr = ['apple','りんご','orange','みかん','pink','ピンク','red','赤']

// let arr = new Array (
//   "apple","りんご",
//   "orange","みかん",
//   "pink","ピンク",
//   "red","赤"
// );
// for (y=0;y<arr.length/2;y++){
//   document.write("y:",y,"",ar[y*2],"=",ar[y*2+1],"<br>");
// }


arr = new Array(
  ["apple","りんご"],
  ["orange","みかん"],
  ["pink","ピンク"],
  ["red","赤"]
);
for (y=0;y<arr.length;y++){
  for (x=0;x<arr[y].length;x++){
    document.write("arr[",y,"][",x,"]=",arr[y][x],"<br>");
  }
}