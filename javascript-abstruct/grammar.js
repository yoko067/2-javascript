// 構文制御(C言語と同じような構文制御セットを持つ)
let name = "kittens";
if (name === "puppies") {
  name += " woof";
} else if (name === "kittens") {
  name += " meow";
} else {
  name += "!";
}
name === "kittens meow";

// whileループ
while (true) {
    // 無限ループ!
  }

// do whileループ(ループ本体が少なくとも一回は実行される)
let input;
do {
  input = get_input();
} while (inputIsNotValid(input)); // 条件

// for文
for (let i = 0; i < 5; i++) {
  // 5 回実行されます
}
  
// ofを使用したfor文 (const <for文で使用する変数名> of <反復可能なオブジェクト>)
for (const value of array) {
  // 値に関する処理
}

// inを使用したfor文 (const <for文で使用する変数名> in <列挙可能なプロパティ>)
for (const property in object) {
  // オブジェクトのプロパティに関する処理
}
  
// switch文(数値や文字列を元にした複数分岐に使われる)
switch (action) {
    case "draw":
      drawIt(); // action == daraw
      break;
    case "eat":
      eatIt(); // action == daraw
      break;
    default:
      doNothing(); // その他
  }
  
// エラー処理(try catch)
try {
    buildMySite("./website");
  } catch (e) {
    console.error("サイトの構築に失敗しました:", e);
  }
// throw文を使用することでもエラー処理が可能
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("サイトのディレクトリーが存在しません");
  }
}
// try, catch, throwを使った実際の使用例
try { // エラーを引き起こす可能性があるコードをtry内に記述
    buildMySite("./website");
  } catch (e) { // tryブロック内のコードでエラーが起きた場合、catchブロックが実行される
    if (e instanceof RangeError) {
      console.error("引数が範囲を超えているようです:", e);
      console.log("再試行中...");
      buildMySite("./website");
    } else {
      // 他の種類のエラーをどのように処理すればよいのかわからない場合、呼び出す
      // スタックの上位にある何かで捕捉して処理できるように throw します。
      throw e;
    }
  }

  


