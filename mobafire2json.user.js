// ==UserScript==
// @name         Mobafire Downloader (HTML Crawler)
// @version      1.0
// @author       cK0nrad - Konrad - cKonrad
// @match        https://www.mobafire.com/league-of-legends/build/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==
const items = {"34": "3001","337": "3194","77": "3105","235": "3113","21": "1052","185": "3301","286": "3348","35": "3003","243": "3504","137": "3174","17": "1038","284": "3751","76": "3102","37": "3006","103": "3144","145": "3153","9": "1026","383": "4010","86": "3117","1": "1001","38": "3009","341": "3076","20": "1051","39": "3010","309": "3133","13": "1031","45": "3028","349": "3383","12": "1029","332": "2055","307": "2033","251": "3801","304": "1083","18": "1042","287": "3742","308": "3812","290": "3902","24": "1055","25": "1056","23": "1054","322": "3147","333": "3814","254": "2138","374": "2011","256": "2139","257": "2140","326": "3675","285": "1401","318": "1402","281": "1412","244": "3508","87": "3123","2": "1004","312": "3363","79": "3108","292": "3901","237": "3114","342": "3373","72": "3098","81": "3110","41": "3022","338": "3193","380": "4001","6": "1011","42": "3024","43": "3026","331": "3184","180": "2051","330": "3112","88": "3124","99": "3136","27": "2003","112": "3155","324": "3030","104": "3146","325": "3152","105": "3145","151": "1041","306": "2032","298": "1039","150": "3025","343": "3379","46": "3031","113": "3158","310": "3052","110": "3067","293": "2015","334": "3109","48": "3035","153": "3151","74": "3100","381": "4003","135": "3190","15": "1036","375": "2047","296": "3036","142": "3104","323": "3802","283": "3285","28": "2004","109": "3004","136": "3156","50": "3041","154": "3139","82": "3111","155": "3222","352": "2403","344": "3371","118": "3170","156": "3165","297": "3033","157": "3042","84": "3115","106": "1058","26": "1057","53": "3047","70": "3096","14": "1033","366": "3916","158": "3056","313": "3364","129": "2047","373": "2057","249": "3198","51": "3044","52": "3046","16": "1037","369": "2061","368": "2062","371": "2056","335": "3252","233": "2052","246": "3200","94": "3140","115": "3089","346": "3374","291": "3903","102": "3143","294": "3094","252": "2053","159": "3074","19": "1043","336": "3107","305": "2031","4": "1006","186": "3302","354": "3069","359": "3401","357": "3092","253": "3800","44": "3027","11": "1028","161": "3085","85": "3116","348": "3382","10": "1027","179": "3191","163": "3040","311": "3134","55": "3057","379": "2065","260": "3715","353": "2422","370": "2319","40": "3020","382": "4004","182": "3211","367": "3907","183": "3303","56": "3065","261": "3706","169": "3087","288": "3053","75": "3101","351": "2420","384": "3095","57": "3068","71": "3097","58": "3070","59": "3071","250": "3599","60": "3072","303": "1082","247": "3196","248": "3197","345": "3380","61": "3075","62": "3077","360": "3304","187": "3309","152": "3312","363": "3311","361": "3096","364": "3302","362": "3303","111": "3306","365": "3308","289": "3748","372": "2010","376": "2058","377": "2059","378": "2060","63": "3078","347": "3384","171": "3905","22": "1053","98": "3135","64": "3082","188": "3340","65": "3083","68": "3091","140": "3385","101": "3142","66": "3086","339": "3050","114": "3157","350": "3386","282": "3512","329": "1419","271": "1413","320": "1414","273": "1412","328": "1416","275": "1401","321": "1402","277": "1400","386": "3161"}
const champions = { Aatrox: '266',Ahri: '103',Akali: '84',Alistar: '12',Amumu: '32',Anivia: '34',Annie: '1',Ashe: '22','Aurelion Sol': '136',Azir: '268',Bard: '432',Blitzcrank: '53',Brand: '63',Braum: '201',Caitlyn: '51',Camille: '164',Cassiopeia: '69','Cho\'Gath': '31',Corki: '42',Darius: '122',Diana: '131',Draven: '119','Dr. Mundo': '36',Ekko: '245',Elise: '60',Evelynn: '28',Ezreal: '81',Fiddlesticks: '9',Fiora: '114',Fizz: '105',Galio: '3',Gangplank: '41',Garen: '86',Gnar: '150',Gragas: '79',Graves: '104',Hecarim: '120',Heimerdinger: '74',Illaoi: '420',Irelia: '39',Ivern: '427',Janna: '40','Jarvan IV': '59',Jax: '24',Jayce: '126',Jhin: '202',Jinx: '222','Kai\'Sa': '145',Kalista: '429',Karma: '43',Karthus: '30',Kassadin: '38',Katarina: '55',Kayle: '10',Kayn: '141',Kennen: '85','Kha\'Zix': '121',Kindred: '203',Kled: '240','Kog\'Maw': '96',LeBlanc: '7','Lee Sin': '64',Leona: '89',Lissandra: '127',Lucian: '236',Lulu: '117',Lux: '99',Malphite: '54',Malzahar: '90',Maokai: '57','Master Yi': '11','Miss Fortune': '21',Wukong: '62',Mordekaiser: '82',Morgana: '25',Nami: '267',Nasus: '75',Nautilus: '111',Neeko: '518',Nidalee: '76',Nocturne: '56','Nunu & Willump': '20',Olaf: '2',Orianna: '61',Ornn: '516',Pantheon: '80',Poppy: '78',Pyke: '555',Quinn: '133',Rakan: '497',Rammus: '33','Rek\'Sai': '421',Renekton: '58',Rengar: '107',Riven: '92',Rumble: '68',Ryze: '13',Sejuani: '113',Shaco: '35',Shen: '98',Shyvana: '102',Singed: '27',Sion: '14',Sivir: '15',Skarner: '72',Sona: '37',Soraka: '16',Swain: '50',Sylas: '517',Syndra: '134','Tahm Kench': '223',Taliyah: '163',Talon: '91',Taric: '44',Teemo: '17',Thresh: '412',Tristana: '18',Trundle: '48',Tryndamere: '23','Twisted Fate': '4',Twitch: '29',Udyr: '77',Urgot: '6',Varus: '110',Vayne: '67',Veigar: '45','Vel\'Koz': '161',Vi: '254',Viktor: '112',Vladimir: '8',Volibear: '106',Warwick: '19',Xayah: '498',Xerath: '101','Xin Zhao': '5',Yasuo: '157',Yorick: '83',Zac: '154',Zed: '238',Ziggs: '115',Zilean: '26',Zoe: '142',Zyra: '143' }
const champ = $(".similar-builds-header").children().eq(1).children().eq(0).text().replace(/\t/g, '').replace(/\n/g, '')
const titl = $(".top__title").children().first().text().replace(/\t/g, '').replace(/\n/g, '')
let guidenumb = 0

$(document).ready(function() {
  $(".col-right").prepend('<div class="sidebar-module sidebar-module__topBuilds mf-redesign self-clear"> <h3 class="collapse-title">json: <span></span></h3> <div class="collapseBox" style="display: block;"><textarea style="overflow:auto;resize:none;width: 100%;" id="jsonparsed" readonly></textarea></div></div>');
    function mobaresolver(changed) {
        let temp = {}
        let final = {}
        let current = 0;
        if(changed){
					guidenumb = $(changed).index()
				}
        $(".view-guide__build__items").eq(guidenumb).children().eq(1).children().each((ind, el) => {
            if ($(el).attr('class') == "view-guide__itemGroup") {

                if (temp[current] == null) {
                    temp[current] = []
                }
                temp[current][0] = "3363"
                temp[current][1] = "3363"
                temp[current][2] = "3363"
                temp[current][3] = "3363"
                temp[current][4] = "3363"
                temp[current]["type"] = $(el).children().first().text().replace(/\t/g, '').replace(/\n/g, '')
                current++;
                $(el).children().eq(1).children().each((i, e) => {
                    if (temp[current] == null) {
                        temp[current] = []
                    }
                    temp[current]["type"] = $(e).children().eq(0).children().eq(0).text()
                    $(e).children().eq(1).children().each((index, el2) => {

                        var test = el2.className.slice(14).slice(0, -1)
                        var pass = test.replace(',', ':').replace(/\'/g, '');
                        var arr = pass.split(':');
                        var empty = {};
                        arr.forEach(function(el, i) {
                            var b = i + 1,
                                c = b / 2,
                                e = c.toString();
                            if (e.indexOf('.') != -1) {
                                empty[el] = arr[i + 1];
                            }
                        });
                        temp[current][index] = items[empty.i]

                    })
                    current++;
                })
            } else {
                if (temp[ind] == null) {
                    temp[ind] = {}
                }
                temp[ind]["type"] = $(el).children().eq(0).children().eq(0).text()
                $(el).children().eq(1).children().each((index, el2) => {
                    var test = el2.className.slice(14).slice(0, -1)
                    var pass = test.replace(',', ':').replace(/\'/g, '');
                    var arr = pass.split(':');
                    var empty = {};
                    arr.forEach(function(el, i) {
                        var b = i + 1,
                            c = b / 2,
                            e = c.toString();
                        if (e.indexOf('.') != -1) {
                            empty[el] = arr[i + 1];
                        }
                    });
                    temp[ind][index] = items[empty.i]
                })
            }
        })
        final["title"] = titl;
        final["associatedMaps"] = [];
        final["associatedChampions"] = [parseInt(champions[champ])];
        final["blocks"] = []
        let type = ''
        for (let test in temp) {
            let testtemp = []
            for (let test2 in temp[test]) {
                let testing = {}
                if (test2 == "type") {
                    type = temp[test][test2]
                } else {
                    testing.id = temp[test][test2]
                    testing.count = 1
                }
                if (testing.id != null) {
                    testtemp.push(testing)
                }
            }
            final["blocks"].push({
                "items": testtemp,
                "type": type
            })
        }

					$("#jsonparsed").html(JSON.stringify(final))
      
  	
        console.log(JSON.stringify(final))
    }
    mobaresolver()
    $(".view-guide__champs li").click(function(){
				mobaresolver(this)
    });
  
});
