// 等待 DOM 加載完成
document.addEventListener('DOMContentLoaded', () => {
    // 漢堡菜單功能
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 模態框功能
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.querySelector('.close-button');
    const detailButtons = document.querySelectorAll('.details-button');

    // 產品詳情數據
    const products = {
        1: {
            title: 'Holland Jersey',
            image: 'images/holland_jersey_large.jpg',
            description: '這是一款官方Ballon d\'Or Marco van Basten簽名的荷蘭1988年球衣，配有英雄框架選項1。'
        },
        2: {
            title: 'Island Life Mens Shirt in Blue',
            image: 'images/island_life_shirt_large.jpg',
            description: '這是一件藍色的男士島嶼生活襯衫，舒適且時尚。'
        },
        3: {
            title: '黑色上衣',
            image: 'images/black_top_large.jpg',
            description: '這是一件經典的黑色上衣，適合各種場合穿著。'
        },
        4: {
            title: '黑色褲子',
            image: 'images/black_pants_large.jpg',
            description: '這是一條黑色褲子，剪裁合體，提升您的整體造型。'
        },
        5: {
            title: '皮膚色上衣',
            image: 'images/skin_top_large.jpg',
            description: '這是一件皮膚色的上衣，簡約而不失時尚感。'
        }
    };

    // 打開模態框
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product');
            const product = products[productId];
            if (product) {
                modalTitle.textContent = product.title;
                modalImage.src = product.image;
                modalImage.alt = product.title;
                modalDescription.textContent = product.description;
                modal.style.display = 'block';
            }
        });
    });

    // 關閉模態框
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 點擊模態框外部區域關閉模態框
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
}); 