const ballparks = [
  {
    id: "komazawa",
    name: "駒沢オリンピック公園総合運動場 硬式野球場",
    area: "東京",
    city: "世田谷区",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駅近"],
    access: "駒沢大学駅から徒歩圏",
    surface: "内野土・外野天然芝",
    useCase: "都内で大会利用しやすい本格球場",
    description: "都心からの移動がしやすく、硬式対応の試合会場として検討しやすい球場です。",
    url: "https://www.google.com/search?q=%E9%A7%92%E6%B2%A2%E3%82%AA%E3%83%AA%E3%83%B3%E3%83%94%E3%83%83%E3%82%AF%E5%85%AC%E5%9C%92+%E7%A1%AC%E5%BC%8F%E9%87%8E%E7%90%83%E5%A0%B4"
  },
  {
    id: "ota",
    name: "大田スタジアム",
    area: "東京",
    city: "大田区",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "流通センター駅周辺",
    surface: "人工芝",
    useCase: "公式戦や大会で使いやすい都市型スタジアム",
    description: "照明や観客席を備えた、チーム行事や大会利用に向くスタジアムです。",
    url: "https://www.google.com/search?q=%E5%A4%A7%E7%94%B0%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%A2%E3%83%A0"
  },
  {
    id: "fuchu",
    name: "府中市民球場",
    area: "東京",
    city: "府中市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駅近"],
    access: "府中本町駅・分倍河原駅方面",
    surface: "内野土・外野芝",
    useCase: "多摩エリアの試合・練習拠点",
    description: "多摩方面のチームが集まりやすく、練習試合から大会まで候補に入れやすい球場です。",
    url: "https://www.google.com/search?q=%E5%BA%9C%E4%B8%AD%E5%B8%82%E6%B0%91%E7%90%83%E5%A0%B4"
  },
  {
    id: "yokohama",
    name: "横浜スタジアム",
    area: "神奈川",
    city: "横浜市中区",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駅近"],
    access: "関内駅・日本大通り駅から徒歩圏",
    surface: "人工芝",
    useCase: "大規模イベント・特別試合",
    description: "神奈川を代表するスタジアム。利用条件の確認は早めに行うのがおすすめです。",
    url: "https://www.google.com/search?q=%E6%A8%AA%E6%B5%9C%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%A2%E3%83%A0"
  },
  {
    id: "sagamihara",
    name: "サーティーフォー相模原球場",
    area: "神奈川",
    city: "相模原市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "淵野辺駅方面",
    surface: "内野土・外野天然芝",
    useCase: "県央エリアの大会・公式戦",
    description: "駐車場利用を含めた遠征計画が立てやすく、県央エリアの候補にしやすい球場です。",
    url: "https://www.google.com/search?q=%E3%82%B5%E3%83%BC%E3%83%86%E3%82%A3%E3%83%BC%E3%83%95%E3%82%A9%E3%83%BC%E7%9B%B8%E6%A8%A1%E5%8E%9F%E7%90%83%E5%A0%B4"
  },
  {
    id: "hiratsuka",
    name: "バッティングパレス相石スタジアムひらつか",
    area: "神奈川",
    city: "平塚市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "平塚駅方面",
    surface: "内野土・外野天然芝",
    useCase: "湘南エリアの公式戦・練習試合",
    description: "湘南方面のチームにとって使いやすく、観戦環境も整った球場です。",
    url: "https://www.google.com/search?q=%E3%83%90%E3%83%83%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%91%E3%83%AC%E3%82%B9%E7%9B%B8%E7%9F%B3%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%A2%E3%83%A0%E3%81%B2%E3%82%89%E3%81%A4%E3%81%8B"
  },
  {
    id: "omiya",
    name: "レジデンシャルスタジアム大宮",
    area: "埼玉",
    city: "さいたま市大宮区",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駅近"],
    access: "大宮公園駅から徒歩圏",
    surface: "内野土・外野天然芝",
    useCase: "埼玉中心部の大会会場",
    description: "アクセスのよさと本格的な設備が魅力で、県内外から集まる試合にも向いています。",
    url: "https://www.google.com/search?q=%E3%83%AC%E3%82%B8%E3%83%87%E3%83%B3%E3%82%B7%E3%83%A3%E3%83%AB%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%A2%E3%83%A0%E5%A4%A7%E5%AE%AE"
  },
  {
    id: "tokorozawa",
    name: "所沢航空記念公園 野球場",
    area: "埼玉",
    city: "所沢市",
    types: ["軟式"],
    features: ["駐車場", "駅近"],
    access: "航空公園駅から徒歩圏",
    surface: "内野土・外野芝",
    useCase: "軟式チームの練習・試合",
    description: "公園内の落ち着いた環境で、軟式野球の練習試合や地域利用に向いています。",
    url: "https://www.google.com/search?q=%E6%89%80%E6%B2%A2%E8%88%AA%E7%A9%BA%E8%A8%98%E5%BF%B5%E5%85%AC%E5%9C%92+%E9%87%8E%E7%90%83%E5%A0%B4"
  },
  {
    id: "kumagaya",
    name: "熊谷さくら運動公園野球場",
    area: "埼玉",
    city: "熊谷市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "熊谷駅方面",
    surface: "内野土・外野芝",
    useCase: "県北エリアの大会・遠征",
    description: "広い運動公園内にあり、車移動を前提にした試合や大会の候補にしやすい球場です。",
    url: "https://www.google.com/search?q=%E7%86%8A%E8%B0%B7%E3%81%95%E3%81%8F%E3%82%89%E9%81%8B%E5%8B%95%E5%85%AC%E5%9C%92%E9%87%8E%E7%90%83%E5%A0%B4"
  },
  {
    id: "kose",
    name: "山日YBS球場",
    area: "山梨",
    city: "甲府市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "小瀬スポーツ公園内",
    surface: "内野土・外野天然芝",
    useCase: "山梨県内の主要大会会場",
    description: "小瀬スポーツ公園にある本格球場で、山梨方面の公式戦や遠征に使いやすい候補です。",
    url: "https://www.google.com/search?q=%E5%B1%B1%E6%97%A5YBS%E7%90%83%E5%A0%B4"
  },
  {
    id: "fujihokuroku",
    name: "富士北麓公園野球場",
    area: "山梨",
    city: "富士吉田市",
    types: ["軟式", "硬式"],
    features: ["駐車場"],
    access: "富士北麓公園内",
    surface: "内野土・外野芝",
    useCase: "合宿・遠征利用",
    description: "自然環境の中でプレーでき、合宿や遠征スケジュールに組み込みやすい球場です。",
    url: "https://www.google.com/search?q=%E5%AF%8C%E5%A3%AB%E5%8C%97%E9%BA%93%E5%85%AC%E5%9C%92%E9%87%8E%E7%90%83%E5%A0%B4"
  },
  {
    id: "minami-alps",
    name: "南アルプスジットスタジアム",
    area: "山梨",
    city: "南アルプス市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "南アルプス市内",
    surface: "内野土・外野天然芝",
    useCase: "山梨西部の大会・練習試合",
    description: "車での集合がしやすく、山梨西部で硬式対応球場を探すときの候補になります。",
    url: "https://www.google.com/search?q=%E5%8D%97%E3%82%A2%E3%83%AB%E3%83%97%E3%82%B9%E3%82%B8%E3%83%83%E3%83%88%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%A2%E3%83%A0"
  },
  {
    id: "jingu",
    name: "明治神宮野球場",
    area: "東京",
    city: "新宿区",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駅近"],
    access: "外苑前駅・信濃町駅方面",
    surface: "人工芝",
    useCase: "都心での特別試合・イベント利用",
    description: "アクセスが非常によく、観客を入れた大きな試合やイベントの候補になります。",
    url: "https://www.google.com/search?q=%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4"
  },
  {
    id: "edogawa",
    name: "江戸川区球場",
    area: "東京",
    city: "江戸川区",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駅近"],
    access: "西葛西駅から徒歩圏",
    surface: "内野土・外野芝",
    useCase: "城東エリアの大会・練習試合",
    description: "駅から向かいやすく、区部東側で硬式対応球場を探すときに便利です。",
    url: "https://www.google.com/search?q=%E6%B1%9F%E6%88%B8%E5%B7%9D%E5%8C%BA%E7%90%83%E5%A0%B4"
  },
  {
    id: "hachioji-kamiyugi",
    name: "上柚木公園野球場",
    area: "東京",
    city: "八王子市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "南大沢駅方面",
    surface: "内野土・外野芝",
    useCase: "多摩南部の大会・遠征",
    description: "公園内の施設で、車移動を含めたチーム利用にも組み込みやすい球場です。",
    url: "https://www.google.com/search?q=%E4%B8%8A%E6%9F%9A%E6%9C%A8%E5%85%AC%E5%9C%92%E9%87%8E%E7%90%83%E5%A0%B4"
  },
  {
    id: "machida-onoji",
    name: "小野路球場",
    area: "東京",
    city: "町田市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "町田市小野路町方面",
    surface: "内野土・外野芝",
    useCase: "町田・多摩丘陵エリアの試合",
    description: "周辺エリアから車で集まりやすく、硬式対応の試合候補として使いやすい球場です。",
    url: "https://www.google.com/search?q=%E5%B0%8F%E9%87%8E%E8%B7%AF%E7%90%83%E5%A0%B4"
  },
  {
    id: "todoroki",
    name: "等々力球場",
    area: "神奈川",
    city: "川崎市中原区",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駅近"],
    access: "武蔵小杉駅・新丸子駅方面",
    surface: "内野土・外野芝",
    useCase: "川崎エリアの大会・公式戦",
    description: "川崎市内でアクセスと設備のバランスがよく、大会会場として検討しやすい球場です。",
    url: "https://www.google.com/search?q=%E7%AD%89%E3%80%85%E5%8A%9B%E7%90%83%E5%A0%B4"
  },
  {
    id: "hodogaya",
    name: "サーティーフォー保土ケ谷球場",
    area: "神奈川",
    city: "横浜市保土ケ谷区",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "保土ケ谷公園内",
    surface: "内野土・外野天然芝",
    useCase: "県大会・公式戦利用",
    description: "神奈川県内の主要球場のひとつで、公式戦や大きな大会の候補になります。",
    url: "https://www.google.com/search?q=%E4%BF%9D%E5%9C%9F%E3%82%B1%E8%B0%B7%E7%90%83%E5%A0%B4"
  },
  {
    id: "yokosuka",
    name: "横須賀スタジアム",
    area: "神奈川",
    city: "横須賀市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "追浜駅方面",
    surface: "人工芝",
    useCase: "三浦半島エリアの試合・イベント",
    description: "照明設備があり、横須賀方面で夜間利用や観戦を含む試合を考えやすい球場です。",
    url: "https://www.google.com/search?q=%E6%A8%AA%E9%A0%88%E8%B3%80%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%A2%E3%83%A0"
  },
  {
    id: "matano",
    name: "俣野公園・横浜薬大スタジアム",
    area: "神奈川",
    city: "横浜市戸塚区",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "戸塚駅・湘南台駅方面",
    surface: "人工芝",
    useCase: "横浜西部の大会・練習試合",
    description: "横浜西部や湘南方面から集まりやすく、硬式対応の候補として便利です。",
    url: "https://www.google.com/search?q=%E4%BF%A3%E9%87%8E%E5%85%AC%E5%9C%92+%E6%A8%AA%E6%B5%9C%E8%96%AC%E5%A4%A7%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%A2%E3%83%A0"
  },
  {
    id: "ageo",
    name: "UDトラックス上尾スタジアム",
    area: "埼玉",
    city: "上尾市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "上尾運動公園内",
    surface: "内野土・外野芝",
    useCase: "埼玉中央部の大会会場",
    description: "上尾周辺のチームが利用しやすく、大会や練習試合の候補として扱いやすい球場です。",
    url: "https://www.google.com/search?q=UD%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B9%E4%B8%8A%E5%B0%BE%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%A2%E3%83%A0"
  },
  {
    id: "koshigaya",
    name: "越谷市民球場",
    area: "埼玉",
    city: "越谷市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "越谷総合公園内",
    surface: "内野土・外野芝",
    useCase: "県東部の大会・練習拠点",
    description: "埼玉東部のチームが集まりやすく、複数チームでの試合調整にも向きます。",
    url: "https://www.google.com/search?q=%E8%B6%8A%E8%B0%B7%E5%B8%82%E6%B0%91%E7%90%83%E5%A0%B4"
  },
  {
    id: "kawaguchi",
    name: "川口市営球場",
    area: "埼玉",
    city: "川口市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駅近"],
    access: "川口市内",
    surface: "内野土・外野芝",
    useCase: "東京北部からも動きやすい試合会場",
    description: "都県境に近く、東京北部・埼玉南部のチームで集まりやすい球場です。",
    url: "https://www.google.com/search?q=%E5%B7%9D%E5%8F%A3%E5%B8%82%E5%96%B6%E7%90%83%E5%A0%B4"
  },
  {
    id: "asaka",
    name: "朝霞中央公園野球場",
    area: "埼玉",
    city: "朝霞市",
    types: ["軟式"],
    features: ["ナイター", "駅近"],
    access: "朝霞駅方面",
    surface: "内野土・外野芝",
    useCase: "軟式チームの平日練習・試合",
    description: "埼玉南西部で軟式野球の練習や試合を組むときに候補にしやすい球場です。",
    url: "https://www.google.com/search?q=%E6%9C%9D%E9%9C%9E%E4%B8%AD%E5%A4%AE%E5%85%AC%E5%9C%92%E9%87%8E%E7%90%83%E5%A0%B4"
  },
  {
    id: "nirasaki",
    name: "韮崎中央公園野球場",
    area: "山梨",
    city: "韮崎市",
    types: ["軟式", "硬式"],
    features: ["駐車場"],
    access: "韮崎中央公園内",
    surface: "内野土・外野芝",
    useCase: "峡北エリアの試合・練習",
    description: "山梨県北西部で車移動を前提にした試合や練習を組みやすい球場です。",
    url: "https://www.google.com/search?q=%E9%9F%AE%E5%B4%8E%E4%B8%AD%E5%A4%AE%E5%85%AC%E5%9C%92%E9%87%8E%E7%90%83%E5%A0%B4"
  },
  {
    id: "midorigaoka",
    name: "緑が丘スポーツ公園野球場",
    area: "山梨",
    city: "甲府市",
    types: ["軟式"],
    features: ["ナイター", "駐車場"],
    access: "甲府市緑が丘方面",
    surface: "内野土・外野芝",
    useCase: "甲府市内の軟式練習・試合",
    description: "甲府市内で軟式野球の練習や地域の試合を探すときに使いやすい候補です。",
    url: "https://www.google.com/search?q=%E7%B7%91%E3%81%8C%E4%B8%98%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E5%85%AC%E5%9C%92%E9%87%8E%E7%90%83%E5%A0%B4"
  },
  {
    id: "tsuru",
    name: "都留市総合運動公園野球場",
    area: "山梨",
    city: "都留市",
    types: ["軟式", "硬式"],
    features: ["駐車場"],
    access: "都留市総合運動公園内",
    surface: "内野土・外野芝",
    useCase: "郡内エリアの大会・遠征",
    description: "富士東部方面のチームや遠征利用で候補にしやすい、運動公園内の球場です。",
    url: "https://www.google.com/search?q=%E9%83%BD%E7%95%99%E5%B8%82%E7%B7%8F%E5%90%88%E9%81%8B%E5%8B%95%E5%85%AC%E5%9C%92%E9%87%8E%E7%90%83%E5%A0%B4"
  },
  {
    id: "yamanashi-city",
    name: "山梨市民総合体育館周辺 野球場",
    area: "山梨",
    city: "山梨市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "山梨市内",
    surface: "内野土・外野芝",
    useCase: "地域大会・週末練習",
    description: "地域利用や週末の軟式練習で、山梨市周辺の候補として比較しやすい球場です。",
    url: "https://www.google.com/search?q=%E5%B1%B1%E6%A2%A8%E5%B8%82+%E9%87%8E%E7%90%83%E5%A0%B4"
  },
  {
    id: "yumenoshima",
    name: "夢の島野球場",
    area: "東京",
    city: "江東区",
    types: ["軟式"],
    features: ["ナイター", "駐車場"],
    access: "新木場駅方面",
    surface: "内野土・外野芝",
    useCase: "湾岸エリアの軟式練習・試合",
    description: "複数面の利用を検討しやすく、都内東部の軟式チームに向く球場です。",
    url: "https://www.google.com/search?q=夢の島野球場"
  },
  {
    id: "setagaya-sogo",
    name: "世田谷区総合運動場 野球場",
    area: "東京",
    city: "世田谷区",
    types: ["軟式"],
    features: ["ナイター", "駐車場"],
    access: "成城学園前駅・用賀駅方面",
    surface: "内野土・外野芝",
    useCase: "区内チームの練習・地域大会",
    description: "住宅地からも利用しやすく、平日練習や地域大会の候補になります。",
    url: "https://www.google.com/search?q=世田谷区総合運動場+野球場"
  },
  {
    id: "ipponsugi",
    name: "一本杉公園野球場",
    area: "東京",
    city: "多摩市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "多摩センター駅方面",
    surface: "内野土・外野芝",
    useCase: "多摩ニュータウン周辺の試合",
    description: "多摩南部のチームが集まりやすく、硬式対応球場の候補として便利です。",
    url: "https://www.google.com/search?q=一本杉公園野球場"
  },
  {
    id: "akishima",
    name: "S&D昭島スタジアム",
    area: "東京",
    city: "昭島市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場", "駅近"],
    access: "東中神駅方面",
    surface: "内野土・外野芝",
    useCase: "多摩北部の大会・公式戦",
    description: "駅からも向かいやすく、チームの集合や観戦を含む試合に使いやすい球場です。",
    url: "https://www.google.com/search?q=S%26D昭島スタジアム"
  },
  {
    id: "tachikawa",
    name: "立川公園野球場",
    area: "東京",
    city: "立川市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駅近"],
    access: "西立川駅方面",
    surface: "内野土・外野芝",
    useCase: "中央線沿線の大会・練習試合",
    description: "多摩地域の中心部からアクセスしやすく、試合調整の候補にしやすい球場です。",
    url: "https://www.google.com/search?q=立川公園野球場"
  },
  {
    id: "koganei-park",
    name: "小金井公園野球場",
    area: "東京",
    city: "小金井市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "小金井公園内",
    surface: "内野土・外野芝",
    useCase: "公園内での軟式練習・試合",
    description: "広い都立公園内にあり、週末の練習や地域チームの試合候補になります。",
    url: "https://www.google.com/search?q=小金井公園野球場"
  },
  {
    id: "musashino-park",
    name: "武蔵野公園野球場",
    area: "東京",
    city: "府中市・小金井市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "多磨駅・武蔵小金井駅方面",
    surface: "内野土・外野芝",
    useCase: "軟式野球の練習・地域利用",
    description: "自然の多い公園環境で、落ち着いた練習や地域利用に向いた球場です。",
    url: "https://www.google.com/search?q=武蔵野公園野球場"
  },
  {
    id: "higashiyamato",
    name: "東大和南公園野球場",
    area: "東京",
    city: "東大和市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "玉川上水駅方面",
    surface: "内野土・外野芝",
    useCase: "多摩北部の軟式利用",
    description: "多摩北部で軟式野球の練習や地域大会を探すときの候補になります。",
    url: "https://www.google.com/search?q=東大和南公園野球場"
  },
  {
    id: "akiruno",
    name: "あきる野市民球場",
    area: "東京",
    city: "あきる野市",
    types: ["軟式", "硬式"],
    features: ["駐車場"],
    access: "秋川駅方面",
    surface: "内野土・外野芝",
    useCase: "西多摩エリアの大会・遠征",
    description: "西多摩方面のチームが集まりやすく、車移動を前提にした試合に向きます。",
    url: "https://www.google.com/search?q=あきる野市民球場"
  },
  {
    id: "fujisawa-happe",
    name: "藤沢市八部野球場",
    area: "神奈川",
    city: "藤沢市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "鵠沼海岸駅方面",
    surface: "内野土・外野芝",
    useCase: "湘南エリアの大会・練習試合",
    description: "藤沢・湘南方面のチームが利用しやすく、ナイター利用も検討しやすい球場です。",
    url: "https://www.google.com/search?q=藤沢市八部野球場"
  },
  {
    id: "hadano",
    name: "秦野カルチャーパーク野球場",
    area: "神奈川",
    city: "秦野市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "秦野駅方面",
    surface: "内野土・外野芝",
    useCase: "県西寄りの大会・練習試合",
    description: "公園内の施設を活用しやすく、車で集まる試合や大会に向いた球場です。",
    url: "https://www.google.com/search?q=秦野カルチャーパーク野球場"
  },
  {
    id: "isehara",
    name: "伊勢原球場",
    area: "神奈川",
    city: "伊勢原市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "伊勢原市総合運動公園内",
    surface: "内野土・外野芝",
    useCase: "県央西部の試合・大会",
    description: "県央から県西方面のチームが集まりやすく、公式戦候補にもなります。",
    url: "https://www.google.com/search?q=伊勢原球場"
  },
  {
    id: "odawara",
    name: "小田原球場",
    area: "神奈川",
    city: "小田原市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "小田原市内",
    surface: "内野土・外野芝",
    useCase: "県西エリアの大会・遠征",
    description: "県西エリアの主要候補として、遠征や大会利用の比較対象にしやすい球場です。",
    url: "https://www.google.com/search?q=小田原球場"
  },
  {
    id: "minamiashigara",
    name: "南足柄球場",
    area: "神奈川",
    city: "南足柄市",
    types: ["軟式", "硬式"],
    features: ["駐車場"],
    access: "南足柄市運動公園方面",
    surface: "内野土・外野芝",
    useCase: "足柄エリアの試合・練習",
    description: "県西部で車移動を前提にした練習試合や地域大会に使いやすい球場です。",
    url: "https://www.google.com/search?q=南足柄球場"
  },
  {
    id: "yamato",
    name: "大和スタジアム",
    area: "神奈川",
    city: "大和市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "大和市内",
    surface: "内野土・外野芝",
    useCase: "県央・横浜西部の試合拠点",
    description: "県央と横浜方面の中間候補として、試合会場の比較に入れやすい球場です。",
    url: "https://www.google.com/search?q=大和スタジアム"
  },
  {
    id: "ebina",
    name: "海老名運動公園野球場",
    area: "神奈川",
    city: "海老名市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "海老名運動公園内",
    surface: "内野土・外野芝",
    useCase: "県央エリアの軟式練習",
    description: "公園内の施設で、県央エリアの軟式チームが候補にしやすい球場です。",
    url: "https://www.google.com/search?q=海老名運動公園野球場"
  },
  {
    id: "atsugi-tamagawa",
    name: "玉川野球場",
    area: "神奈川",
    city: "厚木市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "厚木市玉川地区",
    surface: "内野土・外野芝",
    useCase: "厚木周辺の軟式試合",
    description: "厚木周辺で軟式の練習試合や地域利用を探すときの候補になります。",
    url: "https://www.google.com/search?q=厚木市+玉川野球場"
  },
  {
    id: "ayase",
    name: "綾瀬スポーツ公園野球場",
    area: "神奈川",
    city: "綾瀬市",
    types: ["軟式"],
    features: ["ナイター", "駐車場"],
    access: "綾瀬スポーツ公園内",
    surface: "内野土・外野芝",
    useCase: "県央南部の練習・試合",
    description: "照明付きの利用も検討しやすく、県央南部の軟式チームに向きます。",
    url: "https://www.google.com/search?q=綾瀬スポーツ公園野球場"
  },
  {
    id: "kawagoe",
    name: "川越初雁球場",
    area: "埼玉",
    city: "川越市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "川越市内",
    surface: "内野土・外野芝",
    useCase: "県西部の大会・公式戦",
    description: "川越周辺の主要候補として、大会や硬式対応の試合にも使いやすい球場です。",
    url: "https://www.google.com/search?q=川越初雁球場"
  },
  {
    id: "hanno",
    name: "飯能市民球場",
    area: "埼玉",
    city: "飯能市",
    types: ["軟式", "硬式"],
    features: ["駐車場"],
    access: "阿須運動公園方面",
    surface: "内野土・外野芝",
    useCase: "埼玉西部の大会・練習試合",
    description: "西部エリアで車移動を前提にした試合や遠征に組み込みやすい球場です。",
    url: "https://www.google.com/search?q=飯能市民球場"
  },
  {
    id: "honjo",
    name: "本庄総合公園市民球場",
    area: "埼玉",
    city: "本庄市",
    types: ["軟式", "硬式"],
    features: ["ナイター", "駐車場"],
    access: "本庄総合公園内",
    surface: "内野土・外野芝",
    useCase: "県北西部の大会・遠征",
    description: "県北西部で大会利用や遠征試合を探すときに候補へ入れやすい球場です。",
    url: "https://www.google.com/search?q=本庄総合公園市民球場"
  },
  {
    id: "chichibu",
    name: "秩父市営球場",
    area: "埼玉",
    city: "秩父市",
    types: ["軟式", "硬式"],
    features: ["駐車場"],
    access: "秩父市内",
    surface: "内野土・外野芝",
    useCase: "秩父エリアの試合・遠征",
    description: "秩父方面での試合や合宿利用を検討するときに比較しやすい球場です。",
    url: "https://www.google.com/search?q=秩父市営球場"
  },
  {
    id: "fukaya",
    name: "深谷市総合運動公園野球場",
    area: "埼玉",
    city: "深谷市",
    types: ["軟式", "硬式"],
    features: ["駐車場"],
    access: "深谷市総合運動公園内",
    surface: "内野土・外野芝",
    useCase: "県北エリアの試合候補",
    description: "県北のチームが集まりやすく、週末の練習試合や大会候補になります。",
    url: "https://www.google.com/search?q=深谷市総合運動公園野球場"
  },
  {
    id: "kasukabe-ushijima",
    name: "牛島野球場",
    area: "埼玉",
    city: "春日部市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "春日部市牛島地区",
    surface: "内野土・外野芝",
    useCase: "県東部の軟式練習・試合",
    description: "春日部周辺で軟式野球の練習や地域大会を探すときの候補です。",
    url: "https://www.google.com/search?q=春日部市+牛島野球場"
  },
  {
    id: "sayama",
    name: "狭山市営柏原野球場",
    area: "埼玉",
    city: "狭山市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "狭山市柏原地区",
    surface: "内野土・外野芝",
    useCase: "埼玉西部の軟式利用",
    description: "狭山周辺の軟式チームが練習や試合で比較しやすい球場です。",
    url: "https://www.google.com/search?q=狭山市営柏原野球場"
  },
  {
    id: "misato",
    name: "三郷市番匠免運動公園野球場",
    area: "埼玉",
    city: "三郷市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "番匠免運動公園内",
    surface: "内野土・外野芝",
    useCase: "県東南部の軟式練習・試合",
    description: "東京東部や千葉方面からも検討しやすい、県東南部の軟式球場です。",
    url: "https://www.google.com/search?q=三郷市番匠免運動公園野球場"
  },
  {
    id: "kuki",
    name: "久喜市総合運動公園野球場",
    area: "埼玉",
    city: "久喜市",
    types: ["軟式", "硬式"],
    features: ["駐車場"],
    access: "久喜市総合運動公園内",
    surface: "内野土・外野芝",
    useCase: "県東北部の大会・練習試合",
    description: "県東北部で複数チームが集まる試合を組むときに候補にしやすい球場です。",
    url: "https://www.google.com/search?q=久喜市総合運動公園野球場"
  },
  {
    id: "kai",
    name: "甲斐市敷島総合公園野球場",
    area: "山梨",
    city: "甲斐市",
    types: ["軟式", "硬式"],
    features: ["駐車場"],
    access: "敷島総合公園内",
    surface: "内野土・外野芝",
    useCase: "甲府盆地北部の試合候補",
    description: "甲府市周辺から集まりやすく、車移動の練習試合や地域大会に向きます。",
    url: "https://www.google.com/search?q=甲斐市敷島総合公園野球場"
  },
  {
    id: "showa",
    name: "昭和町押原公園野球場",
    area: "山梨",
    city: "中巨摩郡昭和町",
    types: ["軟式"],
    features: ["駐車場"],
    access: "押原公園内",
    surface: "内野土・外野芝",
    useCase: "甲府昭和周辺の軟式利用",
    description: "甲府昭和エリアで軟式の練習や地域利用を探すときに便利な候補です。",
    url: "https://www.google.com/search?q=昭和町押原公園野球場"
  },
  {
    id: "fuefuki",
    name: "笛吹市いちのみや桃の里スポーツ公園野球場",
    area: "山梨",
    city: "笛吹市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "一宮町方面",
    surface: "内野土・外野芝",
    useCase: "峡東エリアの練習・試合",
    description: "峡東エリアのチームが週末練習や地域大会で比較しやすい球場です。",
    url: "https://www.google.com/search?q=笛吹市+いちのみや桃の里スポーツ公園+野球場"
  },
  {
    id: "uenohara",
    name: "上野原市桂川野球場",
    area: "山梨",
    city: "上野原市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "桂川沿い",
    surface: "内野土・外野芝",
    useCase: "東京西部からも検討しやすい軟式球場",
    description: "山梨東部にあり、東京西部からの移動も考えた試合候補になります。",
    url: "https://www.google.com/search?q=上野原市桂川野球場"
  },
  {
    id: "otsuki",
    name: "大月市営総合グラウンド野球場",
    area: "山梨",
    city: "大月市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "大月市内",
    surface: "内野土・外野芝",
    useCase: "郡内東部の練習・試合",
    description: "郡内東部エリアで地域利用や週末の軟式試合に使いやすい候補です。",
    url: "https://www.google.com/search?q=大月市営総合グラウンド野球場"
  },
  {
    id: "hokuto",
    name: "北杜市長坂総合スポーツ公園野球場",
    area: "山梨",
    city: "北杜市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "長坂総合スポーツ公園内",
    surface: "内野土・外野芝",
    useCase: "峡北・八ヶ岳方面の合宿利用",
    description: "自然環境の中で練習や合宿利用を検討しやすい、北杜方面の候補です。",
    url: "https://www.google.com/search?q=北杜市長坂総合スポーツ公園野球場"
  },
  {
    id: "koshu",
    name: "甲州市塩山総合グラウンド野球場",
    area: "山梨",
    city: "甲州市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "塩山方面",
    surface: "内野土・外野芝",
    useCase: "峡東北部の軟式練習・試合",
    description: "甲州市周辺で軟式野球の練習や地域大会を探すときの候補です。",
    url: "https://www.google.com/search?q=甲州市塩山総合グラウンド野球場"
  },
  {
    id: "chuo",
    name: "中央市玉穂ふるさとふれあい広場野球場",
    area: "山梨",
    city: "中央市",
    types: ["軟式"],
    features: ["駐車場"],
    access: "中央市玉穂地区",
    surface: "内野土・外野芝",
    useCase: "甲府盆地中央部の軟式利用",
    description: "甲府盆地中央部でチームが集まりやすく、地域利用に向いた球場です。",
    url: "https://www.google.com/search?q=中央市玉穂ふるさとふれあい広場野球場"
  },
  {
    id: "nambu",
    name: "南部町アルカディア南部総合公園野球場",
    area: "山梨",
    city: "南巨摩郡南部町",
    types: ["軟式"],
    features: ["駐車場"],
    access: "アルカディア南部総合公園内",
    surface: "内野土・外野芝",
    useCase: "峡南エリアの練習・遠征",
    description: "峡南方面で車移動を前提にした練習や遠征利用を考えやすい球場です。",
    url: "https://www.google.com/search?q=アルカディア南部総合公園野球場"
  }
];

const cards = document.querySelector("#cards");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const filters = document.querySelector("#filters");
const drawer = document.querySelector("#drawer");
const drawerContent = document.querySelector("#drawerContent");
const drawerClose = document.querySelector("#drawerClose");
const overlay = document.querySelector("#overlay");
const mapButtons = document.querySelectorAll("[data-map-area]");
const mapTotal = document.querySelector("#mapTotal");

const favoriteIds = new Set(JSON.parse(localStorage.getItem("favoriteBallparks") || "[]"));

function renderMapCounts() {
  const counts = ballparks.reduce((summary, park) => {
    summary[park.area] = (summary[park.area] || 0) + 1;
    return summary;
  }, {});

  document.querySelectorAll("[data-count-for]").forEach((count) => {
    const area = count.dataset.countFor;
    count.textContent = `${counts[area] || 0}件`;
  });

  if (mapTotal) {
    mapTotal.textContent = ballparks.length;
  }
}

function updateMapSelection() {
  const selectedArea = document.querySelector("#area").value;
  mapButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mapArea === selectedArea);
  });
}

function getSelectedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function normalize(value) {
  return value.toLowerCase().replace(/\s/g, "");
}

function getFilteredParks() {
  const keyword = normalize(document.querySelector("#keyword").value);
  const area = document.querySelector("#area").value;
  const selectedTypes = getSelectedValues("type");
  const selectedFeatures = getSelectedValues("feature");

  return ballparks.filter((park) => {
    const searchable = normalize([
      park.name,
      park.area,
      park.city,
      park.access,
      park.surface,
      park.useCase,
      park.description,
      ...park.types,
      ...park.features
    ].join(" "));

    const matchesKeyword = !keyword || searchable.includes(keyword);
    const matchesArea = area === "all" || park.area === area;
    const matchesType = selectedTypes.length === 0 || selectedTypes.some((type) => park.types.includes(type));
    const matchesFeature = selectedFeatures.every((feature) => park.features.includes(feature));

    return matchesKeyword && matchesArea && matchesType && matchesFeature;
  });
}

function tagHtml(park) {
  return [...park.types, ...park.features]
    .map((tag) => `<span class="tag ${tag === "硬式" ? "clay" : ""}">${tag}</span>`)
    .join("");
}

function renderCards() {
  const parks = getFilteredParks();
  updateMapSelection();
  cards.innerHTML = parks
    .map((park) => {
      const active = favoriteIds.has(park.id) ? " active" : "";
      const favoriteLabel = favoriteIds.has(park.id) ? "お気に入り解除" : "お気に入りに追加";

      return `
        <article class="card">
          <div class="card-visual">
            <button class="favorite${active}" type="button" data-favorite="${park.id}" aria-label="${favoriteLabel}">★</button>
          </div>
          <div class="card-body">
            <div>
              <h3>${park.name}</h3>
              <p class="meta">${park.area}・${park.city} / ${park.access}</p>
            </div>
            <div class="tags">${tagHtml(park)}</div>
            <p class="description">${park.description}</p>
            <button type="button" data-detail="${park.id}">詳細を見る</button>
          </div>
        </article>
      `;
    })
    .join("");

  resultCount.textContent = `${parks.length}件表示中`;
  emptyState.hidden = parks.length !== 0;
}

function saveFavorites() {
  localStorage.setItem("favoriteBallparks", JSON.stringify([...favoriteIds]));
}

function openDetail(id) {
  const park = ballparks.find((item) => item.id === id);
  if (!park) return;

  drawerContent.innerHTML = `
    <p class="eyebrow">${park.area} / ${park.city}</p>
    <h2>${park.name}</h2>
    <p class="lead">${park.useCase}</p>
    <div class="tags">${tagHtml(park)}</div>
    <dl>
      <dt>所在地</dt><dd>${park.area} ${park.city}</dd>
      <dt>アクセス</dt><dd>${park.access}</dd>
      <dt>対応</dt><dd>${park.types.join("・")}</dd>
      <dt>設備</dt><dd>${park.features.join("・") || "要確認"}</dd>
      <dt>グラウンド</dt><dd>${park.surface}</dd>
    </dl>
    <a class="drawer-link" href="${park.url}" target="_blank" rel="noreferrer">公式情報・予約方法を検索</a>
  `;

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
}

function closeDetail() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  overlay.hidden = true;
}

filters.addEventListener("input", renderCards);
filters.addEventListener("reset", () => {
  window.setTimeout(renderCards, 0);
});

mapButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#area").value = button.dataset.mapArea;
    renderCards();
    document.querySelector("#search").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

cards.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  const detailButton = event.target.closest("[data-detail]");

  if (favoriteButton) {
    const id = favoriteButton.dataset.favorite;
    if (favoriteIds.has(id)) {
      favoriteIds.delete(id);
    } else {
      favoriteIds.add(id);
    }
    saveFavorites();
    renderCards();
  }

  if (detailButton) {
    openDetail(detailButton.dataset.detail);
  }
});

drawerClose.addEventListener("click", closeDetail);
overlay.addEventListener("click", closeDetail);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDetail();
});

renderMapCounts();
renderCards();
