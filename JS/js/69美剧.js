muban.mxone5.二级.desc = '.video-info-items:eq(3)&&Text;;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text';
muban.mxone5.二级.lists = '.scroll-box-y:eq(#id) a';
var rule={
    title:'69美剧',
    模板:'mxone5',
    host:'https://www.69mj.com',
    // url:'/index.php/vod/show/id/fyclass/page/fypage.html',
	url:'/index.php/vod/show/id/fyclassfyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
	filter:{"1":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"喜剧","v":"/class/喜剧"},{"n":"动作","v":"/class/动作"},{"n":"爱情","v":"/class/爱情"},{"n":"惊悚","v":"/class/惊悚"},{"n":"犯罪","v":"/class/犯罪"},{"n":"冒险","v":"/class/冒险"},{"n":"科幻","v":"/class/科幻"},{"n":"悬疑","v":"/class/悬疑"},{"n":"剧情","v":"/class/剧情"},{"n":"动画","v":"/class/动画"},{"n":"武侠","v":"/class/武侠"},{"n":"战争","v":"/class/战争"},{"n":"歌舞","v":"/class/歌舞"},{"n":"奇幻","v":"/class/奇幻"},{"n":"传记","v":"/class/传记"},{"n":"警匪","v":"/class/警匪"},{"n":"历史","v":"/class/历史"},{"n":"运动","v":"/class/运动"},{"n":"伦理","v":"/class/伦理"},{"n":"灾难","v":"/class/灾难"},{"n":"西部","v":"/class/西部"},{"n":"魔幻","v":"/class/魔幻"},{"n":"枪战","v":"/class/枪战"},{"n":"恐怖","v":"/class/恐怖"},{"n":"记录","v":"/class/记录"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"美国","v":"/area/美国"},{"n":"香港","v":"/area/香港"},{"n":"韩国","v":"/area/韩国"},{"n":"英国","v":"/area/英国"},{"n":"台湾","v":"/area/台湾"},{"n":"日本","v":"/area/日本"},{"n":"法国","v":"/area/法国"},{"n":"意大利","v":"/area/意大利"},{"n":"德国","v":"/area/德国"},{"n":"西班牙","v":"/area/西班牙"},{"n":"泰国","v":"/area/泰国"},{"n":"其它","v":"/area/其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},,{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],"2":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"古装","v":"/class/古装"},{"n":"喜剧","v":"/class/喜剧"},{"n":"偶像","v":"/class/偶像"},{"n":"家庭","v":"/class/家庭"},{"n":"警匪","v":"/class/警匪"},{"n":"言情","v":"/class/言情"},{"n":"军事","v":"/class/军事"},{"n":"武侠","v":"/class/武侠"},{"n":"悬疑","v":"/class/悬疑"},{"n":"历史","v":"/class/历史"},{"n":"农村","v":"/class/农村"},{"n":"都市","v":"/class/都市"},{"n":"神话","v":"/class/神话"},{"n":"科幻","v":"/class/科幻"},{"n":"少儿","v":"/class/少儿"},{"n":"搞笑","v":"/class/搞笑"},{"n":"谍战","v":"/class/谍战"},{"n":"战争","v":"/class/战争"},{"n":"年代","v":"/class/年代"},{"n":"犯罪","v":"/class/犯罪"},{"n":"恐怖","v":"/class/恐怖"},{"n":"惊悚","v":"/class/惊悚"},{"n":"爱情","v":"/class/爱情"},{"n":"剧情","v":"/class/剧情"},{"n":"奇幻","v":"/class/奇幻"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"韩国","v":"/area/韩国"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"日本","v":"/area/日本"},{"n":"美国","v":"/area/美国"},{"n":"泰国","v":"/area/泰国"},{"n":"英国","v":"/area/英国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"其他","v":"/area/其他"},{"n":"香港地区","v":"/area/香港地区"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},,{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],"3":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"真人秀","v":"/class/真人秀"},{"n":"访谈","v":"/class/访谈"},{"n":"情感","v":"/class/情感"},{"n":"选秀","v":"/class/选秀"},{"n":"旅游","v":"/class/旅游"},{"n":"美食","v":"/class/美食"},{"n":"口秀","v":"/class/口秀"},{"n":"曲艺","v":"/class/曲艺"},{"n":"搞笑","v":"/class/搞笑"},{"n":"游戏","v":"/class/游戏"},{"n":"歌舞","v":"/class/歌舞"},{"n":"生活","v":"/class/生活"},{"n":"音乐","v":"/class/音乐"},{"n":"时尚","v":"/class/时尚"},{"n":"益智","v":"/class/益智"},{"n":"职场","v":"/class/职场"},{"n":"少儿","v":"/class/少儿"},{"n":"纪实","v":"/class/纪实"},{"n":"盛会","v":"/class/盛会"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"韩国","v":"/area/韩国"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"其它","v":"/area/其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},,{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],"4":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"热血","v":"/class/热血"},{"n":"科幻","v":"/class/科幻"},{"n":"推理","v":"/class/推理"},{"n":"搞笑","v":"/class/搞笑"},{"n":"冒险","v":"/class/冒险"},{"n":"校园","v":"/class/校园"},{"n":"动作","v":"/class/动作"},{"n":"机战","v":"/class/机战"},{"n":"运动","v":"/class/运动"},{"n":"战争","v":"/class/战争"},{"n":"少年","v":"/class/少年"},{"n":"少女","v":"/class/少女"},{"n":"社会","v":"/class/社会"},{"n":"原创","v":"/class/原创"},{"n":"亲子","v":"/class/亲子"},{"n":"益智","v":"/class/益智"},{"n":"励志","v":"/class/励志"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"日本","v":"/area/日本"},{"n":"欧美","v":"/area/欧美"},{"n":"其他","v":"/area/其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},,{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}]},
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    class_parse:'.nav-menu-items&&li:gt(0):lt(5);a&&Text;a&&href;.*/(\\d+).html',
}
