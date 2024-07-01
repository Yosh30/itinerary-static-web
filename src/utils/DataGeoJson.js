const DataGeoJson = {
  type: 'FeatureCollection',
  features: [

        // Hotels
        {
            type: 'Feature',
            properties: {
                description:
                    '<strong>Penginapan</strong><strong></strong>',
                icon: 'hotels',
            },
            geometry: {
                type: 'Point',
                coordinates: [139.77346882657466,35.672413700625384],
            },
        },

        // Lokasi Lomba
        {
            type: 'Feature',
            properties: {
                description:
                    '<strong>Lokasi Lomba</strong><strong></strong>',
                icon: 'choir',
            },
            geometry: {
                type: 'Point',
                coordinates: [139.78206829184214,35.656928834443],
            },
        },

    // Events
      {
          type: 'Feature',
          properties: {
              description:
                  '<strong>Sumidagawa Skytree and Fireworks</strong><p>27 Juli 2024, jam 19.00</p><p><a href="https://id.japantravel.com/tokyo/skytree-dan-kembang-api-sumidagawa/25650" target="_blank" title="Opens in a new window">Visit Web</a></p> <strong>FREE</strong>',
              icon: 'event-place',
          },
          geometry: {
              type: 'Point',
              coordinates: [139.80032771548227,35.71274367380517],
          },
      },
      {
        type: 'Feature',
        properties: {
            description:
                '<strong>Lantern Festival chidorigafuchi</strong><p><a href="https://id.japantravel.com/tokyo/lantern-festival-at-chidorigafuchi/69082" target="_blank" title="Opens in a new window">Lantern Festival</a> Every last Saturday in July, late Juli 2024, jam 19.00</p><strong>FREE , ¥1000/lantern</strong>',
            icon: 'event-place',
        },
        geometry: {
            type: 'Point',
            coordinates: [139.74924965362473,35.69127074675947],
        },

    },
    {
        type: 'Feature',
        properties: {
            description:
                '<strong>Shinbashi Koichi Festival 2024</strong><p><a href="https://id.japantravel.com/tokyo/shinbashi-koichi-festival-tokyo/14217" target="_blank" title="Opens in a new window">Shinbashi Koichi Festival</a> The festival area is set up around Shinbashi SL Plaza, which is in front of the JR Shinbashi train station & a second event area is located in nearby Sakurada Park.</p><strong>FREE</strong>',
            icon: 'event-place',
        },
        geometry: {
            type: 'Point',
            coordinates: [139.75747354641882,35.667198267975834], 
        },
    },

    {
        type: 'Feature',
        properties: {
            description:
                '<strong>Shinjuku Eisa Festival 2024</strong><p><a href="https://id.japantravel.com/tokyo/shinjuku-eisa-festival/69172" target="_blank" title="Opens in a new window">Shinjuku Eisa Festival</a> The festival takes place around the east exit area of Shinjuku Station. The station is served by various lines including the JR Yamanote Line, the Keio Line, the Odakyu Odawara Line, the Toei Oedo Line, and the Tokyo Metro Marunouchi Line.</p><strong>FREE</strong>',
            icon: 'event-place',
        },
        geometry: {
            type: 'Point',
            coordinates: [139.70145467356267,35.69130650366481], 
        },
    },
    
    {
        type: 'Feature',
        properties: {
            description:
                '<strong>Kagurazaka Festival 2024</strong><p><a href="https://id.japantravel.com/tokyo/the-48th-kagurazaka-matsuri/59354" target="_blank" title="Opens in a new window">Kagurazaka Festival</a> Take the JR Chuo Line to Iidabashi Station. The bottom of Kagurazaka Dori is only a short stroll from the station. To start from the top of Kagurazaka Dori, take the Oedo Subway Line to Ushigome-Kagurazaka Station</p><strong>FREE</strong>',
            icon: 'event-place',
        },
        geometry: {
            type: 'Point',
            coordinates: [139.7386056454727,35.70193870076196], 
        },
    },

    {
        type: 'Feature',
        properties: {
            description:
                '<strong>Wa No Akari X Hyakudan Kaidan 2024</strong><p><a href="https://id.japantravel.com/tokyo/wa-no-akari-x-hyakudan-kaidan-2019/59675" target="_blank" title="Opens in a new window">Wa No Akari X Hyakudan Kaidan</a> The event is held at Hotel Gajoens Hyakudan Kaidan building, located approximately three minutes on foot from Meguro Stations West Exit.</p><strong>¥1,300</strong>',
            icon: 'event-place',
        },
        geometry: {
            type: 'Point',
            coordinates: [139.71426472866372,35.63065030027809], 
        },
    },

    {
        type: 'Feature',
        properties: {
            description:
                '<strong>Toyosu Summer Festival 2024</strong><p><a href="https://id.japantravel.com/tokyo/toyosu-summer-festival/69983" target="_blank" title="Opens in a new window">Toyosu Summer Festival</a> The event takes place at Urban LaLaport Toyosu, which is located an easy three minutes on foot from Toyosu Station. The station is served by the Tokyo Metro Yurakucho Line and the Yurikamome Line.</p><strong>Free</strong>',
            icon: 'event-place',
        },
        geometry: {
            type: 'Point',
            coordinates: [139.79134502049732,35.65554528708492], 
        },
    },

    {
        type: 'Feature',
        properties: {
            description:
                '<strong>Haneda Matsuri 2024</strong><p><a href="https://en.japantravel.com/tokyo/haneda-matsuri/45966" target="_blank" title="Opens in a new window">Haneda Matsuri</a> 5 min walk from the Keikyu line “Ootorii” Station. 5 min walk from the Keikyu line “Anamori Inari Jinja” Station.</p><strong>Free</strong>',
            icon: 'event-place',
        },
        geometry: {
            type: 'Point',
            coordinates: [139.74052867871904,35.546760922291575], 
        },
    },



    // Place To Go
    {
    type: 'Feature',
        properties: {
            description:
                '<strong>Shibuya Crossings</strong><p><a href=".." target="_blank" title="Opens in a new window">Shibuya Crossing</a> hachiko statue, shibuya crossing</p> <strong>FREE</strong>',
            icon: 'togo-place',
        },
        geometry: {
            type: 'Point',
            coordinates: [139.70054304218075,35.65951671211131],
        },
    },
    {
    type: 'Feature',
        properties: {
            description:
                '<strong>Shibuya Yoyogikamizonocho 1-1</strong><p> <a href="https://en.japantravel.com/places/tokyo/meiji-jingu-shrine/8" target="_blank" title="Opens in a new window">meiji jingu shrine</a> Pigi Pagi</p> <strong>FREE</strong>',
            icon: 'togo-place',
        },
        geometry: {
            type: 'Point',
            coordinates: [139.70154974190277,35.67207017662193],
        },
    },
    {
        type: 'Feature',
            properties: {
                description:
                    '<strong>Sensoji Temple</strong><p> <a href="https://en.japantravel.com/places/tokyo/sensoji-temple/5" target="_blank" title="Opens in a new window">Sensoji Temple</a> Address: 2-chōme-3-1 Asakusa, Taito City, Tōkyō-to 111-0032</p> <strong>FREE</strong>',
                icon: 'togo-place',
            },
            geometry: {
                type: 'Point',
                coordinates: [139.79665530235548,35.714843444899145],
            },
        },

        // Tokyu Plaza Omotesando Harajuku
        {
            type: 'Feature',
                properties: {
                    description:
                        '<strong>Tokyu Plaza Omotesando Harajuku</strong><p> <a href="https://en.japantravel.com/places/tokyo/tokyu-plaza-omotesando-harajuku/103" target="_blank" title="Opens in a new window">Tokyu Plaza Omotesando Harajuku</a> Address: 4 Chome-30-3 Jingumae, Shibuya City, Tokyo 150-0001</p> <strong>FREE</strong>',
                    icon: 'togo-place',
                },
                geometry: {
                    type: 'Point',
                    coordinates: [139.76261197827438,35.6724191056548],
                },
            },

        // yasukuni shrine
        {
            type: 'Feature',
                properties: {
                    description:
                        '<strong>Yasukuni Shrine</strong><p> <a href="https://en.japantravel.com/places/tokyo/yasukuni-shrine/94" target="_blank" title="Opens in a new window">yasukuni shrine</a> Address: 3 Chome-1-1 Kudankita, Chiyoda City, Tokyo 102-8246</p> <strong>FREE</strong>',
                    icon: 'togo-place',
                },
                geometry: {
                    type: 'Point',
                    coordinates: [139.7438382731971,35.69420565207076],
                },
            },
    

        // Ueno Park
        {
            type: 'Feature',
                properties: {
                    description:
                        '<strong>Ueno Park</strong><p> <a href="https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno/en_index.html" target="_blank" title="Opens in a new window">Ueno Park</a> Address: Ueno-koen, Taito-ku, Tokyo. 3-chome Ikenohata, Taito-ku, Tokyo</p> <strong>FREE</strong>',
                    icon: 'togo-place',
                },
                geometry: {
                    type: 'Point',
                    coordinates: [139.77337756041925,35.714912446025],
                },
            },
    
        // Tokyo Skytree
        {
            type: 'Feature',
                properties: {
                    description:
                        '<strong>Tokyo Skytree</strong><p> <a href="https://en.japantravel.com/places/tokyo/tokyo-skytree/7" target="_blank" title="Opens in a new window">Tokyo Skytree</a> Address: 1-1-2 Oshiage, Sumida-Ku, Tokyo 131-0045 Japan</p> <strong>¥1800</strong>',
                    icon: 'togo-place',
                },
                geometry: {
                    type: 'Point',
                    coordinates: [139.8107528999079,35.71018274748306],
                },
            },
    
        // ghibli museum
        {
            type: 'Feature',
                properties: {
                    description:
                        '<strong>Ghibli Museum</strong><p> <a href="https://en.japantravel.com/places/tokyo/ghibli-museum/203" target="_blank" title="Opens in a new window">Ghibli Museum</a> Address: 1 Chome-1-83 Shimorenjaku, Mitaka, Tokyo 181-0013</p> <strong>¥1000</strong>',
                    icon: 'togo-place',
                },
                geometry: {
                    type: 'Point',
                    coordinates: [139.57508763549504,35.70493400269872],
                },
            },

        // Tokyo Dome 
        {
            type: 'Feature',
                properties: {
                    description:
                        '<strong>Tokyo Dome City</strong><p> <a href="https://en.japantravel.com/places/tokyo/tokyo-dome-city/181" target="_blank" title="Opens in a new window">Tokyo Dome City</a> Address: 1 Chome-3-61 Koraku, Bunkyo City, Tokyo 112-0004</p> <strong>FREE</strong>',
                    icon: 'togo-place',
                },
                geometry: {
                    type: 'Point',
                    coordinates: [139.75213007322535,35.70561209714155],
                },
            },

        // Shinjuku Golden Gai
        {
            type: 'Feature',
                properties: {
                    description:
                        '<strong>Shinjuku Golden Gai</strong><p> <a href="https://en.japantravel.com/places/tokyo/shinjuku-golden-gai/264" target="_blank" title="Opens in a new window">Shinjuku Golden Gai</a> Address: 1 Chome-1-6 Kabukicho, Shinjuku City, Tokyo 160-0021</p> <strong>FREE</strong>',
                    icon: 'togo-place',
                },
                geometry: {
                    type: 'Point',
                    coordinates: [139.70477946795106,35.694204498784465],
                },
            },

        // AKIHABARA
        {
            type: 'Feature',
                properties: {
                    description:
                        '<strong>AKIHABARA</strong><p> <a href="https://en.japantravel.com/tokyo/exploring-akihabara/21604" target="_blank" title="Opens in a new window">Akihabara</a> Address: Akihabara</p> <strong>FREE</strong>',
                    icon: 'togo-place',
                },
                geometry: {
                    type: 'Point',
                    coordinates: [139.7742247594672,35.69871629995853],
                },
            },


        // The Imperial Palace Running Route
        {
            type: 'Feature',
                properties: {
                    description:
                        '<strong>The Imperial Palace Running Route</strong><p> <a href="https://en.japantravel.com/tokyo/the-imperial-palace-running-route/45840" target="_blank" title="Opens in a new window">The Imperial Palace Running Route</a> Address: 1-1 Chiyoda, Chiyoda City, Tokyo 100-8111</p> <strong>FREE</strong>',
                    icon: 'togo-place',
                },
                geometry: {
                    type: 'Point',
                    coordinates: [139.7528684378721,35.68531637374883],
                },
            },


    // Anime Core

    // Kimi No Nawa
    {
        type: 'Feature',
            properties: {
                description:
                    '<strong>Tangga Kimi No Nawa, Suga Shrine, Shinjuku</strong><p> <a href="https://en.japantravel.com/tokyo/your-name-real-life-locations/45058" target="_blank" title="Opens in a new window">Mada kono sekai waaaa</a> gasss</p> <strong>FREE</strong>',
                icon: 'anime-place',
            },
            geometry: {
                type: 'Point',
                coordinates: [139.72249975899072,35.68532861613463,]
            },
        },

    //Taman Weathering With You
        {
            type: 'Feature',
                properties: {
                    description:
                        '<strong>Taman Weathering with you, Shiba park, Tokyo tower</strong><p> <a href="https://jw-webmagazine.com/weathering-with-you-best-anime-locations-in-tokyo/" target="_blank" title="Opens in a new window"></a> gasss</p> <strong>FREE</strong>',
                    icon: 'anime-place',
                },
                geometry: {
                    type: 'Point',
                    coordinates: [139.75053187417265,35.65711820027758]   
                },
            },


    //JJK Harajuku St
    {
        type: 'Feature',
            properties: {
                description:
                    '<strong>Jujutsu Kaisen , St. Harajuku</strong><p> <a href="https://japantour.xyz/2021/07/13/jujutsu-kaisen-real-life/#google_vignette" target="_blank" title="Opens in a new window"> Harajuku Station</a> Jujutsu in RL!</p> <strong>FREE</strong>',
                icon: 'anime-place',
            },
            geometry: {
                type: 'Point',
                coordinates: [139.70295772792545,35.670537955079226]   
            },
        },

    //shakuji river Shigatsu
    {
        type: 'Feature',
            properties: {
                description:
                    '<strong>Your Lie In April, Shakuji River</strong><p> <a href="" target="_blank" title="Opens in a new window"> Shakuji River</a> Your Lie In April in RL!</p> <strong>¥760 (pp)</strong>',
                icon: 'anime-place',
            },
            geometry: {
                type: 'Point',
                coordinates: [139.65345139317978,35.746219119232904]   
            },
        },

    //Haikyuu Tokyo Station 
    {
        type: 'Feature',
            properties: {
                description:
                    '<strong>Haikyuu!!, Tokyo Station</strong><p> <a href="" target="_blank" title="Opens in a new window"> Shakuji River</a> Haikyuu! RL</p> <strong>FREE</strong>',
                icon: 'anime-place',
            },
            geometry: {
                type: 'Point',
                coordinates: [139.76703330892977,35.68102942942723]   
            },
        },

    // Demon Slayer Asakusa
    {
        type: 'Feature',
            properties: {
                description:
                    '<strong>Demon Slayer!!, Asakusa</strong><p> <a href="" target="_blank" title="Opens in a new window"> Shakuji River</a> Demon Slayer! RL</p> <strong>FREE</strong>',
                icon: 'anime-place',
            },
            geometry: {
                type: 'Point',
                coordinates: [139.7957029367252,35.71852754461243] 
            },
        },



  ],
};

export default DataGeoJson;
