// ฟังก์ชันเพื่อรับวันที่ปัจจุบันในรูปแบบที่ต้องการ
function getCurrentDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // เดือนเริ่มจาก 0 จึงต้อง +1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// อัปเดตเฉพาะหัวข้อของกราฟสองกราฟที่ต้องการ
document.getElementById("gender-chart-title").textContent = 
    `กำลังคนของแผนก จำแนกตามเพศและประเภทพนักงาน ณ วันที่ ${getCurrentDate()}`;

document.getElementById("nationality-chart-title").textContent = 
    `กำลังคนจำแนกตามสัญชาติและเพศ ณ วันที่ ${getCurrentDate()}`;
