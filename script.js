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
    colors: ['#008FFB', '#FEB019'] // สีสำหรับชายและหญิง
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
    colors: ['#008FFB', '#FEB019'] // สีสำหรับชายและหญิง
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
    colors: ['#0000FF', '#44b8ff', '#FF0000'],  // น้ำเงิน, ฟ้า, แดง
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
    colors: ['#FF0000', '#FFD700', '#008000', '#800080'],  // แดง, เหลือง, เขียว, ม่วง
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
    colors: ['#44b8ff', '#FFD700', '#800080'],  // ฟ้า, เหลือง, ม่วง
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
    colors: ['#44b8ff']
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
            text: 'แผนกโอนออกกำลังคน'
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
    colors: ['#00008B', '#FF0000', '#FFD700', '#008000']  // ฟ้าเข้ม, แดง, เหลือง, เขียว
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
            text: 'แผนกโอนออกกำลังคน'
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
    colors: ['#00008B', '#FF0000', '#FFD700', '#008000']  // ฟ้าเข้ม, แดง, เหลือง, เขียว
};

setTimeout(() => {
    document.querySelectorAll(".receivedCostChart").forEach(chartElement => {
        const receivedCostChart = new ApexCharts(chartElement, receivedCostOptions);
        receivedCostChart.render();
    });
}, 500);


// กราฟวงกลมแสดงสัดส่วนพนักงานแยกตามเพศ
const dataForGenderRatioChart = {
    labels: ['ชาย', 'หญิง'],
    series: [60, 40]
};

const genderRatioOptions = {
    series: dataForGenderRatioChart.series,
    chart: {
        type: 'pie',
        height: 350
    },
    labels: dataForGenderRatioChart.labels,
    title: {
        text: 'สัดส่วนกำลังคนทั้งหมดรวมทุกบริษัท จำแนกตามเพศ'
    },
    legend: {
        position: 'bottom'
    },
    colors: ['#1f77b4', '#ff7f0e']
};

setTimeout(() => {
    const genderRatioChart = new ApexCharts(document.querySelector("#genderRatioChart"), genderRatioOptions);
    genderRatioChart.render();
}, 100);

// กราฟ Treemap แสดงสัดส่วนกำลังคนจำแนกตามสัญชาติและเพศ
const dataForWorkforceByNationalityAndGenderChart = {
    series: [
        { name: 'ไทย', data: [{ x: 'ชาย', y: 150 }, { x: 'หญิง', y: 130 }] },
        { name: 'ลาว', data: [{ x: 'ชาย', y: 80 }, { x: 'หญิง', y: 90 }] },
        { name: 'พม่า', data: [{ x: 'ชาย', y: 60 }, { x: 'หญิง', y: 70 }] },
        { name: 'เขมร', data: [{ x: 'ชาย', y: 50 }, { x: 'หญิง', y: 60 }] },
        { name: 'เวียดนาม', data: [{ x: 'ชาย', y: 40 }, { x: 'หญิง', y: 50 }] }
    ]
};

const workforceByNationalityAndGenderOptions = {
    series: dataForWorkforceByNationalityAndGenderChart.series,
    chart: {
        type: 'treemap',
        height: 350
    },
    title: {
        text: 'สัดส่วนกำลังคนทั้งหมดรวมทุกบริษัท จำแนกตามสัญชาติและเพศ'
    },
    dataLabels: {
        enabled: true,
        style: { fontSize: '14px' },
        formatter: (text, op) => op.w.globals.seriesNames[op.seriesIndex] + ' - ' + text + ': ' + op.value
    },
    legend: {
        show: true,
        position: 'top'
    },
    colors: ['#008FFB', '#FEB019', '#00E396', '#FF4560', '#775DD0']
};

setTimeout(() => {
    const workforceByNationalityAndGenderChart = new ApexCharts(document.querySelector("#workforceByNationalityAndGenderChart"), workforceByNationalityAndGenderOptions);
    workforceByNationalityAndGenderChart.render();
}, 200);


// กราฟแท่งวางซ้อน จำแนกตามประเภทพนักงานและเพศ
const dataForWorkforceByEmployeeTypeAndGenderChart = {
    men: [100, 200],
    women: [120, 180],
    categories: ['รายวัน', 'รายเดือน']
};

const workforceByEmployeeTypeAndGenderOptions = {
    series: [
        { name: 'ชาย', data: dataForWorkforceByEmployeeTypeAndGenderChart.men },
        { name: 'หญิง', data: dataForWorkforceByEmployeeTypeAndGenderChart.women }
    ],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true
    },
    plotOptions: {
        bar: { horizontal: false }
    },
    xaxis: {
        categories: dataForWorkforceByEmployeeTypeAndGenderChart.categories,
        title: { text: 'ประเภทพนักงาน' }
    },
    yaxis: { title: { text: 'กำลังคน' } },
    legend: { position: 'top' },
    fill: { opacity: 1 },
    colors: ['#1f77b4', '#ff7f0e']
};

setTimeout(() => {
    const workforceByEmployeeTypeAndGenderChart = new ApexCharts(document.querySelector("#workforceByEmployeeTypeAndGenderChart"), workforceByEmployeeTypeAndGenderOptions);
    workforceByEmployeeTypeAndGenderChart.render();
}, 300);

// กราฟแท่ง เปรียบเทียบกำลังคนทั้งหมด, กำลังคนว่าง, และขอกำลังคน
const dataForWorkforceComparisonChart = {
    categories: ['กำลังคนทั้งหมด', 'กำลังคนว่าง (Available)', 'ขอกำลังคน (Request)'],
    data: [300, 50, 80]
};

const workforceComparisonOptions = {
    series: [{ name: 'จำนวนกำลังคน', data: dataForWorkforceComparisonChart.data }],
    chart: {
        type: 'bar',
        height: 350
    },
    xaxis: {
        categories: dataForWorkforceComparisonChart.categories,
        title: { text: 'ประเภทกำลังคน' }
    },
    yaxis: { title: { text: 'จำนวนกำลังคน (คน)' } },
    title: { text: 'เปรียบเทียบข้อมูลกำลังคนทั้งหมด, กำลังคนว่าง และขอกำลังคน' },
    dataLabels: { enabled: true },
    plotOptions: {
        bar: { horizontal: false, columnWidth: '55%' }
    },
    legend: { position: 'top' },
    colors: ['#1f77b4']
};

setTimeout(() => {
    const workforceComparisonChart = new ApexCharts(document.querySelector("#workforceComparisonChart"), workforceComparisonOptions);
    workforceComparisonChart.render();
}, 400);


// กราฟแยกตามบริษัทแสดงข้อมูลกำลังคนว่างและขอกำลังคน
const dataForAvailableRequestByCompanyChart = {
    companies: ['บริษัท A', 'บริษัท B', 'บริษัท C', 'บริษัท D'],
    available: [50, 80, 60, 90],
    request: [70, 60, 80, 50]
};

const availableRequestByCompanyOptions = {
    series: [
        { name: 'กำลังคนว่าง (Available)', data: dataForAvailableRequestByCompanyChart.available },
        { name: 'ขอกำลังคน (Request)', data: dataForAvailableRequestByCompanyChart.request }
    ],
    chart: {
        type: 'bar',
        height: 350
    },
    xaxis: {
        categories: dataForAvailableRequestByCompanyChart.companies,
        title: { text: 'บริษัทฯ' }
    },
    yaxis: { title: { text: 'จำนวนกำลังคน' } },
    title: { text: 'ข้อมูลการแจ้งกำลังคนว่างและขอกำลังคนแยกตามบริษัท' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#1f77b4', '#ff7f0e']
};

setTimeout(() => {
    const availableRequestByCompanyChart = new ApexCharts(document.querySelector("#availableRequestByCompanyChart"), availableRequestByCompanyOptions);
    availableRequestByCompanyChart.render();
}, 500);

// กราฟ 10 อันดับแผนกที่มีการแจ้งกำลังคนว่างมากที่สุด
const dataForTop10AvailableDepartmentsChart = {
    departments: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E', 'แผนก F', 'แผนก G', 'แผนก H', 'แผนก I', 'แผนก J'],
    available: [120, 110, 105, 95, 90, 85, 80, 75, 70, 65]
};

const top10AvailableDepartmentsOptions = {
    series: [{ name: 'กำลังคนว่าง (Available)', data: dataForTop10AvailableDepartmentsChart.available }],
    chart: {
        type: 'bar',
        height: 350
    },
    xaxis: {
        categories: dataForTop10AvailableDepartmentsChart.departments,
        title: { text: 'แผนก' }
    },
    yaxis: { title: { text: 'จำนวนกำลังคน (คน)' } },
    title: { text: '10 อันดับแผนกที่มีการแจ้งกำลังคนว่างมากที่สุด' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#1f77b4']
};

setTimeout(() => {
    const top10AvailableDepartmentsChart = new ApexCharts(document.querySelector("#top10AvailableDepartmentsChart"), top10AvailableDepartmentsOptions);
    top10AvailableDepartmentsChart.render();
}, 600);


// กราฟ 10 อันดับแผนกที่มีการขอกำลังคนมากที่สุด
const dataForTop10RequestDepartmentsChart = {
    departments: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E', 'แผนก F', 'แผนก G', 'แผนก H', 'แผนก I', 'แผนก J'],
    request: [130, 120, 115, 110, 100, 95, 85, 80, 75, 70]
};

const top10RequestDepartmentsOptions = {
    series: [{ name: 'ขอกำลังคน (Request)', data: dataForTop10RequestDepartmentsChart.request }],
    chart: {
        type: 'bar',
        height: 350
    },
    xaxis: {
        categories: dataForTop10RequestDepartmentsChart.departments,
        title: { text: 'แผนก' }
    },
    yaxis: { title: { text: 'จำนวนกำลังคน (คน)' } },
    title: { text: '10 อันดับแผนกที่มีการขอกำลังคนมากที่สุด' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#ff7f0e']
};

setTimeout(() => {
    const top10RequestDepartmentsChart = new ApexCharts(document.querySelector("#top10RequestDepartmentsChart"), top10RequestDepartmentsOptions);
    top10RequestDepartmentsChart.render();
}, 700);

// กราฟเปรียบเทียบข้อมูลการขอกำลังคน, จัดสรรกำลังคน, อนุมัติกำลังคน, และยืนยันเข้าทำงาน
const dataForRequestAllocationApprovalChart = {
    companies: ['บริษัท A', 'บริษัท B', 'บริษัท C', 'บริษัท D'],
    request: [100, 120, 90, 110],
    allocation: [80, 100, 70, 90],
    approval: [70, 95, 65, 85],
    confirmation: [60, 90, 60, 80]
};

const requestAllocationApprovalOptions = {
    series: [
        { name: 'ขอกำลังคน (Request)', type: 'column', data: dataForRequestAllocationApprovalChart.request },
        { name: 'จัดสรรกำลังคน (Allocation)', type: 'column', data: dataForRequestAllocationApprovalChart.allocation },
        { name: 'อนุมัติกำลังคน (Approval)', type: 'line', data: dataForRequestAllocationApprovalChart.approval },
        { name: 'ยืนยันเข้าทำงาน (Confirmation)', type: 'line', data: dataForRequestAllocationApprovalChart.confirmation }
    ],
    chart: {
        height: 350,
        type: 'line',
        stacked: false
    },
    xaxis: {
        categories: dataForRequestAllocationApprovalChart.companies,
        title: { text: 'บริษัทฯ' }
    },
    yaxis: { title: { text: 'จำนวนกำลังคน' } },
    title: { text: 'เปรียบเทียบข้อมูลการขอกำลังคน, จัดสรรกำลังคน, อนุมัติกำลังคน และยืนยันเข้าทำงานแยกตามบริษัท' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728']
};

setTimeout(() => {
    const requestAllocationApprovalChart = new ApexCharts(document.querySelector("#requestAllocationApprovalChart"), requestAllocationApprovalOptions);
    requestAllocationApprovalChart.render();
}, 800);


// กราฟเปรียบเทียบข้อมูลกำลังคนว่าง, จัดสรรกำลังคน และยืนยันเข้าทำงาน
const dataForAvailableAllocationConfirmationChart = {
    companies: ['บริษัท A', 'บริษัท B', 'บริษัท C', 'บริษัท D'],
    available: [90, 100, 80, 95],
    allocation: [70, 85, 65, 80],
    confirmation: [60, 75, 60, 70]
};

const availableAllocationConfirmationOptions = {
    series: [
        { name: 'กำลังคนว่าง (Available)', type: 'column', data: dataForAvailableAllocationConfirmationChart.available },
        { name: 'จัดสรรกำลังคน (Allocation)', type: 'column', data: dataForAvailableAllocationConfirmationChart.allocation },
        { name: 'ยืนยันเข้าทำงาน (Confirmation)', type: 'line', data: dataForAvailableAllocationConfirmationChart.confirmation }
    ],
    chart: {
        height: 350,
        type: 'line',
        stacked: false
    },
    xaxis: {
        categories: dataForAvailableAllocationConfirmationChart.companies,
        title: { text: 'บริษัท' }
    },
    yaxis: { title: { text: 'จำนวนกำลังคน (คน)' } },
    title: { text: 'เปรียบเทียบข้อมูลกำลังคนว่าง, จัดสรรกำลังคน และยืนยันเข้าทำงานแยกตามบริษัท' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c']
};

setTimeout(() => {
    const availableAllocationConfirmationChart = new ApexCharts(document.querySelector("#availableAllocationConfirmationChart"), availableAllocationConfirmationOptions);
    availableAllocationConfirmationChart.render();
}, 900);

// กราฟค่าใช้จ่ายจากการโอนออกกำลังคนจำแนกตามบริษัท
const dataForTransferCostByCompanyChart = {
    companies: ['บริษัท A', 'บริษัท B', 'บริษัท C', 'บริษัท D'],
    availableCosts: [50000, 40000, 45000, 38000],
    assignCosts: [30000, 25000, 28000, 24000],
    confirmCosts: [20000, 18000, 15000, 17000]
};

const transferCostByCompanyOptions = {
    series: [
        { name: 'Available', data: dataForTransferCostByCompanyChart.availableCosts },
        { name: 'Assign', data: dataForTransferCostByCompanyChart.assignCosts },
        { name: 'Confirm', data: dataForTransferCostByCompanyChart.confirmCosts }
    ],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true
    },
    xaxis: {
        categories: dataForTransferCostByCompanyChart.companies,
        title: { text: 'บริษัท' }
    },
    yaxis: { title: { text: 'ค่าใช้จ่าย (บาท)' } },
    title: { text: 'ค่าใช้จ่ายที่ได้รับจากการโอนออกกำลังคนจำแนกตามบริษัท' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c']
};

setTimeout(() => {
    const transferCostByCompanyChart = new ApexCharts(document.querySelector("#transferCostByCompanyChart"), transferCostByCompanyOptions);
    transferCostByCompanyChart.render();
}, 1000);


// กราฟ 10 อันดับแผนกที่มีค่าใช้จ่ายการโอนออกกำลังคน (Available) มากที่สุด
const dataForTop10TransferCostDepartmentsChart = {
    departments: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E', 'แผนก F', 'แผนก G', 'แผนก H', 'แผนก I', 'แผนก J'],
    transferCosts: [50000, 48000, 47000, 45000, 44000, 43000, 42000, 41000, 40000, 39000]
};

const top10TransferCostDepartmentsOptions = {
    series: [{ name: 'ค่าใช้จ่ายจากการโอนออก (Available)', data: dataForTop10TransferCostDepartmentsChart.transferCosts }],
    chart: {
        type: 'bar',
        height: 350
    },
    xaxis: {
        categories: dataForTop10TransferCostDepartmentsChart.departments,
        title: { text: 'แผนก' }
    },
    yaxis: { title: { text: 'ค่าใช้จ่าย (บาท)' } },
    title: { text: '10 อันดับแผนกที่มีค่าใช้จ่ายจากการโอนออกกำลังคน (Available) มากที่สุด' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#1f77b4']
};

setTimeout(() => {
    const top10TransferCostDepartmentsChart = new ApexCharts(document.querySelector("#top10TransferCostDepartmentsChart"), top10TransferCostDepartmentsOptions);
    top10TransferCostDepartmentsChart.render();
}, 1100);

// กราฟค่าใช้จ่ายที่เกิดจากการรับโอนย้ายกำลังคนจำแนกตามบริษัท
const dataForReceivedTransferCostByCompanyChart = {
    companies: ['บริษัท A', 'บริษัท B', 'บริษัท C', 'บริษัท D'],
    requestCosts: [60000, 55000, 58000, 53000],
    assignCosts: [40000, 38000, 39000, 37000],
    confirmCosts: [30000, 29000, 28000, 27000]
};

const receivedTransferCostByCompanyOptions = {
    series: [
        { name: 'Request', data: dataForReceivedTransferCostByCompanyChart.requestCosts },
        { name: 'Assign', data: dataForReceivedTransferCostByCompanyChart.assignCosts },
        { name: 'Confirm', data: dataForReceivedTransferCostByCompanyChart.confirmCosts }
    ],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true
    },
    xaxis: {
        categories: dataForReceivedTransferCostByCompanyChart.companies,
        title: { text: 'บริษัท' }
    },
    yaxis: { title: { text: 'ค่าใช้จ่าย (บาท)' } },
    title: { text: 'ค่าใช้จ่ายที่เกิดจากการรับโอนย้ายกำลังคนจำแนกตามบริษัท' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c']
};

setTimeout(() => {
    const receivedTransferCostByCompanyChart = new ApexCharts(document.querySelector("#receivedTransferCostByCompanyChart"), receivedTransferCostByCompanyOptions);
    receivedTransferCostByCompanyChart.render();
}, 1200);


// กราฟ 10 อันดับแผนกที่มีค่าใช้จ่ายจากการรับโอนกำลังคน (Request) มากที่สุด
const dataForTop10RequestTransferCostDepartmentsChart = {
    departments: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E', 'แผนก F', 'แผนก G', 'แผนก H', 'แผนก I', 'แผนก J'],
    requestCosts: [60000, 58000, 57000, 56000, 55000, 54000, 53000, 52000, 51000, 50000]
};

const top10RequestTransferCostDepartmentsOptions = {
    series: [{ name: 'ค่าใช้จ่ายจากการรับโอน (Request)', data: dataForTop10RequestTransferCostDepartmentsChart.requestCosts }],
    chart: {
        type: 'bar',
        height: 350
    },
    xaxis: {
        categories: dataForTop10RequestTransferCostDepartmentsChart.departments,
        title: { text: 'แผนก' }
    },
    yaxis: { title: { text: 'ค่าใช้จ่าย (บาท)' } },
    title: { text: '10 อันดับแผนกที่มีค่าใช้จ่ายจากการรับโอนกำลังคน (Request) มากที่สุด' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#1f77b4']
};

setTimeout(() => {
    const top10RequestTransferCostDepartmentsChart = new ApexCharts(document.querySelector("#top10RequestTransferCostDepartmentsChart"), top10RequestTransferCostDepartmentsOptions);
    top10RequestTransferCostDepartmentsChart.render();
}, 1300);

// กราฟวงกลมแสดงสัดส่วนพนักงานแยกตามเพศ
const dataForGenderRatioPieChart = {
    labels: ['ชาย', 'หญิง'],
    series: [55, 45]
};

const genderRatioPieOptions = {
    series: dataForGenderRatioPieChart.series,
    chart: {
        type: 'pie',
        height: 350
    },
    labels: dataForGenderRatioPieChart.labels,
    title: { text: 'สัดส่วนกำลังคนทั้งหมดรวมทุกบริษัท จำแนกตามเพศ' },
    legend: { position: 'bottom' },
    colors: ['#1f77b4', '#ff7f0e']
};

setTimeout(() => {
    const genderRatioPieChart = new ApexCharts(document.querySelector("#genderRatioPieChart"), genderRatioPieOptions);
    genderRatioPieChart.render();
}, 1400);

// กราฟ Treemap แสดงสัดส่วนกำลังคนจำแนกตามสัญชาติและเพศ
const dataForNationalityGenderTreemapChart = {
    series: [
        { name: 'ไทย', data: [{ x: 'ชาย', y: 150 }, { x: 'หญิง', y: 130 }] },
        { name: 'ลาว', data: [{ x: 'ชาย', y: 80 }, { x: 'หญิง', y: 90 }] },
        { name: 'พม่า', data: [{ x: 'ชาย', y: 60 }, { x: 'หญิง', y: 70 }] },
        { name: 'เขมร', data: [{ x: 'ชาย', y: 50 }, { x: 'หญิง', y: 60 }] },
        { name: 'เวียดนาม', data: [{ x: 'ชาย', y: 40 }, { x: 'หญิง', y: 50 }] }
    ]
};

const nationalityGenderTreemapOptions = {
    series: dataForNationalityGenderTreemapChart.series,
    chart: {
        type: 'treemap',
        height: 350
    },
    title: { text: 'สัดส่วนกำลังคนทั้งหมดรวมทุกบริษัท จำแนกตามสัญชาติและเพศ' },
    dataLabels: {
        enabled: true,
        style: { fontSize: '14px' },
        formatter: (text, op) => op.w.globals.seriesNames[op.seriesIndex] + ' - ' + text + ': ' + op.value
    },
    legend: { show: true, position: 'top' },
    colors: ['#008FFB', '#FEB019', '#00E396', '#FF4560', '#775DD0']
};

setTimeout(() => {
    const nationalityGenderTreemapChart = new ApexCharts(document.querySelector("#nationalityGenderTreemapChart"), nationalityGenderTreemapOptions);
    nationalityGenderTreemapChart.render();
}, 1500);

// กราฟเปรียบเทียบข้อมูลกำลังคนทั้งหมด, กำลังคนว่าง, และขอกำลังคน
const dataForTotalAvailableRequestChart = {
    categories: ['กำลังคนทั้งหมด', 'กำลังคนว่าง (Available)', 'ขอกำลังคน (Request)'],
    workforceCounts: [300, 50, 80]
};

const totalAvailableRequestOptions = {
    series: [{ name: 'จำนวนกำลังคน', data: dataForTotalAvailableRequestChart.workforceCounts }],
    chart: {
        type: 'bar',
        height: 350
    },
    xaxis: {
        categories: dataForTotalAvailableRequestChart.categories,
        title: { text: 'ประเภทกำลังคน' }
    },
    yaxis: { title: { text: 'จำนวนกำลังคน (คน)' } },
    title: { text: 'เปรียบเทียบข้อมูลกำลังคนทั้งหมด, กำลังคนว่าง และขอกำลังคน' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#1f77b4']
};

setTimeout(() => {
    const totalAvailableRequestChart = new ApexCharts(document.querySelector("#totalAvailableRequestChart"), totalAvailableRequestOptions);
    totalAvailableRequestChart.render();
}, 1600);


// กราฟ 10 อันดับแผนกที่มีการแจ้งกำลังคนว่างมากที่สุด
const dataForTopAvailableDepts = {
    departmentNames: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E', 'แผนก F', 'แผนก G', 'แผนก H', 'แผนก I', 'แผนก J'],
    availableWorkforce: [120, 110, 105, 95, 90, 85, 80, 75, 70, 65]
};

const topAvailableDeptsOptions = {
    series: [{ name: 'กำลังคนว่าง (Available)', data: dataForTopAvailableDepts.availableWorkforce }],
    chart: {
        type: 'bar',
        height: 350
    },
    xaxis: {
        categories: dataForTopAvailableDepts.departmentNames,
        title: { text: 'แผนก' }
    },
    yaxis: { title: { text: 'จำนวนกำลังคน (คน)' } },
    title: { text: '10 อันดับแผนกที่มีการแจ้งกำลังคนว่างมากที่สุด' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#1f77b4']
};

setTimeout(() => {
    const topAvailableDepartmentsChart = new ApexCharts(document.querySelector("#topAvailableDepartmentsChart"), topAvailableDeptsOptions);
    topAvailableDepartmentsChart.render();
}, 1700);

// กราฟ 10 อันดับแผนกที่มีการขอกำลังคนมากที่สุด
const dataForTopRequestDepts = {
    departmentNames: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E', 'แผนก F', 'แผนก G', 'แผนก H', 'แผนก I', 'แผนก J'],
    requestWorkforce: [130, 120, 115, 110, 100, 95, 85, 80, 75, 70]
};

const topRequestDeptsOptions = {
    series: [{ name: 'ขอกำลังคน (Request)', data: dataForTopRequestDepts.requestWorkforce }],
    chart: {
        type: 'bar',
        height: 350
    },
    xaxis: {
        categories: dataForTopRequestDepts.departmentNames,
        title: { text: 'แผนก' }
    },
    yaxis: { title: { text: 'จำนวนกำลังคน (คน)' } },
    title: { text: '10 อันดับแผนกที่มีการขอกำลังคนมากที่สุด' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#ff7f0e']
};

setTimeout(() => {
    const topRequestDepartmentsChart = new ApexCharts(document.querySelector("#topRequestDepartmentsChart"), topRequestDeptsOptions);
    topRequestDepartmentsChart.render();
}, 1800);


// กราฟเปรียบเทียบการขอกำลังคนกับการจัดสรร อนุมัติ และยืนยันเข้าทำงาน
const dataForCompanyRequestComparison = {
    companies: ['บริษัท A', 'บริษัท B', 'บริษัท C', 'บริษัท D'],
    requestCounts: [100, 120, 90, 110],
    assignCounts: [80, 100, 70, 90],
    approvalCounts: [70, 95, 65, 85],
    confirmationCounts: [60, 90, 60, 80]
};

const companyRequestComparisonOptions = {
    series: [
        { name: 'ขอกำลังคน (Request)', type: 'column', data: dataForCompanyRequestComparison.requestCounts },
        { name: 'จัดสรรกำลังคน (Assign)', type: 'column', data: dataForCompanyRequestComparison.assignCounts },
        { name: 'อนุมัติกำลังคน (Approval)', type: 'line', data: dataForCompanyRequestComparison.approvalCounts },
        { name: 'ยืนยันเข้าทำงาน (Confirmation)', type: 'line', data: dataForCompanyRequestComparison.confirmationCounts }
    ],
    chart: {
        height: 350,
        type: 'line',
        stacked: false
    },
    xaxis: {
        categories: dataForCompanyRequestComparison.companies,
        title: { text: 'บริษัทฯ' }
    },
    yaxis: { title: { text: 'จำนวนกำลังคน (คน)' } },
    title: { text: 'เปรียบเทียบการขอกำลังคน จัดสรร อนุมัติ และยืนยันเข้าทำงานแยกตามบริษัท' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728']
};

setTimeout(() => {
    const companyRequestComparisonChart = new ApexCharts(document.querySelector("#companyRequestComparisonChart"), companyRequestComparisonOptions);
    companyRequestComparisonChart.render();
}, 1900);

// กราฟเปรียบเทียบกำลังคนว่างกับการจัดสรรและยืนยันเข้าทำงาน
const dataForCompanyAvailabilityComparison = {
    companies: ['บริษัท A', 'บริษัท B', 'บริษัท C', 'บริษัท D'],
    availableCounts: [90, 100, 80, 95],
    assignCounts: [70, 85, 65, 80],
    confirmationCounts: [60, 75, 60, 70]
};

const companyAvailabilityComparisonOptions = {
    series: [
        { name: 'กำลังคนว่าง (Available)', type: 'column', data: dataForCompanyAvailabilityComparison.availableCounts },
        { name: 'จัดสรรกำลังคน (Assign)', type: 'column', data: dataForCompanyAvailabilityComparison.assignCounts },
        { name: 'ยืนยันเข้าทำงาน (Confirmation)', type: 'line', data: dataForCompanyAvailabilityComparison.confirmationCounts }
    ],
    chart: {
        height: 350,
        type: 'line',
        stacked: false
    },
    xaxis: {
        categories: dataForCompanyAvailabilityComparison.companies,
        title: { text: 'บริษัท' }
    },
    yaxis: { title: { text: 'จำนวนกำลังคน (คน)' } },
    title: { text: 'เปรียบเทียบข้อมูลกำลังคนว่าง จัดสรร และยืนยันเข้าทำงานแยกตามบริษัท' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c']
};

setTimeout(() => {
    const companyAvailabilityComparisonChart = new ApexCharts(document.querySelector("#companyAvailabilityComparisonChart"), companyAvailabilityComparisonOptions);
    companyAvailabilityComparisonChart.render();
}, 2000);


// กราฟค่าใช้จ่ายที่ได้รับจากการโอนออกกำลังคนจำแนกตามบริษัท
const dataForOutgoingTransferCosts = {
    companyNames: ['บริษัท A', 'บริษัท B', 'บริษัท C', 'บริษัท D'],
    availableExpenses: [50000, 40000, 45000, 38000],
    assignExpenses: [30000, 25000, 28000, 24000],
    confirmExpenses: [20000, 18000, 15000, 17000]
};

const outgoingTransferCostsOptions = {
    series: [
        { name: 'Available', data: dataForOutgoingTransferCosts.availableExpenses },
        { name: 'Assign', data: dataForOutgoingTransferCosts.assignExpenses },
        { name: 'Confirm', data: dataForOutgoingTransferCosts.confirmExpenses }
    ],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true
    },
    xaxis: {
        categories: dataForOutgoingTransferCosts.companyNames,
        title: { text: 'บริษัท' }
    },
    yaxis: { title: { text: 'ค่าใช้จ่าย (บาท)' } },
    title: { text: 'ค่าใช้จ่ายที่ได้รับจากการโอนออกกำลังคนจำแนกตามบริษัท' },
    plotOptions: {
        bar: { columnWidth: '55%' }
    },
    dataLabels: { enabled: true },
    legend: { position: 'top' },
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c']
};

setTimeout(() => {
    const outgoingTransferCostsChart = new ApexCharts(document.querySelector("#outgoingTransferCostsChart"), outgoingTransferCostsOptions);
    outgoingTransferCostsChart.render();
}, 2100);
