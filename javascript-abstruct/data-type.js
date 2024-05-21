// 数値型は整数と小数点型を区別しない
console.log(3 / 2); // 1.5
// 浮動小数点数での計算は演算結果が不正解になることがある。
console.log(0.1 + 0.2); // 0.30000000000000004
// 数値リテラルには基数、指数の接頭辞がある。
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503

// 長整数型は任意の整数型(範囲は無限かつ、小数点以下は切り捨て)
console.log(-3n / 2n); // -1n

// Mathオブジェクトは標準数学関数と定数を提供している。
console.log(Math.sin(3.5));
// 円の公式
let r = 2;
const circumference = 2 * Math.PI * r;
console.log(circumference);

// 文字列はUnicodeの文字列(UTF-16)
console.log("Hello, world"); // シングルクォーテーションでもダブルクォーテーションでも可
console.log("おはよう，世界！"); // ほぼすべての Unicode 文字は文字列リテラルで書くことができます。
// 文字列と文字の区別はなし
console.log("Hello"[1] === "e"); // true

// 文字列の足し算は文字列の連結となる(数と文字の足し算も可)。
const age = 25;
console.log("私は " + age + " 歳です。"); // 文字列へ変換
console.log(`私は ${age} 歳です。`); // テンプレートリテラル(逆引用符[`]を使用)

// 論理型について
Boolean(""); // false(false、0、空文字列 ("")、NaN、null、undefinedはすべてfalseになる)
Boolean(234); // true(その他の値はすべてtrueになる)

// 変数(let[変数], const[定数変数], var[非推奨])
let a;
let name = "Simon";
// ここでは myLetVariable が *見えません*
for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // ここでだけ myLetVariable が見えます(宣言したブロックでのみ使用可)
}
// ここでは myLetVariable が *見えません*

// constは再代入不可
const Pi = 3.14; // 変数 Pi を設定
console.log(Pi); // 3.14

// constオブジェクトは再代入不可なだけであって、constのリストに要素を追加、削除などは行う事が出来る。
const obj = {};
obj.a = 1; // エラーなし
console.log(obj); // { a: 1 }

// 一時的なデッドゾーンについて
function foo(x, condition) {
    if (condition) {
      // それぞれの変数宣言がスコープ全体で適用されるため、宣言されていないものとして扱われる。
      console.log(x); // 1が出力されず、エラーが発生する
      const x = 2;
      console.log(x); 
    }
  }  
  console.log(foo(1, true)); 
  
// JavaScriptは動的型付け言語であるため、型を変更することが出来る。
let b = 1; // 数値型
b = "foo"; // 文字列型

// 数値演算
x += 5;
x = x + 5; // 上と同じ

// 文字列演算(文字列と計算するときに数値は文字列型として扱う)
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"

// 比較演算(<, >, <=, >=, ==, ===, !=, !==)
// 二重等号演算子
123 == "123"; // true
1 == true; // true
// 三重等号演算子 (推奨)
123 === "123"; // false
1 === true; // false

// ビット演算子、論理演算子など
const c = 0 && "Hello"; // 0 は偽値なので 0
const d = "Hello" || "world"; // "Hello" と "world" は共に真値なので "Hello"

// &&と||は短絡評価(左側の値を評価によって右側の評価を行うか変わる)を使用する
const name_a = o && o.getName(); // if(o !== null){ neme_a = o.getName(); } のような挙動
// 値のキャッシュにも使える(偽値の値が無効である場合)
const name_b = cachedName || (cachedName = getName());



