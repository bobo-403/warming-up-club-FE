let val;
const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listItem', listItem);

val = list.childNodes; // NodeList 반환, line break도 포함
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3];
val = list.childNodes[3].nodeType;
// NodeType
// 1 - Element 요소
// 2 - Attribute (deprecated, 예전에 사용)
// 3 - Text node 줄 띄움?
// 8 - Comment Ndoe 주석
// 9 - Document itself
// 10 - Doctype

// children elememt nodes 반환
val = list.children; // 실제 요소의 노드들만 HTML Collection 반환 (line break X)
val = list.children[1];
list.children[1].textContent = 'Hi'; // 바로 조작 가능

// First Child
val = list.firstChild;
//list.firstChild === list.childNodes[0];

val = list.firstElementChild;

// Last Child
val = list.lastChild; // 텍스트 노드 포함
//list.lastChild === list.childNodes[list.childNodes.length - 1];
val = list.lastElementChild; //텍스트 노드 포함 x

// child 요소 count
val = list.childElementCount;

// parent node 반환
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// next sibling 반환
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// previous sibling 반환
val = listItem.previousSibling; //text node
val = listItem.previousElementSibling; // 없음

console.log('val', val);

for (let node of list.childNodes) {
  console.log(node);
}

// childNodes는 유사 배열 객체 이것을 배열로 바꿀수 있음
console.log(Array.from(list.childNodes));
