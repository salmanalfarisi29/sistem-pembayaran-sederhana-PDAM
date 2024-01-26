document.addEventListener('DOMContentLoaded', function () {
    //define variabel
    const form = document.getElementById('pdamForm');
    const resultDiv = document.getElementById('result');
    const tarifResult = document.getElementById('tarifResult');
    const biayaResult = document.getElementById('biayaResult');
    const pajakResult = document.getElementById('pajakResult');
    const tagihanResult = document.getElementById('tagihanResult');
    const userNameResult = document.getElementById('userNameResult');
    const pemakaianInput = document.getElementById('pemakaian');

    // Menambahkan event listener untuk setiap perubahan nilai input pemakaian
    pemakaianInput.addEventListener('input', function () {
        let value = this.value.replace(/[^\d]/g, '');

        // Format sebagai ribuan dan masukkan kembali ke dalam input
        this.value = formatRibuan(value);

        // Validasi untuk memastikan nilai tidak 0
        // const numericValue = parseFloat(value);
        // if (numericValue === 0) {
        //     alert("Pemakaian tidak boleh 0. Silakan input nilai yang valid.");
        //     this.value = '';  // Kosongkan input jika nilainya 0
        // }

    });
    

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // get data dari formulir
        const nomor = document.getElementById('nomor').value;
        const nama = document.getElementById('nama').value;
        const alamat = document.getElementById('alamat').value;
        const pemakaian = parseFloat(pemakaianInput.value.replace(/[^\d]/g, ''));

        // Format sebagai ribuan dan masukkan kembali ke dalam input
        pemakaianInput.value = formatRibuan(pemakaian);
        
        const kode = parseFloat(document.getElementById('kode').value);

        // Validasi pemakaian tidak boleh 0
        if (pemakaian === 0) {
            alert("Pemakaian tidak boleh 0. Silakan input nilai yang valid.");
            return;  // Hentikan proses submit jika nilai pemakaian 0
        }

        //define
        let tarif, biaya, pajak, tagihan;

        switch (kode) {
            case 1:
                tarif = 1000.0;
                break;
            case 2:
                tarif = 2000.0;
                break;
            case 3:
                tarif = 2600.0;
                break;
            case 4:
                tarif = 3300.0;
                break;
            case 5:
                tarif = 2100.0;
                break;
            case 6:
                tarif = 1600.0;
                break;
            case 7:
                tarif = 3600.0;
                break;
            case 8:
                tarif = 4600.0;
                break;
            case 9:
                tarif = 6000.0;
                break;
            case 10:
                tarif = 3800.0;
                break;
            case 11:
                tarif = 2300.0;
                break;
            case 12:
                tarif = 6700.0;
                break;
            case 13:
                tarif = 7400.0;
                break;
            case 14:
                tarif = 9400.0;
                break;
            case 15:
                tarif = 6000.0;
                break;
            case 16:
                tarif = 5500.0;
                break;
            case 17:
                tarif = 8800.0;
                break;
            case 18:
                tarif = 10700.0;
                break;
            case 19:
                tarif = 12600.0;
                break;
            default:
                tarif = 0.0;
                break;
        }

        // hitung biaya
        biaya = pemakaian * tarif;

        // meteran
        const biayaMeteran = 5000.0;

        // hitung pajak dan tagihan
        pajak = 0.1 * (biaya + biayaMeteran);
        tagihan = biaya + biayaMeteran + pajak;

        // menampilkan hasil perhitungan dengan format mata uang Indonesia
        userNameResult.textContent = `Nama Pengguna: ${nama}`;
        tarifResult.textContent = `Tarif: Rp.${tarif.toLocaleString('id-ID')}m^3`;
        biayaResult.textContent = `Biaya: Rp.${biaya.toLocaleString('id-ID')}`;
        pajakResult.textContent = `Pajak: Rp.${pajak.toLocaleString('id-ID')}`;
        tagihanResult.textContent = `Total tagihan: Rp.${tagihan.toLocaleString('id-ID')}`;

        // Munculkan popup hasil tagihan
        openPopup();
    });
});

// Fungsi untuk membuka popup
function openPopup() {
    document.getElementById('popupContainer').style.display = 'flex';
}

// Fungsi untuk menutup popup
function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
}

// Fungsi untuk format ribuan
function formatRibuan(value) {
    return new Intl.NumberFormat('id-ID').format(value);
}

