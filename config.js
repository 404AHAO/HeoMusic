var userId = "8668419170";
var userServer = "tencent";
var userType = "playlist";
var localMusic = [
    // Khalil Fong 方大同
    {
        name: 'singalongsong',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Singalongsong.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Singalongsong.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Singalongsong.lrc'
    },
    {
        name: 'rosy (live)',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Rosy%20(Live).mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Rosy%20(Live).jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Rosy%20(Live).lrc'
    },
    {
        name: '三人游',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E4%B8%89%E4%BA%BA%E6%B8%B8.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E4%B8%89%E4%BA%BA%E6%B8%B8.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E4%B8%89%E4%BA%BA%E6%B8%B8.lrc'
    },
    {
        name: '为你写的歌',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E4%B8%BA%E4%BD%A0%E5%86%99%E7%9A%84%E6%AD%8C.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E4%B8%BA%E4%BD%A0%E5%86%99%E7%9A%84%E6%AD%8C.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E4%B8%BA%E4%BD%A0%E5%86%99%E7%9A%84%E6%AD%8C.lrc'
    },
    {
        name: '关于爱的定义',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E5%85%B3%E4%BA%8E%E7%88%B1%E7%9A%84%E5%AE%9A%E4%B9%89.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E5%85%B3%E4%BA%8E%E7%88%B1%E7%9A%84%E5%AE%9A%E4%B9%89.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E5%85%B3%E4%BA%8E%E7%88%B1%E7%9A%84%E5%AE%9A%E4%B9%89.lrc'
    },
    {
        name: '南音',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E5%8D%97%E9%9F%B3.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E5%8D%97%E9%9F%B3.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E5%8D%97%E9%9F%B3.lrc'
    },
    {
        name: '回留',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E5%9B%9E%E7%95%99.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E5%9B%9E%E7%95%99.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E5%9B%9E%E7%95%99.lrc'
    },
    {
        name: '好不容易',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E5%A5%BD%E4%B8%8D%E5%AE%B9%E6%98%93.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E5%A5%BD%E4%B8%8D%E5%AE%B9%E6%98%93.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E5%A5%BD%E4%B8%8D%E5%AE%B9%E6%98%93.lrc'
    },
    {
        name: '才二十三',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E6%89%8D%E4%BA%8C%E5%8D%81%E4%B8%89.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E6%89%8D%E4%BA%8C%E5%8D%81%E4%B8%89.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E6%89%8D%E4%BA%8C%E5%8D%81%E4%B8%89.lrc'
    },
    {
        name: '春风吹',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E6%98%A5%E9%A3%8E%E5%90%B9.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E6%98%A5%E9%A3%8E%E5%90%B9.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E6%98%A5%E9%A3%8E%E5%90%B9.lrc'
    },
    {
        name: 'love song',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Love%20Song.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Love%20Song.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Love%20Song.lrc'
    },
    {
        name: '爱爱爱',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%88%B1%E7%88%B1%E7%88%B1.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%88%B1%E7%88%B1%E7%88%B1.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%88%B1%E7%88%B1%E7%88%B1.lrc'
    },
    {
        name: '特别的人',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%89%B9%E5%88%AB%E7%9A%84%E4%BA%BA.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%89%B9%E5%88%AB%E7%9A%84%E4%BA%BA.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%89%B9%E5%88%AB%E7%9A%84%E4%BA%BA.lrc'
    },
    {
        name: '生命之树',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%94%9F%E5%91%BD%E4%B9%8B%E6%A0%91.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%94%9F%E5%91%BD%E4%B9%8B%E6%A0%91.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%94%9F%E5%91%BD%E4%B9%8B%E6%A0%91.lrc'
    },
    {
        name: '红豆',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%BA%A2%E8%B1%86.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%BA%A2%E8%B1%86.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%BA%A2%E8%B1%86.lrc'
    },
    {
        name: '苏丽珍',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E8%8B%8F%E4%B8%BD%E7%8F%8D.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E8%8B%8F%E4%B8%BD%E7%8F%8D.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E8%8B%8F%E4%B8%BD%E7%8F%8D.lrc'
    },
    {
        name: '麦恩莉',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E9%BA%A6%E6%81%A9%E8%8E%89.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E9%BA%A6%E6%81%A9%E8%8E%89.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E9%BA%A6%E6%81%A9%E8%8E%89.lrc'
    },
    {
        name: '黑洞里',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E9%BB%91%E6%B4%9E%E9%87%8C.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E9%BB%91%E6%B4%9E%E9%87%8C.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E9%BB%91%E6%B4%9E%E9%87%8C.lrc'
    },
    {
        name: '黑白',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E9%BB%91%E7%99%BD.mp3',
        cover: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E9%BB%91%E7%99%BD.jpg',
        lrc: 'https://image.ahao.ah.cn/Khalil%20Fong/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E9%BB%91%E7%99%BD.lrc'
    },
    {
        name: "Nothing's Gonna Change My Love For You",
        artist: '方大同',
        url: "https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Nothing's%20Gonna%20Change%20My%20Love%20For%20You.mp3",
        cover: "https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Nothing's%20Gonna%20Change%20My%20Love%20For%20You.jpg",
        lrc: "https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Nothing's%20Gonna%20Change%20My%20Love%20For%20You.lrc"
    },
    {
        name: '小小虫',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Still%20Love%20You.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E5%B0%8F%E5%B0%8F%E8%99%AB.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20Still%20Love%20You.lrc'
    },
    {
        name: '每个人都会',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E6%AF%8F%E4%B8%AA%E4%BA%BA%E9%83%BD%E4%BC%9A.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E6%AF%8F%E4%B8%AA%E4%BA%BA%E9%83%BD%E4%BC%9A.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E6%AF%8F%E4%B8%AA%E4%BA%BA%E9%83%BD%E4%BC%9A.lrc'
    },
    {
        name: '爱在',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%88%B1%E5%9C%A8.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%88%B1%E5%9C%A8.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%88%B1%E5%9C%A8.lrc'
    },
    {
        name: '爱立刻',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%88%B1%E7%AB%8B%E5%88%BB.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%88%B1%E7%AB%8B%E5%88%BB.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E7%88%B1%E7%AB%8B%E5%88%BB.lrc'
    },
    {
        name: '那沙滩里的水',
        artist: '方大同',
        url: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E9%82%A3%E6%B2%99%E6%BC%A0%E9%87%8C%E7%9A%84%E6%B0%B4.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E9%82%A3%E6%B2%99%E6%BC%A0%E9%87%8C%E7%9A%84%E6%B0%B4.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E9%82%A3%E6%B2%99%E6%BC%A0%E9%87%8C%E7%9A%84%E6%B0%B4.lrc'
    },
    // 卢广仲
    {
        name: '死在你的怀怀 (Aaaaahhhhh)',
        artist: '卢广仲',
        url: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E6%AD%BB%E5%9C%A8%E4%BD%A0%E7%9A%84%E8%83%B8%E6%80%80%20(Aaaaahhhhh).mp3',
        cover: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E6%AD%BB%E5%9C%A8%E4%BD%A0%E7%9A%84%E8%83%B8%E6%80%80%20(Aaaaahhhhh).jpg',
        lrc: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E6%AD%BB%E5%9C%A8%E4%BD%A0%E7%9A%84%E8%83%B8%E6%80%80%20(Aaaaahhhhh).lrc'
    },
    {
        name: '100种生活',
        artist: '卢广仲',
        url: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20100%E7%A7%8D%E7%94%9F%E6%B4%BB.mp3',
        cover: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20100%E7%A7%8D%E7%94%9F%E6%B4%BB.jpg',
        lrc: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20100%E7%A7%8D%E7%94%9F%E6%B4%BB.lrc'
    },
    {
        name: '几分之几',
        artist: '卢广仲',
        url: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E5%87%A0%E5%88%86%E4%B9%8B%E5%87%A0.mp3',
        cover: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E5%87%A0%E5%88%86%E4%B9%8B%E5%87%A0.jpg',
        lrc: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E5%87%A0%E5%88%86%E4%B9%8B%E5%87%A0.lrc'
    },
    {
        name: '刻在我心底的名字',
        artist: '卢广仲',
        url: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E5%88%BB%E5%9C%A8%E6%88%91%E5%BF%83%E5%BA%95%E7%9A%84%E5%90%8D%E5%AD%97.mp3',
        cover: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E5%88%BB%E5%9C%A8%E6%88%91%E5%BF%83%E5%BA%95%E7%9A%84%E5%90%8D%E5%AD%97.jpg',
        lrc: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E5%88%BB%E5%9C%A8%E6%88%91%E5%BF%83%E5%BA%95%E7%9A%84%E5%90%8D%E5%AD%97.lrc'
    },
    {
        name: '大人中',
        artist: '卢广仲',
        url: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E5%A4%A7%E4%BA%BA%E4%B8%AD.mp3',
        cover: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E5%A4%A7%E4%BA%BA%E4%B8%AD.jpg',
        lrc: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E5%A4%A7%E4%BA%BA%E4%B8%AD.lrc'
    },
    {
        name: '太阳与地球 (Sun & Earth)',
        artist: '卢广仲',
        url: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E5%A4%AA%E9%98%B3%E4%B8%8E%E5%9C%B0%E7%90%83%20(Sun%20%26%20Earth).mp3',
        cover: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E5%A4%AA%E9%98%B3%E4%B8%8E%E5%9C%B0%E7%90%83%20(Sun%20%26%20Earth).jpg',
        lrc: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E5%A4%AA%E9%98%B3%E4%B8%8E%E5%9C%B0%E7%90%83%20(Sun%20%26%20Earth).lrc'
    },
    {
        name: '愚人节快乐',
        artist: '卢广仲',
        url: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E6%84%9A%E4%BA%BA%E8%8A%82%E5%BF%AB%E4%B9%90.mp3',
        cover: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E6%84%9A%E4%BA%BA%E8%8A%82%E5%BF%AB%E4%B9%90.jpg',
        lrc: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E6%84%9A%E4%BA%BA%E8%8A%82%E5%BF%AB%E4%B9%90.lrc'
    },
    {
        name: '慢灵魂',
        artist: '卢广仲',
        url: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E6%85%A2%E7%81%B5%E9%AD%82.mp3',
        cover: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E6%85%A2%E7%81%B5%E9%AD%82.jpg',
        lrc: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E6%85%A2%E7%81%B5%E9%AD%82.lrc'
    },
    {
        name: '我爱你',
        artist: '卢广仲',
        url: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E6%88%91%E7%88%B1%E4%BD%A0.mp3',
        cover: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E6%88%91%E7%88%B1%E4%BD%A0.jpg',
        lrc: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E6%88%91%E7%88%B1%E4%BD%A0.lrc'
    },
    {
        name: '鱼仔',
        artist: '卢广仲',
        url: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E9%B1%BC%E4%BB%94.mp3',
        cover: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E9%B1%BC%E4%BB%94.jpg',
        lrc: 'https://image.ahao.ah.cn/Crowd%20Lu/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E9%B1%BC%E4%BB%94.lrc'
    },
    {
        name: '一个人睡着 (Farewell Love Song)',
        artist: '卢广仲',
        url: 'https://image.ahao.ah.cn/new%20music/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9D%A1%E7%9D%80%20(Farewell%20Love%20Song).mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9D%A1%E7%9D%80%20(Farewell%20Love%20Song).jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9D%A1%E7%9D%80%20(Farewell%20Love%20Song).lrc'
    },
    {
        name: '一夜一夜一夜',
        artist: '卢广仲',
        url: 'https://image.ahao.ah.cn/new%20music/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E4%B8%80%E5%A4%9C%E4%B8%80%E5%A4%9C%E4%B8%80%E5%A4%9C.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E4%B8%80%E5%A4%9C%E4%B8%80%E5%A4%9C%E4%B8%80%E5%A4%9C.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E4%B8%80%E5%A4%9C%E4%B8%80%E5%A4%9C%E4%B8%80%E5%A4%9C.lrc'
    },
    {
        name: '不要在一起 (Match Point)',
        artist: '卢广仲',
        url: 'https://image.ahao.ah.cn/new%20music/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E4%B8%8D%E8%A6%81%E5%9C%A8%E4%B8%80%E8%B5%B7%20(Match%20Point).mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E4%B8%8D%E8%A6%81%E5%9C%A8%E4%B8%80%E8%B5%B7%20(Match%20Point).jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E4%B8%8D%E8%A6%81%E5%9C%A8%E4%B8%80%E8%B5%B7%20(Match%20Point).lrc'
    },
    // 丁世光
    {
        name: 'Simon',
        artist: '丁世光',
        url: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20Simon.mp3',
        cover: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20Simon.jpg',
        lrc: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20Simon.lrc'
    },
    {
        name: '一口 (The Day You Left Me)',
        artist: '丁世光',
        url: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E4%B8%80%E5%8F%A3%20(The%20Day%20You%20Left%20Me).mp3',
        cover: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E4%B8%80%E5%8F%A3%20(The%20Day%20You%20Left%20Me).jpg',
        lrc: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E4%B8%80%E5%8F%A3%20(The%20Day%20You%20Left%20Me).lrc'
    },
    {
        name: '无名花香 (Untold Blossom)',
        artist: '',
        url: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E6%97%A0%E5%90%8D%E8%8A%B1%E9%A6%99%20(Untold%20Blossom).mp3',
        cover: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E6%97%A0%E5%90%8D%E8%8A%B1%E9%A6%99%20(Untold%20Blossom).jpg',
        lrc: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E6%97%A0%E5%90%8D%E8%8A%B1%E9%A6%99%20(Untold%20Blossom).lrc'
    },
    {
        name: '瘦子 (Skinny Love)',
        artist: '丁世光',
        url: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E7%98%A6%E5%AD%90%20(Skinny%20Love).mp3',
        cover: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E7%98%A6%E5%AD%90%20(Skinny%20Love).jpg',
        lrc: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E7%98%A6%E5%AD%90%20(Skinny%20Love).lrc'
    },
    {
        name: '神探 (The Detective)',
        artist: '丁世光',
        url: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E7%A5%9E%E6%8E%A2%20(The%20Detective).mp3',
        cover: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E7%A5%9E%E6%8E%A2%20(The%20Detective).jpg',
        lrc: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E7%A5%9E%E6%8E%A2%20(The%20Detective).lrc'
    },
    {
        name: '行李 (The Trunk)',
        artist: '丁世光',
        url: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E8%A1%8C%E6%9D%8E%20(The%20Trunk).mp3',
        cover: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E8%A1%8C%E6%9D%8E%20(The%20Trunk).jpg',
        lrc: 'https://image.ahao.ah.cn/dsg/%E4%B8%81%E4%B8%96%E5%85%89%20-%20%E8%A1%8C%E6%9D%8E%20(The%20Trunk).lrc'
    },
    // 陶喆
    {
        name: 'Melody',
        artist: '陶喆',
        url: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20Melody.mp3',
        cover: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20Melody.jpg',
        lrc: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20Melody.lrc'
    },
    {
        name: 'Susan说',
        artist: '陶喆',
        url: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20Susan%E8%AF%B4.mp3',
        cover: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20Susan%E8%AF%B4.jpg',
        lrc: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20Susan%E8%AF%B4.lrc'
    },
    {
        name: '二十二',
        artist: '陶喆',
        url: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E4%BA%8C%E5%8D%81%E4%BA%8C.mp3',
        cover: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E4%BA%8C%E5%8D%81%E4%BA%8C.jpg',
        lrc: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E4%BA%8C%E5%8D%81%E4%BA%8C.lrc'
    },
    {
        name: '找自己',
        artist: '陶喆',
        url: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E6%89%BE%E8%87%AA%E5%B7%B1.mp3',
        cover: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E6%89%BE%E8%87%AA%E5%B7%B1.jpg',
        lrc: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E6%89%BE%E8%87%AA%E5%B7%B1.lrc'
    },
    {
        name: '流沙',
        artist: '陶喆',
        url: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E6%B5%81%E6%B2%99.mp3',
        cover: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E6%B5%81%E6%B2%99.jpg',
        lrc: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E6%B5%81%E6%B2%99.lrc'
    },
    {
        name: '爱我还是他',
        artist: '陶喆',
        url: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E7%88%B1%E6%88%91%E8%BF%98%E6%98%AF%E4%BB%96.mp3',
        cover: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E7%88%B1%E6%88%91%E8%BF%98%E6%98%AF%E4%BB%96.jpg',
        lrc: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E7%88%B1%E6%88%91%E8%BF%98%E6%98%AF%E4%BB%96.lrc'
    },
    {
        name: '蝴蝶',
        artist: '陶喆',
        url: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E8%9D%B4%E8%9D%B6.mp3',
        cover: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E8%9D%B4%E8%9D%B6.jpg',
        lrc: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E8%9D%B4%E8%9D%B6.lrc'
    },
    {
        name: '黑色柳丁',
        artist: '陶喆',
        url: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E9%BB%91%E8%89%B2%E6%9F%B3%E4%B8%81.mp3',
        cover: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E9%BB%91%E8%89%B2%E6%9F%B3%E4%B8%81.jpg',
        lrc: 'https://image.ahao.ah.cn/David%20Zee%20Tao/%E9%99%B6%E5%96%86%20-%20%E9%BB%91%E8%89%B2%E6%9F%B3%E4%B8%81.lrc'
    },
    {
        name: '天天',
        artist: '陶喆',
        url: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E5%A4%A9%E5%A4%A9.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E5%A4%A9%E5%A4%A9.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E5%A4%A9%E5%A4%A9.lrc'
    },
    {
        name: '小镇姑娘',
        artist: '陶喆',
        url: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E5%B0%8F%E9%95%87%E5%A7%91%E5%A8%98.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E5%B0%8F%E9%95%87%E5%A7%91%E5%A8%98.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E5%B0%8F%E9%95%87%E5%A7%91%E5%A8%98.lrc'
    },
    {
        name: '普通朋友',
        artist: '陶喆',
        url: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E6%99%AE%E9%80%9A%E6%9C%8B%E5%8F%8B.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E6%99%AE%E9%80%9A%E6%9C%8B%E5%8F%8B.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E6%99%AE%E9%80%9A%E6%9C%8B%E5%8F%8B.lrc'
    },
    {
        name: '爱，很简单',
        artist: '陶喆',
        url: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E7%88%B1%EF%BC%8C%E5%BE%88%E7%AE%80%E5%8D%95.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E7%88%B1%EF%BC%8C%E5%BE%88%E7%AE%80%E5%8D%95.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E7%88%B1%EF%BC%8C%E5%BE%88%E7%AE%80%E5%8D%95.lrc'
    }, {
        name: '讨厌红楼梦',
        artist: '陶喆',
        url: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E8%AE%A8%E5%8E%8C%E7%BA%A2%E6%A5%BC%E6%A2%A6.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E8%AE%A8%E5%8E%8C%E7%BA%A2%E6%A5%BC%E6%A2%A6.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%20-%20%E8%AE%A8%E5%8E%8C%E7%BA%A2%E6%A5%BC%E6%A2%A6.lrc'
    },
    {
        name: '那个女孩',
        artist: '陶喆、卢广仲',
        url: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%E3%80%81%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E9%82%A3%E4%B8%AA%E5%A5%B3%E5%AD%A9.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%E3%80%81%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E9%82%A3%E4%B8%AA%E5%A5%B3%E5%AD%A9.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E9%99%B6%E5%96%86%E3%80%81%E5%8D%A2%E5%B9%BF%E4%BB%B2%20-%20%E9%82%A3%E4%B8%AA%E5%A5%B3%E5%AD%A9.lrc'
    },
    // 陈绮贞
    {
        name: 'After 17',
        artist: '陈绮贞',
        url: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20After%2017.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20After%2017.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20After%2017.lrc'
    },
    {
        name: '告诉我',
        artist: '陈绮贞',
        url: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E5%91%8A%E8%AF%89%E6%88%91.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E5%91%8A%E8%AF%89%E6%88%91.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E5%91%8A%E8%AF%89%E6%88%91.lrc'
    },
    {
        name: '太聪明',
        artist: '陈绮贞',
        url: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E5%A4%AA%E8%81%AA%E6%98%8E.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E5%A4%AA%E8%81%AA%E6%98%8E.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E5%A4%AA%E8%81%AA%E6%98%8E.lrc'
    },
    {
        name: '小步舞曲',
        artist: '陈绮贞',
        url: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E5%B0%8F%E6%AD%A5%E8%88%9E%E6%9B%B2.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E5%B0%8F%E6%AD%A5%E8%88%9E%E6%9B%B2.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E5%B0%8F%E6%AD%A5%E8%88%9E%E6%9B%B2.lrc'
    },
    {
        name: '旅行的意义',
        artist: '陈绮贞',
        url: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E6%97%85%E8%A1%8C%E7%9A%84%E6%84%8F%E4%B9%89.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E6%97%85%E8%A1%8C%E7%9A%84%E6%84%8F%E4%B9%89.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E6%97%85%E8%A1%8C%E7%9A%84%E6%84%8F%E4%B9%89.lrc'
    },
    {
        name: '还是会寂寞',
        artist: '陈绮贞',
        url: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E8%BF%98%E6%98%AF%E4%BC%9A%E5%AF%82%E5%AF%9E.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E8%BF%98%E6%98%AF%E4%BC%9A%E5%AF%82%E5%AF%9E.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E8%BF%98%E6%98%AF%E4%BC%9A%E5%AF%82%E5%AF%9E.lrc'
    },
    {
        name: '鱼',
        artist: '陈绮贞',
        url: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E9%B1%BC.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E9%B1%BC.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E9%99%88%E7%BB%AE%E8%B4%9E%20-%20%E9%B1%BC.lrc'
    },
    // Queen
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
    // 陈奕迅
    {
        name: '爱情转移',
        artist: '陈奕迅',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E7%88%B1%E6%83%85%E8%BD%AC%E7%A7%BB.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E7%88%B1%E6%83%85%E8%BD%AC%E7%A7%BB.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E7%88%B1%E6%83%85%E8%BD%AC%E7%A7%BB.lrc'
    },
    {
        name: '单车',
        artist: '陈奕迅',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%8D%95%E8%BD%A6.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%8D%95%E8%BD%A6.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%8D%95%E8%BD%A6.lrc'
    },
    {
        name: '富士山下',
        artist: '陈奕迅',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B.lrc'
    },
    {
        name: '孤独患者',
        artist: '陈奕迅',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%AD%A4%E7%8B%AC%E6%82%A3%E8%80%85.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%AD%A4%E7%8B%AC%E6%82%A3%E8%80%85.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%AD%A4%E7%8B%AC%E6%82%A3%E8%80%85.lrc'
    },
    {
        name: '苦瓜',
        artist: '陈奕迅',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E8%8B%A6%E7%93%9C.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E8%8B%A6%E7%93%9C.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E8%8B%A6%E7%93%9C.lrc'
    },
    {
        name: '明年今日',
        artist: '陈奕迅',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E6%98%8E%E5%B9%B4%E4%BB%8A%E6%97%A5.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E6%98%8E%E5%B9%B4%E4%BB%8A%E6%97%A5.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E6%98%8E%E5%B9%B4%E4%BB%8A%E6%97%A5.lrc'
    },
    {
        name: '陪你度过漫长岁月',
        artist: '陈奕迅',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E9%99%AA%E4%BD%A0%E5%BA%A6%E8%BF%87%E6%BC%AB%E9%95%BF%E5%B2%81%E6%9C%88.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E9%99%AA%E4%BD%A0%E5%BA%A6%E8%BF%87%E6%BC%AB%E9%95%BF%E5%B2%81%E6%9C%88.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E9%99%AA%E4%BD%A0%E5%BA%A6%E8%BF%87%E6%BC%AB%E9%95%BF%E5%B2%81%E6%9C%88.lrc'
    },
    {
        name: '圣诞结',
        artist: '陈奕迅',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%9C%A3%E8%AF%9E%E7%BB%93.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%9C%A3%E8%AF%9E%E7%BB%93.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%9C%A3%E8%AF%9E%E7%BB%93.lrc'
    },
    {
        name: '十面埋伏',
        artist: '陈奕迅',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%8D%81%E9%9D%A2%E5%9F%8B%E4%BC%8F.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%8D%81%E9%9D%A2%E5%9F%8B%E4%BC%8F.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%8D%81%E9%9D%A2%E5%9F%8B%E4%BC%8F.lrc'
    },
    {
        name: '夕阳无限好',
        artist: '陈奕迅',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%A4%95%E9%98%B3%E6%97%A0%E9%99%90%E5%A5%BD.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%A4%95%E9%98%B3%E6%97%A0%E9%99%90%E5%A5%BD.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%A4%95%E9%98%B3%E6%97%A0%E9%99%90%E5%A5%BD.lrc'
    },
    {
        name: '阴天快乐',
        artist: '陈奕迅',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E9%98%B4%E5%A4%A9%E5%BF%AB%E4%B9%90.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E9%98%B4%E5%A4%A9%E5%BF%AB%E4%B9%90.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E9%98%B4%E5%A4%A9%E5%BF%AB%E4%B9%90.lrc'
    },
    {
        name: '最佳损友 (To My Friend Special Mix)',
        artist: '陈奕迅',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E6%9C%80%E4%BD%B3%E6%8D%9F%E5%8F%8B%20(To%20My%20Friend%20Special%20Mix).mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E6%9C%80%E4%BD%B3%E6%8D%9F%E5%8F%8B%20(To%20My%20Friend%20Special%20Mix).jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E6%9C%80%E4%BD%B3%E6%8D%9F%E5%8F%8B%20(To%20My%20Friend%20Special%20Mix).lrc'
    },
    {
        name: '可一可再',
        artist: '陈奕迅',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%E3%80%81eason%20and%20the%20duo%20band%20-%20%E5%8F%AF%E4%B8%80%E5%8F%AF%E5%86%8D.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%E3%80%81eason%20and%20the%20duo%20band%20-%20%E5%8F%AF%E4%B8%80%E5%8F%AF%E5%86%8D.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E5%A5%95%E8%BF%85%E3%80%81eason%20and%20the%20duo%20band%20-%20%E5%8F%AF%E4%B8%80%E5%8F%AF%E5%86%8D.lrc'
    },
    // 黄雨勋
    {
        name: '只要我长大',
        artist: '黄雨勋',
        url: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E9%9B%A8%E5%8B%B3%20-%20%E5%8F%AA%E8%A6%81%E6%88%91%E9%95%BF%E5%A4%A7.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E9%9B%A8%E5%8B%B3%20-%20%E5%8F%AA%E8%A6%81%E6%88%91%E9%95%BF%E5%A4%A7.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E9%9B%A8%E5%8B%B3%20-%20%E5%8F%AA%E8%A6%81%E6%88%91%E9%95%BF%E5%A4%A7.lrc'
    },
    {
        name: '我们',
        artist: '黄雨勋',
        url: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E9%9B%A8%E5%8B%B3%20-%20%E6%88%91%E4%BB%AC.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E9%9B%A8%E5%8B%B3%20-%20%E6%88%91%E4%BB%AC.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E9%9B%A8%E5%8B%B3%20-%20%E6%88%91%E4%BB%AC.lrc'
    },
    {
        name: '纟纟',
        artist: '黄雨勋',
        url: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E9%9B%A8%E5%8B%B3%20-%20%E7%BA%9F%E7%BA%9F.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E9%9B%A8%E5%8B%B3%20-%20%E7%BA%9F%E7%BA%9F.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E9%9B%A8%E5%8B%B3%20-%20%E7%BA%9F%E7%BA%9F.lrc'
    },
    // 李荣浩
    {
        name: '恋人',
        artist: '李荣浩',
        url: 'https://image.ahao.ah.cn/new%20music/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%81%8B%E4%BA%BA.mp3',
        cover: 'https://image.ahao.ah.cn/new%20music/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%81%8B%E4%BA%BA.jpg',
        lrc: 'https://image.ahao.ah.cn/new%20music/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%81%8B%E4%BA%BA.lrc'
    },
    {
        name: '不将就',
        artist: '李荣浩',
        url: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E4%B8%8D%E5%B0%86%E5%B0%B1.mp3',
        cover: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E4%B8%8D%E5%B0%86%E5%B0%B1.jpg',
        lrc: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E4%B8%8D%E5%B0%86%E5%B0%B1.lrc'
    },
    {
        name: '不遗憾',
        artist: '李荣浩',
        url: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E4%B8%8D%E9%81%97%E6%86%BE.mp3',
        cover: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E4%B8%8D%E9%81%97%E6%86%BE.jpg',
        lrc: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E4%B8%8D%E9%81%97%E6%86%BE.lrc'
    },
    {
        name: '年少有为',
        artist: '李荣浩',
        url: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA.mp3',
        cover: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA.jpg',
        lrc: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA.lrc'
    },
    {
        name: '我们好好的',
        artist: '李荣浩',
        url: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%88%91%E4%BB%AC%E5%A5%BD%E5%A5%BD%E7%9A%84.mp3',
        cover: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%88%91%E4%BB%AC%E5%A5%BD%E5%A5%BD%E7%9A%84.jpg',
        lrc: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%88%91%E4%BB%AC%E5%A5%BD%E5%A5%BD%E7%9A%84.lrc'
    },
    {
        name: '戒烟',
        artist: '李荣浩',
        url: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%88%92%E7%83%9F.mp3',
        cover: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%88%92%E7%83%9F.jpg',
        lrc: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%88%92%E7%83%9F.lrc'
    },
    {
        name: '歌谣',
        artist: '李荣浩',
        url: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%AD%8C%E8%B0%A3.mp3',
        cover: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%AD%8C%E8%B0%A3.jpg',
        lrc: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%AD%8C%E8%B0%A3.lrc'
    },
    {
        name: '海浪 (Live)',
        artist: '李荣浩',
        url: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%B5%B7%E6%B5%AA%20(Live).mp3',
        cover: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%B5%B7%E6%B5%AA%20(Live).jpg',
        lrc: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%B5%B7%E6%B5%AA%20(Live).lrc'
    },
    {
        name: '走走',
        artist: '李荣浩',
        url: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E8%B5%B0%E8%B5%B0.mp3',
        cover: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E8%B5%B0%E8%B5%B0.jpg',
        lrc: 'https://image.ahao.ah.cn/Li%20Ronghao/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E8%B5%B0%E8%B5%B0.lrc'
    },
    // 林俊杰  
    {
        name: '可惜没如果',
        artist: '林俊杰',
        url: 'https://image.ahao.ah.cn/JJ%20Lin/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%8F%AF%E6%83%9C%E6%B2%A1%E5%A6%82%E6%9E%9C.mp3',
        cover: 'https://image.ahao.ah.cn/JJ%20Lin/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%8F%AF%E6%83%9C%E6%B2%A1%E5%A6%82%E6%9E%9C.jpg',
        lrc: 'https://image.ahao.ah.cn/JJ%20Lin/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%8F%AF%E6%83%9C%E6%B2%A1%E5%A6%82%E6%9E%9C.lrc'
    },
    {
        name: '江南',
        artist: '林俊杰',
        url: 'https://image.ahao.ah.cn/JJ%20Lin/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%B1%9F%E5%8D%97.mp3',
        cover: 'https://image.ahao.ah.cn/JJ%20Lin/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%96%B0%E5%9C%B0%E7%90%83.jpg',
        lrc: 'https://image.ahao.ah.cn/JJ%20Lin/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%B1%9F%E5%8D%97.lrc'
    },
    {
        name: '新地球',
        artist: '林俊杰',
        url: 'https://image.ahao.ah.cn/JJ%20Lin/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%96%B0%E5%9C%B0%E7%90%83.mp3',
        cover: 'https://image.ahao.ah.cn/JJ%20Lin/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%B1%9F%E5%8D%97.jpg',
        lrc: 'https://image.ahao.ah.cn/JJ%20Lin/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%96%B0%E5%9C%B0%E7%90%83.lrc'
    },
    {
        name: '黑夜问白天',
        artist: '林俊杰',
        url: 'https://image.ahao.ah.cn/JJ%20Lin/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E9%BB%91%E5%A4%9C%E9%97%AE%E7%99%BD%E5%A4%A9.mp3',
        cover: 'https://image.ahao.ah.cn/JJ%20Lin/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E9%BB%91%E5%A4%9C%E9%97%AE%E7%99%BD%E5%A4%A9.jpg',
        lrc: 'https://image.ahao.ah.cn/JJ%20Lin/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E9%BB%91%E5%A4%9C%E9%97%AE%E7%99%BD%E5%A4%A9.lrc'
    },
    // 孟慧圆
    {
        name: '你把我的灵魂带走了',
        artist: '孟慧圆',
        url: 'https://image.ahao.ah.cn/menghuiyuan/%E5%AD%9F%E6%85%A7%E5%9C%86%20-%20%E4%BD%A0%E6%8A%8A%E6%88%91%E7%9A%84%E7%81%B5%E9%AD%82%E5%B8%A6%E8%B5%B0%E4%BA%86.mp3',
        cover: 'https://image.ahao.ah.cn/menghuiyuan/%E5%AD%9F%E6%85%A7%E5%9C%86%20-%20%E4%BD%A0%E6%8A%8A%E6%88%91%E7%9A%84%E7%81%B5%E9%AD%82%E5%B8%A6%E8%B5%B0%E4%BA%86.jpg',
        lrc: 'https://image.ahao.ah.cn/menghuiyuan/%E5%AD%9F%E6%85%A7%E5%9C%86%20-%20%E4%BD%A0%E6%8A%8A%E6%88%91%E7%9A%84%E7%81%B5%E9%AD%82%E5%B8%A6%E8%B5%B0%E4%BA%86.lrc'
    },
    {
        name: '想念拋人化',
        artist: '孟慧圆',
        url: 'https://image.ahao.ah.cn/menghuiyuan/%E5%AD%9F%E6%85%A7%E5%9C%86%20-%20%E6%83%B3%E5%BF%B5%E6%8B%9F%E4%BA%BA%E5%8C%96.mp3',
        cover: 'https://image.ahao.ah.cn/menghuiyuan/%E5%AD%9F%E6%85%A7%E5%9C%86%20-%20%E6%83%B3%E5%BF%B5%E6%8B%9F%E4%BA%BA%E5%8C%96.jpg',
        lrc: 'https://image.ahao.ah.cn/menghuiyuan/%E5%AD%9F%E6%85%A7%E5%9C%86%20-%20%E6%83%B3%E5%BF%B5%E6%8B%9F%E4%BA%BA%E5%8C%96.lrc'
    },
    {
        name: '本来',
        artist: '孟慧圆',
        url: 'https://image.ahao.ah.cn/menghuiyuan/%E5%AD%9F%E6%85%A7%E5%9C%86%20-%20%E6%9C%AC%E6%9D%A5.mp3',
        cover: 'https://image.ahao.ah.cn/menghuiyuan/%E5%AD%9F%E6%85%A7%E5%9C%86%20-%20%E6%9C%AC%E6%9D%A5.jpg',
        lrc: 'https://image.ahao.ah.cn/menghuiyuan/%E5%AD%9F%E6%85%A7%E5%9C%86%20-%20%E6%9C%AC%E6%9D%A5.lrc'
    },
    // Karen Mok 莫文蔚
    {
        name: '忽然之间',
        artist: '莫文蔚',
        url: 'https://image.ahao.ah.cn/Karen%20Mok/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E5%BF%BD%E7%84%B6%E4%B9%8B%E9%97%B4.mp3',
        cover: 'https://image.ahao.ah.cn/Karen%20Mok/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E5%BF%BD%E7%84%B6%E4%B9%8B%E9%97%B4.jpg',
        lrc: 'https://image.ahao.ah.cn/Karen%20Mok/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E5%BF%BD%E7%84%B6%E4%B9%8B%E9%97%B4.lrc'
    },
    {
        name: '盛夏的果实',
        artist: '莫文蔚',
        url: 'https://image.ahao.ah.cn/Karen%20Mok/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E7%9B%9B%E5%A4%8F%E7%9A%84%E6%9E%9C%E5%AE%9E.mp3',
        cover: 'https://image.ahao.ah.cn/Karen%20Mok/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E7%9B%9B%E5%A4%8F%E7%9A%84%E6%9E%9C%E5%AE%9E.jpg',
        lrc: 'https://image.ahao.ah.cn/Karen%20Mok/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E7%9B%9B%E5%A4%8F%E7%9A%84%E6%9E%9C%E5%AE%9E.lrc'
    },
    {
        name: '这世界那么多人',
        artist: '莫文蔚',
        url: 'https://image.ahao.ah.cn/Karen%20Mok/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E8%BF%99%E4%B8%96%E7%95%8C%E9%82%A3%E4%B9%88%E5%A4%9A%E4%BA%BA.mp3',
        cover: 'https://image.ahao.ah.cn/Karen%20Mok/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E8%BF%99%E4%B8%96%E7%95%8C%E9%82%A3%E4%B9%88%E5%A4%9A%E4%BA%BA.jpg',
        lrc: 'https://image.ahao.ah.cn/Karen%20Mok/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E8%BF%99%E4%B8%96%E7%95%8C%E9%82%A3%E4%B9%88%E5%A4%9A%E4%BA%BA.lrc'
    },
    {
        name: '阴天',
        artist: '莫文蔚',
        url: 'https://image.ahao.ah.cn/Karen%20Mok/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E9%98%B4%E5%A4%A9.mp3',
        cover: 'https://image.ahao.ah.cn/Karen%20Mok/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E9%98%B4%E5%A4%A9.jpg',
        lrc: 'https://image.ahao.ah.cn/Karen%20Mok/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E9%98%B4%E5%A4%A9.lrc'
    },
    // 其他歌手
    {
        name: "这条小鱼在乎 (I'm a little fish)",
        artist: '王OK、洪佩瑜',
        url: "https://image.ahao.ah.cn/ddp/%E7%8E%8BOK%E3%80%81%E6%B4%AA%E4%BD%A9%E7%91%9C%20-%20%E8%BF%99%E6%9D%A1%E5%B0%8F%E9%B1%BC%E5%9C%A8%E4%B9%8E%20(I'm%20a%20little%20fish).mp3",
        cover: "https://image.ahao.ah.cn/ddp/%E7%8E%8BOK%E3%80%81%E6%B4%AA%E4%BD%A9%E7%91%9C%20-%20%E8%BF%99%E6%9D%A1%E5%B0%8F%E9%B1%BC%E5%9C%A8%E4%B9%8E%20(I'm%20a%20little%20fish).jpg",
        lrc: "https://image.ahao.ah.cn/ddp/%E7%8E%8BOK%E3%80%81%E6%B4%AA%E4%BD%A9%E7%91%9C%20-%20%E8%BF%99%E6%9D%A1%E5%B0%8F%E9%B1%BC%E5%9C%A8%E4%B9%8E%20(I'm%20a%20little%20fish).lrc"
    },
    {
        name: '如果可以',
        artist: '魏礼安',
        url: 'https://image.ahao.ah.cn/ddp/%E9%9F%A6%E7%A4%BC%E5%AE%89%20-%20%E5%A6%82%E6%9E%9C%E5%8F%AF%E4%BB%A5.mp3',
        cover: 'https://image.ahao.ah.cn/ddp/%E9%9F%A6%E7%A4%BC%E5%AE%89%20-%20%E5%A6%82%E6%9E%9C%E5%8F%AF%E4%BB%A5.jpg',
        lrc: 'https://image.ahao.ah.cn/ddp/%E9%9F%A6%E7%A4%BC%E5%AE%89%20-%20%E5%A6%82%E6%9E%9C%E5%8F%AF%E4%BB%A5.lrc'
    },
    // 王力宏
    {
        name: '花田错',
        artist: '王力宏',
        url: 'https://image.ahao.ah.cn/ddp/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E8%8A%B1%E7%94%B0%E9%94%99.mp3',
        cover: 'https://image.ahao.ah.cn/ddp/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E8%8A%B1%E7%94%B0%E9%94%99.jpg',
        lrc: 'https://image.ahao.ah.cn/ddp/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E8%8A%B1%E7%94%B0%E9%94%99.lrc'
    },
    // 魏如萱
    {
        name: '你啊你啊',
        artist: '魏如萱',
        url: 'https://image.ahao.ah.cn/weiruxuan/%E9%AD%8F%E5%A6%82%E8%90%B1%20-%20%E4%BD%A0%E5%95%8A%E4%BD%A0%E5%95%8A.mp3',
        cover: 'https://image.ahao.ah.cn/weiruxuan/%E9%AD%8F%E5%A6%82%E8%90%B1%20-%20%E4%BD%A0%E5%95%8A%E4%BD%A0%E5%95%8A.jpg',
        lrc: 'https://image.ahao.ah.cn/weiruxuan/%E9%AD%8F%E5%A6%82%E8%90%B1%20-%20%E4%BD%A0%E5%95%8A%E4%BD%A0%E5%95%8A.lrc'
    },
    {
        name: '我在纽约打电话给你',
        artist: '魏如萱',
        url: 'https://image.ahao.ah.cn/weiruxuan/%E9%AD%8F%E5%A6%82%E8%90%B1%20-%20%E6%88%91%E5%9C%A8%E7%BA%BD%E7%BA%A6%E6%89%93%E7%94%B5%E8%AF%9D%E7%BB%99%E4%BD%A0.mp3',
        cover: 'https://image.ahao.ah.cn/weiruxuan/%E9%AD%8F%E5%A6%82%E8%90%B1%20-%20%E6%88%91%E5%9C%A8%E7%BA%BD%E7%BA%A6%E6%89%93%E7%94%B5%E8%AF%9D%E7%BB%99%E4%BD%A0.jpg',
        lrc: 'https://image.ahao.ah.cn/weiruxuan/%E9%AD%8F%E5%A6%82%E8%90%B1%20-%20%E6%88%91%E5%9C%A8%E7%BA%BD%E7%BA%A6%E6%89%93%E7%94%B5%E8%AF%9D%E7%BB%99%E4%BD%A0.lrc'
    },
    // 伍佰
    {
        name: '泪桥',
        artist: '伍佰 & China Blue',
        url: 'https://image.ahao.ah.cn/ddp/%E4%BC%8D%E4%BD%B0%20%26%20China%20Blue%20-%20%E6%B3%AA%E6%A1%A5.mp3',
        cover: 'https://image.ahao.ah.cn/ddp/%E4%BC%8D%E4%BD%B0%20%26%20China%20Blue%20-%20%E6%B3%AA%E6%A1%A5.jpg',
        lrc: 'https://image.ahao.ah.cn/ddp/%E4%BC%8D%E4%BD%B0%20%26%20China%20Blue%20-%20%E6%B3%AA%E6%A1%A5.lrc'
    },
    {
        name: '杀破狼',
        artist: '元乔',
        url: 'https://image.ahao.ah.cn/ddp/%E5%85%83%E4%B9%94%20-%20%E6%9D%80%E7%A0%B4%E7%8B%BC.mp3',
        cover: 'https://image.ahao.ah.cn/ddp/%E5%85%83%E4%B9%94%20-%20%E6%9D%80%E7%A0%B4%E7%8B%BC.jpg',
        lrc: 'https://image.ahao.ah.cn/ddp/%E5%85%83%E4%B9%94%20-%20%E6%9D%80%E7%A0%B4%E7%8B%BC.lrc'
    },
    {
        name: '落空',
        artist: '印子月',
        url: 'https://image.ahao.ah.cn/ddp/%E5%8D%B0%E5%AD%90%E6%9C%88%20-%20%E8%90%BD%E7%A9%BA.mp3',
        cover: 'https://image.ahao.ah.cn/ddp/%E5%8D%B0%E5%AD%90%E6%9C%88%20-%20%E8%90%BD%E7%A9%BA.jpg',
        lrc: 'https://image.ahao.ah.cn/ddp/%E5%8D%B0%E5%AD%90%E6%9C%88%20-%20%E8%90%BD%E7%A9%BA.lrc'
    },
    {
        name: '小宇',
        artist: '张震岳',
        url: 'https://image.ahao.ah.cn/ddp/%E5%BC%A0%E9%9C%87%E5%B2%B3%20-%20%E5%B0%8F%E5%AE%87.mp3',
        cover: 'https://image.ahao.ah.cn/ddp/%E5%BC%A0%E9%9C%87%E5%B2%B3%20-%20%E5%B0%8F%E5%AE%87.jpg',
        lrc: 'https://image.ahao.ah.cn/ddp/%E5%BC%A0%E9%9C%87%E5%B2%B3%20-%20%E5%B0%8F%E5%AE%87.lrc'
    },
    {
        name: '梦入海',
        artist: '西瓜Kune',
        url: 'https://image.ahao.ah.cn/ddp/%E8%A5%BF%E7%93%9CKune%20-%20%E6%A2%A6%E5%85%A5%E6%B5%B7%20(%E3%80%8A%E5%89%91%E7%BD%913%C2%B7%E4%BE%A0%E8%82%9D%E4%B9%89%E8%83%86%E6%B2%88%E5%89%91%E5%BF%83%E3%80%8B%20%E7%AC%AC%E4%BA%8C%E5%AD%A3%E6%8F%92%E6%9B%B2).mp3',
        cover: 'https://image.ahao.ah.cn/ddp/%E8%A5%BF%E7%93%9CKune%20-%20%E6%A2%A6%E5%85%A5%E6%B5%B7%20(%E3%80%8A%E5%89%91%E7%BD%913%C2%B7%E4%BE%A0%E8%82%9D%E4%B9%89%E8%83%86%E6%B2%88%E5%89%91%E5%BF%83%E3%80%8B%20%E7%AC%AC%E4%BA%8C%E5%AD%A3%E6%8F%92%E6%9B%B2).jpg',
        lrc: 'https://image.ahao.ah.cn/ddp/%E8%A5%BF%E7%93%9CKune%20-%20%E6%A2%A6%E5%85%A5%E6%B5%B7%20(%E3%80%8A%E5%89%91%E7%BD%913%C2%B7%E4%BE%A0%E8%82%9D%E4%B9%89%E8%83%86%E6%B2%88%E5%89%91%E5%BF%83%E3%80%8B%20%E7%AC%AC%E4%BA%8C%E5%AD%A3%E6%8F%92%E6%9B%B2).lrc'
    },
    // 薛凯琪
    {
        name: '周末画报',
        artist: '薛凯琪',
        url: 'https://image.ahao.ah.cn/Fiona%20Sit/%E8%96%9B%E5%87%AF%E7%90%AA%20-%20%E5%91%A8%E6%9C%AB%E7%94%BB%E6%8A%A5.mp3',
        cover: 'https://image.ahao.ah.cn/Fiona%20Sit/%E8%96%9B%E5%87%AF%E7%90%AA%20-%20%E5%91%A8%E6%9C%AB%E7%94%BB%E6%8A%A5.jpg',
        lrc: 'https://image.ahao.ah.cn/Fiona%20Sit/%E8%96%9B%E5%87%AF%E7%90%AA%20-%20%E5%91%A8%E6%9C%AB%E7%94%BB%E6%8A%A5.lrc'
    },
    {
        name: '苏州河',
        artist: '薛凯琪',
        url: 'https://image.ahao.ah.cn/Fiona%20Sit/%E8%96%9B%E5%87%AF%E7%90%AA%20-%20%E8%8B%8F%E5%B7%9E%E6%B2%B3.mp3',
        cover: 'https://image.ahao.ah.cn/Fiona%20Sit/%E8%96%9B%E5%87%AF%E7%90%AA%20-%20%E8%8B%8F%E5%B7%9E%E6%B2%B3.jpg',
        lrc: ''
    },
    // 未分类
    {
        name: 'The Show',
        artist: 'Lenka',
        url: 'https://image.ahao.ah.cn/R%26B/Lenka%20-%20The%20Show.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/Lenka%20-%20The%20Show.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/Lenka%20-%20The%20Show.lrc'
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
        name: '一直很安静',
        artist: '阿桑',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%98%BF%E6%A1%91%20-%20%E4%B8%80%E7%9B%B4%E5%BE%88%E5%AE%89%E9%9D%99.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%98%BF%E6%A1%91%20-%20%E4%B8%80%E7%9B%B4%E5%BE%88%E5%AE%89%E9%9D%99.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%98%BF%E6%A1%91%20-%20%E4%B8%80%E7%9B%B4%E5%BE%88%E5%AE%89%E9%9D%99.lrc'
    },
    {
        name: 'Letting Go',
        artist: '蔡健雅',
        url: 'https://image.ahao.ah.cn/R%26B/%E8%94%A1%E5%81%A5%E9%9B%85%20-%20Letting%20Go.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E8%94%A1%E5%81%A5%E9%9B%85%20-%20Letting%20Go.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E8%94%A1%E5%81%A5%E9%9B%85%20-%20Letting%20Go.lrc'
    },
    {
        name: '妥协',
        artist: '蔡依林',
        url: 'https://image.ahao.ah.cn/R%26B/%E8%94%A1%E4%BE%9D%E6%9E%97%20-%20%E5%A6%A5%E5%8D%8F.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E8%94%A1%E4%BE%9D%E6%9E%97%20-%20%E5%A6%A5%E5%8D%8F.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E8%94%A1%E4%BE%9D%E6%9E%97%20-%20%E5%A6%A5%E5%8D%8F.lrc'
    },
    {
        name: '虚拟',
        artist: '陈粒',
        url: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E7%B2%92%20-%20%E8%99%9A%E6%8B%9F.mp3',
        cover: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E7%B2%92%20-%20%E8%99%9A%E6%8B%9F.jpg',
        lrc: 'https://image.ahao.ah.cn/R%26B/%E9%99%88%E7%B2%92%20-%20%E8%99%9A%E6%8B%9F.lrc'
    },
    {
        name: '云烟成雨',
        artist: '房东的猫',
        url: 'https://image.ahao.ah.cn/suiting/%E6%88%BF%E4%B8%9C%E7%9A%84%E7%8C%AB%20-%20%E4%BA%91%E7%83%9F%E6%88%90%E9%9B%A8.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E6%88%BF%E4%B8%9C%E7%9A%84%E7%8C%AB%20-%20%E4%BA%91%E7%83%9F%E6%88%90%E9%9B%A8.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E6%88%BF%E4%B8%9C%E7%9A%84%E7%8C%AB%20-%20%E4%BA%91%E7%83%9F%E6%88%90%E9%9B%A8.lrc'
    },
    {
        name: '指纹',
        artist: '胡歌',
        url: 'https://image.ahao.ah.cn/suiting/%E8%83%A1%E6%AD%8C%20-%20%E6%8C%87%E7%BA%B9.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E8%83%A1%E6%AD%8C%20-%20%E6%8C%87%E7%BA%B9.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E8%83%A1%E6%AD%8C%20-%20%E6%8C%87%E7%BA%B9.lrc'
    },
    {
        name: '阿拉斯加海湾',
        artist: '菲道尔',
        url: 'https://image.ahao.ah.cn/suiting/%E8%8F%B2%E9%81%93%E5%B0%94%20-%20%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E6%B5%B7%E6%B9%BE.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E8%8F%B2%E9%81%93%E5%B0%94%20-%20%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E6%B5%B7%E6%B9%BE.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E8%8F%B2%E9%81%93%E5%B0%94%20-%20%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E6%B5%B7%E6%B9%BE.lrc'
    },
    {
        name: '小宇',
        artist: '蓝心羽',
        url: 'https://image.ahao.ah.cn/suiting/%E8%93%9D%E5%BF%83%E7%BE%BD%20-%20%E5%B0%8F%E5%AE%87.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E8%93%9D%E5%BF%83%E7%BE%BD%20-%20%E5%B0%8F%E5%AE%87.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E8%93%9D%E5%BF%83%E7%BE%BD%20-%20%E5%B0%8F%E5%AE%87.lrc'
    },
    {
        name: '阿拉斯加海湾',
        artist: '蓝心羽',
        url: 'https://image.ahao.ah.cn/suiting/%E8%93%9D%E5%BF%83%E7%BE%BD%20-%20%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E6%B5%B7%E6%B9%BE.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E8%93%9D%E5%BF%83%E7%BE%BD%20-%20%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E6%B5%B7%E6%B9%BE.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E8%93%9D%E5%BF%83%E7%BE%BD%20-%20%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E6%B5%B7%E6%B9%BE.lrc'
    },
    {
        name: '我们俩',
        artist: '郭顶',
        url: 'https://image.ahao.ah.cn/suiting/%E9%83%AD%E9%A1%B6%20-%20%E6%88%91%E4%BB%AC%E4%BF%A2.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E9%83%AD%E9%A1%B6%20-%20%E6%88%91%E4%BB%AC%E4%BF%A9.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E9%83%AD%E9%A1%B6%20-%20%E6%88%91%E4%BB%AC%E4%BF%A9.lrc'
    },
    {
        name: '虹之间',
        artist: '金贵晟',
        url: 'https://image.ahao.ah.cn/suiting/%E9%87%91%E8%B4%B5%E6%99%9F%20-%20%E8%99%B9%E4%B9%8B%E9%97%B4.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E9%87%91%E8%B4%B5%E6%99%9F%20-%20%E8%99%B9%E4%B9%8B%E9%97%B4.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E9%87%91%E8%B4%B5%E6%99%9F%20-%20%E8%99%B9%E4%B9%8B%E9%97%B4.lrc'
    },
    {
        name: '没那么简单',
        artist: '黄小琥',
        url: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E5%B0%8F%E7%90%A5%20-%20%E6%B2%A1%E9%82%A3%E4%B9%88%E7%AE%80%E5%8D%95.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E5%B0%8F%E7%90%A5%20-%20%E6%B2%A1%E9%82%A3%E4%B9%88%E7%AE%80%E5%8D%95.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E5%B0%8F%E7%90%A5%20-%20%E6%B2%A1%E9%82%A3%E4%B9%88%E7%AE%80%E5%8D%95.lrc'
    },
    {
        name: '淡水鱼',
        artist: '黄鲲',
        url: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E9%B2%B2%20-%20%E6%B7%A1%E6%B0%B4%E9%B1%BC.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E9%B2%B2%20-%20%E6%B7%A1%E6%B0%B4%E9%B1%BC.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E9%BB%84%E9%B2%B2%20-%20%E6%B7%A1%E6%B0%B4%E9%B1%BC.lrc'
    },
    {
        name: '就让',
        artist: '呆呆破',
        url: 'https://image.ahao.ah.cn/ddp/%E5%91%86%E5%91%86%E7%A0%B4%20-%20%E5%B0%B1%E8%AE%A9.mp3',
        cover: 'https://image.ahao.ah.cn/ddp/%E5%91%86%E5%91%86%E7%A0%B4%20-%20%E5%B0%B1%E8%AE%A9.jpg',
        lrc: 'https://image.ahao.ah.cn/ddp/%E5%91%86%E5%91%86%E7%A0%B4%20-%20%E5%B0%B1%E8%AE%A9.lrc'
    },
    {
        name: '起风了 (旧版)',
        artist: '买辣椒也用券',
        url: 'https://image.ahao.ah.cn/suiting/%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86%20(%E6%97%A7%E7%89%88).mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86%20(%E6%97%A7%E7%89%88).jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86%20(%E6%97%A7%E7%89%88).lrc'
    },
    {
        name: '飞鸟和蝉',
        artist: '任然',
        url: 'https://image.ahao.ah.cn/suiting/%E4%BB%BB%E7%84%B6%20-%20%E9%A3%9E%E9%B8%9F%E5%92%8C%E8%9D%89.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E4%BB%BB%E7%84%B6%20-%20%E9%A3%9E%E9%B8%9F%E5%92%8C%E8%9D%89.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E4%BB%BB%E7%84%B6%20-%20%E9%A3%9E%E9%B8%9F%E5%92%8C%E8%9D%89.lrc'
    },
    {
        name: '鸽子',
        artist: '宋冬野',
        url: 'https://image.ahao.ah.cn/suiting/%E5%AE%8B%E5%86%AC%E9%87%8E%20-%20%E9%B8%BD%E5%AD%90.mp3',
        cover: 'https://image.ahao.ah.cn/suiting/%E5%AE%8B%E5%86%AC%E9%87%8E%20-%20%E9%B8%BD%E5%AD%90.jpg',
        lrc: 'https://image.ahao.ah.cn/suiting/%E5%AE%8B%E5%86%AC%E9%87%8E%20-%20%E9%B8%BD%E5%AD%90.lrc'
    },
    // {
    //     name: '',
    //     artist: '',
    //     url: '',
    //     cover: '',
    //     lrc: ''
    // },
    // {
    //     name: '',
    //     artist: '',
    //     url: '',
    //     cover: '',
    //     lrc: ''
    // },
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
