// sideBar JS
document.addEventListener('DOMContentLoaded', function () {
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        let aboutMe = document.getElementById('navAboutMe');
        let MBTI = document.getElementById('navMBTI');
        let favorite = document.getElementById('navFavorite');
        if (entry.isIntersecting) {
          // entry.target.id를 사용하여 각 태그의 ID에 따라 다른 메시지 출력
          switch (entry.target.id) {
            case 'aboutMe':
              //   console.log('Element 1 mount');
              aboutMe.style.fontWeight = 'bold';
              break;
            case 'MBTI':
              //   console.log('Element 2 mount');
              MBTI.style.fontWeight = 'bold';
              break;
            case 'favorite':
              //   console.log('Element 3 mount');
              favorite.style.fontWeight = 'bold';
              break;
          }
        } else {
          // 태그가 더 이상 보이지 않을 때
          switch (entry.target.id) {
            case 'aboutMe':
              //   console.log('Element 1 unmount');
              aboutMe.style.fontWeight = 'normal';
              break;
            case 'MBTI':
              //   console.log('Element 2 unmount');
              MBTI.style.fontWeight = 'normal';
              break;
            case 'favorite':
              //   console.log('Element 3 unmount');
              favorite.style.fontWeight = 'normal';
              break;
          }
        }
      });
    },
    { threshold: 0.7 }
  );
  // 각 태그를 개별적으로 관찰
  document.querySelectorAll('div').forEach((div) => {
    observer.observe(div);
  });
});

// FadeInOut JS
document.addEventListener('DOMContentLoaded', () => {
  // 나타날 때 사용할 Observer
  const appearObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInUp');
          entry.target.classList.remove('fadeOutDown');
        }
      });
    },
    {
      threshold: 0.3, // 나타날 때의 threshold
    }
  );

  // 사라질 때 사용할 Observer
  const disappearObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          entry.target.classList.add('fadeOutDown');
          entry.target.classList.remove('fadeInUp');
        }
      });
    },
    {
      threshold: 0.2, // 사라질 때의 threshold
    }
  );

  // 대상 요소 설정
  document.querySelectorAll('.bodyContainer').forEach((div) => {
    appearObserver.observe(div);
    disappearObserver.observe(div);
  });
});
