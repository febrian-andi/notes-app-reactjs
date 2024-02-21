const getData = () => {
return [
    {
        id: 1,
        title: 'React Js',
        body: `
        ReactJS, yang dikembangkan oleh Facebook, telah menjadi salah satu library JavaScript paling populer dalam pengembangan aplikasi web dan mobile. Ini menawarkan berbagai fitur yang memudahkan pengembang untuk membuat komponen antarmuka yang interaktif, stateful, dan dapat digunakan kembali. 
        Salah satu keunggulan utama ReactJS adalah kemampuannya dalam mengelola state aplikasi dengan efisien. Dengan menggunakan konsep Virtual DOM, ReactJS mampu melakukan pembaruan antarmuka dengan cepat dan efisien, meningkatkan kinerja aplikasi secara keseluruhan.
        Selain itu, ReactJS juga menawarkan pendekatan yang jelas dalam memisahkan tampilan dan logika aplikasi melalui penggunaan komponen. Ini memungkinkan pengembang untuk membuat kode yang lebih terorganisir dan mudah dipelihara.
        Fitur-fitur lain yang ditawarkan oleh ReactJS termasuk dukungan untuk JSX (JavaScript XML), yang memungkinkan pengembang untuk menulis kode HTML dalam JavaScript, serta kemampuan untuk merender komponen baik di sisi klien maupun server (server-side rendering), yang membantu meningkatkan SEO dan kinerja aplikasi.
        Dengan demikian, ReactJS menjadi pilihan yang sangat cocok untuk pengembangan aplikasi dengan antarmuka yang kompleks dan performa tinggi. Dengan komunitas yang besar dan dukungan yang terus berkembang, ReactJS tetap menjadi salah satu pilihan utama bagi para pengembang dalam membangun aplikasi modern.`,
        archived: false,
        createdAt: '2022-04-14T04:27:34.572z',
    },
    {
        id: 2,
        title: 'Vue Js',
        body: `Vue adalah sebuah kerangka kerja JavaScript yang progresif yang digunakan untuk membangun antarmuka pengguna (UI). Salah satu keunggulan utama dari Vue adalah pendekatannya yang bertahap, yang memungkinkan pengembang usntuk mengadopsinya secara bertahap ke dalam proyek mereka tanpa perlu melakukan perubahan besar-besaran.
        Salah satu fitur utama Vue adalah kemampuannya dalam menyediakan struktur yang jelas dan mudah dimengerti untuk mengembangkan aplikasi web. Dengan menggunakan konsep seperti komponen, direktif, dan "reactivity", Vue memungkinkan pengembang untuk memisahkan logika aplikasi menjadi bagian-bagian yang terkelola dengan baik.
        Vue juga menawarkan dukungan yang baik untuk integrasi dengan proyek-proyek yang ada. Misalnya, Vue dapat digunakan secara bertahap dalam proyek yang sudah ada, sehingga pengembang tidak perlu mengganti seluruh kode basis aplikasi.
        Selain itu, Vue memiliki ekosistem yang kaya, termasuk berbagai plugin dan alat-alat pendukung yang memudahkan pengembangan aplikasi. Dengan adanya komunitas yang besar dan aktif, pengembang dapat dengan mudah menemukan solusi untuk tantangan yang mereka hadapi selama proses pengembangan.
        Dengan kemampuan untuk mengadopsi secara bertahap, struktur yang jelas, dan dukungan ekosistem yang kuat, Vue menjadi pilihan yang populer bagi pengembang yang mencari kerangka kerja yang fleksibel dan mudah digunakan untuk membangun antarmuka pengguna yang dinamis dan responsif.`,
        archived: true,
        createdAt: '2022-04-14T04:27:34.572z',
    },
    {
        id: 3,
        title: 'Angular Js',
        body: 'AngularJS adalah framework software open-source yang digunakan untuk membuat aplikasi single-page berbasis website. Framework ini juga cukup populer bagi para developer untuk membuat menu animasi di laman web HTML.',
        archived: false,
        createdAt: '2022-04-14T04:27:34.572z',
    },
];
}

export { getData };