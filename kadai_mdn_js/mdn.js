const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1; 
const day = now.getDate();

// 文字列として結合して出力
console.log(`${year}年${month}月${day}日`);
