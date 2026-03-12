var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7694368594355536,
          "pitch": 0.24628042597328736,
          "rotation": 1.5707963267948966,
          "target": "1-formal-living"
        },
        {
          "yaw": 1.430871199888995,
          "pitch": 0.1893281273176335,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 1.4858504257212912,
          "pitch": 0.046439929527286594,
          "rotation": 4.71238898038469,
          "target": "4-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-formal-living",
      "name": "Formal Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7415798450753321,
          "pitch": 0.1533084015327688,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -3.0979991552530937,
          "pitch": 0.20286189498090224,
          "rotation": 1.5707963267948966,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.13970161201872244,
          "pitch": 0.09694737002779341,
          "rotation": 3.141592653589793,
          "target": "4-family-living"
        },
        {
          "yaw": 0.4516294345031735,
          "pitch": 0.018077226778087763,
          "rotation": 1.5707963267948966,
          "target": "8-master-bedroom"
        },
        {
          "yaw": -0.37373623814168155,
          "pitch": 0.08703348193617266,
          "rotation": 0,
          "target": "11-parents-bedroom-entry"
        },
        {
          "yaw": 0.7568810327229833,
          "pitch": 0.1402622571486436,
          "rotation": 1.5707963267948966,
          "target": "3-wash-area"
        },
        {
          "yaw": -2.4979595111392516,
          "pitch": 0.34613417047217254,
          "rotation": 10.995574287564278,
          "target": "5-main-kitchen"
        },
        {
          "yaw": -2.176210958759567,
          "pitch": 0.14735610428596146,
          "rotation": 1.5707963267948966,
          "target": "6-utility"
        },
        {
          "yaw": 2.7099405370555925,
          "pitch": 0.34263219474456896,
          "rotation": 0,
          "target": "1-formal-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wash-area",
      "name": "wash area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9148163818857036,
          "pitch": 0.17995339509320019,
          "rotation": 1.5707963267948966,
          "target": "4-family-living"
        },
        {
          "yaw": -1.3501977493222626,
          "pitch": 0.04049093150051952,
          "rotation": 1.5707963267948966,
          "target": "11-parents-bedroom-entry"
        },
        {
          "yaw": -1.5553417154571214,
          "pitch": 0.032692519734695225,
          "rotation": 4.71238898038469,
          "target": "12-kids-bedroom"
        },
        {
          "yaw": -1.6997367075974772,
          "pitch": 0.21986492558808735,
          "rotation": 4.71238898038469,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-family-living",
      "name": "Family Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4579940029924288,
          "pitch": 0.1581526422115047,
          "rotation": 3.141592653589793,
          "target": "2-dining"
        },
        {
          "yaw": -1.3161414528516193,
          "pitch": 0.03974979443670179,
          "rotation": 0,
          "target": "5-main-kitchen"
        },
        {
          "yaw": -1.7239854395974064,
          "pitch": 0.05367058281652959,
          "rotation": 0,
          "target": "1-formal-living"
        },
        {
          "yaw": -0.7727616891899416,
          "pitch": 0.14000038730286235,
          "rotation": 0,
          "target": "12-kids-bedroom"
        },
        {
          "yaw": 2.4260867273986824,
          "pitch": 0.1425683253844312,
          "rotation": 0,
          "target": "8-master-bedroom"
        },
        {
          "yaw": -0.6131224421822026,
          "pitch": 0.04569926634997934,
          "rotation": 1.5707963267948966,
          "target": "11-parents-bedroom-entry"
        },
        {
          "yaw": -2.1631555532539934,
          "pitch": 0.2226179696797157,
          "rotation": 10.995574287564278,
          "target": "3-wash-area"
        },
        {
          "yaw": -2.1431718235508086,
          "pitch": 0.07579921230793474,
          "rotation": 0,
          "target": "13-play-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-main-kitchen",
      "name": "Main Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5046400615354232,
          "pitch": 0.22861728564944173,
          "rotation": 0,
          "target": "6-utility"
        },
        {
          "yaw": -2.653861687142477,
          "pitch": 0.2520244825819997,
          "rotation": 3.141592653589793,
          "target": "2-dining"
        },
        {
          "yaw": -3.0071875364978595,
          "pitch": 0.12224850734811632,
          "rotation": 0,
          "target": "4-family-living"
        },
        {
          "yaw": -2.7726487342570056,
          "pitch": 0.05486595978418762,
          "rotation": 1.5707963267948966,
          "target": "8-master-bedroom"
        },
        {
          "yaw": -2.5415934521814414,
          "pitch": 0.05006383829960015,
          "rotation": 0.7853981633974483,
          "target": "3-wash-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-utility",
      "name": "Utility",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4694482478427009,
          "pitch": 0.34917853476942007,
          "rotation": 1.5707963267948966,
          "target": "5-main-kitchen"
        },
        {
          "yaw": 2.592557764172801,
          "pitch": 0.27235671790795735,
          "rotation": 4.71238898038469,
          "target": "7-maids-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-maids-room",
      "name": "Maid's Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3179573194434955,
          "pitch": 0.06460990347479445,
          "rotation": 5.497787143782138,
          "target": "6-utility"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0939087959404912,
          "pitch": 0.07043109761354494,
          "rotation": 4.71238898038469,
          "target": "9-master-walking-wardrobe"
        },
        {
          "yaw": -0.715721626954501,
          "pitch": 0.05431364811924411,
          "rotation": 1.5707963267948966,
          "target": "4-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-walking-wardrobe",
      "name": "Master walking wardrobe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8149318680530335,
          "pitch": 0.2990749829441022,
          "rotation": 3.141592653589793,
          "target": "8-master-bedroom"
        },
        {
          "yaw": 2.0500122543989603,
          "pitch": 0.27592170542954264,
          "rotation": 5.497787143782138,
          "target": "4-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-parents-bedroom",
      "name": "Parents Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3251818154987287,
          "pitch": 0.19112009915513894,
          "rotation": 3.141592653589793,
          "target": "11-parents-bedroom-entry"
        },
        {
          "yaw": 1.1527685855443242,
          "pitch": 0.1024569343149988,
          "rotation": 0,
          "target": "4-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-parents-bedroom-entry",
      "name": "Parents Bedroom Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.733646214882466,
          "pitch": 0.314674136265527,
          "rotation": 2.356194490192345,
          "target": "10-parents-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-kids-bedroom",
      "name": "Kids Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.342480270720019,
          "pitch": 0.1273715002239868,
          "rotation": 4.71238898038469,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-play-room",
      "name": "Play Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3985333417779104,
          "pitch": 0.11443299464575674,
          "rotation": 12.566370614359176,
          "target": "3-wash-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
