// element 생성
const li = document.createElement('li');

// 클래스 추가하기
li.className = 'list-group-item';

// id 추가하기
li.id = 'new-item';

// name 이라는 속성, new list item 값
li.setAttribute('name', 'New list item');

// link element 생성하기
const link = document.createElement('a');

link.className = 'alarm-item';

link.innerHTML = '<i class="bi-alarm"></i>';

li.appendChild(link);

// 특정 부모 노드의 마지막 자식으로
document.querySelector('ul.list-group').appendChild(li);
