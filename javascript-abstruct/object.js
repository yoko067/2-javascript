/* オブジェクト */ 
// javascriptのオブジェクトは名前と値をまとめるもので、他の言語ではハッシュテーブルがこれにあたる
// 空のオブジェクトの作成方法
const obj = {
    name: "Carrot",
    for: "Max",
    details: {
      color: "orange",
      size: 12,
    },
  };
// ドット記法(既存の要素(識別子、キー)のみを操作可能)
obj.name = "Simon";
const name1 = obj.name;
// ブラケット記法(新規の要素でも操作可能)
obj["name"] = "Simon";
const name2 = obj["name"];
// 変数をキー定義に使用できる
// const userName = prompt("キーは何ですか？");
// obj[userName] = prompt("値は何ですか？");
// プロパティのアクセスは連鎖させることができる
obj.details.color; // orange
obj["details"]["size"]; // 12
// オブジェクトは常に参照なので、何かが明示的にオブジェクトをコピーしない限り、
// オブジェクトへの変更は外部から見える。
const obj2 = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj2);
console.log(obj2.x); // 1
// 同じオブジェクトへの参照を持つ変数が二つある場合、片方変更すると両方変更される。
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1

/* 配列(length(配列の大きさ)を持つプロパティを持つオブジェクト) */
const a = ["dog", "cat", "hen"];
a.length; // 3
// 配列に要素を追加するとlengthも増加する。
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', 空 × 97, 'fox'] (途中に空のスロットがあるため疎配列と呼ばれる)
// 範囲外のインデックスを使用してもエラーは起きない
console.log(typeof a[90]); // undefined
// 配列は任意の要素を持つことができ、増減も可能。
const arr = [1, "foo", true];
arr.push({}); // arr = [1, "foo", true, {}]
// for文の反復処理も使用可能
for (let i = 0; i < a.length; i++) {
    // a[i] について何かする
  }
// for ofも使用可能
for (const currentValue of a) {
    // currentValue (現在の値) で何かをする
  }
// map()メソッドなど、配列はたくさんのメソッドを持っている。  
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']

/* 関数 */
// 関数例
function add(x, y) { // 引数が期待されているものと異なる場合undefinedとして扱われる
    const total = x + y;
    return total; //返り値を設定しないとundefinedが返される
  }  
add(); // NaN
// Equivalent to add(undefined, undefined)  
add(2, 3, 4); // 5(第 1、第 2 引数を加算。4 は無視される)
// 残余構文引数(余分な引数をすべて配列に集合させる構文)  
function avg(...args) {
    let sum = 0;
    for (const item of args) {
      sum += item;
    }
    return sum / args.length;
  }  
  avg(2, 3, 4, 5); // 3.5
// オブジェクト分割代入
// { } 中括弧はオブジェクトの分割代入する
function area({ width, height }) {
    return width * height;
  }
// { } 中括弧はここでは新しいオブジェクトを作成する
console.log(area({ width: 2, height: 3 }));
// 引数にデフォルト値を持たせる事が出来る
function avg(firstValue, secondValue, thirdValue = 0) {
    return (firstValue + secondValue + thirdValue) / 3;
  }
avg(1, 2); // 1, instead of NaN  

// 無名関数(変数に代入されたり、関数の返り値になったりする)
const avg = function (...args) {
    let sum = 0;
    for (const item of args) {
      sum += item;
    }
    return sum / args.length;
  };

// アロー関数(注: アロー関数と関数式は意味的には等価ではない)
const avg = (...args) => {
    let sum = 0;
    for (const item of args) {
      sum += item;
    }
    return sum / args.length;
  };  
// 単に式を返す場合は `return` を省略できる
  const sum = (a, b, c) => a + b + c;

// IIFE(単一の式で関数の宣言と起動を同時に行う仕組み)
(function () {
    // …
  })();  

// 再帰関数(ブラウザのDOMなどに見られる木構造を取り扱う時に便利)
function countChars(elm) {
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += countChars(child);
  }
  return count;
}

// 関数式には名前を付ける事が出来るため、同様に再帰する事が出来る。
const charsInBody = (function counter(elm) { // 関数式に与えられた名前は関数自身のスコープのみで有効
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += counter(child);
  }
  return count;
})(document.body);
  

// 第一級オブジェクト
// 関数を返す関数
const add = (x) => (y) => x + y;
// 関数を受け入れる関数
const babies2 = ["dog", "cat", "hen"].map((name) => `baby ${name}`);


// 内部関数
function parentFunc() {
    const a = 1;
  
    function nestedFunc() {
      const b = 4; // parentFuncからは使用できない
      return a + b;
    }
    return nestedFunc(); // 5
  }
  


