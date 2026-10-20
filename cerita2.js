// MIDNIGHT LAB.. - cerita tambahan (dimuat setelah cerita.js)
// 1) CAUGHT_KALLA / CAUGHT_ONI : cutscene saat tertangkap, berbeda untuk tiap hantu (dipakai fitur.js lewat caughtScript)
// 2) END_JELEK    : ending jelek "Bayangan di Spion" (lolos tapi hampir gagal: salah banyak)
// 3) END_RAHASIA  : ending rahasia "Penjaga Lab" (semua benar, tidak pernah bersembunyi)
// Ending jelek dan rahasia memakai panggung 3D: 'jalan', 'rumah', 'tidur' (dengan mata di jendela) dan 'ambang' (ambang pintu lab) dari cutscene_akhir.js. Kalau 3D gagal, otomatis kembali ke gambar (sv).
// Format sama seperti OPEN/CALL/END di cerita.js. Adegan tanpa 'stage' memakai gambar SVG (sv) sebagai latar.

const CAUGHT_KALLA=[
{snd:'hantu.mp3',sv:'hukuman',fx:'shake',e:'🩸',t:'',bg:['#4a0d0d','#0a0202'],x:'Langkah itu berhenti tepat di belakang Wandih. Lampu neon padam satu per satu.'},
{snd:'',sv:'hukuman',e:'🩸',t:'',bg:['#4a0d0d','#0a0202'],x:'Sebuah tangan dingin mencengkeram bahunya. El Kalla tidak berteriak dan tidak mengejar. Ia hanya menunggu Wandih berhenti berlari.'},
{snd:'',sv:'lab',e:'👁️',t:'',bg:['#3a0a0a','#080101'],x:'Wandih diseret menjauh dari meja komputer, melewati lorong yang terasa makin panjang. Mata merah El Kalla tidak pernah berkedip.'},
{snd:'kunci.mp3',sv:'hukuman',fx:'flash',e:'🔒',t:'',bg:['#4a0d0d','#0a0202'],x:'Pintu lab menutup dari dalam. Terakhir terdengar suara kunci diputar pelan, persis seperti suara kunci guru tadi sore.'},
{snd:'',sv:'hukuman',e:'📄',t:'',bg:['#2a0606','#050000'],x:'Wandih hilang di balik gelap. Di atas meja, selembar soal masih menunggu untuk dijawab.',ok:true}];

const CAUGHT_ONI=[
{snd:'oni.mp3',sv:'teman',fx:'flash',e:'🌫️',t:'',bg:['#10204a','#02040d'],x:'Udara mendadak dingin. Layar-layar komputer menyala sendiri, satu per satu, menampilkan wajah yang sama: Oni.'},
{snd:'',sv:'teman',e:'🌫️',t:'',bg:['#10204a','#02040d'],x:'Oni tidak menyentuh Wandih. Ia hanya berdiri di depan layar dan berbisik, lalu kaki Wandih berhenti bergerak dengan sendirinya.'},
{snd:'',sv:'lab',e:'👂',t:'',bg:['#0c1838','#01030a'],x:'Bisikan itu mengulang pilihan jawaban Wandih satu per satu, yang benar dan yang salah, tanpa terlewat satu pun.'},
{snd:'',sv:'teman',fx:'shake',e:'🖥️',t:'',bg:['#10204a','#02040d'],x:'Cahaya layar memudar. Wandih ikut padam bersama monitor terakhir. Hanya bayangannya yang masih tampak di kaca.'},
{snd:'',sv:'lab',e:'📄',t:'',bg:['#081028','#010206'],x:'Tidak ada yang tersisa selain dengung kipas komputer dan selembar soal yang belum selesai.',ok:true}];

// g = 0 (El Kalla) atau 1 (Oni); wrongFail = tertangkap karena salah jawab melewati batas
function caughtScript(g,wrongFail){
 const src=g?CAUGHT_ONI:CAUGHT_KALLA,a=src.map(s=>Object.assign({},s));
 if(wrongFail)a[0].x=g?'Terlalu banyak jawaban salah. Layar-layar komputer menyala sendiri, seolah menghitung setiap kesalahan Wandih.'
  :'Terlalu banyak jawaban salah. Lembar-lembar soal itu seperti memanggil sesuatu dari sudut gelap lab.';
 return a}

const END_JELEK=[
{snd:'',stage:'jalan',cam:'belakang',amb:['night.mp3',CUT_SND.motor],sv:'pintu',e:'🪞',t:'',bg:['#0a0a14','#000000'],x:'Wandih melirik spion Vespa-nya. Jalan hutan di belakang tampak kosong, hanya gelap yang pekat. Ia menarik napas lega.'},
{snd:'',stage:'jalan',cam:'sorot',pan:true,hantu:'O',hdelay:.6,amb:['night.mp3',CUT_SND.motor],sv:'pintu',e:'🔴',t:'',bg:['#1a0505','#000000'],x:'Lalu, di tepi jalan, dua titik merah menyala sekilas dan hilang. Sebentar kemudian titik itu muncul lagi di spion, ikut bergerak dan menjaga jarak yang sama di belakang motornya.'},
{snd:'hantu.mp3',stage:'jalan',cam:'depan',pan:true,jok:'K',fx:'shake',amb:['night.mp3',CUT_SND.motor],sv:'pintu',e:'👁️',t:'',bg:['#3a0a0a','#080101'],x:'Wandih menoleh cepat. Jalan di belakangnya kosong. Tetapi saat ia kembali menatap spion, sosok itu sudah duduk di jok belakang, tepat di belakang pundaknya.'},
{snd:'',stage:'rumah',cam:'lebar',amb:['night.mp3'],sv:'rumah',e:'🏠',t:'',bg:['#1f2a4a','#05070f'],x:'Entah bagaimana, Wandih sampai di rumah. Ia memarkir Vespa-nya tanpa berani menoleh ke belakang, lalu bergegas masuk dan mengunci pintu dua kali.'},
{snd:'',stage:'tidur',cam:'samping',amb:['night.mp3'],sv:'rumah',e:'🛏️',t:'',bg:['#1f2a4a','#05070f'],x:'Lampu dimatikan. Wandih menarik selimut sampai ke dagu dan mencoba percaya bahwa semuanya sudah selesai.'},
{snd:'hantu.mp3',stage:'tidur',cam:'jendela',pan:true,mata:true,fx:'flash',amb:['night.mp3'],sv:'rumah',e:'🪟',t:'',bg:['#050510','#000000'],x:'Di kaca jendela kamar, dua pasang mata menatap dari luar, satu merah dan satu biru pucat. El Kalla dan Oni tidak butuh pintu. Mereka hanya menunggu Wandih lengah.'},
{snd:'',stage:'tidur',cam:'jendela',mata:true,amb:['night.mp3'],sv:'rumah',e:'📝',t:'',bg:['#2f2f1a','#0a0a05'],x:'ENDING JELEK: BAYANGAN DI SPION. Soal yang dijawab salah ikut pulang bersamamu. Pelajari lagi materinya, lalu coba dengan lebih sedikit kesalahan.',ok:true}];

const END_RAHASIA=[
{snd:'',stage:'ambang',cam:'pintu',gm:'kosong',anim:{WANDIH:'diam'},sv:'pintu',e:'🚪',t:'',bg:['#16301f','#030a05'],x:'Pintu lab terbuka. Tidak ada satu pun jawaban yang salah, dan Wandih tidak pernah bersembunyi sekali pun.'},
{snd:'',stage:'ambang',cam:'pintu',gm:'tampil',fx:'shake',anim:{WANDIH:'kaget'},sv:'lab',e:'👁️',t:'',bg:['#050510','#000000'],x:'Di ambang pintu, El Kalla dan Oni berdiri menghalangi jalan. Wandih membeku. Tapi kali ini mereka tidak mengejar.'},
{snd:'hantu.mp3',stage:'ambang',cam:'dekat',pan:true,gm:'tampil',who:'KALLA',anim:{WANDIH:'tunduk'},sv:'lab',e:'🩸',t:'EL KALLA',bg:['#3a0a0a','#080101'],x:'“Bertahun-tahun, tidak ada yang menyelesaikan semua soal tanpa salah dan tanpa lari bersembunyi.”'},
{snd:'oni.mp3',stage:'ambang',cam:'wandih',pan:true,gm:'maju',who:'ONI',anim:{WANDIH:'diam'},sv:'teman',e:'🌫️',t:'ONI',bg:['#10204a','#02040d'],x:'“Dulu kami juga siswa yang dikunci di lab ini. Kami menunggu seseorang yang benar-benar mau belajar.”'},
{snd:'',stage:'ambang',cam:'dekat',pan:true,gm:'kertas',anim:{WANDIH:'diam'},sv:'pintu',e:'📄',t:'',bg:['#16301f','#030a05'],x:'El Kalla menyerahkan secarik kertas bertuliskan nilai 100. Oni tersenyum untuk pertama kalinya, lalu keduanya memudar bersama cahaya lampu.'},
{snd:'',stage:'ambang',cam:'lebar',pan:true,gm:'pudar',anim:{WANDIH:'diam'},sv:'rumah',e:'🏆',t:'',bg:['#1f2a4a','#05070f'],x:'Keesokan harinya, nama Wandih tidak lagi di urutan paling bawah. Setiap malam, lampu lab menyala sendiri: dua penjaga kini punya satu murid terbaik.'},
{snd:'',stage:'ambang',cam:'pintu',pan:true,gm:'pudar',anim:{WANDIH:'diam'},sv:'rumah',e:'🌟',t:'',bg:['#1f2a4a','#05070f'],x:'ENDING RAHASIA: PENJAGA LAB. Semua soal benar tanpa pernah bersembunyi. Luar biasa!',ok:true}];
