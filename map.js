ymaps.ready(init);

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function init() {
    var map = new ymaps.Map("map", {
        center: [59.93, 30.30],
        zoom: 11
    });

    window.namesEnabled = false;
    window.planEnabled = true;

    function draw() {
        if (namesEnabled) {
            if (planEnabled) {
                var content = full_names;
            } else {
                var content = actual_names;
            }
        } else {
            if (planEnabled) {
                var content = full_no_names;
            } else {
                var content = actual_no_names;
            }
        }

        objectManager = new ymaps.ObjectManager({ clusterize: false });
        objectManager.add(content);
        map.geoObjects.removeAll();
        map.geoObjects.add(objectManager);
    }

    var namesButton = new ymaps.control.Button({
        data: {
            content: 'Названия',
            title: 'Отображать названия станций'
        },
        state: {
            selected: false
        }
    });
    namesButton.events.add('press', function (e) {
        window.namesEnabled = !namesButton.state._data.selected;
        draw();
    });
    map.controls.add(namesButton, { float: 'left' });

    var planButton = new ymaps.control.Button({
        data: {
            content: 'План',
            title: 'Строящиеся и планируемые линии и станции'
        },
        state: {
            selected: false
        }
    });
    planButton.events.add('press', function (e) {
        window.planEnabled = !planButton.state._data.selected;
        draw();
    });
    map.controls.add(planButton, { float: 'left' });

    var objectManager = new ymaps.ObjectManager({ clusterize: false });
    var currentId = 0;

    var full_no_names = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [60.0502, 30.4426],
                        [60.0350, 30.4184],
                        [60.0127, 30.3961],
                        [60.0088, 30.3709],
                        [59.9995, 30.3664],
                        [59.9848, 30.3444],
                        [59.9710, 30.3474],
                        [59.9567, 30.3557],
                        [59.9445, 30.3600],
                        [59.9313, 30.3582],
                        [59.9277, 30.3474],
                        [59.9217, 30.3328],
                        [59.9164, 30.3187],
                        [59.9074, 30.2999],
                        [59.9011, 30.2750],
                        [59.8797, 30.2619],
                        [59.8673, 30.2614],
                        [59.8507, 30.2684],
                        [59.8419, 30.2521]
                    ]
                },
                options: {
                    strokeColor: "#da2128",
                    strokeWidth: 4
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [60.0670, 30.3341],
                        [60.0514, 30.3327],
                        [60.0371, 30.3217],
                        [60.0166, 30.3157],
                        [60.0025, 30.2967],
                        [59.9854, 30.3008],
                        [59.9664, 30.3112],
                        [59.9561, 30.3188],
                        [59.9348, 30.3304],
                        [59.9268, 30.3183],
                        [59.9164, 30.3187],
                        [59.9063, 30.3175],
                        [59.8916, 30.3180],
                        [59.8791, 30.3187],
                        [59.8663, 30.3218],
                        [59.8519, 30.3224],
                        [59.8332, 30.3493],
                        [59.8298, 30.3755]
                    ]
                },
                options: {
                    strokeColor: "#0078bf",
                    strokeWidth: 4
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [59.9880, 30.2028],
                        [59.9718, 30.2121],
                        [59.9484, 30.2348],
                        [59.9425, 30.2782],
                        [59.9348, 30.3304],
                        [59.9313, 30.3582],
                        [59.9239, 30.3844],
                        [59.8966, 30.4240],
                        [59.8773, 30.4419],
                        [59.8651, 30.4706],
                        [59.8486, 30.4580],
                        [59.8309, 30.5006]
                    ]
                },
                options: {
                    strokeColor: "#48b85e",
                    strokeWidth: 4
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [59.9268, 30.3183],
                        [59.9277, 30.3474],
                        [59.9207, 30.3556],
                        [59.9239, 30.3844],
                        [59.9289, 30.4117],
                        [59.9324, 30.4395],
                        [59.9199, 30.4670],
                        [59.9074, 30.4836]
                    ]
                },
                options: {
                    strokeColor: "#f58220",
                    strokeWidth: 4
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [60.0085, 30.2589],
                        [59.9894, 30.2554],
                        [59.9718, 30.2596],
                        [59.9610, 30.2924],
                        [59.9502, 30.2885],
                        [59.9360, 30.3153],
                        [59.9268, 30.3183],
                        [59.9217, 30.3328],
                        [59.9147, 30.3499],
                        [59.8960, 30.3584],
                        [59.8837, 30.3698],
                        [59.8702, 30.3794],
                        [59.8566, 30.3956],
                        [59.8399, 30.4110],
                        [59.8200, 30.4330]
                    ]
                },
                options: {
                    strokeColor: "#9350a0",
                    strokeWidth: 4
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [59.9324, 30.2607],
                        [59.9263, 30.2970],
                        [59.9268, 30.3183]
                    ]
                },
                options: {
                    strokeColor: "#f58220",
                    strokeWidth: 4,
                    strokeStyle: 'dash'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [59.8797, 30.2619],
                        [59.8601, 30.2348]
                    ]
                },
                options: {
                    strokeColor: "#8d5b2d",
                    strokeWidth: 4,
                    strokeStyle: 'dash'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [60.0278, 30.2361],
                        [60.0085, 30.2117],
                        [59.9880, 30.2028]
                    ]
                },
                options: {
                    strokeColor: "#48b85e",
                    strokeWidth: 4,
                    strokeStyle: 'dot'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [60.0278, 30.2361],
                        [60.0085, 30.2589]
                    ]
                },
                options: {
                    strokeColor: "#9350a0",
                    strokeWidth: 4,
                    strokeStyle: 'dot'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [59.9074, 30.4836],
                        [59.8849, 30.4889]
                    ]
                },
                options: {
                    strokeColor: "#f58220",
                    strokeWidth: 4,
                    strokeStyle: 'dot'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [59.8797, 30.2619],
                        [59.8755, 30.2939],
                        [59.8916, 30.3180],
                        [59.9051, 30.3409],
                        [59.9147, 30.3499]
                    ]
                },
                options: {
                    strokeColor: "#8d5b2d",
                    strokeWidth: 4,
                    strokeStyle: 'dot'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [59.8601, 30.2348],
                        [59.8561, 30.2026],
                        [59.8613, 30.1796],
                        [59.8469, 30.1470],
                        [59.8252, 30.1462]
                    ]
                },
                options: {
                    strokeColor: "#8d5b2d",
                    strokeWidth: 4,
                    strokeStyle: 'dot'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [59.8419, 30.2521],
                        [59.8343, 30.2205],
                        [59.8330, 30.1945]
                    ]
                },
                options: {
                    strokeColor: "#da2128",
                    strokeWidth: 4,
                    strokeStyle: 'dot'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [59.9324, 30.2607],
                        [59.9425, 30.2782],
                        [59.9502, 30.2885],
                        [59.9664, 30.3112],
                        [59.9801, 30.3251],
                        [59.9848, 30.3444]
                    ]
                },
                options: {
                    strokeColor: "#999999",
                    strokeWidth: 4,
                    strokeStyle: 'dot'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [60.0502, 30.4426]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Девяткино'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [60.0350, 30.4184]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Гражданский проспект'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [60.0127, 30.3961]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Академическая'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [60.0088, 30.3709]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Политехническая'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9995, 30.3664]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Площадь Мужества'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9848, 30.3444]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' },
                        { weight: 1, color: '#999999' }
                    ],
                    iconContent: '',
                    hintContent: 'Лесная'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9710, 30.3474]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Выборгская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9567, 30.3557]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Площадь Ленина'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9445, 30.3600]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Чернышевская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9277, 30.3474]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' },
                        { weight: 1, color: '#f58220' }
                    ],
                    iconContent: '',
                    hintContent: 'Владимирская/Достоевская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9313, 30.3582]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' },
                        { weight: 1, color: '#48b85e' }
                    ],
                    iconContent: '',
                    hintContent: 'Площадь Восстания/Маяковская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9217, 30.3328]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' },
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Пушкинская/Звенигородская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9164, 30.3187]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' },
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Технологический институт'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9074, 30.2999]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Балтийская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9011, 30.2750]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Нарвская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8797, 30.2619]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' },
                        { weight: 1, color: '#8d5b2d' }
                    ],
                    iconContent: '',
                    hintContent: 'Кировский завод/Путиловская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8673, 30.2614]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Автово'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8507, 30.2684]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Ленинский проспект'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8419, 30.2521]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Проспект Ветеранов'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [60.0670, 30.3341]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Парнас'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [60.0514, 30.3327]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Проспект Просвещения'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [60.0371, 30.3217]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Озерки'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [60.0166, 30.3157]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Удельная'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [60.0025, 30.2967]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Пионерская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9854, 30.3008]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Чёрная речка'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9664, 30.3112]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' },
                        { weight: 1, color: '#999999' }
                    ],
                    iconContent: '',
                    hintContent: 'Петроградская/Ботаническая'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9561, 30.3188]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Горьковская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9348, 30.3304]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' },
                        { weight: 1, color: '#48b85e' }
                    ],
                    iconContent: '',
                    hintContent: 'Невский проспект/Гостиный двор'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9268, 30.3183]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' },
                        { weight: 1, color: '#f58220' },
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Сенная площадь/Спасская/Садовая'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9063, 30.3175]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Фрунзенская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8916, 30.3180]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' },
                        { weight: 1, color: '#8d5b2d' }
                    ],
                    iconContent: '',
                    hintContent: 'Московские ворота/Заставская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8791, 30.3187]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Электросила'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8663, 30.3218]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Парк Победы'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8519, 30.3224]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Московская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8332, 30.3493]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Звёздная'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8298, 30.3755]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#0078bf' }
                    ],
                    iconContent: '',
                    hintContent: 'Купчино'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9880, 30.2028]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#48b85e' }
                    ],
                    iconContent: '',
                    hintContent: 'Беговая'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9718, 30.2121]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#48b85e' }
                    ],
                    iconContent: '',
                    hintContent: 'Новокрестовская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9484, 30.2348]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#48b85e' }
                    ],
                    iconContent: '',
                    hintContent: 'Приморская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9425, 30.2782]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#48b85e' },
                        { weight: 1, color: '#999999' }
                    ],
                    iconContent: '',
                    hintContent: 'Василеостровская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9239, 30.3844]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#48b85e' },
                        { weight: 1, color: '#f58220' }
                    ],
                    iconContent: '',
                    hintContent: 'Площадь Александра Невского'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8966, 30.4240]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#48b85e' }
                    ],
                    iconContent: '',
                    hintContent: 'Елизаровская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8773, 30.4419]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#48b85e' }
                    ],
                    iconContent: '',
                    hintContent: 'Ломоносовская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8651, 30.4706]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#48b85e' }
                    ],
                    iconContent: '',
                    hintContent: 'Пролетарская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8486, 30.4580]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#48b85e' }
                    ],
                    iconContent: '',
                    hintContent: 'Обухово'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8309, 30.5006]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#48b85e' }
                    ],
                    iconContent: '',
                    hintContent: 'Рыбацкое'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9207, 30.3556]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#f58220' }
                    ],
                    iconContent: '',
                    hintContent: 'Лиговский проспект'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9289, 30.4117]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#f58220' }
                    ],
                    iconContent: '',
                    hintContent: 'Новочеркасская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9324, 30.4395]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#f58220' }
                    ],
                    iconContent: '',
                    hintContent: 'Ладожская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9199, 30.4670]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#f58220' }
                    ],
                    iconContent: '',
                    hintContent: 'Проспект Большевиков'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9074, 30.4836]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#f58220' }
                    ],
                    iconContent: '',
                    hintContent: 'Улица Дыбенко'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [60.0085, 30.2589]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Комендантский проспект'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9894, 30.2554]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Старая Деревня'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9718, 30.2596]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Крестовский остров'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9610, 30.2924]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Чкаловская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9502, 30.2885]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#9350a0' },
                        { weight: 1, color: '#999999' }
                    ],
                    iconContent: '',
                    hintContent: 'Спортивная'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9360, 30.3153]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Адмиралтейская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9147, 30.3499]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#9350a0' },
                        { weight: 1, color: '#8d5b2d' }
                    ],
                    iconContent: '',
                    hintContent: 'Обводный канал/Каретная'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8960, 30.3584]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Волковская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8837, 30.3698]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Бухарестская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8702, 30.3794]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Международная'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8566, 30.3956]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Проспект Славы'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8399, 30.4110]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Дунайская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8200, 30.4330]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Шушары'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9324, 30.2607]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#f58220' },
                        { weight: 1, color: '#999999' }
                    ],
                    iconContent: '',
                    hintContent: 'Горный институт/Большой проспект'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9263, 30.2970]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#f58220' }
                    ],
                    iconContent: '',
                    hintContent: 'Театральная'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8601, 30.2348]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#8d5b2d' }
                    ],
                    iconContent: '',
                    hintContent: 'Юго-Западная'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [60.0278, 30.2361]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#48b85e' },
                        { weight: 1, color: '#9350a0' }
                    ],
                    iconContent: '',
                    hintContent: 'Планерная/Шуваловский проспект'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [60.0085, 30.2117]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#48b85e' }
                    ],
                    iconContent: '',
                    hintContent: 'Богатырская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8849, 30.4889]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#f58220' }
                    ],
                    iconContent: '',
                    hintContent: 'Кудрово'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8755, 30.2939]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#8d5b2d' }
                    ],
                    iconContent: '',
                    hintContent: 'Броневая'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9051, 30.3409]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#8d5b2d' }
                    ],
                    iconContent: '',
                    hintContent: 'Боровая'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8561, 30.2026]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#8d5b2d' }
                    ],
                    iconContent: '',
                    hintContent: 'Брестская'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8613, 30.1796]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#8d5b2d' }
                    ],
                    iconContent: '',
                    hintContent: 'Улица Доблести'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8469, 30.1470]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#8d5b2d' }
                    ],
                    iconContent: '',
                    hintContent: 'Петергофское шоссе'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8252, 30.1462]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#8d5b2d' }
                    ],
                    iconContent: '',
                    hintContent: 'Сосновая поляна'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8343, 30.2205]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Александрино'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.8330, 30.1945]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#da2128' }
                    ],
                    iconContent: '',
                    hintContent: 'Проспект Маршала Жукова'
                }
            },
            {
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: [59.9801, 30.3251]
                },
                options: {
                    strokeColor: "#000000",
                    iconLayout: "default#pieChart",
                    iconPieChartRadius: 8,
                    iconPieChartCoreRadius: 4
                },
                properties: {
                    data: [
                        { weight: 1, color: '#999999' }
                    ],
                    iconContent: '',
                    hintContent: 'Кантемировская'
                }
            }
        ]
    }

    var full_names = {
        type: 'FeatureCollection',
        features: full_no_names.features.map(function (feature) {
            if (feature.id > 13) {
                var f = {
                    type: 'Feature',
                    id: feature.id,
                    geometry: feature.geometry,
                    options: feature.options,
                    properties: {
                        data: feature.properties.data,
                        iconContent: feature.properties.hintContent,
                        hintContent: feature.properties.hintContent
                    }
                }
            } else {
                var f = feature;
            }
            return f
        })
    };

    halfStations = [19, 29, 39, 44, 53, 69, 71];
    halfNames = {
        19: 'Лесная',
        29: 'Кировский завод',
        39: 'Петроградская',
        44: 'Московские ворота',
        53: 'Василеостровская',
        69: 'Спортивная',
        71: 'Обводный канал'
    }

    var actual_names = {
        type: 'FeatureCollection',
        features: full_no_names.features.map(function (feature) {
            if (feature.id > 13) {
                var f = {
                    type: 'Feature',
                    id: feature.id,
                    geometry: feature.geometry,
                    options: feature.options,
                    properties: {
                        data: (halfStations.includes(feature.id) ? [feature.properties.data[0]] : feature.properties.data),
                        iconContent: (halfStations.includes(feature.id) ? halfNames[feature.id] : feature.properties.hintContent),
                        hintContent: (halfStations.includes(feature.id) ? halfNames[feature.id] : feature.properties.hintContent)
                    }
                }
            } else {
                var f = feature;
            }
            return f
        }).filter(feature => (feature.id < 5 || (feature.id > 13 && feature.id < 78)))
    };

    var actual_no_names = {
        type: 'FeatureCollection',
        features: full_no_names.features.map(function (feature) {
            if (feature.id > 13) {
                var f = {
                    type: 'Feature',
                    id: feature.id,
                    geometry: feature.geometry,
                    options: feature.options,
                    properties: {
                        data: (halfStations.includes(feature.id) ? [feature.properties.data[0]] : feature.properties.data),
                        iconContent: '',
                        hintContent: (halfStations.includes(feature.id) ? halfNames[feature.id] : feature.properties.hintContent)
                    }
                }
            } else {
                var f = feature;
            }
            return f
        }).filter(feature => (feature.id < 5 || (feature.id > 13 && feature.id < 78)))
    };

    objectManager.add(actual_no_names);
    map.geoObjects.add(objectManager);
}