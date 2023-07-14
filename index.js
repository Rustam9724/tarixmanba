//------------- Очищение строки поиска в wellcome-section при нажатии на лупу ----------- //
document.querySelector('.wellcome-section__search div').addEventListener('click', () => {
    document.querySelector('.wellcome-section__search input').value = '';
});

// ------------ Изменение выбранного пункта на карте ---------------------------------- //
document.querySelectorAll('.map-list li').forEach((mapListItem, index, mapListItems) => (
    mapListItem.addEventListener('click', () => {
        document.querySelector('.map__choosed-category').style.backgroundImage = `url("../assets/images/map/${mapListItem.dataset.category}.svg")`
        mapListItems.forEach(mapListItem => {
            mapListItem.classList.remove('active');
        })
        mapListItem.classList.add('active');
    })
))

// Перелистывание карусели
const carousels = document.querySelectorAll('.artifacts__items');
const rightCarouselArrows = document.querySelectorAll('.carousel__arrow._right');
const leftCarouselArrows = document.querySelectorAll('.carousel__arrow._left')
const firstArtifacts = document.querySelectorAll('.artifact_first');
const carouselArrows = document.querySelectorAll('.carousel__arrow');

rightCarouselArrows.forEach(rightCarouselArrow => {
    rightCarouselArrow.addEventListener('click', () => {
        firstArtifacts.forEach(firstArtifact => {
            if (firstArtifact.dataset.carousel === rightCarouselArrow.dataset.carousel) {
                if (document.documentElement.clientWidth >= 1440) {
                        firstArtifact.style.marginLeft = '-1350px';
                    } else {
                        firstArtifact.style.marginLeft = '-100vw';
                    }
                    rightCarouselArrow.classList.remove('active');
                    leftCarouselArrows.forEach(leftCarouselArrow => {
                        if (leftCarouselArrow.dataset.carousel === rightCarouselArrow.dataset.carousel) {
                            leftCarouselArrow.classList.add('active')
                        }
                    })
            }
        })
    })
})

leftCarouselArrows.forEach(leftCarouselArrow => {
    leftCarouselArrow.addEventListener('click', () => {
        firstArtifacts.forEach(firstArtifact => {
            if (firstArtifact.dataset.carousel === leftCarouselArrow.dataset.carousel) {
                firstArtifact.style.marginLeft = '0';
                leftCarouselArrow.classList.remove('active');
                rightCarouselArrows.forEach(leftCarouselArrow => {
                    if (leftCarouselArrow.dataset.carousel === leftCarouselArrow.dataset.carousel) {
                        leftCarouselArrow.classList.add('active');
                    }
                 })
            }
        })
    })
})