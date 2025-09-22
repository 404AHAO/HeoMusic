var userId = "8668419170";
var userServer = "tencent";
var userType = "playlist";
var localMusic = [
  {
    name: 'Without You',
    artist: 'Avicii、Sandro Cavazza',
    url: 'https://image.ahao.ah.cn/Avicii%E3%80%81Sandro%20Cavazza%20-%20Without%20You.mp3',
    cover: 'https://image.ahao.ah.cn/Avicii%E3%80%81Sandro%20Cavazza%20-%20Without%20You.jpg',
    lrc: 'https://image.ahao.ah.cn/Avicii%E3%80%81Sandro%20Cavazza%20-%20Without%20You.lrc'
  },
  {
        name: 'Make You Feel My Love',
        artist: 'Bob Dylan',
        url: 'https://image.ahao.ah.cn/R%26B/Bob%20Dylan%20-%20Make%20You%20Feel%20My%20Love.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/Bob%20Dylan%20-%20Make%20You%20Feel%20My%20Love.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/Bob%20Dylan%20-%20Make%20You%20Feel%20My%20Love.lrc'
    },
    {
        name: '我知道',
        artist: 'BY2',
        url: 'https://image.ahao.ah.cn/R%26B/BY2%20-%20%E6%88%91%E7%9F%A5%E9%81%93.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/BY2%20-%20%E6%88%91%E7%9F%A5%E9%81%93.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/BY2%20-%20%E6%88%91%E7%9F%A5%E9%81%93.lrc'
    },
    {
        name: '句号',
        artist: 'G.E.M. 邓紫棋',
        url: 'https://image.ahao.ah.cn/R%26B/G.E.M.%20%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E5%8F%A5%E5%8F%B7.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/G.E.M.%20%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E5%8F%A5%E5%8F%B7.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/G.E.M.%20%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E5%8F%A5%E5%8F%B7.lrc'
    },
    {
        name: 'The Show',
        artist: 'Lenka',
        url: 'https://image.ahao.ah.cn/R%26B/Lenka%20-%20The%20Show.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/Lenka%20-%20The%20Show.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/Lenka%20-%20The%20Show.lrc'
    },
    {
        name: 'Another One Bites the Dust.',
        artist: 'Queen',
        url: 'https://image.ahao.ah.cn/R%26B/Queen%20-%20Another%20One%20Bites%20the%20Dust.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/Queen%20-%20Another%20One%20Bites%20the%20Dust.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/Queen%20-%20Another%20One%20Bites%20the%20Dust.lrc'
    },
    {
        name: 'Bohemian rhapsody',
        artist: 'Queen',
        url: 'https://image.ahao.ah.cn/R%26B/Queen%20-%20Bohemian%20rhapsody.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/Queen%20-%20Bohemian%20rhapsody.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/Queen%20-%20Bohemian%20rhapsody.lrc'
    },
    {
        name: "Don't Stop Me Now",
        artist: 'Queen',
        url: "https://image.ahao.ah.cn/R%26B/Queen%20-%20Don't%20Stop%20Me%20Now.mp3",
        cover: "https://image.ahao.ah.cn/R%26B/Queen%20-%20Don't%20Stop%20Me%20Now.jpg",
        lrc: "https://image.ahao.ah.cn/R%26B/Queen%20-%20Don't%20Stop%20Me%20Now.lrc"
    },
    {
        name: 'Seven Seas of Rhye',
        artist: 'Queen',
        url: 'https://image.ahao.ah.cn/R%26B/Queen%20-%20Seven%20Seas%20of%20Rhye.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/Queen%20-%20Seven%20Seas%20of%20Rhye.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/Queen%20-%20Seven%20Seas%20of%20Rhye.lrc'
    },
    {
        name: 'The Show Must Go On (Remastered 2011)',
        artist: 'Queen',
        url: 'https://image.ahao.ah.cn/R%26B/Queen%20-%20The%20Show%20Must%20Go%20On%20(Remastered%202011).mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/Queen%20-%20The%20Show%20Must%20Go%20On%20(Remastered%202011).jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/Queen%20-%20The%20Show%20Must%20Go%20On%20(Remastered%202011).lrc'
    },
    {
        name: '一直很安静',
        artist: '阿桑',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%98%BF%E6%A1%91%20-%20%E4%B8%80%E7%9B%B4%E5%BE%88%E5%AE%89%E9%9D%99.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%98%BF%E6%A1%91%20-%20%E4%B8%80%E7%9B%B4%E5%BE%88%E5%AE%89%E9%9D%99.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%98%BF%E6%A1%91%20-%20%E4%B8%80%E7%9B%B4%E5%BE%88%E5%AE%89%E9%9D%99.lrc'
    },
// {
//     name: '重生之我在异乡为异客',
//     artist: '王睿卓',
//     url: '/music/重生之我在异乡为异客.mp3',
//     cover: '/music/重生之我在异乡为异客.png',
//     lrc: '/music/重生之我在异乡为异客.lrc'
// },
// {
//     name: '落',
//     artist: '唐伯虎',
//     url: '/music/落.mp3',
//     cover: '/music/落.png',
//     lrc: '/music/落.lrc'
// }
];
var remoteMusic = "./musiclist.json"
