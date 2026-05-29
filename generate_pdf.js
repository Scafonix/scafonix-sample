const PDFDocument = require('pdfkit');
const fs = require('fs');

// Generate English PDF
function generateEN() {
  const doc = new PDFDocument({ margin: 50 });
  const pdfPath = './The_Magicless_Archmage_Vol1.pdf';
  const stream = fs.createWriteStream(pdfPath);
  doc.pipe(stream);

  doc.moveDown(2);
  doc.fontSize(26).font('Helvetica-Bold').fillColor('#1c1b18').text('THE MAGICLESS ARCHMAGE', { align: 'center' });
  doc.fontSize(14).font('Helvetica-Oblique').fillColor('#706255').text('Volume 1: The Artifact Master', { align: 'center' });
  doc.moveDown(1.5);
  doc.fontSize(11).font('Helvetica').fillColor('#ab8e67').text('Written by LoreWeaver AI & Reminus Chronicles', { align: 'center' });
  doc.moveDown(3);

  doc.moveTo(150, doc.y).lineTo(450, doc.y).lineWidth(1).strokeColor('#ab8e67').stroke();
  doc.moveDown(3);

  doc.fontSize(18).font('Helvetica-Bold').fillColor('#1c1b18').text('Chapter 1: The Sparks of Fraud', { align: 'left' });
  doc.moveDown(1);

  const storyParagraphs = [
    "The autumn rain in the rural fief of Oakhaven never seemed to wash away the smell of damp soil and squalor. Inside the minor lord's drafty, neglected archive room, seventeen-year-old Reminus sat on a rotting wooden crate, his dirt-stained fingers tracing the fading gilded lettering of a heavy leather tome.",
    "Unlike the other peasant boys who dreamed of joining the Lord's vanguard, swinging heavy steel swords, and wearing polished iron plate armor, Reminus dreamed of stars. He dreamed of the quiet, humming power of the arcane. He wanted to bend the elements to his will.",
    "But in the kingdom of Alveria, magic was not a skill you simply learned through hard work. It was a birthright. A gift of blood. You either inherited the magical spark in your veins at birth, or you spent your life tilling the muddy wheat fields until your back gave out.",
    "Reminus had no spark. His blood was as mundane as the dirt beneath his fingernails.",
    "Yet, destiny had a strange way of playing tricks on the desperate.",
    "Just three nights ago, while scavenging for scrap metal in the forbidden ruins of the Whispering Spire, Reminus's spade had struck something metallic. Buried beneath centuries of ash was a small, bronze ring embedded with a cracked, cloudy purple amethyst.",
    "It wasn't a relic of legendary power. It was a Spark-Ring—a common, low-grade utility artifact discarded by some wealthy wizard's apprentice decades ago. It possessed no grand destructive capability. All it could do was ignite a candle flame or emit a faint, crackling purple spark when pressed against a hard surface.",
    "But to a boy with nothing, a single spark was enough to ignite a wildfire of deception.",
    "Reminus slipped the cold bronze ring onto his finger, concealed beneath his tattered woolen sleeve. He closed his eyes, pressed the ring against his palm, and whispered a word he had memorized from the old books.",
    "\"Ignis.\"",
    "With a sharp crack, a tiny violet flame danced upon his fingertips. It carried no warmth, nor did it have the power to burn down a wall, but in the dim shadow of the archive room, it looked exactly like the birth of a mage.",
    "Reminus smiled. For the first time in his life, he saw a way out of the mud."
  ];

  storyParagraphs.forEach(p => {
    doc.fontSize(11).font('Helvetica').fillColor('#2c241e').text(p, {
      align: 'justify',
      lineGap: 4,
      paragraphGap: 12
    });
  });

  doc.end();
  stream.on('finish', () => {
    console.log('English PDF compiled!');
  });
}

// Generate Korean PDF
function generateKO() {
  const doc = new PDFDocument({ margin: 50 });
  const pdfPath = './The_Magicless_Archmage_Vol1_KO.pdf';
  const stream = fs.createWriteStream(pdfPath);
  doc.pipe(stream);

  const fontPath = '/System/Library/Fonts/Supplemental/AppleGothic.ttf';
  doc.registerFont('AppleGothic', fontPath);

  doc.moveDown(2);
  doc.fontSize(24).font('AppleGothic').fillColor('#1c1b18').text('마법 없는 대마법사', { align: 'center' });
  doc.fontSize(14).font('AppleGothic').fillColor('#706255').text('제1권: 아티팩트 마스터', { align: 'center' });
  doc.moveDown(1.5);
  doc.fontSize(10).font('AppleGothic').fillColor('#ab8e67').text('저자: 로어위버 AI & 레미너스 연대기', { align: 'center' });
  doc.moveDown(3);

  doc.moveTo(150, doc.y).lineTo(450, doc.y).lineWidth(1).strokeColor('#ab8e67').stroke();
  doc.moveDown(3);

  doc.fontSize(16).font('AppleGothic').fillColor('#1c1b18').text('제 1 장: 기만의 불꽃', { align: 'left' });
  doc.moveDown(1);

  const storyParagraphs = [
    "시골 영지 오크헤이븐에 내리는 가을비는 축축한 흙먼지와 빈궁한 냄새를 결코 씻어내지 못할 것 같았다. 영주의 외지고 방치된 아카이브실 안에서, 열일곱 살의 레미너스는 썩어가는 나무 상자 위에 앉아 먼지 묻은 손가락으로 가죽 양장본 고서의 희미해진 금박 글씨를 따라 그리고 있었다.",
    "영주의 선봉대에 합류해 거대한 강철 검을 휘두르고 윤이 나는 철갑옷을 입는 것을 꿈꾸는 다른 시골 소년들과 달리, 레미너스는 별을 꿈꿨다. 그는 비전(Arcane) 마법의 고요하고 웅웅거리는 힘을 꿈꿨다. 그는 원소들을 자신의 의지대로 굴복시키고 싶었다.",
    "하지만 알베리아 왕국에서 마법은 노력만으로 배울 수 있는 기술이 아니었다. 그것은 타고난 권리이자 혈통의 선물이었다. 태어날 때부터 혈관에 마법의 불꽃(Spark)을 물려받았거나, 평생 밀밭을 갈며 허리가 굽어질 때까지 흙을 파는 두 가지 길뿐이었다.",
    "레미너스에게는 불꽃이 없었다. 그의 피는 그의 손톱 밑에 낀 흙만큼이나 평범했다.",
    "그러나 운명은 절박한 이들에게 짓궂은 장난을 치는 기묘한 버릇이 있었다.",
    "불과 사흘 전 밤, 속삭임의 첨탑이라는 금지된 유적지에서 고철을 뒤지던 레미너스의 녹슨 삽 끝에 금속성이 걸렸다. 수백 년 된 재 아래에 묻혀 있던 것은 갈라지고 탁한 보라색 자수정이 박힌 작은 청동 반지였다.",
    "그것은 전설적인 힘을 지닌 유물이 아니었다. 수십 년 전 어느 부유한 마법사 견습생이 내다 버린 흔하고 보잘것없는 생활용 아티팩트인 '스파크 링(Spark-Ring)'이었다. 그것에는 거대한 파괴력이 없었다. 양초에 불을 붙이거나 단단한 표면에 대고 눌렀을 때 탁탁 소리를 내며 희미한 보라색 스파크를 방출하는 것이 전부였다.",
    "하지만 아무것도 가지지 못한 소년에게 단 하나의 불꽃은 기만이라는 거대한 들불을 일으키기에 충분했다.",
    "레미너스는 해진 울 소매 아래로 반지를 감추며 손가락에 은밀히 끼웠다. 그는 눈을 감고 손바닥을 꼭 쥔 채, 고서에서 외워둔 마법 주문을 나지막이 읊조렸다.",
    "“이그니스(Ignis).”",
    "탁 하는 소리와 함께, 그의 손가락 끝에서 자그마한 보랏빛 불꽃이 춤을 추었다. 온기도 없었고 벽을 태울 힘도 없었지만, 아카이브실의 어두운 그림자 속에서 그것은 마치 마법사가 탄생하는 순간처럼 보였다.",
    "레미너스는 미소를 지었다. 인생에서 처음으로 진흙밭을 벗어날 길을 찾아낸 순간이었다."
  ];

  storyParagraphs.forEach(p => {
    doc.fontSize(10).font('AppleGothic').fillColor('#2c241e').text(p, {
      align: 'justify',
      lineGap: 4,
      paragraphGap: 12
    });
  });

  doc.end();
  stream.on('finish', () => {
    console.log('Korean PDF compiled!');
  });
}

generateEN();
generateKO();
