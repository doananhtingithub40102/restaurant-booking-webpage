import check_all_required_fields from "./regex.js"

window.onload = function () {
    handleScroll()


    let myModal = document.getElementById("myModal")
    let modal_backdrop = document.getElementsByClassName("modal-backdrop")[0]
    let closeBtn = document.getElementsByClassName("close")[0]

    document.getElementById("book").onclick = function () {
        openModal(modal_backdrop, myModal)
    }

    document.getElementById("openForm").onclick = function () {
        openModal(modal_backdrop, myModal)
    }

    closeBtn.onclick = function () {
        closeModal(modal_backdrop, myModal)
    }

    window.onclick = function (e) {
        if (e.target == myModal) {
            closeModal(modal_backdrop, myModal)
        }
    }


    insertDataFromModalToTable(modal_backdrop, myModal)
}

function openModal(modal_backdrop, modal) {
    modal_backdrop.style = "display: block"
    modal.style = "display: block"

    document.body.style = "overflow:hidden"
}

function closeModal(modal_backdrop, modal) {
    modal_backdrop.style = "display: none"
    modal.style = "display: none"

    document.body.style = "overflow:''"
}

function insertDataFromModalToTable(modal_backdrop, modal) {
    let stt = 3

    document.getElementById("btnLuu").onclick = function () {
        let hoten = document.getElementById("txtHoten").value
        let errorHoten = document.getElementById("errorHoten")
        let dienthoai = document.getElementById("txtDT").value
        let errorDT = document.getElementById("errorDT")
        let ngayNhantiec = document.getElementById("txtNgayNhanTiec").value
        let errorNgayNhanTiec = document.getElementById("errorNgayNhanTiec")
        let gioNhantiec = document.getElementById("txtGioNhanTiec").value
        let errorGioNhanTiec = document.getElementById("errorGioNhanTiec")
        let soNguoi = document.getElementById("txtSoNguoi").value
        let errorSoNguoi = document.getElementById("errorSoNguoi")

        let default_loaiTiec = "Set Menu"
        let default_loaiPhong = "Vip"
        let thanhvien = ""
        let arrDichvu = []
        let dichvuDikem = ""
        let ghichu = document.getElementById("ghichu").value

        if (check_all_required_fields(hoten, errorHoten, dienthoai, errorDT, ngayNhantiec, errorNgayNhanTiec, gioNhantiec, errorGioNhanTiec, soNguoi, errorSoNguoi)) {
            alert("Your booking has been successfully booked!")

            // Close the modal when fields are valid
            closeModal(modal_backdrop, modal)

            // Add data from the form into the table
            if (document.getElementById("txtLoaiTiec").value == "buffet") {
                default_loaiTiec = "Buffet"
            } else if (document.getElementById("txtLoaiTiec").value == "fingerFood") {
                default_loaiTiec = "Finger Food"
            }

            if (document.getElementById("thuong").checked) {
                default_loaiPhong = "Normal"
            }

            if (document.getElementById("thanhvien").checked) {
                thanhvien = "Member"
            }

            if (document.getElementById("phucvuRieng").checked) {
                arrDichvu.push("Dedicated server")
            }
            if (document.getElementById("hoatuoi").checked) {
                arrDichvu.push("Fresh Flowers")
            }
            dichvuDikem = arrDichvu.join(", ")

            let row = "<tr><td>" + (++stt) + "</td><td>" + hoten + "</td><td>" + dienthoai + "</td><td>" + ngayNhantiec + "</td><td>" + gioNhantiec + "</td><td>" + soNguoi + "</td><td>" + default_loaiTiec + "</td><td>" + default_loaiPhong + "</td><td>" + thanhvien + "</td><td>" + dichvuDikem + "</td><td>" + ghichu + "</td></tr>"

            let tbody = document.getElementById("myTable").getElementsByTagName("tbody")[0]
            let newRow = tbody.insertRow()
            newRow.innerHTML = row

            // Scrolling the window to the element has the id "booking"
            let bookingDiv = document.getElementById("booking")
            window.scrollTo(0, bookingDiv.offsetTop - 50)

            // Scrolling the table's scrollbar to bottom
            let table_responsive = document.getElementsByClassName("table-responsive")[0]
            table_responsive.scrollTo(0, table_responsive.scrollHeight)
        }
    }
}

function handleScroll() {
    let menuLink = document.querySelector("a[href='#menu']")
    let menuDiv = document.getElementById("menu")
    let bookingLink = document.getElementById("dropdown")
    let bookingDiv = document.getElementById("booking")

    menuLink.onclick = function () {
        menuDiv.classList.add("pt-4")
    }
    bookingLink.onclick = function () {
        bookingDiv.classList.add("pt-5")
    }

    window.onscroll = function () {
        if (window.scrollY + 60 < menuDiv.offsetTop) {
            menuDiv.classList.remove("pt-4")
        }
        if (window.scrollY + 60 < bookingDiv.offsetTop) {
            bookingDiv.classList.remove("pt-5")
        }
    }
}