
        document.getElementById('checkButton').addEventListener('click', function() {
            const name = document.getElementById('nameInput').value;
            if (!name) {
                document.getElementById('result').textContent = 'Silakan masukkan nama Anda.';
                return;
            }
            else{
            ////kodam
            const khodams = [
    "Lumba-lumba Jawa",
    "Muklis PTBEST",
    "Kepiting Merah Alaska",
    "Laba-laba Wonogiri",
    "Kudanil Drible",
    "Bekicot Ninja",
    "Jerapah Akrobatik",
    "Singa Jogja",
    "Buaya Pengacara",
    "perkedel jagung",
    "bakwan jagung",
    "martabak manis",
    "tempe raksasa",
    "Iguana Rocker",
    "Kucing Samurai",
    "Burung Merpati Matematika",
    "Katak Penyair",
    "Harimau Sumatera",
  
  
    "Kelelawar DJ",
    "Kelinci Astronaut",
    "Sapi Detektif",
    "Anjing Polisi",
    "Bebek Insinyur",
    "Kambing Kungfu",
    
    "Zebra Pelukis",
    "Belut Elektrik",
    "Ular Hipnotis",
    "Burung Hantu Filosof",
    "Badak Petinju",
    "Flamingo Penari Balet",
    "Kura-kura Samurai",
    "Babi Penjaga Gawang",
    "Domba Hacker",
    "Angsa Pustakawan",

    "Panda Chef",
    "Elang Sniper",
    "Tikus Ilmuwan",
    "Ikan Paus Detektif",
    "Serigala Matematikawan",
    "Landak Arsitek",
    "Burung Unta Sprinter",
    "Hiu Penyelam",
    "Kuda Api",
    "Kukang Penjaga",
    "Bunglon Aktor",

    "Capung Teknisi",
  
    "Cendrawasih Desainer",
    "Kakatua Motivator",
    "Kakaktua Guru",
    "Walrus Petani",
    "Penguin Fotografer",

    "Cheetah Pelari",

    "Lebah Astronaut",
  
    
    "Kuda Penari",
    "Merpati Postman",
    "Monyet Pianis",
    "Kancil Sprinter",
    "Harimau Pencari Jejak",
    "Gajah Penyelidik",
    "Anoa Samurai",
    "Domba Berbakat",
    "Buaya Penyelam",
    "Kucing Pesulap",
    "Cacing Hacker",
    "Kelelawar Vokalis",
    
  
    "Tarantula Blogger",
    "Katak DJ",
    "Landak Dokter",
    "Sapi Balerina",
    "Kalajengking Bartender",

    
    "Paus Blogger",
  
    "Monyet Detektif",
    "Lumba-lumba Ilmuwan",
    
    "Ular Programmer",
    
    "Kucing Pesilat",
    "Ikan Cupang Samurai",
    "Srigala Hacker",
    "ubur ubur sunda",
    "kobo kkb",
    "Jerapah Blogger",
    'Ayam Berkutut', 'Lumba-Lumba Demak', 'Bohlam Lampu', 'Buaya Nigeria', 'Naga Bearbend', 'Pohon Palem','Penyu Isriwil', 'Perkakas Kopling', 'Landak Trenggalek', 'Ultraman Orb'
];
            const randomIndex = Math.floor(Math.random() * khodams.length);
            const khodamTerdeteksi = khodams[randomIndex];
           ///text kodam
            const pesan = [
                `Ya, ${name}, di dalam dirimu ada khodam ${khodamTerdeteksi}.`,
                
                `Khodam ${khodamTerdeteksi} sedang bersemayam di dalam dirimu, ${name}.`,
                `Kamu bersih dari khodam, ${name}.`,
                `Khodam ${khodamTerdeteksi} berada di dalam dirimu, ${name}, jaga baik-baik!`,
                `Tidak dapat mendeteksi khodam di dalam dirimu, ${name}. Coba lagi.`,
                `terdapat kodam ${khodamTerdeteksi}, yang sedang tidur dalam dirimu ${name}`
            ];
            const randomPesanIndex = Math.floor(Math.random() * pesan.length);
            const hasilTeks = pesan[randomPesanIndex];

            document.getElementById('result').textContent = hasilTeks;
              
            }
        });
    