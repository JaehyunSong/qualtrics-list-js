/* 統制項目と処置項目の配列
1. 統制群の項目はcontrolArray内に入力
   - 各項目は""で囲み、カンマ（,）で区切る
2. 処置群の項目をtreatArray内に入力
   - 書き方は統制群と同じ
   - 処置群が2つの場合、["Sensitive Item 1", "Sensitive Item 2"]; のように書く
3. Qualtricsの最初の質問文にこのJavaScriptを貼り付ける（内）
4. Survey Flowの最初のブロックとしてEmbeded Dataを入れ、Group、List_1、List_2、...を入れる。
   - 統制項目の数 + 1まで。たとえば、統制項目が4個なら List_5 まで作成
*/
var controlArray = ["Control Item 1", 
                    "Control Item 2", 
                    "Control Item 3", 
                    "Control Item 4"];
var treatArray   = ["Sensitive Item 1"];

// 以下からは修正しなくても良い
var group = Math.floor(Math.random() * (treatArray.length + 1));

if (group === 0) {
  var ListArray = controlArray;
} else {
  var ListArray = controlArray.concat(treatArray[group - 1]);
} 

console.log(ListArray)

for (let i = ListArray.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [ListArray[i], ListArray[j]] = [ListArray[j], ListArray[i]];
}


Qualtrics.SurveyEngine.setEmbeddedData("Group", group); // 本番用
//console.log(group); // デバッグ用

ListArray.forEach((value, index) => {
  Qualtrics.SurveyEngine.setEmbeddedData("List_" + (index + 1), value); // 本番用
  //console.log(value) // デバッグ要
});
