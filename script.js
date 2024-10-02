// التوزيعات التي سيتم عرضها في صفحة التوزيعات
const distributions = [
    { 
        name: 'intel core serise 14', 
        description:  'هذه المعالجات تقدم توازنًا ممتازًا بين الأداء والكفاءة، مما يجعلها مناسبة للألعاب والتطبيقات الإنتاجية على حد سواء', 
        url: 'https://www.intel.com/content/www/us/en/products/docs/processors/core/core-14th-gen-desktop-brief.html',
        logo: 'images.png'
    },
    { 
        name: 'rtx 4000 series', 
        description: 'سلسلة NVIDIA RTX 4000 تقدم أداءً فائقًا للألعاب والإبداع بفضل معمارية Ada Lovelace وتقنيات الذكاء الاصطناعي المتقدمة',
        url: 'https://www.nvidia.com/en-me/geforce/graphics-cards/40-series/',
        logo: 'images/fedora_logo.png'
    },
    { 
        name: 'VENGEANCE® 64GB (4x16GB) DDR5 DRAM 6000MT/S ', 
        description: '.', 
        url: 'https://www.corsair.com/us/en/p/memory/cmk64gx5m4b6000z36/vengeance-64gb-4x16gb-ddr5-dram-6000mt-s-cl36-amd-expo-memory-black-cmk64gx5m4b6000z36',
        logo: 'imagesarc'
    },
     

];

// إضافة التوزيعات إلى صفحة التوزيعات
document.addEventListener('DOMContentLoaded', () => {
    const distList = document.getElementById('dist-list');
    if (distList) {
        distributions.forEach(dist => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div class="distribution">
                    <img src="${dist.logo}" alt="${dist.name} Logo" class="dist-logo">
                    <h4>${dist.name}</h4>
                    <p>${dist.description}</p>
                    <a href="${dist.url}" target="_blank" class="btn">الموقع الرسمي</a>
                </div>
            `;
            distList.appendChild(listItem);
        });
    }
});
