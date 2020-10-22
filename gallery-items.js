const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  { 
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.js-gallery');
const lightBox = document.querySelector('.lightbox');
const closeBtn = document.querySelector('[data-action="close-lightbox"]');
const backdropRef = document.querySelector('.lightbox__overlay');
const backdropImg = lightBox.querySelector('.lightbox__image');


  images.forEach(pic => {

  let liItem = document.createElement('li');
    liItem.classList.add('gallery__item');

    liItem.insertAdjacentHTML('beforeend', `<a class = 'gallery__link' href = '${pic.original}'><img class = 'gallery__image' src='${pic.preview}' data-source = '${pic.original}' alt = '${pic.description}'></a></li>`);
    
    gallery.append(liItem)
  })

  const handlerPic = function (event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

      const activeImg = event.target;
      backdropImg.src = activeImg.dataset.source;
      backdropImg.alt = activeImg.alt;
      lightBox.classList.add('is-open');

      window.addEventListener('keydown', onESCPress);
      lightBox.addEventListener('click', handlerClose);
  };

  const onESCPress = function (event) {
    if (event.code === 'Escape') {
      handlerClose();
    };
  };

  const handlerClose = function () {
    backdropImg.src = "";
    lightBox.classList.remove('is-open');

    window.removeEventListener('keydown', onESCPress);
    lightBox.removeEventListener('click', handlerClose);
  };

  const onBackdropClick = function (event) {
    if(event.target === event.currentTarget) {
      handlerClose();
    }
  };

gallery.addEventListener('click', handlerPic);
closeBtn.addEventListener('click', handlerClose);
backdropRef.addEventListener('click', onBackdropClick)
