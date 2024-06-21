
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
    "Tarantula Blogger",
    "Katak DJ",
    "Landak Dokter",
    "Sapi Balerina",
    "Kalajengking Bartender",
    "Srigala Hacker",
    "ubur ubur sunda",
    "kobo kkb",
    "Jerapah Blogger",
    'Ayam Berkutut', 'Lumba-Lumba Demak', 'Bohlam Lampu', 'Buaya Nigeria', 'Naga Bearbend', 'Pohon Palem','Penyu Isriwil', 'Perkakas Kopling', 'Landak Trenggalek', 'Ultraman Orb'
];
            const randomIndex = Math.floor(Math.random() * khodams.length);
            const namaKodam = khodams[randomIndex];
           ///text kodam
            const pesan = [
                `${name}, di dalam dirimu ada khodam ${namaKodam}.`,
                
                `Khodam ${namaKodam} sedang bersemayam di dalam dirimu, ${name}.`,
                `Kamu bersih dari khodam, ${name}.`,
                `Khodam ${namaKodam} berada di dalam dirimu ${name}, jaga baik-baik!`,
                `Tidak dapat mendeteksi khodam di dalam dirimu, ${name}. Coba lagi.`,
                `terdapat kodam ${namaKodam}, yang sedang tidur dalam dirimu ${name}`
            ];
            const randomPesanIndex = Math.floor(Math.random() * pesan.length);
            const hasilTeks = pesan[randomPesanIndex];

            document.getElementById('result').textContent = hasilTeks;
              
            }
        });
    