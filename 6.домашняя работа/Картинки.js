// JavaScript source code
// �������� �������� DOM
const thumbnailImages = document.querySelectorAll('.thumbnail-image');
const fullImage = document.querySelector('.full-image');
const defaultImage = 'http://554a875a-71dc-4f5f-b6bf-ae8967f137d5.selcdn.net/thumbs2/a5441fd4-3b2b-11ec-9195-728dc54269ee.800x600.jpg';

// ��������� ���������
thumbnailImages.forEach(image => {
    image.src = image.dataset.src;
    image.addEventListener('error', () => {
        // ��� ������ �������� ���������� ��������� ��������
        image.src = defaultImage;
    });
});

// ���������� ����� �� ���������
thumbnailImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        // �������� ����������� �������� �� ��������� ���������
        fullImage.src = image.src;
        // ��������� ����� � ��������� ���������
        thumbnailImages.forEach(thumbnail => {
            if (thumbnail.classList.contains('active')) {
                thumbnail.classList.remove('active');
            }
        });
        image.classList.add('active');
    });
});

// ��� �������� �������� ������ �������� ���������� � ����������� �������
fullImage.src = thumbnailImages[0].src;
thumbnailImages[0].classList.add('active');
