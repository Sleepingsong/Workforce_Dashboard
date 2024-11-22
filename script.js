// ข้อมูลตัวอย่างที่ได้จาก Python สำหรับกราฟแท่งแบบแยก
const dataForEmployeeByGenderChart = {
    men: [100, 200],
    women: [120, 180],
    categories: ['รายวัน', 'รายเดือน']
};

// คำนวณผลรวมสำหรับแต่ละเพศ
const totalMen = dataForEmployeeByGenderChart.men.reduce((a, b) => a + b, 0); // ผลรวมของชาย = 300
const totalWomen = dataForEmployeeByGenderChart.women.reduce((a, b) => a + b, 0); // ผลรวมของหญิง = 300

const employeeByGenderOptions = {
    series: [
        {
            name: 'ชาย',
            data: [...dataForEmployeeByGenderChart.men, totalMen] // เพิ่มผลรวมของชายในท้ายสุด
        },
        {
            name: 'หญิง',
            data: [...dataForEmployeeByGenderChart.women, totalWomen] // เพิ่มผลรวมของหญิงในท้ายสุด
        }
    ],
    chart: {
        type: 'bar',
        height: 350,
        stacked: false // ตั้งค่า stacked เป็น false เพื่อแยกแท่งออกจากกัน
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%' // ตั้งค่า columnWidth ให้มีขนาดที่เหมาะสมสำหรับการแยกแท่ง
        },
    },
    xaxis: {
        categories: [...dataForEmployeeByGenderChart.categories, 'ผลรวม'], // เพิ่มหมวดหมู่ "ผลรวม" ใน categories
        title: {
            text: 'ประเภทพนักงาน'
        }
    },
    yaxis: {
        title: {
            text: 'กำลังคน'
        }
    },
    legend: {
        position: 'top'
    },
    fill: {
        opacity: 1
    },
    colors: ['#1F77B4', '#FF7F0E'] // สีสำหรับชายและหญิง
};

// ใช้ setTimeout เพื่อให้แน่ใจว่าทุกกราฟถูกโหลดได้ถูกต้อง
setTimeout(() => {
    document.querySelectorAll(".employeeByGenderChart").forEach(chartElement => {
        const employeeByGenderChart = new ApexCharts(chartElement, employeeByGenderOptions);
        employeeByGenderChart.render();
    });
}, 100);



// ข้อมูลตัวอย่างสำหรับกราฟ Column โดยมี 5 สัญชาติ
const dataForEmployeeByNationalityChart = {
    series: [
        {
            name: 'ชาย',
            data: [150, 80, 60, 50, 40] // จำนวนชายตามสัญชาติ ไทย, ลาว, พม่า, เขมร, เวียดนาม
        },
        {
            name: 'หญิง',
            data: [130, 90, 70, 60, 50] // จำนวนหญิงตามสัญชาติ ไทย, ลาว, พม่า, เขมร, เวียดนาม
        }
    ]
};

// คำนวณผลรวมของชายและหญิง
const totalMenSum = dataForEmployeeByNationalityChart.series[0].data.reduce((a, b) => a + b, 0);
const totalWomenSum = dataForEmployeeByNationalityChart.series[1].data.reduce((a, b) => a + b, 0);

const employeeByNationalityOptions = {
    series: [
        {
            name: 'ชาย',
            data: [...dataForEmployeeByNationalityChart.series[0].data, totalMenSum] // เพิ่มผลรวมของชายในท้ายสุด
        },
        {
            name: 'หญิง',
            data: [...dataForEmployeeByNationalityChart.series[1].data, totalWomenSum] // เพิ่มผลรวมของหญิงในท้ายสุด
        }
    ],
    chart: {
        type: 'bar',
        height: 350,
        stacked: false // ตั้งค่า stacked เป็น false เพื่อแยกแท่งออกจากกัน
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%' // กำหนดขนาดความกว้างของแท่งเพื่อให้มีระยะห่างที่เหมาะสม
        },
    },
    xaxis: {
        categories: ['ไทย', 'ลาว', 'พม่า', 'เขมร', 'เวียดนาม', 'ผลรวม'], // เพิ่ม "ผลรวม" ใน categories
        title: {
            text: 'สัญชาติ'
        }
    },
    yaxis: {
        title: {
            text: 'กำลังคน'
        }
    },
    legend: {
        show: true,
        position: 'top'
    },
    colors: ['#1F77B4', '#FF7F0E'] // สีสำหรับชายและหญิง
};

// ใช้ setTimeout เพื่อให้แน่ใจว่ากราฟ Employee By Nationality ถูกโหลดได้ถูกต้อง
setTimeout(() => {
    document.querySelectorAll(".employeeByNationalityChart").forEach(chartElement => {
        const employeeByNationalityChart = new ApexCharts(chartElement, employeeByNationalityOptions);
        employeeByNationalityChart.render();
    });
}, 100);


// ข้อมูลตัวอย่างสำหรับกราฟ Basic Column
const dataForOverallEmployeeStatusChart = {
    series: [{
        name: 'กำลังคนทั้งหมด',
        data: [300]
    }, {
        name: 'กำลังคนว่าง (Available)',
        data: [50]
    }, {
        name: 'ขอกำลังคน (Request)',
        data: [80]
    }],
    categories: ['กำลังคนทั้งหมด']
};

const overallEmployeeStatusOptions = {
    series: dataForOverallEmployeeStatusChart.series,
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            columnWidth: '55%'
        },
    },
    dataLabels: {
        enabled: true
    },
    xaxis: {
        categories: dataForOverallEmployeeStatusChart.categories,
        title: {
            text: 'ประเภทข้อมูลกำลังคน'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนกำลังคน'
        }
    },
    legend: {
        position: 'top'
    },
    colors: ['#051584', '#3EA8F4', '#FF0000'],  // น้ำเงิน, ฟ้า, แดง
};


// ใช้ setTimeout เพื่อให้แน่ใจว่ากราฟ Overall Employee Status ถูกโหลดได้ถูกต้อง
setTimeout(() => {
    document.querySelectorAll(".overallEmployeeStatusChart").forEach(chartElement => {
        const overallEmployeeStatusChart = new ApexCharts(chartElement, overallEmployeeStatusOptions);
        overallEmployeeStatusChart.render();
    });
}, 200);

// ข้อมูลตัวอย่างสำหรับกราฟ Basic Column เปรียบเทียบการขอกำลังคน
const dataForEmployeeRequestProcessChart = {
    series: [{
        name: 'ขอกำลังคน (Request)',
        data: [100]
    }, {
        name: 'จัดสรรกำลังคน',
        data: [80]
    }, {
        name: 'อนุมัติกำลังคน',
        data: [70]
    }, {
        name: 'ยืนยันเข้าทำงาน',
        data: [60]
    }],
    categories: ['กำลังคน']
};

const employeeRequestProcessOptions = {
    series: dataForEmployeeRequestProcessChart.series,
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            columnWidth: '55%'
        },
    },
    dataLabels: {
        enabled: true
    },
    xaxis: {
        categories: dataForEmployeeRequestProcessChart.categories,
        title: {
            text: 'ประเภทข้อมูลกำลังคน'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนกำลังคน'
        }
    },
    legend: {
        position: 'top'
    },
    colors: ['#FF0000', '#FFC000', '#00B050', '#7030A0'],  // แดง, เหลือง, เขียว, ม่วง
};

// ใช้ setTimeout เพื่อให้แน่ใจว่ากราฟ Employee Request Process ถูกโหลดได้ถูกต้อง
setTimeout(() => {
    document.querySelectorAll(".employeeRequestProcessChart").forEach(chartElement => {
        const employeeRequestProcessChart = new ApexCharts(chartElement, employeeRequestProcessOptions);
        employeeRequestProcessChart.render();
    });
}, 300);

// ข้อมูลตัวอย่างสำหรับกราฟ Basic Column เปรียบเทียบกำลังคนว่าง
const dataForAvailableEmployeeComparisonChart = {
    series: [{
        name: 'กำลังคนว่าง (Available)',
        data: [50]
    }, {
        name: 'จัดสรรกำลังคน',
        data: [40]
    }, {
        name: 'ยืนยันเข้าทำงาน',
        data: [30]
    }],
    categories: ['กำลังคน']
};

const availableEmployeeComparisonOptions = {
    series: dataForAvailableEmployeeComparisonChart.series,
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            columnWidth: '55%'
        },
    },
    dataLabels: {
        enabled: true
    },
    xaxis: {
        categories: dataForAvailableEmployeeComparisonChart.categories,
        title: {
            text: 'ประเภทข้อมูลกำลังคน'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนกำลังคน'
        }
    },
    legend: {
        position: 'top'
    },
    colors: ['#3EA8F4', '#FFC000', '#7030A0'],  // ฟ้า, เหลือง, ม่วง
};

setTimeout(() => {
    document.querySelectorAll(".availableEmployeeComparisonChart").forEach(chartElement => {
        const availableEmployeeComparisonChart = new ApexCharts(chartElement, availableEmployeeComparisonOptions);
        availableEmployeeComparisonChart.render();
    });
}, 100);

// ข้อมูลตัวอย่างสำหรับกราฟ Basic Column โอนกำลังคนออกให้กับแผนกอื่น
const dataForTransferredEmployeeChart = {
    series: [{
        name: 'กำลังคนที่โอนออก',
        data: [70, 55, 40, 65, 50]
    }],
    categories: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E']
};

const transferredEmployeeOptions = {
    series: dataForTransferredEmployeeChart.series,
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            columnWidth: '55%'
        },
    },
    dataLabels: {
        enabled: true
    },
    xaxis: {
        categories: dataForTransferredEmployeeChart.categories,
        title: {
            text: 'แผนกโอนออก'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนกำลังคน'
        }
    },
    legend: {
        position: 'top'
    },
    colors: ['#3EA8F4']
};

setTimeout(() => {
    document.querySelectorAll(".transferredEmployeeChart").forEach(chartElement => {
        const transferredEmployeeChart = new ApexCharts(chartElement, transferredEmployeeOptions);
        transferredEmployeeChart.render();
    });
}, 200);

// ข้อมูลตัวอย่างสำหรับกราฟ Basic Column แสดงข้อมูลกำลังคนที่ได้รับโอนจากแผนกอื่น
const dataForReceivedEmployeeChart = {
    series: [{
        name: 'กำลังคนที่ได้รับโอน',
        data: [90, 75, 60, 85, 70]
    }],
    categories: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E']
};

const receivedEmployeeOptions = {
    series: dataForReceivedEmployeeChart.series,
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            columnWidth: '55%'
        },
    },
    dataLabels: {
        enabled: true
    },
    xaxis: {
        categories: dataForReceivedEmployeeChart.categories,
        title: {
            text: 'แผนกรับโอน'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนกำลังคน'
        }
    },
    legend: {
        position: 'top'
    },
    colors: ['#ff0000']
};

setTimeout(() => {
    document.querySelectorAll(".receivedEmployeeChart").forEach(chartElement => {
        const receivedEmployeeChart = new ApexCharts(chartElement, receivedEmployeeOptions);
        receivedEmployeeChart.render();
    });
}, 300);

// ข้อมูลตัวอย่างสำหรับกราฟ Basic Column แสดงข้อมูลค่าใช้จ่ายที่ได้รับจากการโอนออกกำลังคนให้กับแผนกอื่น
const dataForTransferCostChart = {
    series: [
        {
            name: 'ค่าแรง',
            data: [10000, 8500, 7500, 9000, 8000]
        },
        {
            name: 'ค่าโอที',
            data: [2000, 1500, 1200, 1800, 1600]
        },
        {
            name: 'ค่าเบี้ยเลี้ยง',
            data: [1000, 800, 700, 900, 750]
        },
        {
            name: 'ค่าแรงรวม',
            data: [13000, 10800, 9400, 11700, 10350]
        }
    ],
    categories: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E']
};

const transferCostOptions = {
    series: dataForTransferCostChart.series,
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            columnWidth: '55%'
        },
    },
    dataLabels: {
        enabled: true
    },
    xaxis: {
        categories: dataForTransferCostChart.categories,
        title: {
            text: 'แผนกโอนออก'
        }
    },
    yaxis: {
        title: {
            text: 'ค่าแรง (บาท)'
        }
    },
    legend: {
        position: 'top'
    },
    colors: ['#1F77B4', '#FF0000', '#FFC000', '#00B050']  // ฟ้าเข้ม, แดง, เหลือง, เขียว
};

setTimeout(() => {
    document.querySelectorAll(".transferCostChart").forEach(chartElement => {
        const transferCostChart = new ApexCharts(chartElement, transferCostOptions);
        transferCostChart.render();
    });
}, 400);

// ข้อมูลตัวอย่างสำหรับกราฟ Basic Column แสดงข้อมูลค่าใช้จ่ายที่เกิดจากการรับโอนย้ายกำลังจากแผนกอื่น
const dataForReceivedCostChart = {
    series: [
        {
            name: 'ค่าแรง',
            data: [9500, 8000, 7200, 8700, 7800]
        },
        {
            name: 'ค่าโอที',
            data: [1800, 1400, 1000, 1700, 1500]
        },
        {
            name: 'ค่าเบี้ยเลี้ยง',
            data: [900, 700, 650, 850, 700]
        },
        {
            name: 'ค่าแรงรวม',
            data: [12200, 10100, 8850, 11250, 10000]
        }
    ],
    categories: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E']
};

const receivedCostOptions = {
    series: dataForReceivedCostChart.series,
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            columnWidth: '55%'
        },
    },
    dataLabels: {
        enabled: true
    },
    xaxis: {
        categories: dataForReceivedCostChart.categories,
        title: {
            text: 'แผนกรับโอน'
        }
    },
    yaxis: {
        title: {
            text: 'ค่าแรง (บาท)'
        }
    },

    legend: {
        position: 'top'
    },
    colors: ['#1F77B4', '#FF0000', '#FFC000', '#00B050']  // ฟ้าเข้ม, แดง, เหลือง, เขียว
};

setTimeout(() => {
    document.querySelectorAll(".receivedCostChart").forEach(chartElement => {
        const receivedCostChart = new ApexCharts(chartElement, receivedCostOptions);
        receivedCostChart.render();
    });
}, 500);

// ข้อมูลตัวอย่าง
const workforceGenderCompanyData = {
    series: [
        {
            name: 'ชาย',
            data: [120, 150, 100, 130, 140] // จำนวนพนักงานชายในแต่ละบริษัท
        },
        {
            name: 'หญิง',
            data: [110, 140, 90, 120, 135] // จำนวนพนักงานหญิงในแต่ละบริษัท
        }
    ],
    categories: ['บริษัท A', 'บริษัท B', 'บริษัท C', 'บริษัท D', 'บริษัท E'] // ชื่อบริษัท
};

// ตั้งค่ากราฟ
const workforceByGenderAndCompanyOptions = {
    chart: {
        type: 'bar', // ใช้กราฟแท่ง
        height: 400,
        stacked: false // เปลี่ยนเป็นกราฟแท่งแยก
    },
    series: workforceGenderCompanyData.series,
    xaxis: {
        categories: workforceGenderCompanyData.categories, // กำหนดแกน X
        title: {
            text: 'บริษัท'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนพนักงาน (คน)'
        }
    },
    legend: {
        position: 'top', // ย้าย Legend ไปด้านบน
        horizontalAlign: 'center'
    },
    colors: ['#1F77B4', '#FF7F0E'], // สีสำหรับชายและหญิง
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '40%' // ความกว้างของแท่ง
        }
    },
    tooltip: {
        shared: true,
        intersect: false,
    }
};

// เรนเดอร์กราฟ
setTimeout(() => {
    document.querySelectorAll(".WorkforceByGenderAndCompanyChart").forEach(chartElement => {
        const workforceByGenderAndCompanyChart = new ApexCharts(chartElement, workforceByGenderAndCompanyOptions);
        workforceByGenderAndCompanyChart.render();
    });
}, 100);


// ข้อมูลตัวอย่างสำหรับกราฟ Column
const dataForEmployeeTypeByGenderChart = {
    series: [
        {
            name: 'ชาย',
            data: [200, 150, 350] // จำนวนพนักงานชาย: รายวัน, รายเดือน, รวม
        },
        {
            name: 'หญิง',
            data: [180, 170, 350] // จำนวนพนักงานหญิง: รายวัน, รายเดือน, รวม
        }
    ]
};

// ตั้งค่ากราฟ
const employeeTypeByGenderOptions = {
    series: [
        {
            name: 'ชาย',
            data: dataForEmployeeTypeByGenderChart.series[0].data
        },
        {
            name: 'หญิง',
            data: dataForEmployeeTypeByGenderChart.series[1].data
        }
    ],
    chart: {
        type: 'bar',
        height: 350,
        stacked: false // ปิด stacked เพื่อแสดงแท่งแบบแยก
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%' // กำหนดความกว้างของแท่ง
        },
    },
    xaxis: {
        categories: ['รายวัน', 'รายเดือน', 'รวม'], // ประเภทพนักงาน
        title: {
            text: 'ประเภทพนักงาน'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนกำลังคน'
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'center'
    },
    colors: ['#1F77B4', '#FF7F0E'], // สีแท่งสำหรับชายและหญิง
};

// เรนเดอร์กราฟ
setTimeout(() => {
    document.querySelectorAll(".EmployeeTypeByGenderChart").forEach(chartElement => {
        const employeeTypeByGenderChart = new ApexCharts(chartElement, employeeTypeByGenderOptions);
        employeeTypeByGenderChart.render();
    });
}, 100);

// ข้อมูลตัวอย่าง
const dataForWorkforceComparisonChart = {
    series: [
        {
            name: 'กำลังคนทั้งหมด',
            data: [1000, 0, 0, 0] // จำนวนสำหรับแต่ละหมวดหมู่ (เฉพาะ "กำลังคนทั้งหมด")
        },
        {
            name: 'จัดสรรกำลังคน',
            data: [0, 800, 0, 0] // จำนวนสำหรับแต่ละหมวดหมู่ (เฉพาะ "กำลังคนที่ทำงาน")
        },
        {
            name: 'กำลังคนว่าง (Available)',
            data: [0, 0, 200, 0] // จำนวนสำหรับแต่ละหมวดหมู่ (เฉพาะ "กำลังคนว่าง")
        },
       
        {
            name: 'ขอกำลังคน (Request)',
            data: [0, 0, 0, 150] // จำนวนสำหรับแต่ละหมวดหมู่ (เฉพาะ "ขอกำลังคน")
        }
    ],
    categories: ['กำลังคนทั้งหมด', 'จัดสรรกำลังคน', 'กำลังคนว่าง', 'ขอกำลังคน']
};

// ตั้งค่ากราฟ
const workforceComparisonOptions = {
    chart: {
        type: 'bar',
        height: 400,
    },
    series: dataForWorkforceComparisonChart.series,
    xaxis: {
        categories: dataForWorkforceComparisonChart.categories, // กำหนดแกน X
        title: {
            text: 'ประเภทกำลังคน'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนกำลังคน (คน)'
        }
    },
    legend: {
        position: 'top', // ย้าย Legend ไปด้านบน
        horizontalAlign: 'center'
    },
    colors: ['#051584',  '#FFC000', '#3EA8F4', '#FF0000'], // สีสำหรับแต่ละประเภท
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%', // ความกว้างของแท่ง
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
    }
};

// เรนเดอร์กราฟ
setTimeout(() => {
    document.querySelectorAll(".WorkforceComparisonChart").forEach(chartElement => {
        const workforceComparisonChart = new ApexCharts(chartElement, workforceComparisonOptions);
        workforceComparisonChart.render();
    });
}, 100);

// ข้อมูลตัวอย่าง
const dataForCompanyWorkforceChart = {
    series: [
        {
            name: 'กำลังคนว่าง (Available)',
            data: [50, 40, 60, 70, 45] // จำนวนกำลังคนว่างของแต่ละบริษัท
        },
        {
            name: 'ขอกำลังคน (Request)',
            data: [30, 20, 50, 60, 35] // จำนวนขอกำลังคนของแต่ละบริษัท
        }
    ],
    categories: ['บริษัท A', 'บริษัท B', 'บริษัท C', 'บริษัท D', 'บริษัท E'] // ชื่อบริษัท
};

// ตั้งค่ากราฟ
const companyWorkforceOptions = {
    chart: {
        type: 'bar',
        height: 400,
        stacked: false // แสดงแท่งแยกกัน
    },
    series: dataForCompanyWorkforceChart.series,
    xaxis: {
        categories: dataForCompanyWorkforceChart.categories, // กำหนดแกน X
        title: {
            text: 'บริษัท'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนกำลังคน'
        }
    },
    legend: {
        position: 'top', // ย้าย Legend ไปด้านบน
        horizontalAlign: 'center'
    },
    colors: ['#3EA8F4', '#FF7F0E'], // สีสำหรับแต่ละประเภทข้อมูล
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%', // ความกว้างของแท่ง
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
    }
};

// เรนเดอร์กราฟ
setTimeout(() => {
    document.querySelectorAll(".CompanyWorkforceChart").forEach(chartElement => {
        const companyWorkforceChart = new ApexCharts(chartElement, companyWorkforceOptions);
        companyWorkforceChart.render();
    });
}, 100);

// // ข้อมูลตัวอย่าง
// const dataForTopDepartmentsChart = {
//     series: [
//         {
//             name: 'กำลังคนว่าง (Available)',
//             data: [120, 110, 100, 90, 85, 80, 75, 70, 65, 60] // จำนวนกำลังคนว่างของแต่ละแผนก
//         }
//     ],
//     categories: [
//         'แผนก A',
//         'แผนก B',
//         'แผนก C',
//         'แผนก D',
//         'แผนก E',
//         'แผนก F',
//         'แผนก G',
//         'แผนก H',
//         'แผนก I',
//         'แผนก J'
//     ] // ชื่อแผนก
// };

// // ตั้งค่ากราฟ
// const topDepartmentsAvailableOptions = {
//     chart: {
//         type: 'bar',
//         height: 400,
//     },
//     series: dataForTopDepartmentsChart.series,
//     xaxis: {
//         categories: dataForTopDepartmentsChart.categories, // กำหนดแกน X
//         title: {
//             text: 'แผนก'
//         }
//     },
//     yaxis: {
//         title: {
//             text: 'จำนวนกำลังคน (คน)'
//         }
//     },
//     legend: {
//         position: 'top', // ย้าย Legend ไปด้านบน
//         horizontalAlign: 'center'
//     },
//     colors: ['#3EA8F4'], // สีสำหรับกราฟกำลังคนว่าง
//     plotOptions: {
//         bar: {
//             horizontal: false,
//             columnWidth: '50%', // ความกว้างของแท่ง
//         },
//     },
//     tooltip: {
//         shared: true,
//         intersect: false,
//     }
// };

// // เรนเดอร์กราฟ
// setTimeout(() => {
//     document.querySelectorAll(".TopDepartmentsAvailableChart").forEach(chartElement => {
//         const topDepartmentsAvailableChart = new ApexCharts(chartElement, topDepartmentsAvailableOptions);
//         topDepartmentsAvailableChart.render();
//     });
// }, 100);

// // ข้อมูลตัวอย่าง
// const dataForTopDepartmentsRequestChart = {
//     series: [
//         {
//             name: 'ขอกำลังคน (Request)',
//             data: [140, 130, 120, 110, 100, 95, 90, 85, 80, 75] // จำนวนขอกำลังคนของแต่ละแผนก
//         }
//     ],
//     categories: [
//         'แผนก A',
//         'แผนก B',
//         'แผนก C',
//         'แผนก D',
//         'แผนก E',
//         'แผนก F',
//         'แผนก G',
//         'แผนก H',
//         'แผนก I',
//         'แผนก J'
//     ] // ชื่อแผนก
// };

// // ตั้งค่ากราฟ
// const topDepartmentsRequestOptions = {
//     chart: {
//         type: 'bar',
//         height: 400,
//     },
//     series: dataForTopDepartmentsRequestChart.series,
//     xaxis: {
//         categories: dataForTopDepartmentsRequestChart.categories, // กำหนดแกน X
//         title: {
//             text: 'แผนก'
//         }
//     },
//     yaxis: {
//         title: {
//             text: 'จำนวนกำลังคน (คน)'
//         }
//     },
//     legend: {
//         position: 'top', // ย้าย Legend ไปด้านบน
//         horizontalAlign: 'center'
//     },
//     colors: ['#FF7F0E'], // สีสำหรับกราฟการขอกำลังคน
//     plotOptions: {
//         bar: {
//             horizontal: false,
//             columnWidth: '50%', // ความกว้างของแท่ง
//         },
//     },
//     tooltip: {
//         shared: true,
//         intersect: false,
//     }
// };

// // เรนเดอร์กราฟ
// setTimeout(() => {
//     document.querySelectorAll(".TopDepartmentsRequestChart").forEach(chartElement => {
//         const topDepartmentsRequestChart = new ApexCharts(chartElement, topDepartmentsRequestOptions);
//         topDepartmentsRequestChart.render();
//     });
// }, 100);

// ข้อมูลตัวอย่าง
const dataForWorkforceProcessChart = {
    series: [
        {
            name: 'การขอกำลังคน (Request)',
            data: [150, 120, 130, 140, 110] // ข้อมูลการขอกำลังคนแต่ละบริษัท
        },
        {
            name: 'การจัดสรรกำลังคน (Assign)',
            data: [100, 90, 110, 120, 85] // ข้อมูลการจัดสรรกำลังคนแต่ละบริษัท
        },
        {
            name: 'การอนุมัติกำลังคน (Approve)',
            data: [90, 80, 100, 110, 70] // ข้อมูลการอนุมัติกำลังคนแต่ละบริษัท
        },
        {
            name: 'การยืนยันเข้าทำงาน (Confirm)',
            data: [85, 75, 95, 105, 65] // ข้อมูลการยืนยันเข้าทำงานแต่ละบริษัท
        }
    ],
    categories: ['บริษัท A', 'บริษัท B', 'บริษัท C', 'บริษัท D', 'บริษัท E'] // ชื่อบริษัท
};

// ตั้งค่ากราฟ
const workforceProcessOptions = {
    chart: {
        type: 'bar', // ใช้กราฟแท่ง
        height: 400,
        stacked: false, // ไม่ซ้อนกัน
    },
    series: dataForWorkforceProcessChart.series,
    xaxis: {
        categories: dataForWorkforceProcessChart.categories, // กำหนดแกน X
        title: {
            text: 'บริษัท'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนกำลังคน (คน)'
        }
    },
    legend: {
        position: 'top', // ย้าย Legend ไปด้านบน
        horizontalAlign: 'center'
    },
    colors: ['#FF0000', '#FFC000', '#00B050', '#7030A0'], // สีสำหรับแต่ละกระบวนการ
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%', // ความกว้างของแท่ง
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
    }
};

// เรนเดอร์กราฟ
setTimeout(() => {
    document.querySelectorAll(".WorkforceProcessByCompanyChart").forEach(chartElement => {
        const workforceProcessChart = new ApexCharts(chartElement, workforceProcessOptions);
        workforceProcessChart.render();
    });
}, 100);

// ข้อมูลตัวอย่าง
const dataForAvailableWorkforceChart = {
    series: [
        {
            name: 'กำลังคนว่าง (Available)',
            data: [50, 60, 40, 70, 55] // ข้อมูลกำลังคนว่างของแต่ละบริษัท
        },
        {
            name: 'การจัดสรรกำลังคน (Assign)',
            data: [40, 50, 35, 60, 50] // ข้อมูลการจัดสรรกำลังคนของแต่ละบริษัท
        },
        {
            name: 'การยืนยันเข้าทำงาน (Confirm)',
            data: [30, 45, 30, 50, 40] // ข้อมูลการยืนยันเข้าทำงานของแต่ละบริษัท
        }
    ],
    categories: ['บริษัท A', 'บริษัท B', 'บริษัท C', 'บริษัท D', 'บริษัท E'] // ชื่อบริษัท
};

// ตั้งค่ากราฟ
const availableWorkforceOptions = {
    chart: {
        type: 'bar', // ใช้กราฟแท่ง
        height: 400,
        stacked: false // ไม่ซ้อนแท่ง
    },
    series: dataForAvailableWorkforceChart.series,
    xaxis: {
        categories: dataForAvailableWorkforceChart.categories, // กำหนดแกน X
        title: {
            text: 'บริษัท'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนกำลังคน (คน)'
        }
    },
    legend: {
        position: 'top', // ย้าย Legend ไปด้านบน
        horizontalAlign: 'center'
    },
    colors: ['#3EA8F4', '#FFC000', '#00B050'], // สีสำหรับแต่ละกระบวนการ
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%', // ความกว้างของแท่ง
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
    }
};

// เรนเดอร์กราฟ
setTimeout(() => {
    document.querySelectorAll(".AvailableWorkforceByCompanyChart").forEach(chartElement => {
        const availableWorkforceChart = new ApexCharts(chartElement, availableWorkforceOptions);
        availableWorkforceChart.render();
    });
}, 100);

// ข้อมูลตัวอย่าง
const workforceTransferCostData = {
    series: [
        {
            name: 'ค่าแรง',
            data: [50000, 60000, 45000, 70000, 55000] // ค่าแรงของแต่ละแผนก
        },
        {
            name: 'ค่าโอที',
            data: [10000, 12000, 8000, 15000, 11000] // ค่าโอทีของแต่ละแผนก
        },
        {
            name: 'ค่าเบี้ยเลี้ยง',
            data: [5000, 7000, 3000, 9000, 6000] // ค่าเบี้ยเลี้ยงของแต่ละแผนก
        },
        {
            name: 'ค่าแรงรวม',
            data: [65000, 79000, 56000, 94000, 72000] // ค่าแรงรวมของแต่ละแผนก
        }
    ],
    categories: [
        'แผนก A',
        'แผนก B',
        'แผนก C',
        'แผนก D',
        'แผนก E'
    ] // ชื่อแผนกรับโอน
};

// ตั้งค่ากราฟ
const workforceTransferCostOptions = {
    chart: {
        type: 'bar', // ใช้กราฟแท่ง
        height: 400,
        stacked: false // เปลี่ยนเป็นกราฟแท่งแยก
    },
    series: workforceTransferCostData.series,
    xaxis: {
        categories: workforceTransferCostData.categories, // กำหนดแกน X
        title: {
            text: 'แผนกรับโอน'
        }
    },
    yaxis: {
        title: {
            text: 'ค่าแรง (บาท)'
        }
    },
    legend: {
        position: 'top', // ย้าย Legend ไปด้านบน
        horizontalAlign: 'center'
    },
    colors: ['#1F77B4', '#FF7F0E', '#FFC000', '#00B050'], // สีสำหรับแต่ละประเภทค่าแรง
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '40%' // ความกว้างของแท่ง
        }
    },
    tooltip: {
        shared: true,
        intersect: false,
    }
};

// เรนเดอร์กราฟ
setTimeout(() => {
    document.querySelectorAll(".WorkforceTransferCostChart").forEach(chartElement => {
        const workforceTransferCostChart = new ApexCharts(chartElement, workforceTransferCostOptions);
        workforceTransferCostChart.render();
    });
}, 100);




// ข้อมูลตัวหลัก
const mainData = {
    series: [
        {
            name: 'จำนวนพนักงาน',
            data: [300, 250, 200, 350, 280] // จำนวนพนักงานทั้งหมดในแต่ละบริษัท
        }
    ],
    categories: ['บริษัท A', 'บริษัท B', 'บริษัท C', 'บริษัท D', 'บริษัท E'] // ชื่อบริษัท
};

// ข้อมูลย่อย (แยกตามเพศและสัญชาติของแต่ละบริษัท)
const detailedData = {
    'บริษัท A': {
        categories: ['ไทย', 'ลาว', 'พม่า', 'เขมร', 'เวียดนาม', 'ผลรวม'], // หมวดหมู่ของสัญชาติ
        maleData: [50, 20, 15, 10, 5, 100], // ชายในแต่ละสัญชาติ และผลรวม
        femaleData: [40, 25, 20, 10, 5, 100] // หญิงในแต่ละสัญชาติ และผลรวม
    },
    'บริษัท B': {
        categories: ['ไทย', 'ลาว', 'พม่า', 'เขมร', 'เวียดนาม', 'ผลรวม'],
        maleData: [40, 15, 10, 8, 7, 80],
        femaleData: [35, 20, 15, 10, 5, 85]
    },
    'บริษัท C': {
        categories: ['ไทย', 'ลาว', 'พม่า', 'เขมร', 'เวียดนาม', 'ผลรวม'],
        maleData: [30, 20, 10, 5, 5, 70],
        femaleData: [25, 15, 10, 5, 5, 60]
    },
    'บริษัท D': {
        categories: ['ไทย', 'ลาว', 'พม่า', 'เขมร', 'เวียดนาม', 'ผลรวม'],
        maleData: [70, 25, 20, 15, 10, 140],
        femaleData: [60, 30, 20, 10, 10, 130]
    },
    'บริษัท E': {
        categories: ['ไทย', 'ลาว', 'พม่า', 'เขมร', 'เวียดนาม', 'ผลรวม'],
        maleData: [50, 20, 15, 10, 5, 100],
        femaleData: [45, 25, 15, 10, 5, 100]
    }
};

// ตั้งค่ากราฟหลัก
const mainChartOptions = {
    chart: {
        type: 'bar',
        height: 400,
        events: {
            dataPointSelection: function (event, chartContext, config) {
                const companyName = mainData.categories[config.dataPointIndex];
                toggleDetailedChart(companyName);
            }
        }
    },
    series: mainData.series,
    xaxis: {
        categories: mainData.categories,
        title: {
            text: 'บริษัท'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนพนักงาน (คน)'
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'center'
    },
    colors: ['#3EA8F4'],
    plotOptions: {
        bar: {
            horizontal: true, // กราฟหลักเป็นแนวนอน
            barHeight: '50%' // ความสูงของแท่ง
        }
    },
    tooltip: {
        shared: true,
        intersect: false,
    }
};

// ฟังก์ชันแสดง/ซ่อนกราฟย่อยพร้อมข้อมูลที่แยกตามเพศและสัญชาติ
function toggleDetailedChart(companyName) {
    const detailedContainer = document.querySelector('.WorkforceDetailedChart');
    const detailedChartElement = document.querySelector('#detailed-chart');

    // ถ้ากราฟย่อยกำลังแสดงสำหรับบริษัทที่คลิก ให้ซ่อน
    if (detailedContainer.classList.contains('active') && detailedContainer.getAttribute('data-company') === companyName) {
        detailedContainer.classList.remove('active');
        detailedContainer.setAttribute('data-company', '');
    } else {
        // แสดงกราฟย่อยใหม่
        detailedContainer.classList.add('active');
        detailedContainer.setAttribute('data-company', companyName);
        document.getElementById('detailed-title').innerText = `ข้อมูลกำลังคนแยกตามสัญชาติและเพศ (${companyName})`;

        // ลบกราฟเก่าถ้ามี
        detailedChartElement.innerHTML = '';

        const detail = detailedData[companyName];
        const detailedChart = new ApexCharts(detailedChartElement, {
            chart: {
                type: 'bar',
                height: 300
            },
            series: [
                {
                    name: 'ชาย',
                    data: detail.maleData // ข้อมูลชายในแต่ละสัญชาติ
                },
                {
                    name: 'หญิง',
                    data: detail.femaleData // ข้อมูลหญิงในแต่ละสัญชาติ
                }
            ],
            xaxis: {
                categories: detail.categories, // สัญชาติ
                title: {
                    text: 'สัญชาติ'
                }
            },
            colors: ['#1F77B4', '#FF7F0E'], // สีสำหรับชายและหญิง
            legend: {
                position: 'top',
                horizontalAlign: 'center'
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '40%' // ขนาดความกว้างของแท่ง
                }
            }
        });

        detailedChart.render();
    }
}

// สร้างกราฟหลัก
const mainChart = new ApexCharts(document.querySelector(".WorkforceExpandableChart"), mainChartOptions);
mainChart.render();
