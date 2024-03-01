document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggleButton');
    const drawerMenu = document.getElementById('drawerMenu');

    // トグルボタンをクリックした際の処理
    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation(); // クリックイベントが親要素に伝播しないようにします
        drawerMenu.classList.toggle('open');
        toggleButton.classList.toggle('close');
    });

    // ドキュメント内のアンカーリンクを取得します
    const anchorLinks = document.querySelectorAll('a');
    for (let i = 0; i < anchorLinks.length; i++) {
        // アンカーリンクがクリックされた際の処理
        anchorLinks[i].addEventListener('click', function () {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        });
    }

    // ドキュメント内をクリックした際の処理
    document.addEventListener('click', function (event) {
        const targetElement = event.target;

        // ドロワーメニューが開いている場合に限り、ドロワーメニュー外をクリックで閉じます
        if (drawerMenu.classList.contains('open') && !drawerMenu.contains(targetElement) && targetElement !== toggleButton) {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        }
    });
});



{
    const menuItems = document.querySelectorAll('.chargeButton');
    const contents = document.querySelectorAll('.hiddenContent');

    menuItems.forEach(clickedItem => {
        clickedItem.addEventListener('click', e => {
            e.preventDefault();

            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            clickedItem.classList.add('active');

            contents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(clickedItem.dataset.id).classList.add('active');
        });
    });
}


{
    document.addEventListener('DOMContentLoaded', function () {
        const faqBoxes = document.querySelectorAll('.FAQBox');
      
        faqBoxes.forEach((faqBox) => {
          const qBoxes = faqBox.querySelectorAll('.QBox');
          const aBoxes = faqBox.querySelectorAll('.ABox');
      
          qBoxes.forEach((qBox, index) => {
            qBox.addEventListener('click', () => {
              const currentABox = aBoxes[index];
              const isActive = currentABox.classList.contains('FAQactive');
      
              aBoxes.forEach((box) => box.classList.remove('FAQactive'));
              isActive ? currentABox.classList.remove('FAQactive') : currentABox.classList.add('FAQactive');
            });
          });
        });
      });
      
}
