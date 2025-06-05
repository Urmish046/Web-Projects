
        document.addEventListener('DOMContentLoaded', function() {
            // Logo fade in
            setTimeout(function() {
                document.getElementById('logo').classList.remove('opacity-0');
            }, 500);
            
            // Shrink header on scroll
            const header = document.querySelector('header');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('py-2');
                    header.classList.remove('py-4');
                } else {
                    header.classList.add('py-4');
                    header.classList.remove('py-2');
                }
            });
        });
   

    
        document.addEventListener('DOMContentLoaded', function() {
            // Intersection Observer for fade-in animations
            const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
            
            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        fadeObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            fadeElements.forEach(element => {
                fadeObserver.observe(element);
            });
        });
    
        document.addEventListener('DOMContentLoaded', function() {
            // Animate counters when they come into view
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const target = parseInt(element.getAttribute('data-target'));
                        const duration = 2000; // ms
                        const stepTime = 50; // ms
                        const steps = duration / stepTime;
                        const increment = target / steps;
                        let current = 0;
                        
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                element.textContent = target.toLocaleString();
                                clearInterval(timer);
                            } else {
                                element.textContent = Math.floor(current).toLocaleString();
                            }
                        }, stepTime);
                        
                        counterObserver.unobserve(element);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            // Set up counters with targets
            const stepsCounter = document.getElementById('steps-counter');
            stepsCounter.setAttribute('data-target', '8742');
            counterObserver.observe(stepsCounter);
            
            const distanceCounter = document.getElementById('distance-counter');
            distanceCounter.setAttribute('data-target', '6.5');
            counterObserver.observe(distanceCounter);
            
            const caloriesCounter = document.getElementById('calories-counter');
            caloriesCounter.setAttribute('data-target', '487');
            counterObserver.observe(caloriesCounter);
            
            const minutesCounter = document.getElementById('minutes-counter');
            minutesCounter.setAttribute('data-target', '45');
            counterObserver.observe(minutesCounter);
            
            // Animate progress bars
            setTimeout(() => {
                document.getElementById('minutes-progress').style.width = '75%';
            }, 1000);
        });
   
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize charts when they come into view
            const chartObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const chartId = entry.target.id;
                        initializeChart(chartId);
                        chartObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            // Observe chart containers
            ['steps-chart', 'distance-chart', 'calories-chart', 'activity-chart'].forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    chartObserver.observe(element);
                }
            });
            
            function initializeChart(chartId) {
                const chart = echarts.init(document.getElementById(chartId));
                let option;
                
                switch(chartId) {
                    case 'steps-chart':
                        option = {
                            animation: false,
                            tooltip: {
                                trigger: 'axis',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                textStyle: {
                                    color: '#1f2937'
                                }
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                axisLine: {
                                    lineStyle: {
                                        color: '#ffffff'
                                    }
                                },
                                axisLabel: {
                                    color: '#ffffff'
                                }
                            },
                            yAxis: {
                                type: 'value',
                                show: false,
                                axisLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                }
                            },
                            grid: {
                                top: 5,
                                bottom: 0,
                                left: 0,
                                right: 0
                            },
                            series: [{
                                data: [7200, 8500, 6800, 9200, 7600, 8900, 8742],
                                type: 'line',
                                smooth: true,
                                symbol: 'none',
                                lineStyle: {
                                    color: '#ffffff'
                                },
                                areaStyle: {
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 0, color: 'rgba(255, 255, 255, 0.3)'
                                        }, {
                                            offset: 1, color: 'rgba(255, 255, 255, 0.1)'
                                        }]
                                    }
                                }
                            }]
                        };
                        break;
                        
                    case 'distance-chart':
                        option = {
                            animation: false,
                            tooltip: {
                                trigger: 'axis',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                textStyle: {
                                    color: '#1f2937'
                                }
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                axisLine: {
                                    lineStyle: {
                                        color: '#ffffff'
                                    }
                                },
                                axisLabel: {
                                    color: '#ffffff'
                                }
                            },
                            yAxis: {
                                type: 'value',
                                show: false,
                                axisLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                }
                            },
                            grid: {
                                top: 5,
                                bottom: 0,
                                left: 0,
                                right: 0
                            },
                            series: [{
                                data: [4.2, 5.7, 3.8, 6.1, 4.5, 5.2, 6.5],
                                type: 'bar',
                                barWidth: '60%',
                                itemStyle: {
                                    color: '#ffffff',
                                    borderRadius: [4, 4, 0, 0]
                                }
                            }]
                        };
                        break;
                        
                    case 'calories-chart':
                        option = {
                            animation: false,
                            tooltip: {
                                trigger: 'item',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                textStyle: {
                                    color: '#1f2937'
                                }
                            },
                            series: [{
                                type: 'pie',
                                radius: ['40%', '70%'],
                                avoidLabelOverlap: false,
                                itemStyle: {
                                    borderRadius: 8,
                                    borderColor: '#4f46e5',
                                    borderWidth: 2
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                },
                                data: [
                                    { value: 42, name: 'Running', itemStyle: { color: 'rgba(87, 181, 231, 1)' } },
                                    { value: 28, name: 'Cycling', itemStyle: { color: 'rgba(141, 211, 199, 1)' } },
                                    { value: 18, name: 'Strength', itemStyle: { color: 'rgba(251, 191, 114, 1)' } },
                                    { value: 12, name: 'Other', itemStyle: { color: 'rgba(252, 141, 98, 1)' } }
                                ]
                            }]
                        };
                        break;
                        
                    case 'activity-chart':
                        option = {
                            animation: false,
                            tooltip: {
                                trigger: 'axis',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                textStyle: {
                                    color: '#1f2937'
                                }
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Low', 'Moderate', 'High', 'Very High'],
                                axisLine: {
                                    lineStyle: {
                                        color: '#ffffff'
                                    }
                                },
                                axisLabel: {
                                    color: '#ffffff'
                                }
                            },
                            yAxis: {
                                type: 'value',
                                show: false,
                                axisLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                }
                            },
                            grid: {
                                top: 5,
                                bottom: 0,
                                left: 0,
                                right: 0
                            },
                            series: [{
                                data: [10, 25, 45, 20],
                                type: 'bar',
                                barWidth: '60%',
                                itemStyle: {
                                    color: function(params) {
                                        const colors = ['rgba(141, 211, 199, 1)', 'rgba(87, 181, 231, 1)', 'rgba(251, 191, 114, 1)', 'rgba(252, 141, 98, 1)'];
                                        return colors[params.dataIndex];
                                    },
                                    borderRadius: [4, 4, 0, 0]
                                }
                            }]
                        };
                        break;
                }
                
                if (option) {
                    chart.setOption(option);
                }
                
                window.addEventListener('resize', function() {
                    chart.resize();
                });
            }
        });
   
        document.addEventListener('DOMContentLoaded', function() {
            // Like button animations
            const likeButtons = document.querySelectorAll('.like-button');
            
            likeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const icon = this.querySelector('i');
                    const countSpan = this.querySelector('span');
                    const currentCount = parseInt(countSpan.textContent);
                    
                    if (icon.classList.contains('ri-heart-line')) {
                        icon.classList.remove('ri-heart-line');
                        icon.classList.add('ri-heart-fill');
                        icon.classList.add('text-primary');
                        icon.classList.add('heart-animation');
                        countSpan.textContent = currentCount + 1;
                    } else {
                        icon.classList.remove('ri-heart-fill');
                        icon.classList.remove('text-primary');
                        icon.classList.add('ri-heart-line');
                        countSpan.textContent = currentCount - 1;
                    }
                    
                    setTimeout(() => {
                        icon.classList.remove('heart-animation');
                    }, 300);
                });
            });
        });
    
        document.addEventListener('DOMContentLoaded', function() {
            // Duration counter animations
            const durationElements = [
                { id: 'duration-1', target: 28 },
                { id: 'duration-2', target: 45 },
                { id: 'duration-3', target: 60 },
                { id: 'duration-4', target: 35 }
            ];
            
            const durationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const targetDuration = parseInt(element.getAttribute('data-target'));
                        const unit = element.getAttribute('data-unit') || 'min';
                        let current = 0;
                        
                        const timer = setInterval(() => {
                            current += 1;
                            if (current >= targetDuration) {
                                element.textContent = `${targetDuration} ${unit}`;
                                clearInterval(timer);
                            } else {
                                element.textContent = `${current} ${unit}`;
                            }
                        }, 50);
                        
                        durationObserver.unobserve(element);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            durationElements.forEach(item => {
                const element = document.getElementById(item.id);
                if (element) {
                    element.setAttribute('data-target', item.target);
                    element.setAttribute('data-unit', 'min');
                    durationObserver.observe(element);
                }
            });
        });
    
        