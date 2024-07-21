// eğerki parametre olarak aldığı değer tanımlıysa o değeri geri döndüren ama tanımsız ise "bilinmiyor"
//metni döndüren fonksiyon
const checkValid = (value) => {
    return !value ? "Bilinmiyor" : value;
};
export default checkValid;