window.addEventListener('load', function () {
    var $button = this.document.querySelector('.toggle-menu-button');
    var $menu = this.document.querySelector('.header-site-menu');

    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });
});


$(function () {
    $(window).scroll(function () {
        $("nav.floating").stop().animate(
            {"top": $(window).scrollTop() + 100},
        500);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const heritageData = {
        france: [
            { name: 'ヴェルサイユ宮殿', url: 'versailles.html' },
            { name: 'モン・サン・ミシェル', url: 'mont-saint-michel.html' }
        ],
        italy: [
            { name: 'コロッセオ', url: 'colosseum.html' },
            { name: 'ヴェネツィア', url: 'venice.html' }
        ]
        // 他の国の世界遺産データも追加
    };

    const flagItems = document.querySelectorAll('.flag-item');
    const heritageMenu = document.getElementById('heritage-menu');
    const heritageList = document.getElementById('heritage-list');

    flagItems.forEach(item => {
        item.addEventListener('click', () => {
            const country = item.getAttribute('data-country');
            const heritageSites = heritageData[country] || [];
            
            heritageList.innerHTML = '';

            heritageSites.forEach(site => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = site.url;
                link.textContent = site.name;
                listItem.appendChild(link);
                heritageList.appendChild(listItem);
            });

            heritageMenu.style.display = 'block';
        });
    });
});

