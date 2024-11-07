// ฟังก์ชันเพื่อรับวันที่ปัจจุบันในรูปแบบที่ต้องการ
function getCurrentDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // เดือนเริ่มจาก 0 จึงต้อง +1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// ฟังก์ชันเพื่อคำนวณวันที่สิ้นเดือนในรูปแบบ dd/mm/yyyy
function getEndOfMonth() {
    const date = new Date();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const day = String(lastDay.getDate()).padStart(2, '0');
    const month = String(lastDay.getMonth() + 1).padStart(2, '0'); // เดือนเริ่มจาก 0 จึงต้อง +1
    const year = lastDay.getFullYear();
    return `${day}/${month}/${year}`;
}

// ฟังก์ชันเพื่ออัปเดตหัวข้อกราฟด้วยช่วงเวลาและแสดงในบรรทัดใหม่
function updateChartTitle(elementId, mainText) {
    const dateRangeText = `ช่วงเวลา ณ วันที่ ${getCurrentDate()} - ${getEndOfMonth()}`;
    document.getElementById(elementId).innerHTML = `${mainText}<br><span class="date-range">${dateRangeText}</span>`;
}


// อัปเดตเฉพาะหัวข้อของกราฟสองกราฟที่ต้องการ พร้อม span สำหรับวันที่
document.getElementById("gender-chart-title").innerHTML = 
    `กำลังคนของแผนก จำแนกตามเพศและประเภทพนักงาน<span class="date">ณ วันที่ ${getCurrentDate()}</span>`;

document.getElementById("nationality-chart-title").innerHTML = 
    `กำลังคนจำแนกตามสัญชาติและเพศ<span class="date">ณ วันที่ ${getCurrentDate()}</span>`;


// อัปเดตหัวข้อของกราฟต่างๆ ด้วยฟังก์ชัน updateChartTitle
updateChartTitle("overall-employee-status-title", "เปรียบเทียบกำลังคนทั้งหมด, กำลังคนว่าง, และขอกำลังคน");
updateChartTitle("employee-request-process-title", "เปรียบเทียบการขอกำลังคน, จัดสรรกำลังคน, อนุมัติกำลังคน, และยืนยันเข้าทำงาน");
updateChartTitle("available-employee-comparison-title", "เปรียบเทียบกำลังคนว่าง, จัดสรรกำลังคน, และยืนยันเข้าทำงาน");
updateChartTitle("transferred-employee-title", "ข้อมูลกำลังคนที่โอนออกให้กับแผนกอื่น");
updateChartTitle("received-employee-title", "ข้อมูลกำลังคนที่ได้รับโอนจากแผนกอื่น");
updateChartTitle("transfer-cost-title", "ข้อมูลค่าใช้จ่ายที่ได้รับจากการโอนออกกำลังคนให้กับแผนกอื่น");
updateChartTitle("received-cost-title", "ข้อมูลค่าใช้จ่ายที่เกิดจากการรับโอนย้ายกำลังจากแผนกอื่น");