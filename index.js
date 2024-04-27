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
              console.log('Element 1 is visible!');
              aboutMe.style.fontWeight = 'bold';
              break;
            case 'MBTI':
              console.log('Element 2 is visible!');
              MBTI.style.fontWeight = 'bold';
              break;
            case 'favorite':
              console.log('Element 3 is visible!');
              favorite.style.fontWeight = 'bold';
              break;
          }
        } else {
          // 태그가 더 이상 보이지 않을 때
          switch (entry.target.id) {
            case 'aboutMe':
              console.log('Element 1 is no longer visible!');
              aboutMe.style.fontWeight = 'normal';
              break;
            case 'MBTI':
              console.log('Element 2 is no longer visible!');
              MBTI.style.fontWeight = 'normal';
              break;
            case 'favorite':
              console.log('Element 3 is no longer visible!');
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
