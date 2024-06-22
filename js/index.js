
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
    "perkedel jagung",
    "bakwan jagung",
    "martabak manis",
    "tempe raksasa",
    "sirkuit mandalika",
    "kuntilanak merah",
    "ubur ubur sunda", "kuyang batu bara",
    "kobo kkb", "pisang goreng", "mangga muda", "salak", "singkong rebus",
    "Jerapah Blogger",
    'Ayam Berkutut', 'Lumba-Lumba Demak', 'Bohlam Lampu', 'Buaya Nigeria', 'Naga Bearbend', 'Pohon Palem','Penyu Isriwil', 'Perkakas Kopling', 'Landak Trenggalek', "mangga tetangga", "Rambutan", "Kucing jawa", "kakek zeus", 'Ultraman Orb'
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
    