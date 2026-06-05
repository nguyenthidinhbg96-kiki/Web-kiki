const n5_data_kanji = [
  // Nhóm 1: Số đếm và Đơn vị
  { stt: 1, kanji: "一", vocab: [
      { word: "一つ (ひとつ)", vi: "một cái", en: "one item" },
      { word: "一人前 (いちにんまえ)", vi: "người trưởng thành", en: "a full-grown person" },
      { word: "一緒 (いっしょ)", vi: "cùng nhau", en: "together" }
  ]},
  { stt: 2, kanji: "二", vocab: [
      { word: "二つ (ふたつ)", vi: "hai cái", en: "two items" },
      { word: "二人 (ふたり)", vi: "hai người", en: "two people" },
      { word: "二度 (にど)", vi: "hai lần", en: "twice" }
  ]},
  { stt: 3, kanji: "三", vocab: [
      { word: "三つ (みっつ)", vi: "ba cái", en: "three items" },
      { word: "三人 (さんにん)", vi: "ba người", en: "three people" },
      { word: "三角 (さんかく)", vi: "hình tam giác", en: "triangle" }
  ]},
  { stt: 4, kanji: "四", vocab: [
      { word: "四つ (よっつ)", vi: "bốn cái", en: "four items" },
      { word: "四季 (しき)", vi: "bốn mùa", en: "four seasons" },
      { word: "四角 (しかく)", vi: "hình tứ giác", en: "quadrilateral" }
  ]},
  { stt: 5, kanji: "五", vocab: [
      { word: "五つ (いつつ)", vi: "năm cái", en: "five items" },
      { word: "五月 (ごがつ)", vi: "tháng năm", en: "May" },
      { word: "五人 (ごにん)", vi: "năm người", en: "five people" }
  ]},
  { stt: 6, kanji: "六", vocab: [
      { word: "六つ (むっつ)", vi: "sáu cái", en: "six items" },
      { word: "六月 (ろくがつ)", vi: "tháng sáu", en: "June" },
      { word: "六角形 (ろっかくけい)", vi: "hình lục giác", en: "hexagon" }
  ]},
  { stt: 7, kanji: "七", vocab: [
      { word: "七つ (ななつ)", vi: "bảy cái", en: "seven items" },
      { word: "七夕 (たなばた)", vi: "lễ Thất Tịch", en: "Tanabata festival" },
      { word: "七人 (しちにん)", vi: "bảy người", en: "seven people" }
  ]},
  { stt: 8, kanji: "八", vocab: [
      { word: "八つ (やっつ)", vi: "tám cái", en: "eight items" },
      { word: "八月 (はちがつ)", vi: "tháng tám", en: "August" },
      { word: "八百屋 (やおや)", vi: "cửa hàng rau", en: "vegetable shop" }
  ]},
  { stt: 9, kanji: "九", vocab: [
      { word: "九つ (ここのつ)", vi: "chín cái", en: "nine items" },
      { word: "九月 (くがつ)", vi: "tháng chín", en: "September" },
      { word: "九人 (きゅうにん)", vi: "chín người", en: "nine people" }
  ]},
  { stt: 10, kanji: "十", vocab: [
      { word: "十 (とお)", vi: "mười cái", en: "ten items" },
      { word: "十分 (じゅうぶん)", vi: "đầy đủ", en: "enough" },
      { word: "十人 (じゅうにん)", vi: "mười người", en: "ten people" }
  ]},
  { stt: 11, kanji: "百", vocab: [
      { word: "百 (ひゃく)", vi: "trăm", en: "hundred" },
      { word: "百人 (ひゃくにん)", vi: "trăm người", en: "hundred people" },
      { word: "百分 (ひゃっぷん)", vi: "một phần trăm", en: "percent" }
  ]},
  { stt: 12, kanji: "千", vocab: [
      { word: "千 (せん)", vi: "nghìn", en: "thousand" },
      { word: "千円 (せんえん)", vi: "nghìn yên", en: "1000 yen" },
      { word: "千人 (せんにん)", vi: "nghìn người", en: "thousand people" }
  ]},
  { stt: 13, kanji: "万", vocab: [
      { word: "万 (まん)", vi: "mười nghìn", en: "ten thousand" },
      { word: "一万 (いちまん)", vi: "mười nghìn cái", en: "ten thousand items" },
      { word: "万歳 (ばんざい)", vi: "vạn tuế", en: "long live!" }
  ]},
  { stt: 14, kanji: "円", vocab: [
      { word: "円 (えん)", vi: "yên", en: "yen" },
      { word: "円形 (えんけい)", vi: "hình tròn", en: "circle" },
      { word: "百円 (ひゃくえん)", vi: "100 yên", en: "100 yen" }
  ]},

  // Nhóm 2: Thời gian và Phương hướng
  { stt: 15, kanji: "日", vocab: [
      { word: "日本 (にほん)", vi: "Nhật Bản", en: "Japan" },
      { word: "日曜日 (にちようび)", vi: "Chủ nhật", en: "Sunday" },
      { word: "毎日 (まいにち)", vi: "mỗi ngày", en: "every day" }
  ]},
  { stt: 16, kanji: "月", vocab: [
      { word: "月曜日 (げつようび)", vi: "Thứ hai", en: "Monday" },
      { word: "今月 (こんげつ)", vi: "tháng này", en: "this month" },
      { word: "一ヶ月 (いっかげつ)", vi: "một tháng", en: "one month" }
  ]},
  { stt: 17, kanji: "午", vocab: [
      { word: "正午 (しょうご)", vi: "12 giờ trưa", en: "noon" },
      { word: "午前 (ごぜん)", vi: "buổi sáng", en: "AM" },
      { word: "午後 (ごご)", vi: "buổi chiều", en: "PM" }
  ]},
  { stt: 18, kanji: "後", vocab: [
      { word: "後で (あとで)", vi: "sau đó", en: "later" },
      { word: "午後 (ごご)", vi: "buổi chiều", en: "afternoon" },
      { word: "その後 (そのご)", vi: "sau đó", en: "after that" }
  ]},
  { stt: 19, kanji: "時", vocab: [
      { word: "一時 (いちじ)", vi: "một giờ", en: "1 o'clock" },
      { word: "時間 (じかん)", vi: "thời gian", en: "time" },
      { word: "時計 (とけい)", vi: "đồng hồ", en: "clock/watch" }
  ]},
  { stt: 20, kanji: "間", vocab: [
      { word: "時間 (じかん)", vi: "thời gian", en: "time" },
      { word: "間に合う (まにあう)", vi: "kịp giờ", en: "be in time" },
      { word: "人間 (にんげん)", vi: "con người", en: "human" }
  ]},
  { stt: 21, kanji: "分", vocab: [
      { word: "五分 (ごふん)", vi: "5 phút", en: "five minutes" },
      { word: "十分 (じゅっぷん)", vi: "10 phút", en: "ten minutes" },
      { word: "分かる (わかる)", vi: "hiểu", en: "to understand" }
  ]},
  { stt: 22, kanji: "半", vocab: [
      { word: "半分 (はんぶん)", vi: "nửa", en: "half" },
      { word: "前半 (ぜんはん)", vi: "hiệp đầu", en: "first half" },
      { word: "後半 (こうはん)", vi: "hiệp sau", en: "second half" }
  ]},
  { stt: 23, kanji: "前", vocab: [
      { word: "前に (まえに)", vi: "trước", en: "in front" },
      { word: "午前 (ごぜん)", vi: "buổi sáng", en: "AM" },
      { word: "以前 (いぜん)", vi: "trước đây", en: "before" }
  ]},
  { stt: 24, kanji: "北", vocab: [
      { word: "北海道 (ほっかいどう)", vi: "Hokkaido", en: "Hokkaido" },
      { word: "北風 (きたかぜ)", vi: "gió bắc", en: "north wind" },
      { word: "北口 (きたぐち)", vi: "cổng phía bắc", en: "north exit" }
  ]},
  { stt: 25, kanji: "南", vocab: [
      { word: "南口 (みなみぐち)", vi: "cổng phía nam", en: "south exit" },
      { word: "南極 (なんきょく)", vi: "Nam Cực", en: "South Pole" },
      { word: "南向き (みなみむき)", vi: "hướng nam", en: "facing south" }
  ]},
  { stt: 26, kanji: "東", vocab: [
      { word: "東京 (とうきょう)", vi: "Tokyo", en: "Tokyo" },
      { word: "東口 (ひがしぐち)", vi: "cổng phía đông", en: "east exit" },
      { word: "東側 (ひがしがわ)", vi: "phía đông", en: "east side" }
  ]},
  { stt: 27, kanji: "西", vocab: [
      { word: "西口 (にしぐち)", vi: "cổng phía tây", en: "west exit" },
      { word: "西側 (にしがわ)", vi: "phía tây", en: "west side" },
      { word: "西洋 (せいよう)", vi: "Tây phương", en: "Western world" }
  ]},
  { stt: 28, kanji: "右", vocab: [
      { word: "右手 (みぎて)", vi: "tay phải", en: "right hand" },
      { word: "右側 (みぎがわ)", vi: "bên phải", en: "right side" },
      { word: "右折 (うせつ)", vi: "rẽ phải", en: "right turn" }
  ]},
  { stt: 29, kanji: "左", vocab: [
      { word: "左手 (ひだりて)", vi: "tay trái", en: "left hand" },
      { word: "左側 (ひだりがわ)", vi: "bên trái", en: "left side" },
      { word: "左折 (させつ)", vi: "rẽ trái", en: "left turn" }
  ]},
  { stt: 30, kanji: "上", vocab: [
      { word: "上 (うえ)", vi: "trên", en: "above" },
      { word: "上手 (じょうず)", vi: "khéo léo", en: "skillful" },
      { word: "上下 (じょうげ)", vi: "trên dưới", en: "up and down" }
  ]},
  { stt: 31, kanji: "下", vocab: [
      { word: "下 (した)", vi: "dưới", en: "below" },
      { word: "地下 (ちか)", vi: "tầng hầm", en: "underground" },
      { word: "上下 (じょうげ)", vi: "trên dưới", en: "up and down" }
  ]},
  { stt: 32, kanji: "中", vocab: [
      { word: "中 (なか)", vi: "bên trong", en: "inside" },
      { word: "中国 (ちゅうごく)", vi: "Trung Quốc", en: "China" },
      { word: "中学生 (ちゅうがくせい)", vi: "học sinh trung học", en: "middle school student" }
  ]},
  { stt: 33, kanji: "外", vocab: [
      { word: "外 (そと)", vi: "bên ngoài", en: "outside" },
      { word: "外国 (がいこく)", vi: "nước ngoài", en: "foreign country" },
      { word: "外食 (がいしょく)", vi: "ăn ngoài", en: "eating out" }
  ]},
  { stt: 34, kanji: "何", vocab: [
      { word: "何 (なに)", vi: "cái gì", en: "what" },
      { word: "何時 (なんじ)", vi: "mấy giờ", en: "what time" },
      { word: "何人 (なんにん)", vi: "bao nhiêu người", en: "how many people" }
  ]},
  { stt: 35, kanji: "本", vocab: [
      { word: "本 (ほん)", vi: "quyển sách", en: "book" },
      { word: "日本 (にほん)", vi: "Nhật Bản", en: "Japan" },
      { word: "本屋 (ほんや)", vi: "cửa hàng sách", en: "bookstore" }
  ]},
  { stt: 36, kanji: "生", vocab: [
      { word: "学生 (がくせい)", vi: "học sinh", en: "student" },
      { word: "生活 (せいかつ)", vi: "cuộc sống", en: "life" },
      { word: "生まれる (うまれる)", vi: "được sinh ra", en: "be born" }
  ]},
  // Nhóm 3: Thiên nhiên và Địa điểm
  { stt: 37, kanji: "火", vocab: [
      { word: "火 (ひ)", vi: "lửa", en: "fire" },
      { word: "火山 (かざん)", vi: "núi lửa", en: "volcano" },
      { word: "火曜日 (かようび)", vi: "thứ ba", en: "Tuesday" }
  ]},
  { stt: 38, kanji: "水", vocab: [
      { word: "水 (みず)", vi: "nước", en: "water" },
      { word: "水道 (すいどう)", vi: "nước máy", en: "tap water" },
      { word: "水泳 (すいえい)", vi: "bơi lội", en: "swimming" }
  ]},
  { stt: 39, kanji: "木", vocab: [
      { word: "木 (き)", vi: "cây", en: "tree" },
      { word: "木曜日 (もくようび)", vi: "thứ năm", en: "Thursday" },
      { word: "木陰 (こかげ)", vi: "bóng cây", en: "shade of a tree" }
  ]},
  { stt: 40, kanji: "金", vocab: [
      { word: "金 (かね)", vi: "tiền", en: "money" },
      { word: "金曜日 (きんようび)", vi: "thứ sáu", en: "Friday" },
      { word: "お金持ち (おかねもち)", vi: "người giàu", en: "rich person" }
  ]},
  { stt: 41, kanji: "土", vocab: [
      { word: "土 (つち)", vi: "đất", en: "soil" },
      { word: "土曜日 (どようび)", vi: "thứ bảy", en: "Saturday" },
      { word: "土地 (とち)", vi: "mảnh đất", en: "land" }
  ]},
  { stt: 42, kanji: "山", vocab: [
      { word: "山 (やま)", vi: "núi", en: "mountain" },
      { word: "富士山 (ふじさん)", vi: "núi Phú Sĩ", en: "Mount Fuji" },
      { word: "山登り (やまのぼり)", vi: "leo núi", en: "mountain climbing" }
  ]},
  { stt: 43, kanji: "川", vocab: [
      { word: "川 (かわ)", vi: "sông", en: "river" },
      { word: "川辺 (かわべ)", vi: "bờ sông", en: "riverbank" },
      { word: "川遊び (かわあそび)", vi: "chơi ở sông", en: "playing in the river" }
  ]},
  { stt: 44, kanji: "田", vocab: [
      { word: "田んぼ (たんぼ)", vi: "ruộng lúa", en: "rice field" },
      { word: "田中 (たなか)", vi: "Họ Tanaka", en: "Tanaka (name)" },
      { word: "田舎 (いなか)", vi: "nông thôn", en: "countryside" }
  ]},
  { stt: 45, kanji: "天", vocab: [
      { word: "天気 (てんき)", vi: "thời tiết", en: "weather" },
      { word: "天才 (てんさい)", vi: "thiên tài", en: "genius" },
      { word: "天空 (てんくう)", vi: "bầu trời", en: "sky" }
  ]},
  { stt: 46, kanji: "空", vocab: [
      { word: "空 (そら)", vi: "bầu trời", en: "sky" },
      { word: "空港 (くうこう)", vi: "sân bay", en: "airport" },
      { word: "空気 (くうき)", vi: "không khí", en: "air" }
  ]},
  { stt: 47, kanji: "雨", vocab: [
      { word: "雨 (あめ)", vi: "mưa", en: "rain" },
      { word: "雨傘 (あまがさ)", vi: "ô", en: "umbrella" },
      { word: "大雨 (おおあめ)", vi: "mưa lớn", en: "heavy rain" }
  ]},
  { stt: 48, kanji: "花", vocab: [
      { word: "花 (はな)", vi: "hoa", en: "flower" },
      { word: "花見 (はなみ)", vi: "ngắm hoa", en: "flower viewing" },
      { word: "花火 (はなび)", vi: "pháo hoa", en: "fireworks" }
  ]},
  { stt: 49, kanji: "国", vocab: [
      { word: "国 (くに)", vi: "quốc gia", en: "country" },
      { word: "外国 (がいこく)", vi: "nước ngoài", en: "foreign country" },
      { word: "国会 (こっかい)", vi: "quốc hội", en: "parliament" }
  ]},
  { stt: 50, kanji: "社", vocab: [
      { word: "会社 (かいしゃ)", vi: "công ty", en: "company" },
      { word: "神社 (じんじゃ)", vi: "đền Thần đạo", en: "Shinto shrine" },
      { word: "社会 (しゃかい)", vi: "xã hội", en: "society" }
  ]},
  { stt: 51, kanji: "店", vocab: [
      { word: "店 (みせ)", vi: "cửa hàng", en: "shop" },
      { word: "本店 (ほんてん)", vi: "cửa hàng chính", en: "main store" },
      { word: "店員 (てんいん)", vi: "nhân viên cửa hàng", en: "shop assistant" }
  ]},
  { stt: 52, kanji: "駅", vocab: [
      { word: "駅 (えき)", vi: "ga", en: "station" },
      { word: "地下鉄駅 (ちかてつえき)", vi: "ga tàu điện ngầm", en: "subway station" },
      { word: "駅前 (えきまえ)", vi: "trước ga", en: "in front of the station" }
  ]},

  // Nhóm 4: Con người và Trường học
  { stt: 53, kanji: "人", vocab: [
      { word: "人 (ひと)", vi: "người", en: "person" },
      { word: "日本人 (にほんじん)", vi: "người Nhật", en: "Japanese person" },
      { word: "人口 (じんこう)", vi: "dân số", en: "population" }
  ]},
  { stt: 54, kanji: "子", vocab: [
      { word: "子ども (こども)", vi: "trẻ em", en: "child" },
      { word: "女の子 (おんなのこ)", vi: "bé gái", en: "girl" },
      { word: "男の子 (おとこのこ)", vi: "bé trai", en: "boy" }
  ]},
  { stt: 55, kanji: "女", vocab: [
      { word: "女 (おんな)", vi: "nữ", en: "woman" },
      { word: "女性 (じょせい)", vi: "phụ nữ", en: "female" },
      { word: "女子学生 (じょしがくせい)", vi: "học sinh nữ", en: "female student" }
  ]},
  { stt: 56, kanji: "男", vocab: [
      { word: "男 (おとこ)", vi: "nam", en: "man" },
      { word: "男性 (だんせい)", vi: "đàn ông", en: "male" },
      { word: "男子学生 (だんしがくせい)", vi: "học sinh nam", en: "male student" }
  ]},
  { stt: 57, kanji: "父", vocab: [
      { word: "父 (ちち)", vi: "bố", en: "father" },
      { word: "お父さん (おとうさん)", vi: "bố (xưng hô)", en: "dad" },
      { word: "祖父 (そふ)", vi: "ông", en: "grandfather" }
  ]},
  { stt: 58, kanji: "母", vocab: [
      { word: "母 (はは)", vi: "mẹ", en: "mother" },
      { word: "お母さん (おかあさん)", vi: "mẹ (xưng hô)", en: "mom" },
      { word: "祖母 (そぼ)", vi: "bà", en: "grandmother" }
  ]},
  { stt: 59, kanji: "友", vocab: [
      { word: "友だち (ともだち)", vi: "bạn bè", en: "friend" },
      { word: "友情 (ゆうじょう)", vi: "tình bạn", en: "friendship" },
      { word: "友人 (ゆうじん)", vi: "bạn thân", en: "friend" }
  ]},
  { stt: 60, kanji: "目", vocab: [
      { word: "目 (め)", vi: "mắt", en: "eye" },
      { word: "目的 (もくてき)", vi: "mục đích", en: "purpose" },
      { word: "目標 (もくひょう)", vi: "mục tiêu", en: "goal" }
  ]},
  { stt: 61, kanji: "口", vocab: [
      { word: "口 (くち)", vi: "miệng", en: "mouth" },
      { word: "入口 (いりぐち)", vi: "lối vào", en: "entrance" },
      { word: "出口 (でぐち)", vi: "lối ra", en: "exit" }
  ]},
  { stt: 62, kanji: "耳", vocab: [
      { word: "耳 (みみ)", vi: "tai", en: "ear" },
      { word: "耳鼻科 (じびか)", vi: "khoa tai mũi họng", en: "ENT department" },
      { word: "耳鳴り (みみなり)", vi: "ù tai", en: "ringing in the ears" }
  ]},
  { stt: 63, kanji: "手", vocab: [
      { word: "手 (て)", vi: "tay", en: "hand" },
      { word: "手紙 (てがみ)", vi: "thư", en: "letter" },
      { word: "上手 (じょうず)", vi: "khéo léo", en: "skillful" }
  ]},
  { stt: 64, kanji: "足", vocab: [
      { word: "足 (あし)", vi: "chân", en: "leg/foot" },
      { word: "徒歩 (とほ)", vi: "đi bộ", en: "on foot" },
      { word: "足りる (たりる)", vi: "đủ", en: "be enough" }
  ]},
  { stt: 65, kanji: "力", vocab: [
      { word: "力 (ちから)", vi: "sức lực", en: "power" },
      { word: "努力 (どりょく)", vi: "nỗ lực", en: "effort" },
      { word: "体力 (たいりょく)", vi: "thể lực", en: "physical strength" }
  ]},
  { stt: 66, kanji: "学", vocab: [
      { word: "学生 (がくせい)", vi: "học sinh", en: "student" },
      { word: "学校 (がっこう)", vi: "trường học", en: "school" },
      { word: "学問 (がくもん)", vi: "học vấn", en: "learning/study" }
  ]},
  { stt: 67, kanji: "校", vocab: [
      { word: "学校 (がっこう)", vi: "trường học", en: "school" },
      { word: "高校 (こうこう)", vi: "trường cấp 3", en: "high school" },
      { word: "校長 (こうちょう)", vi: "hiệu trưởng", en: "principal" }
  ]},
  // Nhóm 5: Động từ và Hoạt động
  { stt: 68, kanji: "先", vocab: [
      { word: "先 (さき)", vi: "trước, phía trước", en: "ahead, previous" },
      { word: "先生 (せんせい)", vi: "giáo viên", en: "teacher" },
      { word: "先週 (せんしゅう)", vi: "tuần trước", en: "last week" }
  ]},
  { stt: 69, kanji: "休", vocab: [
      { word: "休む (やすむ)", vi: "nghỉ", en: "to rest, to take a break" },
      { word: "休日 (きゅうじつ)", vi: "ngày nghỉ", en: "holiday" },
      { word: "休憩 (きゅうけい)", vi: "nghỉ giải lao", en: "break" }
  ]},
  { stt: 70, kanji: "行", vocab: [
      { word: "行く (いく)", vi: "đi", en: "to go" },
      { word: "銀行 (ぎんこう)", vi: "ngân hàng", en: "bank" },
      { word: "旅行 (りょこう)", vi: "du lịch", en: "travel" }
  ]},
  { stt: 71, kanji: "来", vocab: [
      { word: "来る (くる)", vi: "đến", en: "to come" },
      { word: "来週 (らいしゅう)", vi: "tuần tới", en: "next week" },
      { word: "未来 (みらい)", vi: "tương lai", en: "future" }
  ]},
  { stt: 72, kanji: "出", vocab: [
      { word: "出る (でる)", vi: "ra, đi ra", en: "to exit, to leave" },
      { word: "出口 (でぐち)", vi: "lối ra", en: "exit" },
      { word: "出発 (しゅっぱつ)", vi: "xuất phát", en: "departure" }
  ]},
  { stt: 73, kanji: "入", vocab: [
      { word: "入る (はいる)", vi: "vào", en: "to enter" },
      { word: "入口 (いりぐち)", vi: "lối vào", en: "entrance" },
      { word: "入学 (にゅうがく)", vi: "nhập học", en: "admission" }
  ]},
  { stt: 74, kanji: "食", vocab: [
      { word: "食べる (たべる)", vi: "ăn", en: "to eat" },
      { word: "食事 (しょくじ)", vi: "bữa ăn", en: "meal" },
      { word: "食堂 (しょくどう)", vi: "nhà ăn", en: "cafeteria" }
  ]},
  { stt: 75, kanji: "飲", vocab: [
      { word: "飲む (のむ)", vi: "uống", en: "to drink" },
      { word: "飲み物 (のみもの)", vi: "đồ uống", en: "drink" },
      { word: "飲食店 (いんしょくてん)", vi: "quán ăn", en: "restaurant" }
  ]},
  { stt: 76, kanji: "言", vocab: [
      { word: "言う (いう)", vi: "nói", en: "to say" },
      { word: "言語 (げんご)", vi: "ngôn ngữ", en: "language" },
      { word: "方言 (ほうげん)", vi: "phương ngữ", en: "dialect" }
  ]},
  { stt: 77, kanji: "話", vocab: [
      { word: "話す (はなす)", vi: "nói chuyện", en: "to speak, to talk" },
      { word: "電話 (でんわ)", vi: "điện thoại", en: "telephone" },
      { word: "会話 (かいわ)", vi: "hội thoại", en: "conversation" }
  ]},
  { stt: 78, kanji: "読", vocab: [
      { word: "読む (よむ)", vi: "đọc", en: "to read" },
      { word: "読書 (どくしょ)", vi: "đọc sách", en: "reading" },
      { word: "新聞を読む (しんぶんをよむ)", vi: "đọc báo", en: "to read the newspaper" }
  ]},
  { stt: 79, kanji: "書", vocab: [
      { word: "書く (かく)", vi: "viết", en: "to write" },
      { word: "本を書く (ほんをかく)", vi: "viết sách", en: "to write a book" },
      { word: "作文 (さくぶん)", vi: "bài văn", en: "composition" }
  ]},
  { stt: 80, kanji: "見", vocab: [
      { word: "見る (みる)", vi: "nhìn, xem", en: "to see, to watch" },
      { word: "見学 (けんがく)", vi: "tham quan học tập", en: "study visit" },
      { word: "意見を見る (いけんをみる)", vi: "xem ý kiến", en: "to view opinions" }
  ]},
  { stt: 81, kanji: "聞", vocab: [
      { word: "聞く (きく)", vi: "nghe", en: "to listen, to ask" },
      { word: "新聞を聞く (しんぶんをきく)", vi: "nghe tin tức", en: "to listen to the news" },
      { word: "質問を聞く (しつもんをきく)", vi: "nghe câu hỏi", en: "to hear questions" }
  ]},
  { stt: 82, kanji: "買", vocab: [
      { word: "買う (かう)", vi: "mua", en: "to buy" },
      { word: "買い物 (かいもの)", vi: "việc mua sắm", en: "shopping" },
      { word: "買収 (ばいしゅう)", vi: "mua lại", en: "acquisition" }
  ]},
  { stt: 83, kanji: "立", vocab: [
      { word: "立つ (たつ)", vi: "đứng", en: "to stand" },
      { word: "立派 (りっぱ)", vi: "đáng nể, tuyệt vời", en: "splendid" },
      { word: "独立 (どくりつ)", vi: "độc lập", en: "independence" }
  ]},
  { stt: 84, kanji: "座", vocab: [
      { word: "座る (すわる)", vi: "ngồi", en: "to sit" },
      { word: "座席 (ざせき)", vi: "chỗ ngồi", en: "seat" },
      { word: "座談会 (ざだんかい)", vi: "hội thảo bàn tròn", en: "round-table discussion" }
  ]},
  { stt: 85, kanji: "会", vocab: [
      { word: "会う (あう)", vi: "gặp", en: "to meet" },
      { word: "会社 (かいしゃ)", vi: "công ty", en: "company" },
      { word: "会話 (かいわ)", vi: "hội thoại", en: "conversation" }
  ]},

  // Nhóm 6: Tính từ, Đồ vật và Trạng thái
  { stt: 86, kanji: "大", vocab: [
      { word: "大きい (おおきい)", vi: "to lớn", en: "big" },
      { word: "大学 (だいがく)", vi: "đại học", en: "university" },
      { word: "大切 (たいせつ)", vi: "quan trọng", en: "important" }
  ]},
  { stt: 87, kanji: "小", vocab: [
      { word: "小さい (ちいさい)", vi: "nhỏ", en: "small" },
      { word: "小学生 (しょうがくせい)", vi: "học sinh tiểu học", en: "elementary school student" },
      { word: "小説 (しょうせつ)", vi: "tiểu thuyết", en: "novel" }
  ]},
  { stt: 88, kanji: "高", vocab: [
      { word: "高い (たかい)", vi: "cao, đắt", en: "high, expensive" },
      { word: "高校 (こうこう)", vi: "trường cấp 3", en: "high school" },
      { word: "高級 (こうきゅう)", vi: "cao cấp", en: "luxury" }
  ]},
  { stt: 89, kanji: "安", vocab: [
      { word: "安い (やすい)", vi: "rẻ", en: "cheap" },
      { word: "安心 (あんしん)", vi: "yên tâm", en: "relief" },
      { word: "安全 (あんぜん)", vi: "an toàn", en: "safe" }
  ]},
  { stt: 90, kanji: "新", vocab: [
      { word: "新しい (あたらしい)", vi: "mới", en: "new" },
      { word: "新聞 (しんぶん)", vi: "báo", en: "newspaper" },
      { word: "新幹線 (しんかんせん)", vi: "tàu Shinkansen", en: "bullet train" }
  ]},
  { stt: 91, kanji: "古", vocab: [
      { word: "古い (ふるい)", vi: "cũ", en: "old" },
      { word: "中古 (ちゅうこ)", vi: "đồ cũ", en: "second-hand" },
      { word: "古典 (こてん)", vi: "cổ điển", en: "classics" }
  ]},
  { stt: 92, kanji: "多", vocab: [
      { word: "多い (おおい)", vi: "nhiều", en: "many, much" },
      { word: "多少 (たしょう)", vi: "ít nhiều", en: "more or less" },
      { word: "多数 (たすう)", vi: "đa số", en: "majority" }
  ]},
  { stt: 93, kanji: "少", vocab: [
      { word: "少ない (すくない)", vi: "ít", en: "few, little" },
      { word: "少し (すこし)", vi: "một chút", en: "a little" },
      { word: "少年 (しょうねん)", vi: "thiếu niên", en: "boy" }
  ]},
  { stt: 94, kanji: "早", vocab: [
      { word: "早い (はやい)", vi: "sớm, nhanh", en: "early, fast" },
      { word: "早朝 (そうちょう)", vi: "sáng sớm", en: "early morning" },
      { word: "早起き (はやおき)", vi: "dậy sớm", en: "waking up early" }
  ]},
  { stt: 95, kanji: "長", vocab: [
      { word: "長い (ながい)", vi: "dài", en: "long" },
      { word: "校長 (こうちょう)", vi: "hiệu trưởng", en: "principal" },
      { word: "長所 (ちょうしょ)", vi: "điểm mạnh", en: "strength" }
  ]},
  { stt: 96, kanji: "白", vocab: [
      { word: "白い (しろい)", vi: "trắng", en: "white" },
      { word: "白紙 (はくし)", vi: "giấy trắng", en: "blank paper" },
      { word: "白鳥 (はくちょう)", vi: "thiên nga", en: "swan" }
  ]},
  { stt: 97, kanji: "赤", vocab: [
      { word: "赤い (あかい)", vi: "đỏ", en: "red" },
      { word: "赤ちゃん (あかちゃん)", vi: "em bé", en: "baby" },
      { word: "赤字 (あかじ)", vi: "lỗ (tài chính)", en: "deficit" }
  ]},
  { stt: 98, kanji: "明", vocab: [
      { word: "明るい (あかるい)", vi: "sáng sủa", en: "bright" },
      { word: "説明 (せつめい)", vi: "giải thích", en: "explanation" },
      { word: "明日 (あした)", vi: "ngày mai", en: "tomorrow" }
  ]},
  { stt: 99, kanji: "電", vocab: [
      { word: "電気 (でんき)", vi: "điện", en: "electricity" },
      { word: "電車 (でんしゃ)", vi: "tàu điện", en: "train" },
      { word: "電話 (でんわ)", vi: "điện thoại", en: "telephone" }
  ]},
  { stt: 100, kanji: "車", vocab: [
      { word: "車 (くるま)", vi: "xe ô tô", en: "car" },
      { word: "自動車 (じどうしゃ)", vi: "ô tô", en: "automobile" },
      { word: "電車 (でんしゃ)", vi: "tàu điện", en: "train" }
  ]}
  ];