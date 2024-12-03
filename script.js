// ฟังก์ชันสำหรับเรนเดอร์กราฟ
function renderChart(selector, options) {
    const chartElements = document.querySelectorAll(selector);
    chartElements.forEach(chartElement => {
        const chart = new ApexCharts(chartElement, options);
        chart.render();
    });
}

// ฟังก์ชันสำหรับสร้างตัวเลือกกราฟแท่ง
function getBarChartOptions(series, categories, titleX, titleY, colors, stacked = false, columnWidth = '50%') {
    return {
        series: series,
        chart: {
            type: 'bar',
            height: 350,
            stacked: stacked
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: columnWidth
            },
        },
        dataLabels: {
            enabled: true
        },
        xaxis: {
            categories: categories,
            title: {
                text: titleX
            }
        },
        yaxis: {
            title: {
                text: titleY
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center'
        },
        fill: {
            opacity: 1
        },
        colors: colors,
        tooltip: {
            shared: true,
            intersect: false,
        }
    };
}

// ข้อมูลสำหรับกราฟต่าง ๆ
const chartsData = [
    {
        selector: '.employeeByGenderChart',
        data: {
            men: [100, 200],
            women: [120, 180],
            categories: ['รายวัน', 'รายเดือน']
        },
        options: (data) => {
            const totalMen = data.men.reduce((a, b) => a + b, 0);
            const totalWomen = data.women.reduce((a, b) => a + b, 0);
            return getBarChartOptions(
                [
                    { name: 'ชาย', data: [...data.men, totalMen] },
                    { name: 'หญิง', data: [...data.women, totalWomen] }
                ],
                [...data.categories, 'ผลรวม'],
                'ประเภทพนักงาน',
                'กำลังคน',
                ['#1F77B4', '#FF7F0E']
            );
        }
    },
    {
        selector: '.employeeByNationalityChart',
        data: {
            men: [150, 80, 60, 50, 40],
            women: [130, 90, 70, 60, 50],
            categories: ['ไทย', 'ลาว', 'พม่า', 'เขมร', 'เวียดนาม']
        },
        options: (data) => {
            const totalMen = data.men.reduce((a, b) => a + b, 0);
            const totalWomen = data.women.reduce((a, b) => a + b, 0);
            return getBarChartOptions(
                [
                    { name: 'ชาย', data: [...data.men, totalMen] },
                    { name: 'หญิง', data: [...data.women, totalWomen] }
                ],
                [...data.categories, 'ผลรวม'],
                'สัญชาติ',
                'กำลังคน',
                ['#1F77B4', '#FF7F0E']
            );
        }
    },
    {
        selector: '.overallEmployeeStatusChart',
        data: {
            series: [
                { name: 'กำลังคนทั้งหมด', data: [300] },
                { name: 'กำลังคนว่าง (Available)', data: [50] },
                { name: 'ขอกำลังคน (Request)', data: [80] }
            ],
            categories: ['กำลังคนทั้งหมด']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'ประเภทข้อมูลกำลังคน',
            'จำนวนกำลังคน',
            ['#051584', '#3EA8F4', '#FF0000']
        )
    },
    {
        selector: '.employeeRequestProcessChart',
        data: {
            series: [
                { name: 'ขอกำลังคน (Request)', data: [100] },
                { name: 'จัดสรรกำลังคน', data: [80] },
                { name: 'อนุมัติกำลังคน', data: [70] },
                { name: 'ยืนยันเข้าทำงาน', data: [60] }
            ],
            categories: ['กำลังคน']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'ประเภทข้อมูลกำลังคน',
            'จำนวนกำลังคน',
            ['#FF0000', '#FFC000', '#00B050', '#7030A0']
        )
    },
    {
        selector: '.availableEmployeeComparisonChart',
        data: {
            series: [
                { name: 'กำลังคนว่าง (Available)', data: [50] },
                { name: 'จัดสรรกำลังคน', data: [40] },
                { name: 'ยืนยันเข้าทำงาน', data: [30] }
            ],
            categories: ['กำลังคน']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'ประเภทข้อมูลกำลังคน',
            'จำนวนกำลังคน',
            ['#3EA8F4', '#FFC000', '#7030A0']
        )
    },
    {
        selector: '.transferredEmployeeChart',
        data: {
            series: [{ name: 'กำลังคนที่โอนออก', data: [70, 55, 40, 65, 50] }],
            categories: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'แผนกโอนออก',
            'จำนวนกำลังคน',
            ['#3EA8F4']
        )
    },
    {
        selector: '.receivedEmployeeChart',
        data: {
            series: [{ name: 'กำลังคนที่ได้รับโอน', data: [90, 75, 60, 85, 70] }],
            categories: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'แผนกรับโอน',
            'จำนวนกำลังคน',
            ['#FF0000']
        )
    },
    {
        selector: '.transferCostChart',
        data: {
            series: [
                { name: 'ค่าแรง', data: [10000, 8500, 7500, 9000, 8000] },
                { name: 'ค่าโอที', data: [2000, 1500, 1200, 1800, 1600] },
                { name: 'ค่าเบี้ยเลี้ยง', data: [1000, 800, 700, 900, 750] },
                { name: 'ค่าแรงรวม', data: [13000, 10800, 9400, 11700, 10350] }
            ],
            categories: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'แผนกโอนออก',
            'ค่าแรง (บาท)',
            ['#1F77B4', '#FF0000', '#FFC000', '#00B050']
        )
    },
    {
        selector: '.receivedCostChart',
        data: {
            series: [
                { name: 'ค่าแรง', data: [9500, 8000, 7200, 8700, 7800] },
                { name: 'ค่าโอที', data: [1800, 1400, 1000, 1700, 1500] },
                { name: 'ค่าเบี้ยเลี้ยง', data: [900, 700, 650, 850, 700] },
                { name: 'ค่าแรงรวม', data: [12200, 10100, 8850, 11250, 10000] }
            ],
            categories: ['แผนก A', 'แผนก B', 'แผนก C', 'แผนก D', 'แผนก E']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'แผนกรับโอน',
            'ค่าแรง (บาท)',
            ['#1F77B4', '#FF0000', '#FFC000', '#00B050']
        )
    },
    {
        selector: '.WorkforceByGenderAndCompanyChart',
        data: {
            series: [
                { name: 'ชาย', data: [120, 150, 100, 130, 140] },
                { name: 'หญิง', data: [110, 140, 90, 120, 135] }
            ],
            categories: ['รหัสบริษัท A', 'รหัสบริษัท B', 'รหัสบริษัท C', 'รหัสบริษัท D', 'รหัสบริษัท E']
        },
        options: (data) => {
            // คำนวณผลรวมของพนักงานชายและหญิง
            const totalMale = data.series[0].data.reduce((a, b) => a + b, 0);
            const totalFemale = data.series[1].data.reduce((a, b) => a + b, 0);

            // เพิ่มผลรวมเข้าไปในชุดข้อมูลและหมวดหมู่
            data.series[0].data.push(totalMale);
            data.series[1].data.push(totalFemale);
            data.categories.push('ผลรวมทั้งหมด');

            return getBarChartOptions(
                data.series,
                data.categories,
                'บริษัท',
                'จำนวนพนักงาน (คน)',
                ['#1F77B4', '#FF7F0E']
            );
        }
    },
    {
        selector: '.EmployeeTypeByGenderChart',
        data: {
            series: [
                { name: 'ชาย', data: [200, 150, 350] },
                { name: 'หญิง', data: [180, 170, 350] }
            ],
            categories: ['รายวัน', 'รายเดือน', 'รวม']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'ประเภทพนักงาน',
            'จำนวนกำลังคน',
            ['#1F77B4', '#FF7F0E']
        )
    },
    {
        selector: '.WorkforceComparisonChart',
        data: {
            series: [
                { name: 'กำลังคนทั้งหมด', data: [1000, 1200, 1100] },
                { name: 'จัดสรรกำลังคน', data: [800, 950, 880] },
                { name: 'กำลังคนว่าง (Available)', data: [200, 250, 220] },
                { name: 'ขอกำลังคน (Request)', data: [150, 180, 170] }
            ],
            categories: ['รหัสบริษัท A', 'รหัสบริษัท B', 'รหัสบริษัท C']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'บริษัท',
            'จำนวนกำลังคน (คน)',
            ['#051584', '#FFC000', '#3EA8F4', '#FF0000']
        )
    },
    {
        selector: '.CompanyWorkforceChart',
        data: {
            series: [
                { name: 'กำลังคนว่าง (Available)', data: [50, 40, 60, 70, 45] },
                { name: 'ขอกำลังคน (Request)', data: [30, 20, 50, 60, 35] }
            ],
            categories: ['รหัสบริษัท A', 'รหัสบริษัท B', 'รหัสบริษัท C', 'รหัสบริษัท D', 'รหัสบริษัท E']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'บริษัท',
            'จำนวนกำลังคน',
            ['#3EA8F4', '#FF7F0E']
        )
    },
    {
        selector: '.WorkforceProcessByCompanyChart',
        data: {
            series: [
                { name: 'การขอกำลังคน (Request)', data: [150, 120, 130, 140, 110] },
                { name: 'การจัดสรรกำลังคน (Assign)', data: [100, 90, 110, 120, 85] },
                { name: 'การอนุมัติกำลังคน (Approve)', data: [90, 80, 100, 110, 70] },
                { name: 'การยืนยันเข้าทำงาน (Confirm)', data: [85, 75, 95, 105, 65] }
            ],
            categories: ['รหัสบริษัท A', 'รหัสบริษัท B', 'รหัสบริษัท C', 'รหัสบริษัท D', 'รหัสบริษัท E']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'บริษัท',
            'จำนวนกำลังคน (คน)',
            ['#FF0000', '#FFC000', '#00B050', '#7030A0']
        )
    },
    {
        selector: '.AvailableWorkforceByCompanyChart',
        data: {
            series: [
                { name: 'กำลังคนว่าง (Available)', data: [50, 60, 40, 70, 55] },
                { name: 'การจัดสรรกำลังคน (Assign)', data: [40, 50, 35, 60, 50] },
                { name: 'การยืนยันเข้าทำงาน (Confirm)', data: [30, 45, 30, 50, 40] }
            ],
            categories: ['รหัสบริษัท A', 'รหัสบริษัท B', 'รหัสบริษัท C', 'รหัสบริษัท D', 'รหัสบริษัท E']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'บริษัท',
            'จำนวนกำลังคน (คน)',
            ['#3EA8F4', '#FFC000', '#00B050']
        )
    },
    {
        selector: '.WorkforceTransferCostChart',
        data: {
            series: [
                { name: 'ค่าแรง', data: [50000, 60000, 45000, 70000, 55000] },
                { name: 'ค่าโอที', data: [10000, 12000, 8000, 15000, 11000] },
                { name: 'ค่าเบี้ยเลี้ยง', data: [5000, 7000, 3000, 9000, 6000] },
                { name: 'ค่าแรงรวม', data: [65000, 79000, 56000, 94000, 72000] }
            ],
            categories: ['รหัสบริษัท A', 'รหัสบริษัท B', 'รหัสบริษัท C', 'รหัสบริษัท D', 'รหัสบริษัท E']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'บริษัทที่โอนพนักงานออก',
            'ค่าแรง (บาท)',
            ['#1F77B4', '#FF7F0E', '#FFC000', '#00B050']
        )
    },
    {
        selector: '.TransferCostByDepartmentChart',
        data: {
            series: [
                { name: 'ค่าแรง', data: [50000, 60000, 70000] },
                { name: 'ค่าโอที', data: [15000, 18000, 20000] },
                { name: 'ค่าเบี้ยเลี้ยง', data: [10000, 12000, 13000] },
                { name: 'ค่าแรงรวม', data: [75000, 90000, 103000] }
            ],
            categories: ['รหัสบริษัท A', 'รหัสบริษัท B', 'รหัสบริษัท C']
        },
        options: (data) => getBarChartOptions(
            data.series,
            data.categories,
            'บริษัทที่รับโอนพนักงาน',
            'ค่าใช้จ่าย (บาท)',
            ['#1F77B4', '#FF7F0E', '#FFC000', '#3EA8F4']
        )
    }
];

// เรนเดอร์กราฟทั้งหมดเมื่อ DOM พร้อม
document.addEventListener('DOMContentLoaded', () => {
    chartsData.forEach(chartInfo => {
        const options = chartInfo.options(chartInfo.data);
        renderChart(chartInfo.selector, options);
    });

    // กราฟหลักที่มีการโต้ตอบ (Expandable Chart)
    renderMainChart();
});

// ฟังก์ชันสำหรับเรนเดอร์กราฟหลักที่มีการโต้ตอบ
function renderMainChart() {
    const mainData = {
        series: [
            { name: 'จำนวนพนักงาน', data: [300, 250, 200, 350, 280] }
        ],
        categories: ['รหัสบริษัท A', 'รหัสบริษัท B', 'รหัสบริษัท C', 'รหัสบริษัท D', 'รหัสบริษัท E']
    };

    const detailedData = {
        'รหัสบริษัท A': {
            categories: ['ไทย', 'ลาว', 'พม่า', 'เขมร', 'เวียดนาม', 'ผลรวม'], // หมวดหมู่ของสัญชาติ
            maleData: [50, 20, 15, 10, 5, 100], // ชายในแต่ละสัญชาติ และผลรวม
            femaleData: [40, 25, 20, 10, 5, 100] // หญิงในแต่ละสัญชาติ และผลรวม
        },
        'รหัสบริษัท B': {
            categories: ['ไทย', 'ลาว', 'พม่า', 'เขมร', 'เวียดนาม', 'ผลรวม'],
            maleData: [40, 15, 10, 8, 7, 80],
            femaleData: [35, 20, 15, 10, 5, 85]
        },
        'รหัสบริษัท C': {
            categories: ['ไทย', 'ลาว', 'พม่า', 'เขมร', 'เวียดนาม', 'ผลรวม'],
            maleData: [30, 20, 10, 5, 5, 70],
            femaleData: [25, 15, 10, 5, 5, 60]
        },
        'รหัสบริษัท D': {
            categories: ['ไทย', 'ลาว', 'พม่า', 'เขมร', 'เวียดนาม', 'ผลรวม'],
            maleData: [70, 25, 20, 15, 10, 140],
            femaleData: [60, 30, 20, 10, 10, 130]
        },
        'รหัสบริษัท E': {
            categories: ['ไทย', 'ลาว', 'พม่า', 'เขมร', 'เวียดนาม', 'ผลรวม'],
            maleData: [50, 20, 15, 10, 5, 100],
            femaleData: [45, 25, 15, 10, 5, 100]
        }
    };

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
                text: 'จำนวนพนักงาน (คน)'
            }
        },
        yaxis: {
            title: {
                text: 'บริษัท'
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center'
        },
        colors: ['#3EA8F4'],
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '50%'
            }
        },
        tooltip: {
            shared: true,
            intersect: false,
        }
    };

    const mainChart = new ApexCharts(document.querySelector(".WorkforceExpandableChart"), mainChartOptions);
    mainChart.render();

    function toggleDetailedChart(companyName) {
        const detailedContainer = document.querySelector('.WorkforceDetailedChart');
        const detailedChartElement = document.querySelector('#detailed-chart');

        if (detailedContainer.classList.contains('active') && detailedContainer.getAttribute('data-company') === companyName) {
            detailedContainer.classList.remove('active');
            detailedContainer.setAttribute('data-company', '');
            detailedChartElement.innerHTML = ''; // ลบกราฟเก่า
        } else {
            detailedContainer.classList.add('active');
            detailedContainer.setAttribute('data-company', companyName);
            document.getElementById('detailed-title').innerText = `ข้อมูลกำลังคนแยกตามสัญชาติและเพศ (${companyName})`;

            detailedChartElement.innerHTML = ''; // ลบกราฟเก่า

            const detail = detailedData[companyName];
            const detailedChartOptions = getBarChartOptions(
                [
                    { name: 'ชาย', data: detail.maleData },
                    { name: 'หญิง', data: detail.femaleData }
                ],
                detail.categories,
                'สัญชาติ',
                'จำนวนพนักงาน (คน)',
                ['#1F77B4', '#FF7F0E']
            );

            const detailedChart = new ApexCharts(detailedChartElement, detailedChartOptions);
            detailedChart.render();
        }
    }
}

// ข้อมูลตัวอย่างสำหรับผู้ใช้งานระบบจำแนกตาม Role
const dataForUserByRoleChart = {
    series: [
        {
            name: 'จำนวนผู้ใช้',
            data: [135, 5, 7, 6, 5, 10, 15] // จำนวนผู้ใช้งานในแต่ละ Role
        }
    ],
    categories: ['Department Head', 'HR Head', 'HR Admin', 'HR Manager', 'SuperAdmin', 'BU11', 'BU113'] // ชื่อ Role
};

// ตั้งค่ากราฟ
const userByRoleChartOptions = {
    chart: {
        type: 'bar',
        height: 400,
    },
    series: dataForUserByRoleChart.series,
    xaxis: {
        categories: dataForUserByRoleChart.categories, // กำหนดแกน X เป็น Role
        title: {
            text: 'บทบาท (Role)'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนผู้ใช้งาน (คน)'
        }
    },
    legend: {
        show: false // ไม่ต้องแสดง Legend เนื่องจากมีเพียง Series เดียว
    },
    colors: ['#1F77B4'], // สีของแท่งกราฟ
    plotOptions: {
        bar: {
            horizontal: false, // กราฟแนวตั้ง
            columnWidth: '50%' // ขนาดความกว้างของแท่ง
        }
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (value) {
                return value.toLocaleString() + ' คน'; // รูปแบบตัวเลขและหน่วย "คน"
            }
        }
    }
};

// เรนเดอร์กราฟ
setTimeout(() => {
    document.querySelectorAll(".UserByRoleChart").forEach(chartElement => {
        const userByRoleChart = new ApexCharts(chartElement, userByRoleChartOptions);
        userByRoleChart.render();
    });
}, 100);

// ข้อมูลตัวอย่างสำหรับจำนวนครั้งการ Login
const dataForLoginStatisticsChart = {
    series: [
        {
            name: 'จำนวนครั้งการ Login',
            data: [120, 150, 180, 140, 200, 170, 190] // จำนวนครั้งการ Login ในแต่ละวัน
        }
    ],
    categories: ['2024-11-16', '2024-11-17', '2024-11-18', '2024-11-19', '2024-11-20', '2024-11-21', '2024-11-22'] // วันที่
};

// ตั้งค่ากราฟ
const loginStatisticsChartOptions = {
    chart: {
        type: 'bar',
        height: 400,
    },
    series: dataForLoginStatisticsChart.series,
    xaxis: {
        categories: dataForLoginStatisticsChart.categories, // กำหนดแกน X เป็นวันที่
        title: {
            text: 'วันที่'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนครั้งการ Login'
        }
    },
    colors: ['#1F77B4'], // สีของแท่งกราฟ
    plotOptions: {
        bar: {
            horizontal: false, // แสดงกราฟแนวตั้ง
            columnWidth: '50%' // ขนาดความกว้างของแท่ง
        }
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (value) {
                return value.toLocaleString() + ' ครั้ง'; // รูปแบบตัวเลขและหน่วย "ครั้ง"
            }
        }
    }
};

// เรนเดอร์กราฟ
setTimeout(() => {
    document.querySelectorAll(".LoginStatisticsChart").forEach(chartElement => {
        const loginStatisticsChart = new ApexCharts(chartElement, loginStatisticsChartOptions);
        loginStatisticsChart.render();
    });
}, 100);

// ข้อมูลตัวอย่างสำหรับจำนวนครั้งการ Login ของผู้ใช้งานระบบ
const dataForLoginByUserChart = {
    series: [
        {
            name: 'จำนวนครั้งการ Login',
            data: [20, 35, 40, 10, 50, 25] // จำนวนครั้งการ Login ของผู้ใช้แต่ละคน
        }
    ],
    categories: ['User A', 'User B', 'User C', 'User D', 'User E', 'User F'] // รายชื่อผู้ใช้งานระบบ
};

// ตั้งค่ากราฟ
const loginByUserChartOptions = {
    chart: {
        type: 'bar',
        height: 400,
    },
    series: dataForLoginByUserChart.series,
    xaxis: {
        categories: dataForLoginByUserChart.categories, // กำหนดแกน X เป็นรายชื่อผู้ใช้งานระบบ
        title: {
            text: 'ผู้ใช้งานระบบ'
        }
    },
    yaxis: {
        title: {
            text: 'จำนวนครั้งการ Login'
        }
    },
    colors: ['#FF7F0E'], // สีของแท่งกราฟ
    plotOptions: {
        bar: {
            horizontal: false, // แสดงกราฟแนวตั้ง
            columnWidth: '50%' // ขนาดความกว้างของแท่ง
        }
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (value) {
                return value.toLocaleString() + ' ครั้ง'; // รูปแบบตัวเลขและหน่วย "ครั้ง"
            }
        }
    }
};

// เรนเดอร์กราฟ
setTimeout(() => {
    document.querySelectorAll(".LoginByUserChart").forEach(chartElement => {
        const loginByUserChart = new ApexCharts(chartElement, loginByUserChartOptions);
        loginByUserChart.render();
    });
}, 100);
