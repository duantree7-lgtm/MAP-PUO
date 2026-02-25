/* ================= MAP SETUP ================= */
// Initialize map (PUO coordinates)
var map = L.map("map").setView([4.587135, 101.122063], 18);

// Base layers
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
  maxZoom: 19
}).addTo(map);

var satellite = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", 
  {
    attribution: "Tiles © Esri",
    maxZoom: 19
  }
);

// Toggle function
function toggleSatellite() {
  if (map.hasLayer(satellite)) {
    map.removeLayer(satellite);
    map.addLayer(osm); // back to normal
  } else {
    map.removeLayer(osm);
    map.addLayer(satellite); // switch to satellite
  }
}

function emojiIcon(emoji) {
  return L.divIcon({
    html: `<div style="font-size:27px; background-color: white; border: 2px solid #333; border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">${emoji}</div>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
}

/* ================= LOCATIONS JABATAN ================= */
var locations = [
  {
    name: "Jabatan Teknologi Maklumat Dan Komunikasi (JTMK)",
    coords: [4.587135, 101.122063],
    desc: "Department of Information Technology",
    image: "JTMK.jpg.jpeg",
    icon: emojiIcon("🎓"),
    details: `
    <h2>JTMK</h2>
    <img src="JTMK1.jpeg" width="50%">
    <img src="JTMK2.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) merupakan jabatan akademik 
    yang menawarkan program berkaitan Cyber Security, Networking, Software Development 
    dan teknologi digital terkini. Jabatan ini menyediakan kemudahan makmal komputer, 
    bilik kuliah, serta peralatan teknikal bagi menyokong pembelajaran secara teori dan praktikal.
    </p>
  `,
  },
  {
    name: "Jabatan Kejuruteraan Elektrik (JKE)",
    coords: [4.586385, 101.122262],
    desc: "Electrical Engineering Department",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JKE</h2>
    <img src="JKE1.jpeg" width="50%">
    <img src="JKE2.jpeg" width="50%">
      <img src="JKE3.jpeg" width="50%">
    <p>
      Jabatan Kejuruteraan Elektrik di Politeknik Ungku Omar (PUO) merupakan salah satu jabatan utama yang menawarkan pendidikan teknikal dan latihan kemahiran dalam bidang kejuruteraan elektrik dan elektronik. Jabatan ini komited dalam melahirkan graduan yang berpengetahuan, berkemahiran tinggi serta mampu memenuhi keperluan industri selaras dengan perkembangan teknologi masa kini.
    </p>
      `,
  },
  {
    name: "Jabatan Matematik, Sains & Komputer (JMSK) & Jabatan Kejuruteraan Mekanikal (JKM)",
    coords: [4.58812, 101.122659],
    desc: "Department of Mathematics, Science and Computer & Department of Mechanical Engineering",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JMSK & JKM</h2>
    <img src="JKM & JMSK1.jpeg" width="50%">
     <img src="JKM & JMSK2.jpeg" width="50%">
    <p>
     Jabatan Matematik, Sains dan Komputer (JMSK) di Politeknik Ungku Omar (PUO) merupakan jabatan sokongan akademik yang menyediakan asas pengetahuan dalam bidang matematik, sains, dan teknologi komputer kepada pelajar dari pelbagai program. Jabatan ini berperanan membina kefahaman kukuh dalam konsep asas yang penting bagi menyokong pembelajaran dalam bidang teknikal dan kejuruteraan.
    </p>
      `,
  },

  {
    name: "Jabatan Kejuruteraan Perkapalan (JKP)",
    coords: [4.587359, 101.123175],
    desc: "Department of Mechanical Engineering",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JKP</h2>
    <img src="JKP2.jpeg" width="50%">
    <img src="JKP1.jpeg" width="50%">
    <p>
      Jabatan Kejuruteraan Perkapalan (JKP) di Politeknik Ungku Omar (PUO) merupakan jabatan yang memberi tumpuan kepada bidang kejuruteraan berkaitan pembinaan, penyelenggaraan, dan teknologi kapal serta industri maritim. Jabatan ini berperanan melahirkan graduan yang berkemahiran teknikal, berpengetahuan, dan bersedia memenuhi keperluan sektor perkapalan yang semakin berkembang.
    </p>
      `,
  },

  {
    name: "Jabatan Kejuruteraan Mekanikal (Anomali)",
    coords: [4.588865, 101.125111],
    desc: "Department of Mechanical Engineering",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JKM</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Jabatan Kejuruteraan Mekanikal (JKM)",
    coords: [4.588865, 101.125111],
    desc: "Department of Mechanical Engineering",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JKM</h2>
    <img src="JKM1.jpeg" width="50%">
    <p>
     Jabatan Kejuruteraan Awam (JKA) di Politeknik Ungku Omar (PUO) merupakan jabatan yang memfokuskan kepada bidang pembinaan, infrastruktur, dan teknologi kejuruteraan awam. Jabatan ini berperanan melahirkan graduan yang berpengetahuan, berkemahiran teknikal, serta mampu memenuhi keperluan industri pembinaan dan pembangunan negara.
    </p>
      `,
  },

  {
    name: "Jabatan Perdagangan (JP)",
    coords: [4.59179, 101.123024],
    desc: "Department of Mechanical Engineering",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JP</h2>
    <img src="JP1.jpeg" width="60%">
    <p>
     Jabatan Perdagangan (JP) di Politeknik Ungku Omar (PUO) merupakan jabatan akademik yang memfokuskan kepada bidang perniagaan, pengurusan, perakaunan, dan keusahawanan. Jabatan ini berperanan melahirkan graduan yang berpengetahuan luas dalam aspek pengurusan organisasi serta memiliki kemahiran praktikal yang selari dengan keperluan industri dan dunia perniagaan semasa.
    </p>
      `,
  },

  {
    name: "Jabatan Pengajian Am (JPA)",
    coords: [4.59154, 101.122796],
    desc: "Department of Mechanical Engineering",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JPA</h2>
    <img src="JPA1.jpeg" width="50%">
    <p>
     Jabatan Pengajian Am (JPA) di Politeknik Ungku Omar (PUO) merupakan jabatan sokongan akademik yang berperanan memperkukuh pembangunan sahsiah, kemahiran komunikasi, serta nilai kemanusiaan dalam kalangan pelajar. Jabatan ini menyediakan kursus-kursus teras yang melengkapkan pelajar dengan pengetahuan asas selain daripada bidang pengkhususan masing-masing.
    </p>
      `,
  },

  {
    name: "Jabatan Kejuruteraan Awam (JKA)",
    coords: [4.588641, 101.125232],
    desc: "Department of Civil Engineering ",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JKA</h2>
    <img src="JKM1.jpeg" width="100%">
    <p>
     Jabatan Kejuruteraan Awam (JKA) di Politeknik Ungku Omar (PUO) merupakan jabatan yang memfokuskan kepada bidang pembinaan, infrastruktur, dan teknologi kejuruteraan awam. Jabatan ini berperanan melahirkan graduan yang berpengetahuan, berkemahiran teknikal, serta mampu memenuhi keperluan industri pembinaan dan pembangunan negara.
    </p>
      `,
  },

  /* ================= LOCATIONS HALL================= */
  {
    name: "Dewan Sri Kinta",
    coords: [4.590945, 101.123204],
    desc: "Sri Kinta Hall",
    image: "images/library.jpg",
    icon: emojiIcon("🏛️"),
    details: `
          <h2>Dewan Sri Kinta</h2>
    <img src="Dewan Sri Kinta.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Dewan Jubli Perak",
    coords: [4.587483, 101.123818],
    desc: "Perak Jubilee Hall",
    image: "images/library.jpg",
    icon: emojiIcon("🏛️"),
    details: `
          <h2>Dewan Jubli Perak</h2>
    <img src="Dewan Jubli Perak1.jpeg" width="50%">
    <img src="Dewan Jubli Perak2.jpeg" width="50%">
    <img src="Dewan Jubli Perak3.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Dewan Warisan",
    coords: [4.588031, 101.125199],
    desc: "Perak Jubilee Hall",
    image: "images/library.jpg",
    icon: emojiIcon("🏛️"),
    details: `
          <h2>Dewan Warisan</h2>
    <img src="Dewan Warisan1.jpeg" width="50%">
    <img src="Dewan Warisan2.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Perpustakaan PUO",
    coords: [4.587562, 101.124301],
    desc: "PUO Main Library",
    image: "images/library.jpg",
    icon: emojiIcon("📚"),
    details: `
          <h2>Perpustakaan PUO</h2>
    <img src="Perpustakaan PUO1.jpeg" width="50%">
      <img src="Perpustakaan PUO2.jpeg" width="50%">
      <img src="Perpustakaan PUO3.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Bangunan HEP",
    coords: [4.588114, 101.125714],
    desc: "PUO Main Library",
    image: "images/library.jpg",
    icon: emojiIcon("🏢"),
    details: `
          <h2>Bangunan HEP</h2>
    <img src="Bangunan HEP1.jpeg" width="50%">
    <img src="Bangunan HEP2.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Unit Kaunseling",
    coords: [4.591238, 101.122649],
    desc: "PUO Main Library",
    image: "images/library.jpg",
    icon: emojiIcon("🤝"),
    details: `
          <h2>Unit Kaunseling</h2>
    <img src="Unit Kaunseling1.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },
  {
    name: "Unit Zakat",
    coords: [4.591721, 101.122464],
    desc: "PUO Main Library",
    image: "images/library.jpg",
    icon: emojiIcon("💰"),
    details: `
          <h2>Unit Kaunseling</h2>
    <img src="Unit Kaunseling1.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },
  {
    name: "Tempat Parcel",
    coords: [4.59208, 101.122697],
    desc: "PUO Main Library",
    image: "images/library.jpg",
    icon: emojiIcon("📦"),
    details: `
          <h2>Unit Kaunseling</h2>
    <img src="Unit Kaunseling1.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /*tkde gambae*/
  {
    name: "Laundry Koperasi PUO",
    coords: [4.591745, 101.121903],
    desc: "PUO Main Library",
    image: "images/library.jpg",
    icon: emojiIcon("🎛️"),
    details: `
          <h2>Laundry Koperasi PUO</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Pejabat Pentadbiran",
    coords: [4.588414, 101.125293],
    desc: "PUO Main Library",
    image: "images/library.jpg",
    icon: emojiIcon("🏢"),
    details: `
          <h2>Pejabat Pentadbiran</h2>
    <img src="Pejabat Pentadbiran1.jpeg" width="50%">
    <img src="Pejabat Pentadbiran2.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Galeri PUO",
    coords: [4.587443, 101.124907],
    desc: "Gallery PUO",
    image: "images/library.jpg",
    icon: emojiIcon("🖼️"),
    details: `
          <h2>Galeri PUO</h2>
    <img src="Galeri PUO1.jpeg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Pusat Pelajar",
    coords: [4.587478, 101.125122],
    desc: "Student Centre",
    image: "images/library.jpg",
    icon: emojiIcon("👥"),
    details: `
          <h2>Student Centre</h2>
    <img src="Pusat Pelajar1.jpeg" width="50%">
    <img src="Pusat Pelajar2.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /* ================= LOCATIONS CAFE AND KOPERASI================= */
  {
    name: "Kafeteria JKE",
    coords: [4.586699, 101.122741],
    desc: "Student Cafeteria",
    image: "images/kafeteria.jpg",
    icon: emojiIcon("🍽️"),
    details: `
          <h2>Kafeteria JKE</h2>
    <img src="Kafeteria JKE1.jpeg" width="50%">
    <img src="Kafeteria JKE2.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Kafeteria A",
    coords: [4.587838, 101.124933],
    desc: "Student Cafeteria",
    image: "images/kafeteria.jpg",
    icon: emojiIcon("🍽️"),
    details: `
          <h2>Kafeteria A</h2>
    <img src="Kafeteria A1.jpeg" width="50%">
     <img src="Kafeteria A2.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Kafeteria Kamsis",
    coords: [4.590135, 101.12141],
    desc: "Student Cafeteria",
    image: "images/kafeteria.jpg",
    icon: emojiIcon("🍽️"),
    details: `
          <h2>Kafeteria Kamsis</h2>
    <img src="Kafeteria Kamsis1.jpg" width="50%">
     <img src="Kafeteria Kamsis2.jpg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /*Gambar tkde*/
  {
    name: "Kafeteria Kampus B",
    coords: [4.590892, 101.122618],
    desc: "Student Cafeteria",
    image: "images/kafeteria.jpg",
    icon: emojiIcon("🍽️"),
    details: `
          <h2>Kafeteria Kampus B</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /*tkde Gambar*/
  {
    name: "Koperasi Kamsis",
    coords: [4.590234, 101.121538],
    desc: "Student Cafeteria",
    image: "images/kafeteria.jpg",
    icon: emojiIcon("🛒"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /*tkde Gambar*/
  {
    name: "Koperasi A",
    coords: [4.588633, 101.123791],
    desc: "Koperasi",
    image: "images/kafeteria.jpg",
    icon: emojiIcon("🛒"),
    details: `
          <h2>Koperasi A</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /*tkde Gambar*/
  {
    name: "Jabatan Sukan, Ko-Kurikulum dan Kebudayaan",
    coords: [4.590051, 101.122772],
    desc: "Student Cafeteria",
    image: "images/kafeteria.jpg",
    icon: emojiIcon("🏆"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },
  {
    name: "Kelab Wataniah",
    coords: [4.589471, 101.123506],
    desc: "Student Cafeteria",
    image: "images/kafeteria.jpg",
    icon: emojiIcon("🏆"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /* ================= LOCATIONS SURAU================= */
  {
    name: "Surau Pusat Islam",
    coords: [4.588697, 101.126506],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🕌"),
    details: `
          <h2>Pusat Islam</h2>
    <img src="Pusat Islam1.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },
  {
    name: "Surau Kampus B",
    coords: [4.591827, 101.122653],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🕌"),
    details: `
          <h2>Pusat Islam</h2>
    <img src="Pusat Islam1.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Surau Wakaf",
    coords: [4.588599, 101.121673],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🕌"),
    details: `
          <h2>Surau Wakaf</h2>
    <img src="Surau Wakaf1.jpeg" width="50%">
     <img src="Surau Wakaf2.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /* ================= WORKSHOP================= */
  /*Tkde Gambar*/
  {
    name: "Bengkel Mekanikal",
    coords: [4.588045, 101.123856],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🛠️"),
    details: `
          <h2>Bengkel Mekanikal</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Bengkel Automotif",
    coords: [4.588587, 101.123223],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🛠️"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Bengkel Kenegaraan Malaysia (AKM)",
    coords: [4.588329, 101.122413],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🛠️"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Bengkel Senibina",
    coords: [4.591751, 101.12244],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🛠️"),
    details: `
          <h2>Bengkel Senibina</h2>
    <img src="Bengkel Seni Bina.jpeg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /* ================= KAMSIS================= */
  /* ================= KAMSIS LELAKI================= */
  /*Tkde Gambar*/
  {
    name: "Kamsis Mutiara PUO",
    coords: [4.59021, 101.121042],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🛌"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Kamsis Emas PUO",
    coords: [4.590577, 101.121339],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🛌"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Kamsis Berlian PUO",
    coords: [4.590954, 101.121626],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🛌"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /* ================= KAMSIS PEREMPUAN================= */

  /*Tkde Gambar*/
  {
    name: "Kamsis Delima PUO",
    coords: [4.589299, 101.121372],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🛌"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Kamsis Zamrud PUO",
    coords: [4.589665, 101.121074],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🛌"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /* ================= FIELDS ================= */
  {
    name: "Futsal Kampus A",
    coords: [4.588506, 101.124237],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("⚽"),
    details: `
          <h2>Futsal Kampus A</h2>
    <img src="Futsal Kampus A1.jpeg" width="50%">
     <img src="Futsal Kampus A2.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Taman Permainan",
    coords: [4.587661, 101.122321],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🛝"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Gelanggang Bola Jaring",
    coords: [4.590333, 101.122413],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🏀"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Gelanggang Bola Tampar",
    coords: [4.591366, 101.122777],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🏐"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Padang Hoki",
    coords: [4.591574, 101.122547],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🏑"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Gelanggang Bola Keranjang",
    coords: [4.591654, 101.122917],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🏀"),
    details: `
          <h2>JTMK</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /*Gambar Takde*/
  {
    name: "Futsal Kamsis",
    coords: [4.590061, 101.120589],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("⚽"),
    details: `
          <h2>Futsal Kamsis</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  {
    name: "Padang Kampus A",
    coords: [4.589425, 101.122842],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("⛳"),
    details: `
          <h2>Padang Kampus A</h2>
    <img src="Padang Kampus A.jpeg" width="50%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Padang Kampus B",
    coords: [4.590654, 101.123866],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("⛳"),
    details: `
          <h2>Padang Kampus B</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      Jabatan Teknologi Maklumat dan Komunikasi (JTMK) menawarkan
      program berkaitan Cyber Security, Networking dan Software.
    </p>
      `,
  },

  /* ================= BANGUNAN ================= */

  {
    name: "Bangunan Seni Bina",
    coords: [4.590992, 101.122477],
    desc: "Department of Civil Engineering ",
    image: "images/jke.jpg",
    icon: emojiIcon("🏢"),
    details: `
          <h2>JKM</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
     Bangunan Seni Bina di Politeknik Ungku Omar (PUO) merupakan fasiliti utama yang menempatkan Jabatan Seni Bina dan menyediakan ruang pembelajaran serta studio reka bentuk untuk pelajar. Bangunan ini direka khusus untuk menyokong aktiviti akademik, kreatif, dan praktikal dalam bidang seni bina dan reka bentuk dalaman.
    </p>
      `,
  },

  /* ================= OKU ================= */

  {
    name: "Bangunan Seni Bina",
    coords: [4.590992, 101.122477],
    desc: "Department of Civil Engineering ",
    image: "images/jke.jpg",
    icon: emojiIcon("🏢"),
    details: `
          <h2>JKM</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
     Bangunan Seni Bina di Politeknik Ungku Omar (PUO) merupakan fasiliti utama yang menempatkan Jabatan Seni Bina dan menyediakan ruang pembelajaran serta studio reka bentuk untuk pelajar. Bangunan ini direka khusus untuk menyokong aktiviti akademik, kreatif, dan praktikal dalam bidang seni bina dan reka bentuk dalaman.
    </p>
      `,
  },
  
   {
    name: "Tempat Parking OKU",
    coords: [4.588684, 101.125639],
    desc: "Parking Untuk OKU",
    image: "/haloo.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING</h2>
    <img src="haloo.jpeg" width="50%">
    <p>
     Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU). Sila hormati dan utamakan pengguna yang memerlukan.
      `,
  },
  {
    name: "Tempat Parking OKU",
    coords: [4.590856, 101.123355],
    desc: "Parking Untuk OKU",
    image: "/wooo.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING</h2>
    <img src="wooo.jpeg" width="100%">
    <p>
     Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU). Sila hormati dan utamakan pengguna yang memerlukan.
    </p>
      `,
  },
  {
    name: "Tempat Parking OKU",
    coords: [4.592003, 101.122783],
    desc: "Parking Untuk OKU",
    image: "images/jke.jpg",
    icon: emojiIcon("♿3"),
    details: `
          <h2>OKU PARKING</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
     Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU). Sila hormati dan utamakan pengguna yang memerlukan.
    </p>
      `,
  },
  {
    name: "Tempat Parking OKU",
    coords: [4.590369, 101.121494],
    desc: "Parking Untuk OKU",
    image: "images/jke.jpg",
    icon: emojiIcon("♿4"),
    details: `
          <h2>OKU PARKING</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
     Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU). Sila hormati dan utamakan pengguna yang memerlukan.
      `,
  },
   {
    name: "Tempat Parking OKU",
    coords: [4.590445, 101.121566],
    desc: "Parking Untuk OKU",
    image: "images/jke.jpg",
    icon: emojiIcon("♿5"),
    details: `
          <h2>OKU PARKING</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
     Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU). Sila hormati dan utamakan pengguna yang memerlukan.
    </p>
      `,
  },
  {
    name: "Tempat Parking OKU",
    coords: [4.587247, 101.122241],
    desc: "Parking Untuk OKU",
    image: "images/jke.jpg",
    icon: emojiIcon("♿6"),
    details: `
          <h2>OKU PARKING</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
     Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU). Sila hormati dan utamakan pengguna yang memerlukan.
      `,
  },
  {
    name: "Tempat Parking OKU",
    coords: [4.587247, 101.122241],
    desc: "Parking Untuk OKU",
    image: "/jtmk10.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING JTMK</h2>
    <img src="jtmk10.jpeg" width="100%">
    <p>
     Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU). Sila hormati dan utamakan pengguna yang memerlukan.
      `,
  },
  {
    name: "Tempat Parking OKU",
    coords: [4.58659, 101.122288],
    desc: "Parking Untuk OKU",
    image: "/jke10.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING JKE</h2>
    <img src="jke10.jpeg" width="100%">
    <p>
     Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU). Sila hormati dan utamakan pengguna yang memerlukan.
    </p>
      `,
  },
  {
    name: "Tempat Parking OKU",
    coords: [4.587786, 101.124495],
    desc: "Parking Untuk OKU",
    image: "/library4.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING LIBRARY</h2>
    <img src="library4.jpeg" width="100%">
    <p>
     Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU). Sila hormati dan utamakan pengguna yang memerlukan.
    </p>
      `,
  },
   {
    name: "Tempat Parking OKU",
    coords: [4.588017, 101.125078],
    desc: "Parking Untuk OKU",
    image: "/anjungprimer1.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING DATARAN PRIMER</h2>
    <img src="anjungprimer1.jpeg" width="100%">
    <p>
     Bangunan Seni Bina di Politeknik Ungku Omar (PUO) merupakan fasiliti utama yang menempatkan Jabatan Seni Bina dan menyediakan ruang pembelajaran serta studio reka bentuk untuk pelajar. Bangunan ini direka khusus untuk menyokong aktiviti akademik, kreatif, dan praktikal dalam bidang seni bina dan reka bentuk dalaman.
    </p>
      `,
  },
  {
    name: "Tempat Parking OKU",
    coords: [4.588975, 101.125905],
    desc: "Parking Untuk OKU",
    image: "/anjungprimer2.jpg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING ANJUNG PRIMER</h2>
    <img src="anjungprimer2.jpeg" width="100%">
    <p>
     Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU). Sila hormati dan utamakan pengguna yang memerlukan.
    </p>
      `,
  },
  {
    name: "Tempat Parking OKU JHEP",
    coords: [4.588057, 101.125459],
    desc: "Parking Untuk OKU",
    image: "/jhep1.jpg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING</h2>
    <img src="jhep1.jpeg" width="100%">
    <p>
     Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU). Sila hormati dan utamakan pengguna yang memerlukan.
      `,
  },
  {
    name: "Tempat Parking OKU JKP",
    coords: [4.58708, 101.12285],
    desc: "Parking Untuk OKU",
    image: "/JKP3.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING</h2>
    <img src="JKP3.jpeg" width="100%">
    <p>
     Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU). Sila hormati dan utamakan pengguna yang memerlukan.
      `,
  },
];

/* ================= GLOBAL ================= */
var userLocation = null;
var routingControl = null;

/* ================= MARKERS + DROPDOWN ================= */
var destinationSelect = document.getElementById("destination");

locations.forEach((loc, index) => {
  // marker (aku ubah belah sini
  L.marker(loc.coords, { icon: loc.icon }).addTo(map).bindPopup(`
    <strong>${loc.name}</strong><br>
    <a href="#" onclick="openDetails(${index})">
      View details 
    </a>
  `);

  // dropdown
  var option = document.createElement("option");
  option.value = index;
  option.textContent = loc.name;
  destinationSelect.appendChild(option);
});

/* ================= SEARCH ================= */
function searchLocation() {
  var searchBox = document.getElementById("searchBox");
  var suggestions = document.getElementById("suggestions");

  searchBox.addEventListener("input", function () {
    var keyword = this.value.toLowerCase();
    suggestions.innerHTML = "";

    if (keyword.length < 2) return;

    locations
      .filter((loc) => loc.name.toLowerCase().includes(keyword))
      .forEach((loc, index) => {
        var div = document.createElement("div");
        div.className = "suggestion-item";
        div.textContent = loc.name;

        div.onclick = function () {
          searchBox.value = loc.name;
          suggestions.innerHTML = "";
          map.setView(loc.coords, 18);
          openDetails(index);
        };

        suggestions.appendChild(div);
      });
  });

  searchBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      searchLocation();
      suggestions.innerHTML = "";
    }
  });
}

/* ================= OPEN DETAIL ================= */
function openDetails(index) {
  document.getElementById("detailContent").innerHTML = locations[index].details;
  document.getElementById("detailModal").style.display = "block";
}

function closeDetails() {
  document.getElementById("detailModal").style.display = "none";
}

/* ================= MY LOCATION ================= */
function getMyLocation() {
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      userLocation = [pos.coords.latitude, pos.coords.longitude];

      L.circleMarker(userLocation, {
        radius: 8,
        color: "blue",
        fillColor: "cyan",
        fillOpacity: 1,
      })
        .addTo(map)
        .bindPopup("📍 You are here")
        .openPopup();

      map.setView(userLocation, 19);
    },
    function (error) {
      let message = "Location permission denied";
      if (error.code === error.TIMEOUT) {
        message = "Location request timed out. Please try again.";
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        message = "Location information is unavailable.";
      } else if (error.code === error.PERMISSION_DENIED) {
        message = "Location permission denied.";
      }
      +alert(message);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 },
  );
}

/* ================= DIRECTION ================= */
function startDirection() {
  if (!userLocation) {
    alert("Click My Location first");
    return;
  }

  var index = document.getElementById("destination").value;
  if (index === "") {
    alert("Select destination");
    return;
  }

  if (routingControl) {
    map.removeControl(routingControl);
  }

  routingControl = L.Routing.control({
    waypoints: [L.latLng(userLocation), L.latLng(locations[index].coords)],
    routeWhileDragging: false,
    show: false,

    // 🔥 BUANG PIN BIRU
    createMarker: function () {
      return null;
    },
  }).addTo(map);
}
