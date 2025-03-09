const count = 20;
let itemIndex = 0;

const observer = new IntersectionObserver(
  (entries) => {
    console.log('entries', entries);

    entries.forEach((entry) => {
      const list = document.querySelector('.list');

      if (entry.isIntersecting) {
        for (let i = itemIndex; i < itemIndex + count; i++) {
          let item = document.createElement('p');

          item.textContent = i;
          item.className = 'item';
          list.appendChild(item);
        }

        itemIndex = itemIndex + count;
      }
    });
  },
  { root: null, threshold: 0.5 }
);
// threshold 를 0.1로 하면 end 클래스인 p 태그에 10% 만 교차하더라도 다시 콜백 부분 호풀되어 새롭게 만듦

observer.observe(document.querySelector('.end'));
