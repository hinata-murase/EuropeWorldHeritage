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
        spain: [
            { name: 'サグラダ・ファミリア', url: 'https://www.his-j.com/sightseeing/kaigai/europe/spain/sagradafamilia/' },
            { name: 'セゴビア', url: 'https://www.nta.co.jp/kaigai/europe/worldheritage/kyoui/spain/' }
        ],
        italy: [
            { name: 'スクロヴェー二礼拝堂', url: 'https://www.ohmi.co.jp/report/index.php?c=topics2_view&pk=1607996670' },
            { name: 'ピサの斜塔', url: 'https://www.his-j.com/sightseeing/kaigai/europe/italy/pisa/' }
        ]
        england: [
            { name: 'ロンドン塔', url: 'https://www.his-j.com/theme/world-heritage/europe/england/tower/' },
            { name: 'ストーンヘンジ', url: 'https://www.his-j.com/sightseeing/kaigai/europe/england/stonehenge/' }
        ]
        germany: [
            { name: 'ヴィースの巡礼教会', url: 'https://www.his-j.com/theme/world-heritage/europe/germany/wies/' },
            { name: 'バンベルク', url: 'https://www.his-j.com/theme/world-heritage/europe/germany/bamberg/' }
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
