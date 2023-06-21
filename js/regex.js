function check_hoten(hoten, errorHoten) {
    const regexHoten = /^[a-zA-Z]{2,}( [a-zA-Z]+)*$/
    let normalized_hoten = hoten.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, "d").replace(/Đ/g, "D")

    if (normalized_hoten.trim() == "") {
        errorHoten.innerText = "Please fill in this field"
        return false
    }
    if (!regexHoten.test(normalized_hoten)) {
        errorHoten.innerText = "The Fullname should consist of alphabetic characters only, may include spaces, and each word must have at least 2 characters or more"
        return false
    }

    errorHoten.innerText = "*"
    return true
}

function check_dienthoai(dienthoai, errorDT) {
    const regexDT = /^(03|05|07|08|09)\d{8}$/

    if (dienthoai.trim() == "") {
        errorDT.innerText = "Please fill in this field"
        return false
    }
    if (!regexDT.test(dienthoai)) {
        errorDT.innerText = "The phone number should consist of 10 digits, with valid prefixes being 03, 05, 07, 08, 09"
        return false
    }

    errorDT.innerText = "*"
    return true
}

function check_ngaynhantiec(ngayNhantiec, errorNgayNhanTiec) {
    if (ngayNhantiec == "") {
        errorNgayNhanTiec.innerText = "Please fill in this field"
        return false
    }


    const date = new Date()
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth() + 1
    const currentDay = date.getDate()

    const splitted_day = ngayNhantiec.split("-")
    const year_party = parseInt(splitted_day[0])
    const month_party = parseInt(splitted_day[1])
    const day_party = parseInt(splitted_day[2])

    if (year_party < currentYear || (year_party == currentYear && month_party < currentMonth) || (year_party == currentYear && month_party == currentMonth && day_party < currentDay)) {
        errorNgayNhanTiec.innerText = "The event date is invalid"
        return false
    }

    if (year_party == currentYear && month_party == currentMonth && day_party == currentDay) {
        errorNgayNhanTiec.innerText = "The event date should not be the same as today and can start from tomorrow onwards"
        return false
    }


    errorNgayNhanTiec.innerText = "*"
    return true
}

function check_gionhantiec(gioNhantiec, errorGioNhanTiec) {
    if (gioNhantiec == "") {
        errorGioNhanTiec.innerText = "Please fill in this field"
        return false
    }

    errorGioNhanTiec.innerText = "*"
    return true
}

function check_songuoi(soNguoi, errorSoNguoi) {
    const regexSonguoi = /^\d+$/

    if (soNguoi.trim() == "") {
        errorSoNguoi.innerText = "Please fill in this field"
        return false
    }
    if (!regexSonguoi.test(soNguoi)) {
        errorSoNguoi.innerText = "The number of attendees is a numerical value, ranging from 1 to 50 people"
        return false
    }
    if (eval(soNguoi) < 1 || eval(soNguoi) > 50) {
        errorSoNguoi.innerText = "The number of attendees for the event ranges from 1 to 50 people"
        return false
    }

    errorSoNguoi.innerText = "*"
    return true
}

function check_all_required_fields(hoten, errorHoten, dienthoai, errorDT, ngayNhantiec, errorNgayNhanTiec, gioNhantiec, errorGioNhanTiec, soNguoi, errorSoNguoi) {
    if (!check_hoten(hoten, errorHoten) || !check_dienthoai(dienthoai, errorDT) || !check_ngaynhantiec(ngayNhantiec, errorNgayNhanTiec) || !check_gionhantiec(gioNhantiec, errorGioNhanTiec) || !check_songuoi(soNguoi, errorSoNguoi)) {
        return false
    }

    return true
}

export default check_all_required_fields