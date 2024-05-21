/* クラス */ 
class Person {
    constructor(name) {
      this.name = name;
    }
    sayHello() {
      return `Hello, I'm ${this.name}!`;
    }
  }
  // インスタンス化
  const p = new Person("Maria");
  console.log(p.sayHello());
  

  /* 非同期プログラミング */
// ファイルの読み込み処理をするコード

// コールバックベース
fs.readFile(filename, (err, content) => {
    // このコールバックは、ファイルが読み込まれきったときにに呼び出される
    if (err) {
      throw err;
    }
    console.log(content);
  });
  
  // プロミスベース
  fs.readFile(filename)
    .then((content) => {
      // ファイルが読み取られきったときに実行される
      console.log(content);
    })
    .catch((err) => {
      throw err;
    });
  
  // Async/await
  async function readFile(filename) {
    // ファイルが読み取られきったときに実行される
    const content = await fs.readFile(filename);
    console.log(content);
  }
  

/* モジュール */
//  モジュールの取得
import { foo } from "./foo.js"; // 相対パス
// エクスポートされていない変数はモジュールにローカル
const b = 2;
// モジュールの出力
export const a = 1;



