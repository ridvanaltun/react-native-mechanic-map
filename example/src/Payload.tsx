import {
  MechanicMapPayload,
  LocationActions,
  LocationTypes,
} from 'react-native-mechanic-map';

const Payload: MechanicMapPayload[] = [
  {
    show: false,
    locations: [
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/175_original.jpg?1360770708',
        type: LocationTypes.STORE,
        title: 'Dry Center',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE3_store_09',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/4851_original.jpg?1549374434',
        type: LocationTypes.STORE,
        title: 'Jolly Tur',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE3_store_10',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/d5ca20b8-5ac1-4eed-ae34-b211271d3b89.png?1553518736160',
        type: LocationTypes.STORE,
        title: 'Kuzen Saat',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE3_store_08',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/70_original.jpg?1400145899',
        type: LocationTypes.STORE,
        title: 'Migros',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE3_store_11',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/0b85fcb3-b0f8-4ed6-aa14-3c8247996778.png?1553518800306',
        type: LocationTypes.STORE,
        title: 'Potin Lostra',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE3_store_06',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/24e7a48c-6477-41a7-a857-7d86c97e4b1e.png?1633616977060',
        type: LocationTypes.STORE,
        title: 'Sırlıwax Oto Yıkama',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE3_store_05',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/d3a708d9-6a9a-453f-957a-3df538e7e989.png?1553518725438',
        type: LocationTypes.STORE,
        title: 'Terzim Your Style',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE3_store_07',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/BJ-Pz8f_N-main.png?1553257049117',
        type: LocationTypes.SERVICE,
        title: 'Disabled WC',
        id: 'KE3_disabledwc_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/BJcHQUf_V-main.png?1553257282205',
        type: LocationTypes.SERVICE,
        title: 'Security',
        id: 'KE3_security_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/r1CLXLM_E-main.png?1553257301998',
        type: LocationTypes.SERVICE,
        title: 'Dry Cleaner',
        id: 'KE3_drycenter_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/S1l97UM_4-main.png?1553257351849',
        type: LocationTypes.SERVICE,
        title: 'Shoe Shine',
        id: 'KE3_lostra_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/SJBY8M8_E-main.png?1553503868939',
        type: LocationTypes.SERVICE,
        title: 'WC',
        id: 'KE3_wc_01',
      },
    ],
    id: 'level--3',
    mapHeight: 1500,
    map: '<?xml version="1.0" encoding="utf-8"?>\r\n<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\r\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t width="3000px" height="1500px" viewBox="0 0 3000 1500" enable-background="new 0 0 3000 1500" xml:space="preserve">\r\n<g id="floorbackup">\r\n\t<path fill="#D6D6D6" stroke="#494949" stroke-miterlimit="10" d="M1582,292.1L1044.5,42.5H832L0,551.1v80.5L471.3,1415H3000V292.1\r\n\t\tH1582z M997.8,753H871.5V433.6h126.3V753z"/>\r\n\t<polygon fill="#EDEDED" stroke="#494949" stroke-miterlimit="10" points="997.8,433.6 997.8,67.4 830.8,67.4 14,562.9 14,624.9 \r\n\t\t486.4,1398.5 997.8,1398.5 997.8,753 871.5,753 871.5,433.6 \t"/>\r\n\t<path id="stores_1_" fill="#60605F" d="M883.3,75v214.3H750.9V381h34v470.6H159.4L136.3,817l0,0L21.6,632.4v-61.9L838.4,75H883.3z\r\n\t\t M761.2,299.7h122.1v70.4H761.2V299.7z M879,860.8V910h69.8v64.4h56.5V860.8H879z M879,919.7h60.1v54.7H879V919.7z M879,985.3\r\n\t\th126.3v49.8H879V985.3z M879,1046h126.3v52.2H879V1046z M2832.6,805.5h148.8V1295h-148.8V805.5z M879,1159.6h126.3v106.6H879\r\n\t\tV1159.6z M784.9,860.8H161l10.9,17.9L494,1406.1h227.1v-162.8h63.8V860.8L784.9,860.8z M759.4,1282.2h246v123.9h-246V1282.2z\r\n\t\t M1004.1,441.1h-52.2v-58.3h-31v-26.1h83.2L1004.1,441.1L1004.1,441.1z"/>\r\n</g>\r\n<g id="stores">\r\n\t<path id="KE3_store_11" fill="#FBC005" d="M875.7,67.4v214.3H743.3v91.7h34v470.7H151.8l-23.1-34.6l0,0L14,624.9v-62L830.8,67.4\r\n\t\tH875.7z"/>\r\n\t<path id="KE3_store_10" fill="#FBC005" d="M753.6,292.1h122.1v70.4H753.6V292.1z"/>\r\n\t<path id="KE3_store_09" fill="#FBC005" d="M871.5,853.2v49.2h69.8v64.4h56.5V853.2H871.5z"/>\r\n\t<path id="KE3_store_08" fill="#FBC005" d="M871.5,912.1h60.1v54.7h-60.1V912.1z"/>\r\n\t<path id="KE3_store_07" fill="#FBC005" d="M871.5,977.7h126.3v49.8H871.5V977.7z"/>\r\n\t<path id="KE3_store_06" fill="#FBC005" d="M871.5,1038.4h126.3v52.2H871.5V1038.4z"/>\r\n\t<path id="KE3_store_05" fill="#FBC005" d="M2825,797.9h148.8v489.5H2825V797.9z"/>\r\n\t<path id="KE3_store_04" fill="#FBC005" d="M871.5,1152h126.3v106.6H871.5V1152z"/>\r\n\t<path id="KE3_store_03" fill="#FBC005" d="M777.3,853.2H153.4l10.9,17.9l322.1,527.4h227.2v-162.7h63.7V853.2z"/>\r\n\t<path id="KE3_store_02" fill="#FBC005" d="M751.8,1274.7h246v123.9h-246V1274.7z"/>\r\n\t<path id="KE3_store_01" fill="#FBC005" d="M996.6,433.6h-52.3v-58.3h-30.9v-26.2h83.2V433.6z"/>\r\n</g>\r\n<g id="services">\r\n\t<path id="KE3_wc_01" fill="#CE9E15" d="M913.4,183.4h83.2v64.7h-83.2V183.4z"/>\r\n\t<path id="KE3_disabledwc_01" fill="#CE9E15" d="M913.4,261.9h83.2v65.4h-83.2V261.9z"/>\r\n\t<path id="KE3_lostra_01" fill="#FBC005" d="M1036.1,1081.5h-21v-43.1h21V1081.5z"/>\r\n\t<path id="KE3_drycenter_01" fill="#FBC005" d="M1035.3,932.2h-21v-43.1h21V932.2z"/>\r\n\t<path id="KE3_security_01" fill="#FBC005" d="M864.3,718h-21v-43.1h21V718z"/>\r\n</g>\r\n<g id="nopointer">\r\n\t<path fill="#161616" d="M1253.3,1404.3v-13.2h-148.8v13.2H1253.3z M1253.2,1282.6v-13.2h-148.8v13.2H1253.2z M1178.8,918.1v473h5\r\n\t\tv-473H1178.8z M1177.3,140.1v728.8h5V140.1H1177.3z M1421.5,220.8v648.1h5V223.3L1421.5,220.8z M1113.2,1354.9v1.4h133.2v-1.4\r\n\t\tH1113.2z M1113.2,1317.8v1.4h133.2v-1.4H1113.2z M1253.2,1162.3v-13.2h-148.8v13.2H1253.2z M1113.2,1234.6v1.4h133.2v-1.4H1113.2z\r\n\t\t M1113.2,1197.4v1.4h133.2v-1.4H1113.2z M1253.2,1040.7v-13.2h-148.8v13.2H1253.2z M1113.2,1113v1.4h133.2v-1.4H1113.2z\r\n\t\t M1113.2,1075.9v1.4h133.2v-1.4H1113.2z M1253.2,918.1v-13.2h-148.8v13.2H1253.2z M1113.2,990.4v1.4h133.2v-1.4H1113.2z\r\n\t\t M1113.2,953.2v1.4h133.2v-1.4H1113.2z M1253.2,675.1v-13.2h-148.8v13.2H1253.2z M1113.2,747.4v1.4h133.2v-1.4H1113.2z\r\n\t\t M1113.2,710.3v1.4h133.2v-1.4H1113.2z M1253.2,554.4v-13.2h-148.8v13.2H1253.2z M1113.2,626.7v1.4h133.2v-1.4H1113.2z\r\n\t\t M1113.2,589.6v1.4h133.2v-1.4H1113.2z M1113.2,504.5v1.4h133.2v-1.4H1113.2z M1253.2,433V297h-148.8v136H1253.2z M996.6,170.8\r\n\t\tV67.4H888.1v103.4H996.6z M1113.2,953.8v0.7h133.2v-0.7H1113.2z M1113.2,468.1v1.4h133.2v-1.4H1113.2z M1253.2,798.8v-13.2h-148.8\r\n\t\tv13.2H1253.2z M1113.2,833.9v1.4h133.2v-1.4H1113.2z M1496,1404.3v-13.2h-148.8v13.2H1496z M1495.9,1282.6v-13.2h-148.8v13.2\r\n\t\tH1495.9z M1421.5,918.1v473h5v-473H1421.5z M1355.9,1354.9v1.4h133.2v-1.4H1355.9z M1355.9,1317.8v1.4h133.2v-1.4H1355.9z\r\n\t\t M1495.9,1162.3v-13.2h-148.8v13.2H1495.9z M1355.9,1234.6v1.4h133.2v-1.4H1355.9z M1355.9,1197.4v1.4h133.2v-1.4H1355.9z\r\n\t\t M1495.9,1040.7v-13.2h-148.8v13.2H1495.9z M1355.9,1113v1.4h133.2v-1.4H1355.9z M1355.9,1075.9v1.4h133.2v-1.4H1355.9z\r\n\t\t M1495.9,918.1v-13.2h-148.8v13.2H1495.9z M1355.9,990.4v1.4h133.2v-1.4H1355.9z M1355.9,953.2v1.4h133.2v-1.4H1355.9z\r\n\t\t M1495.9,675.1v-13.2h-148.8v13.2H1495.9z M1355.9,747.4v1.4h133.2v-1.4H1355.9z M1355.9,710.3v1.4h133.2v-1.4H1355.9z\r\n\t\t M1495.9,554.4v-13.2h-148.8v13.2H1495.9z M1355.9,626.7v1.4h133.2v-1.4H1355.9z M1355.9,589.6v1.4h133.2v-1.4H1355.9z\r\n\t\t M1355.9,504.5v1.4h133.2v-1.4H1355.9z M1495.9,433v-13.2h-148.8V433H1495.9z M1495.9,312.3V299h-148.8v13.2h148.8V312.3z\r\n\t\t M1355.9,384.6v1.4h133.2v-1.4H1355.9z M1355.9,347.4v1.4h133.2v-1.4H1355.9z M1355.9,262.4v1.4h133.2v-1.4H1355.9z M1355.9,224.1\r\n\t\tv1.4h65.7v-1.4H1355.9z M1254.2,190.1v-13.2h-148.8v13.2H1254.2z M1114.1,262.4v1.4h133.2v-1.4H1114.1z M1114.1,225.2v1.4h133.2\r\n\t\tv-1.4H1114.1z M1114.1,140.1v1.4h133.2v-1.4H1114.1z M1114.1,101.9v1.4h40.5v-1.4H1114.1z M1355.9,953.8v0.7h133.2v-0.7H1355.9z\r\n\t\t M1355.9,468.1v1.4h133.2v-1.4H1355.9z M1495.9,798.8v-13.2h-148.8v13.2H1495.9z M1355.9,833.9v1.4h133.2v-1.4H1355.9z M1667,433\r\n\t\tv435.9h5V434.7L1667,433z M1741.4,1404.3v-13.2h-148.8v13.2H1741.4z M1741.4,1282.6v-13.2h-148.8v13.2H1741.4z M1667,918.1v473h5\r\n\t\tv-473H1667z M1601.3,1354.9v1.4h133.2v-1.4H1601.3z M1601.3,1317.8v1.4h133.2v-1.4H1601.3z M1741.4,1162.3v-13.2h-148.8v13.2\r\n\t\tH1741.4z M1601.3,1234.6v1.4h133.2v-1.4H1601.3z M1601.3,1197.4v1.4h133.2v-1.4H1601.3z M1741.4,1040.7v-13.2h-148.8v13.2H1741.4z\r\n\t\t M1601.3,1113v1.4h133.2v-1.4H1601.3z M1601.3,1075.9v1.4h133.2v-1.4H1601.3z M1741.4,918.1v-13.2h-148.8v13.2H1741.4z\r\n\t\t M1601.3,990.4v1.4h133.2v-1.4H1601.3z M1601.3,953.2v1.4h133.2v-1.4H1601.3z M1741.4,675.1v-13.2h-148.8v13.2H1741.4z\r\n\t\t M1601.3,747.4v1.4h133.2v-1.4H1601.3z M1601.3,710.3v1.4h133.2v-1.4H1601.3z M1741.4,554.4v-13.2h-148.8v13.2H1741.4z\r\n\t\t M1601.3,626.7v1.4h133.2v-1.4H1601.3z M1601.3,589.6v1.4h133.2v-1.4H1601.3z M1601.3,504.5v1.4h133.2v-1.4H1601.3z M1741.4,422\r\n\t\tV309.5h-148.8V422H1741.4z M1601.3,953.8v0.7h133.2v-0.7H1601.3z M1601.3,468.1v1.4h133.2v-1.4H1601.3z M1741.4,798.8v-13.2h-148.8\r\n\t\tv13.2H1741.4z M1601.3,833.9v1.4h133.2v-1.4H1601.3z M1906.8,426.4v442.5h5V428.1L1906.8,426.4z M1981.2,1404.3v-13.2h-148.8v13.2\r\n\t\tH1981.2z M1981.2,1282.6v-13.2h-148.8v13.2H1981.2z M1906.8,918.1v473h5v-473H1906.8z M1841.1,1354.9v1.4h133.2v-1.4H1841.1z\r\n\t\t M1841.1,1317.8v1.4h133.2v-1.4H1841.1z M1981.2,1162.3v-13.2h-148.8v13.2H1981.2z M1841.1,1234.6v1.4h133.2v-1.4H1841.1z\r\n\t\t M1841.1,1197.4v1.4h133.2v-1.4H1841.1z M1981.2,1040.7v-13.2h-148.8v13.2H1981.2z M1841.1,1113v1.4h133.2v-1.4H1841.1z\r\n\t\t M1841.1,1075.9v1.4h133.2v-1.4H1841.1z M1981.2,918.1v-13.2h-148.8v13.2H1981.2z M1841.1,990.4v1.4h133.2v-1.4H1841.1z\r\n\t\t M1841.1,953.2v1.4h133.2v-1.4H1841.1z M1981.2,675.1v-13.2h-148.8v13.2H1981.2z M1841.1,747.4v1.4h133.2v-1.4H1841.1z\r\n\t\t M1841.1,710.3v1.4h133.2v-1.4H1841.1z M1981.2,554.4v-13.2h-148.8v13.2H1981.2z M1841.1,626.7v1.4h133.2v-1.4H1841.1z\r\n\t\t M1841.1,589.6v1.4h133.2v-1.4H1841.1z M1841.1,504.5v1.4h133.2v-1.4H1841.1z M1981.2,423.1V320.9h-148.8v102.2H1981.2\r\n\t\tL1981.2,423.1z M1841.1,953.8v0.7h133.2v-0.7H1841.1z M1841.1,468.1v1.4h133.2v-1.4H1841.1z M1981.2,798.8v-13.2h-148.8v13.2\r\n\t\tH1981.2z M1841.1,833.9v1.4h133.2v-1.4H1841.1z M2152.7,299v569.8h5V301.2L2152.7,299z M2227.1,1404.3v-13.2h-148.8v13.2H2227.1z\r\n\t\t M2227.1,1282.6v-13.2h-148.8v13.2H2227.1z M2152.7,918.1v473h5v-473H2152.7z M2087,1354.9v1.4h133.2v-1.4H2087z M2087,1317.8v1.4\r\n\t\th133.2v-1.4H2087z M2227.1,1162.3v-13.2h-148.8v13.2H2227.1z M2087,1234.6v1.4h133.2v-1.4H2087z M2087,1197.4v1.4h133.2v-1.4H2087z\r\n\t\t M2227.1,1040.7v-13.2h-148.8v13.2H2227.1z M2087,1113v1.4h133.2v-1.4H2087z M2087,1075.9v1.4h133.2v-1.4H2087z M2227.1,918.1\r\n\t\tv-13.2h-148.8v13.2H2227.1z M2087,990.4v1.4h133.2v-1.4H2087z M2087,953.2v1.4h133.2v-1.4H2087z M2227.1,675.1v-13.2h-148.8v13.2\r\n\t\tH2227.1z M2087,747.4v1.4h133.2v-1.4H2087z M2087,710.3v1.4h133.2v-1.4H2087z M2227.1,554.4v-13.2h-148.8v13.2H2227.1z M2087,626.7\r\n\t\tv1.4h133.2v-1.4H2087z M2087,589.6v1.4h133.2v-1.4H2087z M2087,504.5v1.4h133.2v-1.4H2087z M2227.1,430v-40.2h-148.8V430H2227.1z\r\n\t\t M2227.1,312.3V299h-148.8v13.2h148.8V312.3z M2087,347.4v1.4h133.2v-1.4H2087z M2087,953.8v0.7h133.2v-0.7H2087z M2087,468.1v1.4\r\n\t\th133.2v-1.4H2087z M2227.1,798.8v-13.2h-148.8v13.2H2227.1z M2087,833.9v1.4h133.2v-1.4H2087z M2393.3,430v438.9h5V431.7\r\n\t\tL2393.3,430z M2467.8,1404.3v-13.2H2319v13.2H2467.8z M2467.7,1282.6v-13.2h-148.8v13.2H2467.7z M2393.3,918.1v473h5v-473H2393.3z\r\n\t\t M2327.6,1354.9v1.4h133.2v-1.4H2327.6z M2327.6,1317.8v1.4h133.2v-1.4H2327.6z M2467.7,1162.3v-13.2h-148.8v13.2H2467.7z\r\n\t\t M2327.6,1234.6v1.4h133.2v-1.4H2327.6z M2327.6,1197.4v1.4h133.2v-1.4H2327.6z M2467.7,1040.7v-13.2h-148.8v13.2H2467.7z\r\n\t\t M2327.6,1113v1.4h133.2v-1.4H2327.6z M2327.6,1075.9v1.4h133.2v-1.4H2327.6z M2467.7,918.1v-13.2h-148.8v13.2H2467.7z\r\n\t\t M2327.6,990.4v1.4h133.2v-1.4H2327.6z M2327.6,953.2v1.4h133.2v-1.4H2327.6z M2467.7,675.1v-13.2h-148.8v13.2H2467.7z\r\n\t\t M2327.6,747.4v1.4h133.2v-1.4H2327.6z M2327.6,710.3v1.4h133.2v-1.4H2327.6z M2467.7,554.4v-13.2h-148.8v13.2H2467.7z\r\n\t\t M2327.6,626.7v1.4h133.2v-1.4H2327.6z M2327.6,589.6v1.4h133.2v-1.4H2327.6z M2327.6,504.5v1.4h133.2v-1.4H2327.6z M2467.7,422.1\r\n\t\tV311.4h-148.8v110.8h148.8V422.1z M2327.6,953.8v0.7h133.2v-0.7H2327.6z M2327.6,468.1v1.4h133.2v-1.4H2327.6z M2467.7,798.8v-13.2\r\n\t\th-148.8v13.2H2467.7z M2327.6,833.9v1.4h133.2v-1.4H2327.6z M2637.8,309.5v559.3h5V311.7L2637.8,309.5z M2712.2,1404.3v-13.2\r\n\t\th-148.8v13.2H2712.2z M2712.1,1282.6v-13.2h-148.8v13.2H2712.1z M2637.8,918.1v473h5v-473H2637.8z M2572.1,1354.9v1.4h133.2v-1.4\r\n\t\tH2572.1z M2572.1,1317.8v1.4h133.2v-1.4H2572.1z M2712.1,1162.3v-13.2h-148.8v13.2H2712.1z M2572.1,1234.6v1.4h133.2v-1.4H2572.1z\r\n\t\t M2572.1,1197.4v1.4h133.2v-1.4H2572.1z M2712.1,1040.7v-13.2h-148.8v13.2H2712.1z M2572.1,1113v1.4h133.2v-1.4H2572.1z\r\n\t\t M2572.1,1075.9v1.4h133.2v-1.4H2572.1z M2712.1,918.1v-13.2h-148.8v13.2H2712.1z M2572.1,990.4v1.4h133.2v-1.4H2572.1z\r\n\t\t M2572.1,953.2v1.4h133.2v-1.4H2572.1z M2712.1,675.1v-13.2h-148.8v13.2H2712.1z M2572.1,747.4v1.4h133.2v-1.4H2572.1z\r\n\t\t M2572.1,710.3v1.4h133.2v-1.4H2572.1z M2712.1,554.4v-13.2h-148.8v13.2H2712.1z M2572.1,626.7v1.4h133.2v-1.4H2572.1z\r\n\t\t M2572.1,589.6v1.4h133.2v-1.4H2572.1z M2572.1,504.5v1.4h133.2v-1.4H2572.1z M2712.1,433v-13.2h-148.8V433H2712.1z M2712.1,312.3\r\n\t\tV299h-148.8v13.2h148.8V312.3z M2572.1,384.6v1.4h133.2v-1.4H2572.1z M2572.1,347.4v1.4h133.2v-1.4H2572.1z M2572.1,953.8v0.7\r\n\t\th133.2v-0.7H2572.1z M2572.1,468.1v1.4h133.2v-1.4H2572.1z M2712.1,798.8v-13.2h-148.8v13.2H2712.1z M2572.1,833.9v1.4h133.2v-1.4\r\n\t\tH2572.1z M2899.4,309.5v476h5V311.4L2899.4,309.5z M2989.9,1404.3v-95.1h-177.1v95.1H2989.9z M2973.8,675.1v-13.2H2825v13.2H2973.8\r\n\t\tz M2833.8,747.4v1.4H2967v-1.4H2833.8z M2833.8,710.3v1.4H2967v-1.4H2833.8z M2973.8,554.4v-13.2H2825v13.2H2973.8z M2833.8,626.7\r\n\t\tv1.4H2967v-1.4H2833.8z M2833.8,589.6v1.4H2967v-1.4H2833.8z M2833.8,504.5v1.4H2967v-1.4H2833.8z M2973.8,433v-13.2H2825V433\r\n\t\tH2973.8z M2973.8,312.3V299H2825v13.2h148.8V312.3z M2833.8,384.6v1.4H2967v-1.4H2833.8z M2833.8,347.4v1.4H2967v-1.4H2833.8z\r\n\t\t M2833.8,468.1v1.4H2967v-1.4H2833.8z M2973.8,792.1v-6.6H2825v6.6H2973.8z"/>\r\n\t<path fill="none" stroke="#161616" stroke-miterlimit="10" d="M1027.8,904.8h-7.6v-32.4h7.6V904.8z M1042.5,872.4h-7.6v32.4h7.6\r\n\t\tV872.4z M1056.7,872.4h-7.6v32.4h7.6V872.4z M1071.4,872.4h-7.6v32.4h7.6V872.4z M1086.5,872.4h-7.6v32.4h7.6V872.4z M1101.2,872.4\r\n\t\th-7.6v32.4h7.6V872.4z M1115.4,872.4h-7.6v32.4h7.6V872.4z M1130.1,872.4h-7.6v32.4h7.6V872.4z M1144.7,872.4h-7.6v32.4h7.6V872.4z\r\n\t\t M1159.4,872.4h-7.6v32.4h7.6V872.4z M1173.6,872.4h-7.6v32.4h7.6V872.4z M1188.3,872.4h-7.6v32.4h7.6V872.4z M1203.4,872.4h-7.6\r\n\t\tv32.4h7.6V872.4z M1218.1,872.4h-7.6v32.4h7.6V872.4z M1232.3,872.4h-7.6v32.4h7.6V872.4z M1247,872.4h-7.6v32.4h7.6V872.4z\r\n\t\t M1359.3,872.4h-7.6v32.4h7.6V872.4z M1373.5,872.4h-7.6v32.4h7.6V872.4z M1388.2,872.4h-7.6v32.4h7.6V872.4z M1402.8,872.4h-7.6\r\n\t\tv32.4h7.6V872.4z M1417.5,872.4h-7.6v32.4h7.6V872.4z M1431.7,872.4h-7.6v32.4h7.6V872.4z M1446.4,872.4h-7.6v32.4h7.6V872.4z\r\n\t\t M1461.5,872.4h-7.6v32.4h7.6V872.4z M1476.2,872.4h-7.6v32.4h7.6V872.4z M1490.4,872.4h-7.6v32.4h7.6V872.4z M1602.2,872.4h-7.6\r\n\t\tv32.4h7.6V872.4z M1616.4,872.4h-7.6v32.4h7.6V872.4z M1631.1,872.4h-7.6v32.4h7.6V872.4z M1645.7,872.4h-7.6v32.4h7.6V872.4z\r\n\t\t M1660.4,872.4h-7.6v32.4h7.6V872.4z M1674.6,872.4h-7.6v32.4h7.6V872.4z M1689.3,872.4h-7.6v32.4h7.6V872.4z M1704.5,872.4h-7.6\r\n\t\tv32.4h7.6V872.4z M1719.1,872.4h-7.6v32.4h7.6V872.4z M1733.3,872.4h-7.6v32.4h7.6V872.4z M1846.2,872.4h-7.6v32.4h7.6V872.4z\r\n\t\t M1860.3,872.4h-7.6v32.4h7.6V872.4z M1875,872.4h-7.6v32.4h7.6V872.4z M1889.7,872.4h-7.6v32.4h7.6V872.4z M1904.4,872.4h-7.6\r\n\t\tv32.4h7.6V872.4z M1918.5,872.4h-7.6v32.4h7.6V872.4z M1933.2,872.4h-7.6v32.4h7.6V872.4z M1948.4,872.4h-7.6v32.4h7.6V872.4z\r\n\t\t M1963.1,872.4h-7.6v32.4h7.6V872.4z M1977.2,872.4h-7.6v32.4h7.6V872.4z M2087.9,872.4h-7.6v32.4h7.6V872.4z M2102.1,872.4h-7.6\r\n\t\tv32.4h7.6V872.4z M2116.8,872.4h-7.6v32.4h7.6V872.4z M2131.5,872.4h-7.6v32.4h7.6V872.4z M2146.1,872.4h-7.6v32.4h7.6V872.4z\r\n\t\t M2160.3,872.4h-7.6v32.4h7.6V872.4z M2175,872.4h-7.6v32.4h7.6V872.4z M2190.2,872.4h-7.6v32.4h7.6V872.4z M2204.8,872.4h-7.6\r\n\t\tv32.4h7.6V872.4z M2219,872.4h-7.6v32.4h7.6V872.4z M2330.8,872.4h-7.6v32.4h7.6V872.4z M2345,872.4h-7.6v32.4h7.6V872.4z\r\n\t\t M2359.7,872.4h-7.6v32.4h7.6V872.4z M2374.4,872.4h-7.6v32.4h7.6V872.4z M2389,872.4h-7.6v32.4h7.6V872.4z M2403.2,872.4h-7.6\r\n\t\tv32.4h7.6V872.4z M2417.9,872.4h-7.6v32.4h7.6V872.4z M2433.1,872.4h-7.6v32.4h7.6V872.4z M2447.7,872.4h-7.6v32.4h7.6V872.4z\r\n\t\t M2461.9,872.4h-7.6v32.4h7.6V872.4z M2574.8,872.4h-7.6v32.4h7.6V872.4z M2588.9,872.4h-7.6v32.4h7.6V872.4z M2603.6,872.4h-7.6\r\n\t\tv32.4h7.6V872.4z M2618.3,872.4h-7.6v32.4h7.6V872.4z M2633,872.4h-7.6v32.4h7.6V872.4z M2647.1,872.4h-7.6v32.4h7.6V872.4z\r\n\t\t M2661.8,872.4h-7.6v32.4h7.6V872.4z M2677,872.4h-7.6v32.4h7.6V872.4z M2691.7,872.4h-7.6v32.4h7.6V872.4z M2705.8,872.4h-7.6\r\n\t\tv32.4h7.6V872.4z"/>\r\n\t<path fill="#F24E4E" d="M1022.9,1114.6l0.2-3.4l-15.9,9.9l15.7,9.7v-2.9l-10.8-6.6L1022.9,1114.6z M1022.9,1117.4v-1.7l-8.8,5.4\r\n\t\tl8.7,5.4l0.2-1.7l-6-3.7L1022.9,1117.4z M1018.3,1104.2h-4.4v-22.7h4.4V1104.2z M1018.3,1160.4h-4.4v-22.7h4.4V1160.4z"/>\r\n\t<path fill="#878584" d="M1253.2,433V297h-148.8v136H1253.2z M996.6,170.8V67.4H888.1v103.4H996.6z M1741.4,422V309.5h-148.8V422\r\n\t\tH1741.4z M1981.2,423.1V320.9h-148.8v102.2H1981.2L1981.2,423.1z M2227.1,430v-40.2h-148.8V430H2227.1z M2467.7,422.1V311.4h-148.8\r\n\t\tv110.8h148.8V422.1z M2989.9,1404.3v-95.1h-177.1v95.1H2989.9z"/>\r\n\t<g id="dummies">\r\n\t\t<path fill="#58595B" d="M975.3,269.5h-21.5v1.6h21.5l0,0c1.4,0,2,0.9,2,2V316c0,1.4-0.9,2-2,2h-21.5v1.6h21.5c2,0,3.8-1.7,3.8-3.6\r\n\t\t\tv-42.9C979,271.1,977.8,269.5,975.3,269.5z M953.8,269.5h-21.5c-2,0-3.8,1.6-3.8,3.6V316c0,2,1.6,3.6,3.8,3.6h21.5V318h-21.5\r\n\t\t\tc-1.4,0-2-0.9-2-2v-42.9c0-1.4,0.9-2,2-2h21.5V269.5z M949.7,275.2c-1.6,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2\r\n\t\t\tc1.6,0,3.2-1.4,3.2-3.2C952.9,276.6,951.5,275.2,949.7,275.2z M969.2,300.6h-2.7l-6.4-7.7h-8.2l-0.9-4.3l4.8,1.4\r\n\t\t\tc0.2,0,0.2,0,0.2,0c0.2,0,0.9-0.2,0.9-0.7c0.2-0.7-0.2-0.9-0.7-1.4l-5.7-1.6l-0.7-2.7c-0.2-0.7-0.7-0.9-1.4-0.7\r\n\t\t\tc-0.7,0.2-0.9,0.7-0.7,1.4l2.5,11.1h8.8l6.4,7.7h3.8c0.7,0,0.9-0.2,0.9-0.9C970.4,301.3,969.9,300.6,969.2,300.6z M952.9,306.9\r\n\t\t\tc-2.7,0-5-0.9-7.5-2.7c-2.7-2-4.1-4.8-4.5-7.7c-0.7-4.3,1.4-8.8,5-10.9c0.7-0.2,1.4-0.2,1.6,0.2c0.2,0.7,0.2,1.4-0.2,1.6\r\n\t\t\tc-3.2,2-4.5,5-4.1,8.8c0.2,2.7,1.4,4.8,3.8,6.1c2,1.4,4.5,2,7,2c2.7-0.2,5-1.6,6.8-4.1c0.2-0.7,1.4-0.7,1.6-0.2\r\n\t\t\tc0.7,0.2,0.7,1.4,0.2,1.6c-2,3.2-5,4.8-8.8,5C953.8,306.7,953.1,306.9,952.9,306.9z M955.6,309.2l-1.4,4.8h-0.7l-1.4-3.6l-1.4,3.6\r\n\t\t\tH950l-1.4-4.8h0.9l0.9,3.6l1.4-3.6h0.7l1.4,3.6l0.9-3.6H955.6z M960.1,313.7c-0.2,0.2-0.7,0.2-0.7,0.2c-0.2,0.2-0.7,0.2-0.7,0.2\r\n\t\t\tc-0.2,0-0.7-0.2-0.9-0.2c-0.2-0.2-0.7-0.2-0.7-0.7c-0.2-0.2-0.2-0.7-0.7-0.9c-0.2-0.2-0.2-0.7-0.2-0.9c0-0.9,0.2-1.4,0.7-1.6\r\n\t\t\tc0.2-0.2,0.9-0.7,1.6-0.7c0.2,0,0.7,0,0.9,0.2c0.2,0.2,0.7,0.2,0.7,0.2v0.9h-0.2c-0.2-0.2-0.7-0.2-0.7-0.2\r\n\t\t\tc-0.2-0.2-0.7-0.2-0.7-0.2c-0.7,0-0.9,0.2-0.9,0.7c-0.2,0.2-0.2,0.7-0.2,1.4c0,0.7,0.2,0.9,0.2,1.4c0.2,0.2,0.7,0.7,0.9,0.7\r\n\t\t\ts0.2,0,0.7-0.2c0.4-0.2,0.2-0.2,0.7-0.2C959.7,313.7,959.7,313.7,960.1,313.7c0-0.2,0-0.2,0-0.2h0.2L960.1,313.7L960.1,313.7\r\n\t\t\tL960.1,313.7L960.1,313.7z"/>\r\n\t\t<path fill="#58595B" d="M974.9,190.7h-21.5v1.6h21.5l0,0c1.3,0,2,0.9,2,2V237c0,1.3-0.9,2-2.1,2.1l-21.3-0.2v2H975\r\n\t\t\tc2-0.2,3.6-2,3.6-3.8v-42.2C978.3,192.6,977,190.3,974.9,190.7z M953.6,190.7h-21.5c-2,0-3.8,2-3.8,3.8v42.7c0,2,2,3.8,3.8,3.8\r\n\t\t\th21.5v-2h-21.5c-1.3,0-2-0.9-2-2v-42.7c0-1.3,0.9-2,2-2h21.5V190.7L953.6,190.7z M946.1,199.4c0,0.9-0.2,2-0.5,2.5\r\n\t\t\tc-0.5,0.5-1.3,0.9-2,0.9c-0.5,0-1.3-0.5-2-0.9c-0.5-0.5-0.5-1.6-0.5-2.5c0-0.9,0.2-2,0.5-2.1c0.5-0.5,1.3-0.9,2-0.9\r\n\t\t\tc0.5,0,1.3,0.2,2,0.9C946.1,197.5,946.1,198.5,946.1,199.4L946.1,199.4z M949.8,218.8L949.8,218.8c0,0.9-0.5,2-1.3,2\r\n\t\t\tc-0.7,0-1.3-0.5-1.3-2V208h-0.5v26c0,0.9-0.5,2-1.6,2c-1.1,0-1.6-0.5-1.6-2v-15.4H943V234c0,0.9-0.5,2-1.6,2c-0.9,0-1.6-0.5-1.6-2\r\n\t\t\tv-26h-0.5v10.7c0,0.9-0.5,2-1.3,2c-0.7,0-1.3-0.5-1.3-2v-12.3c0-2,1.3-2.9,3.6-2.9h6.4c2.1,0,3.6,0.9,3.6,2.9v12.3L949.8,218.8\r\n\t\t\tL949.8,218.8L949.8,218.8z M965.6,199.4c0,0.9-0.2,2-0.5,2.1c-0.5,0.5-1.3,0.9-2,0.9c-0.5,0-1.6-0.2-2-0.9\r\n\t\t\tc-0.5-0.5-0.5-1.6-0.5-2.1c0-0.9,0.2-2,0.5-2.1c0.5-0.5,1.3-0.9,2-0.9c0.5,0,1.6,0.2,2,0.9C965.6,197.5,965.6,198.7,965.6,199.4\r\n\t\t\tL965.6,199.4z M969.9,222.2L969.9,222.2h-3.2v11.4c0,0.9-0.5,2-2,2c-0.9,0-1.6-0.5-1.6-2v-11.4h-0.5v11.4c0,0.9-0.5,2-2,2\r\n\t\t\tc-0.9,0-1.6-0.5-1.6-2v-11.4h-3.2l3.2-7.9v-7.9h-0.5v7.3c0,0.9-0.5,2-1.3,2c-0.7,0-1.3-0.5-1.3-2v-7.3c0-2.5,1.3-3.6,3.6-3.6h6.4\r\n\t\t\tc2.1,0,3.6,1.3,3.6,3.6v7.3c0,0.9-0.5,2-1.3,2c-0.9,0-1.3-0.5-1.3-2v-7.3h-0.5v7.9L969.9,222.2z"/>\r\n\t\t<path fill="#58595B" d="M920.7,478h1.7l-3.3,3.9c-0.3,0.3,0,1,0,1.3c0.3,0,1,0,1.3,0l3.3-3.9v1.7c0,0.3,0.3,1,1,1c0.8,0,1-0.3,1-1\r\n\t\t\tl-0.3-4.5c0-0.3-0.3-1-1-1l0,0l-4.6,0.3c-0.3,0-1,0.3-1,1C919.4,477.4,919.7,478,920.7,478 M917.8,453.6h-2.2c-1.7,0-3.6,1-5,2.2\r\n\t\t\tl-7.5,9.7v-0.2c0-1-1-2.2-2.2-2.2c-1,0-2.2,1-2.2,2.2v6.2l-1,1h-3.6c-3.6,0-5.8,2.5-5.8,5.8s2.6,5.8,5.8,5.8h3.6\r\n\t\t\tc1.7,0,3.6-1,5-2.2l12.7-16.2h1.7c3.6,0,5.8-2.5,5.8-5.8C924,456.3,920.7,453.6,917.8,453.6 M917.8,463h-2.6c-0.3,0-1,0-1,0.3\r\n\t\t\tl-13.4,17c-0.3,1-1.3,1.3-2.6,1.3h-3.6c-1.7,0-3.6-1.3-3.6-3.6c0-1.7,1.3-3.3,3.6-3.3h3.9c0.3,0,1,0,1-0.3l13.4-17\r\n\t\t\tc0.3-1,1.3-1.3,2.6-1.3h2.2c1.7,0,3.6,1.3,3.6,3.3C920.7,461.1,919.1,463,917.8,463 M900.7,457.1c1.3,0,2.6,1,2.6,2.2\r\n\t\t\ts-1,2.2-2.6,2.2c-1.6,0-2.6-1-2.6-2.2C898,458.3,899.4,457.1,900.7,457.1 M917.1,478h-1.7l3.3-4.5c0.3-0.3,0-1,0-1.3\r\n\t\t\tc-0.3,0-1,0-1.3,0l-3.3,4.5l-0.3-1.7c0-0.3-1-1-1.3-1s-1,0.3-1,1.3l1,4.5c0,0.3,0.3,1,1,1l0,0l4.6-1c0.3,0,1-0.3,1-1.3\r\n\t\t\tC918.4,478,918.1,477.4,917.1,478 M921.1,442.6H890c-6.3,0-11.1,5-11.1,10.4v30.3c0,5.8,5,10.4,11.1,10.4h30.4\r\n\t\t\tc6.3,0,11.1-5,11.1-10.4V453C932.1,447.5,927.3,442.6,921.1,442.6 M929.9,484.1c0,5-3.9,8.8-8.8,8.8h-30.4c-5,0-8.8-3.9-8.8-8.8\r\n\t\t\tv-30.5c0-5,3.9-8.8,8.8-8.8h30.4c5,0,8.8,3.9,8.8,8.8L929.9,484.1L929.9,484.1z"/>\r\n\t\t<path fill="#58595B" d="M981.7,731.8h1.7l-3.3,3.9c-0.3,0.3,0,1,0,1.3c0.3,0,1,0,1.3,0l3.3-3.9v1.7c0,0.3,0.3,1,1,1\r\n\t\t\tc0.8,0,1-0.3,1-1l-0.3-4.5c0-0.3-0.3-1-1-1l0,0l-4.6,0.3c-0.3,0-1,0.3-1,1C980.4,731.2,980.7,731.8,981.7,731.8 M978.7,707.4h-2.2\r\n\t\t\tc-1.7,0-3.6,1-5,2.2l-7.5,9.7v-0.2c0-1-1-2.2-2.2-2.2c-1,0-2.2,1-2.2,2.2v6.2l-1,1H955c-3.6,0-5.8,2.5-5.8,5.8\r\n\t\t\tc0,3.3,2.6,5.8,5.8,5.8h3.6c1.7,0,3.6-1,5-2.2l12.7-16.2h1.7c3.6,0,5.8-2.5,5.8-5.8C985,710.1,981.7,707.4,978.7,707.4\r\n\t\t\t M978.7,716.8h-2.6c-0.3,0-1,0-1,0.3l-13.4,17c-0.3,1-1.3,1.3-2.6,1.3h-3.6c-1.7,0-3.6-1.3-3.6-3.6c0-1.7,1.3-3.3,3.6-3.3h3.9\r\n\t\t\tc0.3,0,1,0,1-0.3l13.4-17c0.3-1,1.3-1.3,2.6-1.3h2.2c1.7,0,3.6,1.3,3.6,3.3C981.7,714.9,980.1,716.8,978.7,716.8 M961.7,711\r\n\t\t\tc1.3,0,2.6,1,2.6,2.2c0,1.2-1,2.2-2.6,2.2c-1.7,0-2.6-1-2.6-2.2C959,712.1,960.3,711,961.7,711 M978.1,731.8h-1.7l3.3-4.5\r\n\t\t\tc0.3-0.3,0-1,0-1.3c-0.3,0-1,0-1.3,0l-3.3,4.5l-0.3-1.7c0-0.3-1-1-1.3-1s-1,0.3-1,1.3l1,4.5c0,0.3,0.3,1,1,1l0,0l4.6-1\r\n\t\t\tc0.3,0,1-0.3,1-1.3C979.4,731.8,979.1,731.2,978.1,731.8 M982,696.4h-31c-6.3,0-11.1,5-11.1,10.4v30.3c0,5.8,5,10.4,11.1,10.4\r\n\t\t\th30.4c6.3,0,11.1-5,11.1-10.4v-30.3C993.1,701.3,988.3,696.4,982,696.4 M990.9,738c0,5-3.9,8.8-8.8,8.8h-30.4\r\n\t\t\tc-5,0-8.8-3.9-8.8-8.8v-30.5c0-5,3.9-8.8,8.8-8.8H982c5,0,8.8,3.9,8.8,8.8V738H990.9z"/>\r\n\t</g>\r\n</g>\r\n</svg>\r\n',
    title: 'MechanicMap--3',
    mapWidth: 3000,
    no: -3,
  },
  {
    show: false,
    locations: [
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/3480_original.jpg?1508931312',
        type: LocationTypes.STORE,
        title: 'Atasun Optik',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_35',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/4_original.jpg?1360769821',
        type: LocationTypes.STORE,
        title: 'Bebeto',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_40',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/de8d8252-b229-4311-81cf-c5d514a8bdfc.png?1553519833274',
        type: LocationTypes.STORE,
        title: 'Cep Neon',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_38',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/130_original.jpg?1550474004',
        type: LocationTypes.STORE,
        title: 'Ceyo',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_03',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/153_original.jpg?1360770601',
        type: LocationTypes.STORE,
        title: 'D&R',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_21',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/3475_original.jpg?1480574469',
        type: LocationTypes.STORE,
        title: 'Defacto',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_36',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/1159_original.jpg?1375797505',
        type: LocationTypes.STORE,
        title: 'Deichmann',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_20',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/d1edea7a-6b80-4468-9c4b-9cdfd81e7610.png?1637839202925',
        type: LocationTypes.STORE,
        title: 'Depomaxx',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_02',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/211_original.jpg?1360770871',
        type: LocationTypes.STORE,
        title: 'Gratis',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_14',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/210_original.jpg?1528207119',
        type: LocationTypes.STORE,
        title: 'Göz Grup',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_10',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/2154_original.jpg?1417603070',
        type: LocationTypes.STORE,
        title: 'Hummel',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_30',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/4581_original.jpg?1533557341',
        type: LocationTypes.STORE,
        title: 'Kervan / Home Sweet Home',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_32',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/1556_original.jpg?1400146725',
        type: LocationTypes.STORE,
        title: 'LC Waikiki',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_34',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/f6dbf1f5-43b4-421a-ada9-fc29b59acd79.png?1625495630772',
        type: LocationTypes.STORE,
        title: 'Mad Parfüm',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_51',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/291_original.jpg?1400145197',
        type: LocationTypes.STORE,
        title: 'Madame Coco',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_05',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/b0d81702-dbb5-41c2-9640-177fe97a898c.png?1553520879743',
        type: LocationTypes.STORE,
        title: 'Miss Mürem',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_31',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/7f850136-dcee-4cfa-a08b-eaf441de01cc.png?1553589843291',
        type: LocationTypes.STORE,
        title: 'Moda Bijuteri',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_09',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/4a177d09-1bc3-4649-8b0d-1e51622bff46.png?1553519924264',
        type: LocationTypes.STORE,
        title: 'Ottoman Silver',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_42',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/343_original.jpg?1463042759',
        type: LocationTypes.STORE,
        title: 'Penti',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_11',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/806_original.png?1367458248',
        type: LocationTypes.STORE,
        title: 'Praktiker',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_18',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/d20c53aa-605b-46b4-98fa-3489804ddc33.png?1602500663739',
        type: LocationTypes.STORE,
        title: 'Saat Kulesi',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_22',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/390_original.jpg?1360771806',
        type: LocationTypes.STORE,
        title: 'Starbucks',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_45',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/413_original.jpg?1360771909',
        type: LocationTypes.STORE,
        title: 'Teknosa',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_17',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/1844_original.jpg?1396881215',
        type: LocationTypes.STORE,
        title: 'Theorie',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_28',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/30128153-0cd7-4ef7-a6d2-b06ce321b50d.png?1555418048944',
        type: LocationTypes.STORE,
        title: 'Toyzz Shop',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_07',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/438_original.jpg?1481287873',
        type: LocationTypes.STORE,
        title: 'Watsons',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_19',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/2148_original.jpg?1416986755',
        type: LocationTypes.STORE,
        title: 'Yatsan',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_06',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/1902_original.jpg?1401955157',
        type: LocationTypes.STORE,
        title: 'Yves Rocher',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_08',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/2902_original.jpg?1446462944',
        type: LocationTypes.STORE,
        title: 'İdil Baby & Mamino',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE2_store_12',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/H1jrzLz_V-main.png?1553257026809',
        type: LocationTypes.SERVICE,
        title: 'Baby Care Room',
        id: 'KE2_babycare_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/rk0jzIGuN-main.png?1553257126426',
        type: LocationTypes.SERVICE,
        title: 'Information Desk',
        id: 'KE2_info_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/Sy1VmIGOV-main.png?1553257255262',
        type: LocationTypes.SERVICE,
        title: 'Wheelchair',
        id: 'KE2_info_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/BJ-Pz8f_N-main.png?1553257049117',
        type: LocationTypes.SERVICE,
        title: 'Disabled WC',
        id: 'KE2_disabledwc_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/BJcHQUf_V-main.png?1553257282205',
        type: LocationTypes.SERVICE,
        title: 'Security',
        id: 'KE2_security_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/r1XCbLMdN-main.png?1553256906868',
        type: LocationTypes.SERVICE,
        title: 'Prayer Room',
        id: 'KE2_masjid_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/SJBY8M8_E-main.png?1553503868939',
        type: LocationTypes.SERVICE,
        title: 'WC',
        id: 'KE2_wc_01',
      },
    ],
    id: 'level--2',
    mapHeight: 1500,
    map: '<?xml version="1.0" encoding="utf-8"?>\r\n<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\r\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t width="3000px" height="1500px" viewBox="0 0 3000 1500" enable-background="new 0 0 3000 1500" xml:space="preserve">\r\n<g id="Layer_1_1_">\r\n\t<path fill="#EDEDED" stroke="#595959" stroke-miterlimit="10" d="M2659.2,504.3v-46.8h-768.9v-24H855.9V234.7H807v-74.9L696,53.4\r\n\t\tL440.6,208.6L429,192L187.6,340.7l48.4,79.5L0,565.1l123.4,197.5l-4.1,2.5l44.7,70.8h46v58.4h73.7l86.1,151.1h113v270.8h84.1v92.3\r\n\t\tH2431v-136.2h-27.3v-138.7h349.9l149.5-229V710.1h96.1V504.3H2659.2z M647.8,771.7h-37.2V722h37.2V771.7z M782.2,654.2h-36.4v-98.5\r\n\t\th36.4V654.2z M1822.8,1079.8h-36.9V965.5h36.9V1079.8L1822.8,1079.8z M2325.4,913.8h-147v-36h147V913.8z"/>\r\n\t<path id="stores_1_" fill="#60605F" d="M290.1,901.2H216v-58.4h-45.5l-5.4-7l53-33.1l-3.3-5l12.8-7.5h86.1v49.7H281l-5.4,32.3\r\n\t\tL290.1,901.2z M364.6,845.7H406v37.7h-41.4V845.7z M356.8,1011.7l19.5,34h50.9v-35.2l-7.5-15.7h-29.4L356.8,1011.7z M503.4,962.9\r\n\t\th46V996h-46V962.9L503.4,962.9z M463.2,1012.6h85.7v33.1h-85.7V1012.6z M571.3,919.8h85.3v208.6h-94.8v187.2h-72.9v-252.2h80.7\r\n\t\tL571.3,919.8z M657.8,728.5h38.5v38.9h-38.5V728.5z M713.7,842.4h35.2v36h-35.2V842.4z M965.5,842.4h37.7v36h-37.7V842.4z\r\n\t\t M1218.9,842.4h37.7v36h-37.7V842.4z M1616.4,842.4h37.3v36h-37.3V842.4z M1780.8,842.4h43.1v31.5h-43.1V842.4z M1888.8,842.4h36.9\r\n\t\tv36h-36.9V842.4z M2188.6,842.4h37.7v38.5h-37.7V842.4z M666.3,919.8v221.1h-93.6v174.7h252.2v-123.8h61.8V1181h-62.4V919.8H666.3z\r\n\t\t M835.4,919.8h51.3V1165h-51.3V919.8z M160.2,826.8l47.2-30.6l-2.7-3.1l19.5-12h97.7v29.1h27.8v29.4H406v-210h76.6V287.9L433,205.5\r\n\t\tL199,348l49.3,79.5l-146.2,88.6l17.8,27.3l-51.3,31.9l58,95.7l-9.1,6.2l8.7,15.3l-31.5,19.9l35.2,57.1l-4.1,2.5L160.2,826.8z\r\n\t\t M494.1,633.2h224.6v-231h24.8v-94.4h-32.7v-64.6h99v-75.4L701.7,65.2L452,217.3l41.7,68.4L494.1,633.2z M791.1,801h126.7\r\n\t\tl0.7-147.5h172.7l-0.7-184.2h-72.9v56.3h-94v-56.3H751.8v89.4h41L791.1,801z M930.2,666h160.3v135H930.2V666z M1101.6,469.3h111.9\r\n\t\tV801h-111.9V469.3z M1237.7,511.5h107.4V801h-107.4V511.5z M1357.6,801h73.9V518.6h22.5v-49.3h-76.6v42.2h-19.9L1357.6,801\r\n\t\tL1357.6,801z M1443.3,530.6h81.2V801h-81.2V530.6z M1537,801h72.8V671h80.9V530.6h-76v-27.7h36.4v-33.5H1537V801z M1619.9,681.2\r\n\t\th29.2V801h-29.2V681.2z M1659,681.2h31.7V801H1659V681.2z M1699.9,681.2h35.9V801h-35.9V681.2z M1745.1,681.2h31.3V801h-31.3V681.2\r\n\t\tz M1789.5,801h104.3V536.4h-28.2v-20.7h-113.5v-46.4h-49.7v201.2h86.1L1789.5,801z M1921.6,801V469.3H2146v97.6h-98.5V801H1921.6z\r\n\t\t M2059,577.8h87V801h-87V577.8z M2159,801V469.3h496.9v231.6h29.9v122.4h-263.2V801H2159z M2422.6,836.6h274.9v-82.8h205.4v82.8\r\n\t\th-194.6v108.7h-219v-32.9h-66.7V836.6L2422.6,836.6z M2422.6,921.1h58.8v35.3h237.8V845.8H2903v66.6l-145.3,224.4h-388V961.6h53\r\n\t\tL2422.6,921.1L2422.6,921.1z M2252.9,958.7h87.7v219.9h-87.7V958.7z M2159,958.7h82.2v219.9H2159V958.7z M2054.1,958.7h91.5V1235\r\n\t\th-91.5V958.7z M1960.7,920.2h77.5v211.9h-77.5V920.2z M1865.7,920.2h84.1v211.9h-84.1V920.2z M1704.2,920.2h84.1v189.6h-84.1V920.2\r\n\t\tz M1659,920.2h31.7v129.2H1659V920.2z M1616.4,920.2h32.8v129.2h-32.8V920.2z M1606.8,920.2V1056h83.8v243.5h-136.5v-46.4H1537\r\n\t\tV920.2H1606.8L1606.8,920.2z M1524.5,920.2v298.6h-82v31.2h-26.1V920.2H1524.5z M1389.5,920.2v369.3h-295.6v-146.1h178.5V920.2\r\n\t\tH1389.5L1389.5,920.2z M1188.7,920.2h74.1v214.1h-74.1V920.2z M1101.6,920.2h74.6v214.1h-74.6V920.2z M1013.9,920.2h76.6v214.1\r\n\t\th-76.6V920.2z M1003.1,920.2h-88.2v339.1h54.7v30.2h117.5v-145.7H1003L1003.1,920.2L1003.1,920.2z"/>\r\n\t<rect x="2069.6" y="840.4" fill="#60605F" width="37.7" height="38.5"/>\r\n</g>\r\n<g id="stores">\r\n\t<path id="KE2_store_51" fill="#FBC005" d="M2064.4,835.2h37.7v38.5h-37.7V835.2z"/>\r\n\t<path id="KE2_store_50" fill="#FBC005" d="M284.9,896h-74.1v-58.4h-45.6l-5.3-7l53-33.1l-3.3-5l12.8-7.5h86.1v49.7h-32.7l-5.4,32.3\r\n\t\tL284.9,896z"/>\r\n\t<path id="KE2_store_49" fill="#FBC005" d="M359.4,840.5h41.4v37.7h-41.4V840.5z"/>\r\n\t<path id="KE2_store_48" fill="#FBC005" d="M351.6,1006.6l19.4,33.9h51v-35.2l-7.5-15.7h-29.4L351.6,1006.6z"/>\r\n\t<path id="KE2_store_47" fill="#FBC005" d="M498.2,957.7h46v33.1h-46V957.7z"/>\r\n\t<path id="KE2_store_46" fill="#FBC005" d="M458,1007.4h85.7v33.1H458V1007.4z"/>\r\n\t<path id="KE2_store_45" fill="#FBC005" d="M566.1,914.6h85.3v208.7h-94.9v187.2h-72.8v-252.2h80.7L566.1,914.6z"/>\r\n\t<path id="KE2_store_44" fill="#FBC005" d="M652.6,723.3h38.5v38.9h-38.5V723.3z"/>\r\n\t<path id="KE2_store_43" fill="#FBC005" d="M708.5,837.2h35.2v36h-35.2V837.2z"/>\r\n\t<path id="KE2_store_42" fill="#FBC005" d="M960.3,837.2H998v36h-37.7V837.2z"/>\r\n\t<path id="KE2_store_41" fill="#FBC005" d="M1213.7,837.2h37.7v36h-37.7V837.2z"/>\r\n\t<path id="KE2_store_40" fill="#FBC005" d="M1611.2,837.2h37.3v36h-37.3V837.2z"/>\r\n\t<path id="KE2_store_39" fill="#FBC005" d="M1775.6,837.2h43.1v31.5h-43.1V837.2z"/>\r\n\t<path id="KE2_store_38" fill="#FBC005" d="M1883.7,837.2h36.9v36h-36.9V837.2z"/>\r\n\t<path id="KE2_store_37" fill="#FBC005" d="M2183.4,837.2h37.7v38.5h-37.7V837.2z"/>\r\n\t<path id="KE2_store_36" fill="#FBC005" d="M661.1,914.6v221.2h-93.6v174.7h252.3v-123.8h61.8v-10.8h-62.4V914.6H661.1z"/>\r\n\t<path id="KE2_store_35" fill="#FBC005" d="M830.3,914.6h51.3v245.2h-51.3V914.6z"/>\r\n\t<path id="KE2_store_34" fill="#FBC005" d="M155,821.6l47.2-30.6l-2.7-3.2l19.6-12h97.6v29.1h27.8v29.4h56.4V624.4h76.6V282.8\r\n\t\tl-49.7-82.4l-234,142.4l49.3,79.5L96.9,510.9l17.8,27.3l-51.3,31.9l58,95.7l-9.2,6.2l8.7,15.3l-31.4,19.9l35.2,57.1l-4.2,2.5\r\n\t\tL155,821.6z"/>\r\n\t<path id="KE2_store_33" fill="#FBC005" d="M488.9,628h224.6V397h24.8v-94.4h-32.7V238h99v-75.3L696.5,60L446.8,212.1l41.7,68.5\r\n\t\tL488.9,628z"/>\r\n\t<path id="KE2_store_32" fill="#FBC005" d="M785.9,795.8h126.8l0.6-147.5H1086l-0.7-184.2h-72.9v56.3h-94v-56.3H746.6v89.5h41\r\n\t\tL785.9,795.8z"/>\r\n\t<path id="KE2_store_31" fill="#FBC005" d="M925,660.8h160.3v135H925V660.8z"/>\r\n\t<path id="KE2_store_30" fill="#FBC005" d="M1096.4,464.1h111.9v331.7h-111.9V464.1z"/>\r\n\t<path id="KE2_store_29" fill="#FBC005" d="M1232.5,506.4h107.4v289.4h-107.4V506.4z"/>\r\n\t<path id="KE2_store_28" fill="#FBC005" d="M1352.4,795.8h73.9V513.4h22.6v-49.3h-76.6v42.3h-19.9V795.8z"/>\r\n\t<path id="KE2_store_27" fill="#FBC005" d="M1438.1,525.4h81.2v270.4h-81.2V525.4z"/>\r\n\t<path id="KE2_store_26" fill="#FBC005" d="M1531.8,795.8h72.8v-130h80.9V525.4h-76v-27.7h36.5v-33.6h-114.2V795.8L1531.8,795.8z"/>\r\n\t<path id="KE2_store_25" fill="#FBC005" d="M1614.8,676h29.2v119.8h-29.2V676z"/>\r\n\t<path id="KE2_store_24" fill="#FBC005" d="M1653.8,676h31.7v119.8h-31.7V676z"/>\r\n\t<path id="KE2_store_23" fill="#FBC005" d="M1694.7,676h35.9v119.8h-35.9V676z"/>\r\n\t<path id="KE2_store_22" fill="#FBC005" d="M1739.9,676h31.3v119.8h-31.3V676z"/>\r\n\t<path id="KE2_store_21" fill="#FBC005" d="M1784.3,795.8h104.3V531.2h-28.1v-20.7H1747v-46.4h-49.7v201.3h86.2L1784.3,795.8z"/>\r\n\t<path id="KE2_store_20" fill="#FBC005" d="M1916.4,795.8V464.1h224.4v97.6h-98.6v234.1H1916.4L1916.4,795.8z"/>\r\n\t<path id="KE2_store_19" fill="#FBC005" d="M2053.8,572.6h87v223.2h-87V572.6z"/>\r\n\t<path id="KE2_store_18" fill="#FBC005" d="M2153.8,795.8V464.1h496.9v231.6h29.9v122.5h-263.2v-22.4H2153.8z"/>\r\n\t<path id="KE2_store_17" fill="#FBC005" d="M2417.4,831.4h274.9v-82.8h205.4v82.8h-194.6v108.7h-219v-32.9h-66.7L2417.4,831.4\r\n\t\tL2417.4,831.4z"/>\r\n\t<path id="KE2_store_16" fill="#FBC005" d="M2417.4,915.9h58.8v35.3H2714V840.6h183.7v66.6l-145.3,224.4h-388V956.5h53V915.9z"/>\r\n\t<path id="KE2_store_15" fill="#FBC005" d="M2247.7,953.6h87.7v219.9h-87.7V953.6z"/>\r\n\t<path id="KE2_store_14" fill="#FBC005" d="M2153.8,953.6h82.2v219.9h-82.2V953.6z"/>\r\n\t<path id="KE2_store_13" fill="#FBC005" d="M2048.9,953.6h91.5v276.3h-91.5V953.6z"/>\r\n\t<path id="KE2_store_12" fill="#FBC005" d="M1955.5,915.1h77.5V1127h-77.5V915.1z"/>\r\n\t<path id="KE2_store_11" fill="#FBC005" d="M1860.5,915.1h84.1V1127h-84.1V915.1z"/>\r\n\t<path id="KE2_store_10" fill="#FBC005" d="M1699,915.1h84.1v189.6H1699V915.1z"/>\r\n\t<path id="KE2_store_09" fill="#FBC005" d="M1653.8,915.1h31.7v129.2h-31.7V915.1z"/>\r\n\t<path id="KE2_store_08" fill="#FBC005" d="M1611.2,915.1h32.8v129.2h-32.8V915.1z"/>\r\n\t<path id="KE2_store_07" fill="#FBC005" d="M1601.7,915.1v135.8h83.8v243.4h-136.6V1248h-17.1V915.1H1601.7z"/>\r\n\t<path id="KE2_store_06" fill="#FBC005" d="M1519.3,915.1v298.5h-82v31.2h-26.1V915.1H1519.3z"/>\r\n\t<path id="KE2_store_05" fill="#FBC005" d="M1384.3,915.1v369.3h-295.7v-146.2h178.5V915.1H1384.3z"/>\r\n\t<path id="KE2_store_04" fill="#FBC005" d="M1183.5,915.1h74.1v214.1h-74.1V915.1z"/>\r\n\t<path id="KE2_store_03" fill="#FBC005" d="M1096.4,915.1h74.6v214.1h-74.6V915.1z"/>\r\n\t<path id="KE2_store_02" fill="#FBC005" d="M1008.7,915.1h76.6v214.1h-76.6V915.1L1008.7,915.1z"/>\r\n\t<path id="KE2_store_01" fill="#FBC005" d="M998,915.1h-88.2v339.1h54.7v30.2H1082v-145.7h-84V915.1z"/>\r\n</g>\r\n<g id="services">\r\n\t<path id="KE2_babycare_01" fill="#CE9E15" d="M1699,1110.1h84.1v53.7H1699V1110.1z"/>\r\n\t<path id="KE2_masjid_01" fill="#CE9E15" d="M1860.5,1141.1h84.1v153.2h-84.1V1141.1z"/>\r\n\t<path id="KE2_disabledwc_01" fill="#CE9E15" d="M1700.2,1169.6h84.1v53.7h-84.1V1169.6z"/>\r\n\t<path id="KE2_wc_01" fill="#CE9E15" d="M1700.2,1229.9h118.4v64h-118.4V1229.9z"/>\r\n\t<path id="KE2_info_01" fill="#FBC005" d="M498.2,909.9h-51.4v-40.2h51.4V909.9z"/>\r\n\t<path id="KE2_security_01" fill="#FBC005" d="M412.5,977.8h-51.4v-40.2h51.4V977.8z"/>\r\n\t<path id="KE2_kiosk_01" fill="#EDEDED" d="M1857.8,863.2h-13.2V850h13.2V863.2z"/>\r\n\t<path id="KE2_kiosk_02" fill="#EDEDED" d="M556,933.4h-13.2v-13.2H556V933.4z"/>\r\n</g>\r\n<g id="nopointer">\r\n\t<polygon fill="#878584" points="2897.7,740.7 2897.7,708 3000,708 3000,505.5 2660.5,505.5 2660.5,685.2 2691.9,685.2 \r\n\t\t2691.9,740.7 \t"/>\r\n\t<polygon fill="#878584" points="87.4,703.9 116.4,686.5 106.9,671.2 116.4,665 57.2,568.5 109.3,537 93.6,513.4 2.5,568.5 \t"/>\r\n\t<polygon fill="#878584" points="2339.1,1134.9 2404.1,1134.9 2404.1,1273.6 2431.9,1273.6 2431.9,1414 567.7,1414 567.7,1322.9 \r\n\t\t832.7,1322.9 832.7,1192.9 897.8,1192.9 897.8,1267.4 952.8,1267.4 952.8,1299.7 1400.6,1299.7 1400.6,1255 1446.4,1255 \r\n\t\t1446.4,1228.5 1515.1,1228.5 1515.1,1261.9 1537.2,1261.9 1537.2,1305.9 1955.5,1305.9 1955.5,1141.1 2040.6,1141.1 2040.6,1242.6 \r\n\t\t2153.8,1242.6 2153.8,1180.9 2338.7,1180.9 \t"/>\r\n\t<polygon fill="#878584" points="1888.6,522.6 1888.6,438.5 853,438.5 853,245.1 715.5,245.1 715.5,294.1 746.6,294.1 746.6,453.6 \r\n\t\t930.5,453.6 930.5,510 998,510 998,455 1216.2,455 1216.2,494.4 1360.4,494.4 1360.4,455 1456.7,455 1456.7,512.8 1518.9,512.8 \r\n\t\t1520.7,457.3 1657.4,457.3 1655.6,504.3 1616.5,504.3 1616.5,518.2 1685.5,518.2 1685.5,457 1754.5,457 1754.5,503.2 1868.5,503.2 \r\n\t\t1868.5,522.6 \t"/>\r\n\t<g id="dummies">\r\n\t\t<path fill="#58595B" d="M1764.2,1174.3h-19v1.4h19l0,0c1.3,0,1.7,0.8,1.7,1.7v38c0,1.3-0.8,1.7-1.7,1.7h-19v1.5h19\r\n\t\t\tc1.7,0,3.3-1.5,3.3-3.2v-38C1767.6,1175.8,1766.5,1174.3,1764.2,1174.3z M1745.2,1174.3h-19c-1.7,0-3.3,1.4-3.3,3.2v38\r\n\t\t\tc0,1.7,1.4,3.2,3.3,3.2h19v-1.4h-19c-1.3,0-1.7-0.8-1.7-1.7v-38c0-1.3,0.8-1.7,1.7-1.7h19V1174.3z M1741.6,1179.4\r\n\t\t\tc-1.4,0-2.9,1.3-2.9,2.9c0,1.6,1.3,2.9,2.9,2.9c1.4,0,2.9-1.3,2.9-2.9C1744.4,1180.7,1743.2,1179.4,1741.6,1179.4z M1758.9,1201.9\r\n\t\t\th-2.4l-5.7-6.8h-7.3l-0.8-3.8l4.3,1.3c0.2,0,0.2,0,0.2,0c0.2,0,0.8-0.2,0.8-0.6c0.2-0.6-0.2-0.8-0.6-1.3l-5.1-1.4l-0.6-2.4\r\n\t\t\tc-0.2-0.6-0.6-0.8-1.3-0.6c-0.6,0.2-0.8,0.6-0.6,1.3l2.2,9.8h7.8l5.7,6.8h3.3c0.6,0,0.8-0.2,0.8-0.8\r\n\t\t\tC1760,1202.5,1759.5,1201.9,1758.9,1201.9z M1744.4,1207.4c-2.4,0-4.4-0.8-6.7-2.4c-2.4-1.7-3.6-4.3-4-6.8\r\n\t\t\tc-0.6-3.8,1.3-7.8,4.4-9.7c0.6-0.2,1.3-0.2,1.4,0.2c0.2,0.6,0.2,1.3-0.2,1.4c-2.9,1.7-4,4.4-3.6,7.8c0.2,2.4,1.3,4.3,3.3,5.4\r\n\t\t\tc1.7,1.3,4,1.7,6.2,1.7c2.4-0.2,4.4-1.4,6-3.6c0.2-0.6,1.3-0.6,1.4-0.2c0.6,0.2,0.6,1.3,0.2,1.4c-1.7,2.9-4.4,4.3-7.8,4.4\r\n\t\t\tC1745.2,1207.3,1744.6,1207.4,1744.4,1207.4z M1746.8,1209.5l-1.3,4.3h-0.6l-1.3-3.2l-1.3,3.2h-0.6l-1.3-4.3h0.8l0.8,3.2l1.3-3.2\r\n\t\t\th0.6l1.3,3.2l0.8-3.2H1746.8z M1750.8,1213.5c-0.2,0.2-0.6,0.2-0.6,0.2c-0.2,0.2-0.6,0.2-0.6,0.2c-0.2,0-0.6-0.2-0.8-0.2\r\n\t\t\tc-0.2-0.2-0.6-0.2-0.6-0.6c-0.2-0.2-0.2-0.6-0.6-0.8c-0.2-0.2-0.2-0.6-0.2-0.8c0-0.8,0.2-1.3,0.6-1.4c0.2-0.2,0.8-0.6,1.4-0.6\r\n\t\t\tc0.2,0,0.6,0,0.8,0.2c0.2,0.2,0.6,0.2,0.6,0.2v0.8h-0.2c-0.2-0.2-0.6-0.2-0.6-0.2c-0.2-0.2-0.6-0.2-0.6-0.2\r\n\t\t\tc-0.6,0-0.8,0.2-0.8,0.6c-0.2,0.2-0.2,0.6-0.2,1.3c0,0.6,0.2,0.8,0.2,1.3c0.2,0.2,0.6,0.6,0.8,0.6s0.2,0,0.6-0.2\r\n\t\t\tc0.3-0.2,0.2-0.2,0.6-0.2C1750.5,1213.5,1750.5,1213.5,1750.8,1213.5c0-0.2,0-0.2,0-0.2h0.2L1750.8,1213.5L1750.8,1213.5\r\n\t\t\tL1750.8,1213.5L1750.8,1213.5z"/>\r\n\t\t<path fill="#58595B" d="M1763.1,1115.2h-19v1.8h19l0,0c1.1,0,1.7,1.2,1.7,2.2v37.3c0,1.1-0.8,1.7-1.7,2.2l-19-0.2v1.4h19\r\n\t\t\tc1.7-0.2,3.3-1.4,3.3-3.3v-38C1766.3,1116.6,1765.2,1115.2,1763.1,1115.2z M1744.3,1115.2h-19c-1.7,0-3.3,1.4-3.3,3.3v38\r\n\t\t\tc0,1.7,1.4,3.3,3.3,3.3h19v-1.4h-19c-1.1,0-1.7-0.8-1.7-1.7v-38c0-1.1,0.8-1.7,1.7-1.7h19V1115.2z M1743.2,1145.6h16.6v1.7h-16.6\r\n\t\t\tV1145.6z M1754.4,1138.6c0-1.4-2.2-1.4-2.2,0c0,0.8,0,1.1,0,1.7l0,0c-1.1,0-2.2,0-3.3,0c0-0.2,0.6-0.8,0.6-0.8\r\n\t\t\tc0.2-0.6,0.2-0.8,0-1.4c0,0-0.2-0.6-0.6-0.6c-1.1-0.8-2.7-1.4-3.6-2.2c-1.1-0.8-2.4,1.1-1.1,1.7c0.8,0.6,1.7,0.8,2.7,1.4\r\n\t\t\tc-0.6,0.8-0.8,1.4-1.4,2.2c0,0-0.8,0.8-0.8,1.4c0,1.1,0.8,2.2,2.2,2.2c1.7,0,3.6,0,5.4,0c0.8,0,1.7-0.6,2.2-1.4c0,0,0-0.2,0-0.6\r\n\t\t\tC1754.4,1141.8,1754.4,1140.2,1754.4,1138.6z M1748.6,1120.3c1.7,0,3.3,1.4,3.3,3.3c0,1.9-1.4,3.3-3.3,3.3c-1.9,0-3.3-1.4-3.3-3.3\r\n\t\t\tC1745.2,1121.7,1746.8,1120.3,1748.6,1120.3z M1757.4,1140.2c1.4,0,2.7,1.1,2.7,2.7c0,1.4-1.1,2.7-2.7,2.7c-1.6,0-2.7-1.1-2.7-2.7\r\n\t\t\tC1754.9,1141.5,1755.8,1140.2,1757.4,1140.2z M1751.1,1134.8c-1.7-0.8-3.3-1.7-5.1-2.7c0-1.4,0-2.7,0-4.1c0-0.8,0-1.4-0.6-1.7\r\n\t\t\tc-0.8-1.4-2.7-1.7-4.1-1.1c-3,1.4-6.3,2.7-9.3,4.4c-0.8,0.2-1.1,0.8-1.4,1.7l0,0l-3.3,11.7h5.7c0,3.6,0,7.1,0,10.8\r\n\t\t\tc0,0.8,0.8,1.7,1.7,1.7c0.8,0,1.7-0.8,1.7-1.7c0-3.6,0-7.1,0-10.8h5.7l-2.7-10c1.4-0.8,2.7-1.4,4.1-2.2v1.1c0,0.8,0,1.7,0.8,2.2\r\n\t\t\tc1.7,1.1,3.6,2.2,5.7,3.3C1751.1,1137.9,1752.5,1135.8,1751.1,1134.8z"/>\r\n\t\t<path fill="#58595B" d="M1780.6,1239.9h-19v1.4h19l0,0c1.1,0,1.7,0.8,1.7,1.7v37.9c0,1.1-0.8,1.7-1.9,1.9l-18.9-0.2v1.7h19\r\n\t\t\tc1.7-0.2,3.2-1.7,3.2-3.3v-37.4C1783.6,1241.6,1782.5,1239.5,1780.6,1239.9z M1761.7,1239.9h-19c-1.7,0-3.3,1.7-3.3,3.3v37.9\r\n\t\t\tc0,1.7,1.7,3.3,3.3,3.3h19v-1.7h-19c-1.1,0-1.7-0.8-1.7-1.7v-38c0-1.1,0.8-1.7,1.7-1.7h19V1239.9L1761.7,1239.9z M1755.1,1247.6\r\n\t\t\tc0,0.8-0.2,1.7-0.5,2.2c-0.5,0.5-1.1,0.8-1.7,0.8c-0.5,0-1.1-0.5-1.7-0.8c-0.5-0.5-0.5-1.4-0.5-2.2s0.2-1.7,0.5-1.9\r\n\t\t\tc0.5-0.5,1.1-0.8,1.7-0.8c0.5,0,1.1,0.2,1.7,0.8C1755.1,1245.9,1755.1,1246.8,1755.1,1247.6L1755.1,1247.6z M1758.4,1264.7\r\n\t\t\tL1758.4,1264.7c0,0.8-0.5,1.7-1.1,1.7c-0.6,0-1.1-0.5-1.1-1.7v-9.5h-0.5v23c0,0.8-0.5,1.7-1.4,1.7c-1,0-1.4-0.5-1.4-1.7v-13.6\r\n\t\t\th-0.5v13.6c0,0.8-0.5,1.7-1.4,1.7c-0.8,0-1.4-0.5-1.4-1.7v-23h-0.5v9.5c0,0.8-0.5,1.7-1.1,1.7s-1.1-0.5-1.1-1.7v-10.9\r\n\t\t\tc0-1.7,1.1-2.5,3.2-2.5h5.7c1.9,0,3.2,0.8,3.2,2.5v10.9H1758.4L1758.4,1264.7z M1772.3,1247.6c0,0.8-0.2,1.7-0.5,1.9\r\n\t\t\tc-0.5,0.5-1.1,0.8-1.7,0.8c-0.5,0-1.4-0.2-1.7-0.8c-0.5-0.5-0.5-1.4-0.5-1.9c0-0.8,0.2-1.7,0.5-1.9c0.5-0.5,1.1-0.8,1.7-0.8\r\n\t\t\tc0.5,0,1.4,0.2,1.7,0.8C1772.3,1245.9,1772.3,1247,1772.3,1247.6L1772.3,1247.6z M1776.1,1267.7L1776.1,1267.7h-2.9v10.1\r\n\t\t\tc0,0.8-0.5,1.7-1.7,1.7c-0.8,0-1.4-0.5-1.4-1.7v-10.1h-0.5v10.1c0,0.8-0.5,1.7-1.7,1.7c-0.8,0-1.4-0.5-1.4-1.7v-10.1h-2.9l2.9-7\r\n\t\t\tv-7h-0.5v6.5c0,0.8-0.5,1.7-1.1,1.7c-0.6,0-1.1-0.5-1.1-1.7v-6.5c0-2.2,1.1-3.2,3.2-3.2h5.7c1.9,0,3.2,1.1,3.2,3.2v6.5\r\n\t\t\tc0,0.8-0.5,1.7-1.1,1.7c-0.8,0-1.1-0.5-1.1-1.7v-6.5h-0.5v7L1776.1,1267.7z"/>\r\n\t\t<path fill="#58595B" d="M1813.7,1185h-12.1v0.9v0.2h12.1c0.6,0,1.1,0.6,1.1,1.1v24.3c0,0.6-0.6,1.1-1.1,1.1h-12.1v1.1h12.2\r\n\t\t\tc1.1,0,2-1.1,2-2.2v-24.3C1815.9,1186.2,1815,1185,1813.7,1185z M1801.6,1185.1h-12.2c-1.1,0-2.2,1.1-2.2,2.2v24.3\r\n\t\t\tc0,1.1,1.1,2.2,2.2,2.2h12.2v-1.1h-12.2c-0.6,0-1.1-0.6-1.1-1.1v-24.3c0-0.6,0.6-1.1,1.1-1.1h12.2V1185.1L1801.6,1185.1z\r\n\t\t\t M1810.6,1196.8L1810.6,1196.8h2.2c0.2,0,0.4-0.2,0.4-0.2c0.2-0.2,0.2-0.4,0-0.4l-1.1-1.7c-0.2-0.2-0.2-0.2-0.4-0.2\r\n\t\t\ts-0.4,0.2-0.4,0.2l-1.1,1.7c-0.2,0.2-0.2,0.4,0,0.4C1810.2,1196.8,1810.6,1196.8,1810.6,1196.8z M1813.2,1199.2\r\n\t\t\tc-0.2-0.2-0.2-0.2-0.4-0.2h-2.2c-0.2,0-0.4,0.2-0.4,0.2c-0.2,0.2-0.2,0.4,0,0.4l1.1,1.7c0.2,0.2,0.2,0.2,0.4,0.2s0.4-0.2,0.4-0.2\r\n\t\t\tl1.1-1.7C1813.4,1199.5,1813.4,1199.2,1813.2,1199.2z M1806.7,1188.4H1793c-0.9,0-1.5,0.6-1.5,1.5v16.1c0,0.9,0.6,1.5,1.5,1.5\r\n\t\t\th13.8c0.9,0,1.5-0.6,1.5-1.5v-16.1C1808.2,1189,1807.5,1188.4,1806.7,1188.4z M1792.3,1206v-16.1c0-0.4,0.4-0.6,0.6-0.6\r\n\t\t\tc0,0,4.6,0,5.9,0c0.4,0,0.4,0.4,0.4,0.4v16.5c0,0,0.2,0.6-0.6,0.6c-1.5,0-5.9,0-5.9,0C1792.5,1206.8,1792.3,1206.4,1792.3,1206z\r\n\t\t\t M1807.4,1206c0,0.4-0.4,0.6-0.6,0.6c0,0-4.4,0-5.9,0c-0.6,0-0.6-0.6-0.6-0.6v-16.5c0,0,0-0.4,0.4-0.4c1.5,0,6.1,0,6.1,0\r\n\t\t\tc0.4,0,0.6,0.4,0.6,0.6V1206L1807.4,1206L1807.4,1206z M1807.8,1210.5h-16.2c-0.4,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h16.2\r\n\t\t\tc0.4,0,0.9,0.4,0.9,0.9C1808.6,1210,1808.2,1210.5,1807.8,1210.5z"/>\r\n\t\t<path fill="#58595B" d="M2209.9,904h1.2l-2.3,2.7c-0.2,0.2,0,0.7,0,0.9c0.2,0,0.7,0,0.9,0l2.3-2.7v1.2c0,0.2,0.2,0.7,0.7,0.7\r\n\t\t\ts0.7-0.2,0.7-0.7l-0.2-3.2c0-0.2-0.2-0.7-0.7-0.7l0,0l-3.3,0.2c-0.2,0-0.7,0.2-0.7,0.7C2209,903.6,2209.2,904,2209.9,904\r\n\t\t\t M2207.8,886.8h-1.6c-1.2,0-2.6,0.7-3.5,1.6l-5.3,6.8V895c0-0.7-0.7-1.6-1.6-1.6c-0.7,0-1.6,0.7-1.6,1.6v4.4l-0.7,0.7h-2.6\r\n\t\t\tc-2.6,0-4.1,1.8-4.1,4.1s1.9,4.1,4.1,4.1h2.6c1.2,0,2.6-0.7,3.5-1.6l8.9-11.4h1.2c2.6,0,4.1-1.8,4.1-4.1\r\n\t\t\tC2212.3,888.7,2209.9,886.8,2207.8,886.8 M2207.8,893.4h-1.9c-0.2,0-0.7,0-0.7,0.2l-9.5,12c-0.2,0.7-0.9,0.9-1.9,0.9h-2.6\r\n\t\t\tc-1.2,0-2.6-0.9-2.6-2.6c0-1.2,0.9-2.3,2.6-2.3h2.7c0.2,0,0.7,0,0.7-0.2l9.5-12c0.2-0.7,0.9-0.9,1.9-0.9h1.6\r\n\t\t\tc1.2,0,2.6,0.9,2.6,2.3C2209.9,892.1,2208.8,893.4,2207.8,893.4 M2195.8,889.3c0.9,0,1.9,0.7,1.9,1.6c0,0.9-0.7,1.6-1.9,1.6\r\n\t\t\ts-1.9-0.7-1.9-1.6C2193.9,890.1,2194.9,889.3,2195.8,889.3 M2207.4,904h-1.2l2.3-3.2c0.2-0.2,0-0.7,0-0.9c-0.2,0-0.7,0-0.9,0\r\n\t\t\tl-2.3,3.2l-0.2-1.2c0-0.2-0.7-0.7-0.9-0.7s-0.7,0.2-0.7,0.9l0.7,3.2c0,0.2,0.2,0.7,0.7,0.7l0,0l3.3-0.7c0.2,0,0.7-0.2,0.7-0.9\r\n\t\t\tC2208.3,904,2208.1,903.6,2207.4,904 M2210.2,879h-21.9c-4.4,0-7.9,3.5-7.9,7.3v21.4c0,4.1,3.5,7.3,7.9,7.3h21.5\r\n\t\t\tc4.4,0,7.9-3.5,7.9-7.3v-21.4C2218,882.5,2214.6,879,2210.2,879 M2216.4,908.4c0,3.5-2.7,6.2-6.2,6.2h-21.5\r\n\t\t\tc-3.5,0-6.2-2.7-6.2-6.2v-21.6c0-3.5,2.7-6.2,6.2-6.2h21.5c3.5,0,6.2,2.7,6.2,6.2V908.4L2216.4,908.4z"/>\r\n\t\t<path fill="#58595B" d="M641.4,757.3h1.2l-2.3,2.7c-0.2,0.2,0,0.7,0,0.9c0.2,0,0.7,0,0.9,0l2.3-2.7v1.2c0,0.2,0.2,0.7,0.7,0.7\r\n\t\t\ts0.7-0.2,0.7-0.7l-0.2-3.2c0-0.2-0.2-0.7-0.7-0.7l0,0l-3.3,0.2c-0.2,0-0.7,0.2-0.7,0.7C640.5,756.9,640.7,757.3,641.4,757.3\r\n\t\t\t M639.3,740.1h-1.6c-1.2,0-2.6,0.7-3.5,1.6l-5.3,6.8v-0.2c0-0.7-0.7-1.6-1.6-1.6c-0.7,0-1.6,0.7-1.6,1.6v4.4l-0.7,0.7h-2.6\r\n\t\t\tc-2.6,0-4.1,1.8-4.1,4.1s1.9,4.1,4.1,4.1h2.6c1.2,0,2.6-0.7,3.5-1.6l8.9-11.4h1.2c2.6,0,4.1-1.8,4.1-4.1\r\n\t\t\tC643.8,742,641.4,740.1,639.3,740.1 M639.3,746.7h-1.9c-0.2,0-0.7,0-0.7,0.2l-9.5,12c-0.2,0.7-0.9,0.9-1.9,0.9h-2.6\r\n\t\t\tc-1.2,0-2.6-0.9-2.6-2.6c0-1.2,0.9-2.3,2.6-2.3h2.7c0.2,0,0.7,0,0.7-0.2l9.5-12c0.2-0.7,0.9-0.9,1.9-0.9h1.6\r\n\t\t\tc1.2,0,2.6,0.9,2.6,2.3C641.4,745.4,640.2,746.7,639.3,746.7 M627.3,742.6c0.9,0,1.9,0.7,1.9,1.6c0,0.9-0.7,1.6-1.9,1.6\r\n\t\t\ts-1.9-0.7-1.9-1.6C625.4,743.4,626.3,742.6,627.3,742.6 M638.8,757.3h-1.2l2.3-3.2c0.2-0.2,0-0.7,0-0.9c-0.2,0-0.7,0-0.9,0\r\n\t\t\tl-2.3,3.2l-0.2-1.2c0-0.2-0.7-0.7-0.9-0.7c-0.2,0-0.7,0.2-0.7,0.9l0.7,3.2c0,0.2,0.2,0.7,0.7,0.7l0,0l3.3-0.7\r\n\t\t\tc0.2,0,0.7-0.2,0.7-0.9C639.8,757.3,639.5,756.9,638.8,757.3 M641.6,732.3h-21.9c-4.4,0-7.9,3.5-7.9,7.3V761\r\n\t\t\tc0,4.1,3.5,7.3,7.9,7.3h21.5c4.4,0,7.9-3.5,7.9-7.3v-21.4C649.4,735.7,646.1,732.3,641.6,732.3 M647.9,761.7\r\n\t\t\tc0,3.5-2.7,6.2-6.2,6.2h-21.5c-3.5,0-6.2-2.7-6.2-6.2v-21.6c0-3.5,2.7-6.2,6.2-6.2h21.5c3.5,0,6.2,2.7,6.2,6.2V761.7L647.9,761.7z\r\n\t\t\t"/>\r\n\t\t<path fill="#58595B" d="M776.2,641.3h1.2L775,644c-0.2,0.2,0,0.7,0,0.9c0.2,0,0.7,0,0.9,0l2.3-2.7v1.2c0,0.2,0.2,0.7,0.7,0.7\r\n\t\t\ts0.7-0.2,0.7-0.7l-0.2-3.2c0-0.2-0.2-0.7-0.7-0.7l0,0l-3.3,0.2c-0.2,0-0.7,0.2-0.7,0.7C775.3,640.9,775.5,641.3,776.2,641.3\r\n\t\t\t M774.1,624.1h-1.6c-1.2,0-2.6,0.7-3.5,1.6l-5.3,6.8v-0.2c0-0.7-0.7-1.6-1.6-1.6c-0.7,0-1.6,0.7-1.6,1.6v4.4l-0.7,0.7h-2.6\r\n\t\t\tc-2.6,0-4.1,1.8-4.1,4.1s1.9,4.1,4.1,4.1h2.6c1.2,0,2.6-0.7,3.5-1.6l8.9-11.4h1.2c2.6,0,4.1-1.8,4.1-4.1\r\n\t\t\tC778.5,626,776.2,624.1,774.1,624.1 M774.1,630.7h-1.9c-0.2,0-0.7,0-0.7,0.2l-9.5,12c-0.2,0.7-0.9,0.9-1.9,0.9h-2.6\r\n\t\t\tc-1.2,0-2.6-0.9-2.6-2.6c0-1.2,0.9-2.3,2.6-2.3h2.7c0.2,0,0.7,0,0.7-0.2l9.5-12c0.2-0.7,0.9-0.9,1.9-0.9h1.6\r\n\t\t\tc1.2,0,2.6,0.9,2.6,2.3C776.2,629.4,775,630.7,774.1,630.7 M762,626.6c0.9,0,1.9,0.7,1.9,1.6c0,0.9-0.7,1.6-1.9,1.6\r\n\t\t\ts-1.9-0.7-1.9-1.6C760.2,627.4,761.1,626.6,762,626.6 M773.6,641.3h-1.2l2.3-3.2c0.2-0.2,0-0.7,0-0.9c-0.2,0-0.7,0-0.9,0l-2.3,3.2\r\n\t\t\tl-0.2-1.2c0-0.2-0.7-0.7-0.9-0.7c-0.2,0-0.7,0.2-0.7,0.9l0.7,3.2c0,0.2,0.2,0.7,0.7,0.7l0,0l3.3-0.7c0.2,0,0.7-0.2,0.7-0.9\r\n\t\t\tC774.6,641.3,774.3,640.9,773.6,641.3 M776.4,616.3h-21.9c-4.4,0-7.9,3.5-7.9,7.3V645c0,4.1,3.5,7.3,7.9,7.3H776\r\n\t\t\tc4.4,0,7.9-3.5,7.9-7.3v-21.4C784.2,619.8,780.9,616.3,776.4,616.3 M782.7,645.7c0,3.5-2.7,6.2-6.2,6.2H755\r\n\t\t\tc-3.5,0-6.2-2.7-6.2-6.2v-21.6c0-3.5,2.7-6.2,6.2-6.2h21.5c3.5,0,6.2,2.7,6.2,6.2V645.7L782.7,645.7z"/>\r\n\t\t<path fill="#58595B" d="M1816.6,993.7h1.2l-2.3,2.7c-0.2,0.2,0,0.7,0,0.9c0.2,0,0.7,0,0.9,0l2.3-2.7v1.2c0,0.2,0.2,0.7,0.7,0.7\r\n\t\t\ts0.7-0.2,0.7-0.7l-0.2-3.2c0-0.2-0.2-0.7-0.7-0.7l0,0l-3.3,0.2c-0.2,0-0.7,0.2-0.7,0.7C1815.7,993.3,1815.9,993.7,1816.6,993.7\r\n\t\t\t M1814.5,976.5h-1.6c-1.2,0-2.6,0.7-3.5,1.6l-5.3,6.8v-0.2c0-0.7-0.7-1.6-1.6-1.6c-0.7,0-1.6,0.7-1.6,1.6v4.4l-0.7,0.7h-2.6\r\n\t\t\tc-2.6,0-4.1,1.8-4.1,4.1c0,2.3,1.9,4.1,4.1,4.1h2.6c1.2,0,2.6-0.7,3.5-1.6l8.9-11.4h1.2c2.6,0,4.1-1.8,4.1-4.1\r\n\t\t\tC1818.9,978.4,1816.6,976.5,1814.5,976.5 M1814.5,983.1h-1.9c-0.2,0-0.7,0-0.7,0.2l-9.5,12c-0.2,0.7-0.9,0.9-1.9,0.9h-2.6\r\n\t\t\tc-1.2,0-2.6-0.9-2.6-2.6c0-1.2,0.9-2.3,2.6-2.3h2.7c0.2,0,0.7,0,0.7-0.2l9.5-12c0.2-0.7,0.9-0.9,1.9-0.9h1.6\r\n\t\t\tc1.2,0,2.6,0.9,2.6,2.3C1816.6,981.8,1815.4,983.1,1814.5,983.1 M1802.4,979c0.9,0,1.9,0.7,1.9,1.6c0,0.9-0.7,1.6-1.9,1.6\r\n\t\t\tc-1.2,0-1.9-0.7-1.9-1.6C1800.6,979.8,1801.5,979,1802.4,979 M1814,993.7h-1.2l2.3-3.2c0.2-0.2,0-0.7,0-0.9c-0.2,0-0.7,0-0.9,0\r\n\t\t\tl-2.3,3.2l-0.2-1.2c0-0.2-0.7-0.7-0.9-0.7s-0.7,0.2-0.7,0.9l0.7,3.2c0,0.2,0.2,0.7,0.7,0.7l0,0l3.3-0.7c0.2,0,0.7-0.2,0.7-0.9\r\n\t\t\tC1815,993.7,1814.7,993.3,1814,993.7 M1816.8,968.7h-21.9c-4.4,0-7.9,3.5-7.9,7.3v21.4c0,4.1,3.5,7.3,7.9,7.3h21.5\r\n\t\t\tc4.4,0,7.9-3.5,7.9-7.3V976C1824.6,972.2,1821.3,968.7,1816.8,968.7 M1823,998.1c0,3.5-2.7,6.2-6.2,6.2h-21.5\r\n\t\t\tc-3.5,0-6.2-2.7-6.2-6.2v-21.6c0-3.5,2.7-6.2,6.2-6.2h21.5c3.5,0,6.2,2.7,6.2,6.2V998.1L1823,998.1z"/>\r\n\t\t<path fill="#58595B" d="M1910.2,1208.8v-1.2c0.6-0.1,1.2-0.3,1.7-0.8c0.7-0.7,0.9-1.5,0.8-2.4c-0.1,0.5-0.3,0.9-0.6,1.3\r\n\t\t\tc-0.9,0.9-2.3,0.9-3.3,0c-0.9-0.9-0.9-2.3,0-3.3c0.4-0.4,0.8-0.6,1.3-0.6c-0.9-0.1-1.7,0.2-2.4,0.8c-1.1,1.1-1.1,3.1,0,4.2\r\n\t\t\tc0.4,0.4,0.8,0.6,1.3,0.7v1.3c-0.1,0-0.2,0-0.4,0c-4,0-6.5,2.2-7.6,4.4c-0.9,1.8-0.7,4.1-0.7,4.1v7.6h-2.2v-14.1\r\n\t\t\tc0.5-0.2,1.6-0.6,1.6-1.4c0-0.8-1.1-1.2-1.6-1.4v-1.5c0.5-0.2,1.6-0.6,1.6-1.6s-1-1.4-1.6-1.5v-4.1c0-2-1.1-4.5-4.3-4.9v-1.4\r\n\t\t\tc0.6-0.1,1.2-0.3,1.7-0.8c0.7-0.7,0.9-1.5,0.8-2.4c-0.1,0.5-0.3,0.9-0.6,1.3c-0.9,0.9-2.3,0.9-3.3,0c-0.9-0.9-0.9-2.3,0-3.3\r\n\t\t\tc0.4-0.4,0.8-0.6,1.3-0.6c-0.9-0.1-1.7,0.2-2.4,0.8c-1.1,1.1-1.1,3.1,0,4.2c0.4,0.4,0.8,0.6,1.3,0.7v1.4c-0.2,0-0.3,0-0.5,0\r\n\t\t\tc-4.8,0.3-5,5.2-5,5.3v3.8c-0.5,0.1-1.5,0.5-1.5,1.5c0,0.9,1,1.4,1.5,1.6v1.5c-0.5,0.1-1.6,0.5-1.6,1.4c0,0.8,1.1,1.3,1.6,1.4\r\n\t\t\tv26.6h31.5v-17.5C1918.9,1212.8,1916.1,1209.3,1910.2,1208.8 M1914.8,1234.4h-23.9v-35c0,0,1.7-3.8,3.5,0v27.8h9.9v-11.1\r\n\t\t\tc0,0-0.1-4.1,5-4.1c5.1,0,5.5,4.1,5.5,4.1V1234.4L1914.8,1234.4z M1929,1182.9h-26.5v2.3h26.5l0,0c1.6,0,2.3,1.2,2.3,2.3v52.6\r\n\t\t\tc0,1.6-1.2,2.3-2.7,2.7l-26.1-0.4v2.3h26.5c2.3-0.4,4.3-2.3,4.3-4.7v-52.6C1933.3,1184.8,1931.6,1182.9,1929,1182.9z\r\n\t\t\t M1902.9,1182.9h-26.5c-2.3,0-4.7,2.3-4.7,4.7v52.6c0,2.3,2.3,4.7,4.7,4.7h26.5v-2.3h-26.5c-1.6,0-2.3-1.2-2.3-2.3v-52.6\r\n\t\t\tc0-1.6,1.2-2.3,2.3-2.3h26.5V1182.9L1902.9,1182.9z"/>\r\n\t\t<path fill="#F24E4E" d="M326.9,955.9l1.9,3.7l10.9-20l-22.4-0.8l1.7,3.1l15.4,0.5L326.9,955.9z M325.2,953l1,1.8l6.1-11l-12.4-0.4\r\n\t\t\tl0.8,1.9l8.5,0.3L325.2,953z M337.8,964.2l4.7-2.7l13.6,24l-4.7,2.7L337.8,964.2z M304.2,904.8l4.7-2.7l13.6,24l-4.7,2.7\r\n\t\t\tL304.2,904.8z"/>\r\n\t\t<path id="info_1_" fill="#58595B" d="M471.6,869.7c-11.1,0-20.1,9-20.1,20.1c0,11.1,9,20.1,20.1,20.1c11.1,0,20.1-9,20.1-20.1\r\n\t\t\tC491.7,878.7,482.7,869.7,471.6,869.7z M475.7,900.9c-1,0.4-1.8,0.7-2.5,1c-0.6,0.2-1.3,0.3-2.1,0.3c-1.3,0-2.2-0.3-2.9-0.9\r\n\t\t\tc-0.7-0.6-1-1.4-1-2.3c0-0.4,0-0.7,0.1-1.1c0.1-0.4,0.1-0.8,0.2-1.3l1.3-4.6c0.1-0.4,0.2-0.8,0.3-1.3c0.1-0.4,0.1-0.8,0.1-1.1\r\n\t\t\tc0-0.6-0.1-1-0.4-1.2c-0.2-0.2-0.7-0.4-1.4-0.4c-0.4,0-0.7,0.1-1,0.2c-0.4,0.1-0.7,0.2-0.9,0.3l0.4-1.4c0.8-0.4,1.7-0.7,2.4-0.9\r\n\t\t\tc0.8-0.2,1.5-0.4,2.2-0.4c1.3,0,2.2,0.3,2.9,0.9c0.7,0.6,1,1.4,1,2.3c0,0.2,0,0.5-0.1,1.1c-0.1,0.5-0.1,1-0.2,1.4l-1.3,4.6\r\n\t\t\tc-0.1,0.4-0.2,0.8-0.3,1.3s-0.1,0.8-0.1,1.1c0,0.6,0.1,1,0.4,1.2s0.7,0.4,1.4,0.4c0.3,0,0.7-0.1,1.1-0.2c0.4-0.1,0.7-0.2,0.8-0.3\r\n\t\t\tL475.7,900.9z M475.5,882.4c-0.6,0.5-1.3,0.8-2.1,0.8c-0.8,0-1.5-0.3-2.2-0.8c-0.6-0.5-0.9-1.3-0.9-2c0-0.8,0.3-1.5,0.9-2\r\n\t\t\tc0.6-0.5,1.3-0.8,2.2-0.8c0.8,0,1.5,0.3,2.1,0.8s0.9,1.3,0.9,2C476.4,881.1,476.1,881.8,475.5,882.4z"/>\r\n\t</g>\r\n</g>\r\n</svg>\r\n',
    title: 'MechanicMap--2',
    mapWidth: 3000,
    no: -2,
  },
  {
    show: false,
    locations: [
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/460_original.jpg?1360772146',
        type: LocationTypes.STORE,
        title: 'Adidas',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_28',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/535_original.jpg?1376916442',
        type: LocationTypes.STORE,
        title: 'Aker',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_04',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/67158505-75cd-40f7-be04-cfadc7bea609.png?1566917161113',
        type: LocationTypes.STORE,
        title: 'Avelieer',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_06',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/157_original.jpg?1360770621',
        type: LocationTypes.STORE,
        title: "D'S Damat",
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_12',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/3592_original.jpg?1485423585',
        type: LocationTypes.STORE,
        title: 'Dagi',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_14',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/b18a6eb0-e658-4669-acfb-18876fb54313.png?1553589832001',
        type: LocationTypes.STORE,
        title: 'Der Glory',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_23',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/3202_original.jpg?1459941068',
        type: LocationTypes.STORE,
        title: 'Flo',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_07',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/1556_original.jpg?1400146725',
        type: LocationTypes.STORE,
        title: 'LC Waikiki',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_34',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/4551_original.jpg?1530791345',
        type: LocationTypes.STORE,
        title: 'MUDO',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_21',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/08f2e7e3-4a27-4311-9258-f8b2167197e9.png?1625815186439',
        type: LocationTypes.STORE,
        title: 'Paulmark',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_35',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/039b7cf8-5570-44bc-b40b-ddafb085888d.png?1570782345144',
        type: LocationTypes.STORE,
        title: 'Pierre Cardin',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_18',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/95_original.jpg?1360770285',
        type: LocationTypes.STORE,
        title: 'Tedi',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_19',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/1946_original.jpg?1407151519',
        type: LocationTypes.STORE,
        title: 'U.S. Polo ASSN.',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_17',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/1309_original.jpg?1388392384',
        type: LocationTypes.STORE,
        title: 'İgs',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'KE1_store_09',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/H1jrzLz_V-main.png?1553257026809',
        type: LocationTypes.SERVICE,
        title: 'Baby Care Room',
        id: 'KE1_babycare_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/BJ-Pz8f_N-main.png?1553257049117',
        type: LocationTypes.SERVICE,
        title: 'Disabled WC',
        id: 'KE1_disabledwc_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/SJBY8M8_E-main.png?1553503868939',
        type: LocationTypes.SERVICE,
        title: 'WC',
        id: 'KE1_wc_01',
      },
    ],
    id: 'level--1',
    mapHeight: 1500,
    map: '<?xml version="1.0" encoding="utf-8"?>\r\n<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\r\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t width="3000px" height="1500px" viewBox="0 0 3000 1500" enable-background="new 0 0 3000 1500" xml:space="preserve">\r\n<g id="background">\r\n\t<path fill="#EDEDED" stroke="#565656" stroke-width="2" stroke-miterlimit="10" d="M2960.9,474.6l-697.399-43l-87.301-2.8\r\n\t\tl-27.899,38.3H927.699V195.2H834v19.5h-28.7v-43.4l-91.7-90.9L0,516.8L139.9,741.6l10.4-5.6l16.3,26.7l-11.6,8l43.399,69.7V866.3\r\n\t\th197.7v55h190.5v390.9l1974.1-2.4L2778,975.8v-86.1h51L3000,631.1v-98L2960.9,474.6z M714.9,872.7H468.3V648.3H715L714.9,872.7\r\n\t\tL714.9,872.7z M961.6,921.3H760.8v-72.5h200.899L961.6,921.3L961.6,921.3z M1250.9,921.3h-249.5v-72.5h249.5V921.3z M1541,921.3\r\n\t\th-251.5v-72.5H1541V921.3z M1791.699,921.3h-212v-72.5h212V921.3z M2060.699,921.3h-230.3v-72.5h230.3V921.3z M2270.3,961.9h-174.9\r\n\t\tV845.2h174.9V961.9z"/>\r\n\t<path id="stores_1_" fill="#60605F" d="M521,601.9h214.699V466.5H695.8v-32.3h67V309.8h-43V250l-13.2-21.9l24.7-15.5l-41.4-62.2\r\n\t\tl55.8-35.9l-25.9-25.1L470,240.1l51,81.7V601.9z M434.8,867.8V601.9H506V323.8l-48.4-75.4l-445.9,273l60.2,98.8l39.5-23.9\r\n\t\tl58.2,94.8L160,697.9l9.199,13.5L139.3,730.1l6.399,10.801L156.5,734.1l20.699,33.9l-10.8,7.2l42.2,69.3v21.9L434.8,867.8z\r\n\t\t M684.3,880.5h31.1v19.9h-31.1V880.5z M755.3,497.9h81.1V812.3h-81.1V497.9z M847.3,497.9h75.3V812.3h-75.3V497.9z M933.8,497.9\r\n\t\th72.5V812.3h-72.5V497.9z M1017.199,497.9h68.7V812.3h-68.7V497.9z M1096.4,497.9H1206V812.3H1096.4V497.9z M1229.9,539.8h99.601\r\n\t\tV812.4H1229.9V539.8z M1420.8,812.4h-78.9V539.8h20.3V498h75.7v55.8h-17.1V812.4z M1429.6,560.3h72.9V812h-72.9V560.3z\r\n\t\t M1511.9,812.4h64.601V636.6h90.899v-76.3h-79.7V497.9h-75.8V812.4z M1587.699,646.1h34.5V812.4h-34.5V646.1z M1634.3,646.1h33.1\r\n\t\tV812.4h-33.1V646.1z M1678.699,812.4H1750v-271H1720.9V498h-42.2V812.4L1678.699,812.4z M1759.699,552.5h94.7v259.8h-94.7V552.5z\r\n\t\t M1878.699,812.4h123.7V634.3h94.3V497.9h-218V812.4z M2011.4,643.4h84.9v169h-84.9V643.4z M2105.4,497.9h123.5V812.3h-123.5V497.9\r\n\t\tz M2236.9,812.4V481.2h30.7v-39.9l549.9,33.101V607.1H2609.9v158.2h168.2v212.8L2602,1247.9h-251.5v-116h-43.801V1015.1h46.2V812.4\r\n\t\tH2236.9z M2194.9,1015.2h88.7v162.2h-88.7V1015.2z M2105.4,1015.2h81.7v162.2h-81.7V1015.2z M2096.199,1015.2V1177h-11.5v57.8\r\n\t\th-73.3v-219.6H2096.199L2096.199,1015.2z M2002,966.6h-79.9V1289.4h37.9v-14.7h23.1v-39.9h19L2002,966.6L2002,966.6z M1812.1,966.6\r\n\t\th98.9V1289.4h-98.9V966.6z M1783.8,966.6h-193.3V1289.4h74.1V1108.1h119.199L1783.8,966.6L1783.8,966.6z M1581.6,966.6H1512v274h20\r\n\t\tv48.801h49.6V966.6z M1399.199,966.6h103.2v274h-103.2V966.6z M1374.5,966.6H1178V1140.7h-165.4v149.8h361.8L1374.5,966.6\r\n\t\tL1374.5,966.6z M1096.4,966.6h70.4V1128h-70.4V966.6z M1012.699,966.6h73.2V1128h-73.2V966.6z M921,966.6h82.6v324h-34v-32.3H921\r\n\t\tV966.6z M850.5,1186.6v-54.8h-44.301l-1.1-165.2H896v220H850.5L850.5,1186.6z M796.699,966.6V1140.7h45.2v171.8H595.8v-173h87.3\r\n\t\tv-173L796.699,966.6L796.699,966.6z M595.8,966.6h76.3V1131.4h-76.3V966.6z"/>\r\n</g>\r\n<g id="stores">\r\n\t<path id="KE1_store_35" fill="#FBC005" d="M515.4,597.3h214.7V461.8h-39.9v-32.3h67V305.2h-43.1v-59.8L701,223.5l24.699-15.5\r\n\t\tl-41.5-62.2L740,109.9l-25.9-25.1L464.4,235.5l51,81.6V597.3z"/>\r\n\t<path id="KE1_store_34" fill="#FBC005" d="M429.199,863.1V597.3H500.3V319.1l-48.4-75.3L6,516.8l60.199,98.8l39.4-23.899\r\n\t\tl58.2,94.899l-9.601,6.7l9.2,13.601L133.5,725.6L139.9,736.4l10.7-6.801l20.8,33.9l-10.8,7.2l42.2,69.3v21.9L429.199,863.1z"/>\r\n\t<path id="KE1_store_33" fill="#FBC005" d="M678.699,875.9H709.8V895.8h-31.101V875.9z"/>\r\n\t<path id="KE1_store_32" fill="#FBC005" d="M749.6,493.3h81.1v314.4h-81.1V493.3z"/>\r\n\t<path id="KE1_store_31" fill="#FBC005" d="M841.699,493.3H917v314.4h-75.301V493.3z"/>\r\n\t<path id="KE1_store_30" fill="#FBC005" d="M928.199,493.3h72.5v314.4h-72.5V493.3z"/>\r\n\t<path id="KE1_store_29" fill="#FBC005" d="M1011.5,493.3h68.699v314.4H1011.5V493.3L1011.5,493.3z"/>\r\n\t<path id="KE1_store_28" fill="#FBC005" d="M1090.699,493.3h109.6v314.4h-109.6V493.3z"/>\r\n\t<path id="KE1_store_27" fill="#FBC005" d="M1224.199,535.1h99.6V807.7h-99.6V535.1z"/>\r\n\t<path id="KE1_store_26" fill="#FBC005" d="M1415.1,807.7h-78.9V535.1h20.301v-41.8h75.8v55.8h-17.2V807.7L1415.1,807.7z"/>\r\n\t<path id="KE1_store_25" fill="#FBC005" d="M1423.9,555.7h72.9v251.6h-72.9V555.7z"/>\r\n\t<path id="KE1_store_24" fill="#FBC005" d="M1506.3,807.7h64.6V632h90.9v-76.3h-79.7v-62.4h-75.8V807.7z"/>\r\n\t<path id="KE1_store_23" fill="#FBC005" d="M1582.1,641.5h34.5v166.3h-34.5V641.5z"/>\r\n\t<path id="KE1_store_22" fill="#FBC005" d="M1628.699,641.5h33.1v166.3h-33.1V641.5z"/>\r\n\t<path id="KE1_store_21" fill="#FBC005" d="M1673,807.7h71.3v-271h-29.101v-43.4H1673V807.7z"/>\r\n\t<path id="KE1_store_20" fill="#FBC005" d="M1754,547.9h94.699v259.8H1754V547.9z"/>\r\n\t<path id="KE1_store_19" fill="#FBC005" d="M1873,807.7h123.699v-178H2091V493.3h-218V807.7z"/>\r\n\t<path id="KE1_store_18" fill="#FBC005" d="M2005.699,638.7h84.9v169h-84.9V638.7z"/>\r\n\t<path id="KE1_store_17" fill="#FBC005" d="M2099.8,493.3h123.5v314.4h-123.5V493.3z"/>\r\n\t<path id="KE1_store_16" fill="#FBC005" d="M2231.3,807.7V476.6h30.7V436.7l549.899,33.1v132.7h-207.601v158.2H2772.4v212.8\r\n\t\tl-176.101,269.8h-251.5v-116H2301v-116.7h46.199V807.7H2231.3L2231.3,807.7z"/>\r\n\t<path id="KE1_store_15" fill="#FBC005" d="M2189.199,1010.6h88.7v162.2h-88.7V1010.6z"/>\r\n\t<path id="KE1_store_14" fill="#FBC005" d="M2099.8,1010.6h81.7v162.2h-81.7V1010.6z"/>\r\n\t<path id="KE1_store_13" fill="#FBC005" d="M2090.6,1010.6V1172.4h-11.5v57.699h-73.4v-219.5H2090.6z"/>\r\n\t<path id="KE1_store_12" fill="#FBC005" d="M1996.4,961.9h-80v322.8h37.9V1270h23.1v-39.9h19V961.9z"/>\r\n\t<path id="KE1_store_11" fill="#FBC005" d="M1806.5,961.9h98.899v322.8H1806.5V961.9z"/>\r\n\t<path id="KE1_store_10" fill="#FBC005" d="M1778.199,961.9h-193.3v322.8H1659v-181.3h119.199V961.9L1778.199,961.9z"/>\r\n\t<path id="KE1_store_09" fill="#FBC005" d="M1575.9,961.9h-69.6v274h20v48.8h49.6V961.9L1575.9,961.9z"/>\r\n\t<path id="KE1_store_08" fill="#FBC005" d="M1393.6,961.9h103.199v274H1393.6V961.9z"/>\r\n\t<path id="KE1_store_07" fill="#FBC005" d="M1368.9,961.9h-196.5V1136.1H1007V1285.9H1368.9V961.9z"/>\r\n\t<path id="KE1_store_06" fill="#FBC005" d="M1090.699,961.9h70.4V1123.3h-70.4V961.9z"/>\r\n\t<path id="KE1_store_05" fill="#FBC005" d="M1007,961.9h73.199V1123.3H1007V961.9z"/>\r\n\t<path id="KE1_store_04" fill="#FBC005" d="M915.4,961.9H998v324h-34v-32.2H915.4V961.9z"/>\r\n\t<path id="KE1_store_03" fill="#FBC005" d="M844.8,1181.9V1127.1h-44.3L799.4,961.9h90.9v220H844.8L844.8,1181.9z"/>\r\n\t<path id="KE1_store_02" fill="#FBC005" d="M791.1,961.9V1136.1h45.2v171.7H590.199V1134.9H677.5v-173H791.1L791.1,961.9z"/>\r\n\t<path id="KE1_store_01" fill="#FBC005" d="M590.199,961.9H666.5v164.8h-76.301V961.9z"/>\r\n</g>\r\n<g id="services">\r\n\t<path id="KE1_babycare_01" fill="#CE9E15" d="M1664.6,1115h76.5v46.8h-76.5V1115z"/>\r\n\t<path id="KE1_disabledwc_01" fill="#CE9E15" d="M1664.6,1171.8h76.5v47.3h-76.5V1171.8z"/>\r\n\t<path id="KE1_wc_01" fill="#CE9E15" d="M1664.6,1227.5h135.3v57.2h-135.3V1227.5z"/>\r\n\t<path id="KE1_kiosk_01" fill="#EDEDED" d="M757.8,897.9h-11v-19.5h11V897.9z"/>\r\n</g>\r\n<g id="nopointer">\r\n\t<polygon fill="#878584" points="689.8,147.4 730.9,208.8 707,223.9 720.1,244.6 720.1,300.4 762.4,300.4 762.4,433.9 694.6,433.9 \r\n\t\t694.6,458.6 736.8,458.6 736.8,490.5 1206.3,490.5 1206.3,532.7 1353.3,532.7 1353.3,487.3 1437.8,487.3 1437.8,548.7 \r\n\t\t1496.8,548.7 1496.8,489.7 1588.9,489.7 1588.9,547.9 1663.8,547.9 1663.8,489.3 1720.8,489.3 1720.8,533.5 1753.5,533.5 \r\n\t\t1753.5,542.7 1869.8,542.7 1869.8,488.1 2228.5,488.1 2228.5,467.4 2256.8,467.4 2256.8,436.7 2175.1,436.7 2150.4,469.8 \r\n\t\t925.3,469.8 925.3,198 837.3,198 837.3,217.5 803,217.5 803,172.9 741.6,115.9 \t"/>\r\n\t<polygon fill="#878584" points="911.8,1186.7 844.8,1186.7 844.8,1307.8 2558.699,1307.8 2591.9,1256.1 2333.9,1256.1 \r\n\t\t2333.9,1136.9 2288.699,1136.9 2288.699,1179.1 2084.199,1179.1 2084.199,1237.7 1983.4,1237.7 1983.4,1274.4 1960.699,1274.4 \r\n\t\t1960.699,1289.9 1521.1,1289.9 1521.1,1245.7 1373.3,1245.7 1373.3,1290.7 960,1290.7 960,1258 911.4,1258.4 \t"/>\r\n\t<polygon fill="#878584" points="2818.699,608.5 2610.3,608.1 2610.3,755.5 2776.8,755.5 2776.8,885 2827,885 2992.8,628 \r\n\t\t2992.8,533.5 2955.8,477 2818.699,469.8 \t"/>\r\n\t<polygon fill="#878584" points="104.4,596.5 68.5,618 131.5,722.4 158.6,706.1 149.8,691.7 158.6,685.8 \t"/>\r\n\t<g id="dummies">\r\n\t\t<path fill="#58595B" d="M1726.1,1173.6h-18.7v1.4h18.7l0,0c1.199,0,1.699,0.8,1.699,1.7v37.399c0,1.2-0.799,1.7-1.699,1.7h-18.7\r\n\t\t\tv1.4h18.7c1.699,0,3.3-1.5,3.3-3.2v-37.4C1729.3,1175,1728.3,1173.6,1726.1,1173.6z M1707.4,1173.6h-18.7\r\n\t\t\tc-1.699,0-3.3,1.4-3.3,3.101v37.399c0,1.7,1.4,3.101,3.3,3.101h18.7v-1.4h-18.7c-1.199,0-1.699-0.8-1.699-1.7V1176.7\r\n\t\t\tc0-1.2,0.8-1.7,1.699-1.7h18.7V1173.6z M1703.8,1178.6c-1.4,0-2.8,1.2-2.8,2.801c0,1.6,1.199,2.8,2.8,2.8c1.399,0,2.8-1.2,2.8-2.8\r\n\t\t\tC1706.6,1179.8,1705.3,1178.6,1703.8,1178.6z M1720.8,1200.7h-2.3l-5.601-6.7h-7.2l-0.8-3.7l4.2,1.2c0.199,0,0.199,0,0.199,0\r\n\t\t\tc0.201,0,0.801-0.2,0.801-0.6c0.199-0.601-0.2-0.801-0.6-1.2l-5-1.4l-0.601-2.3c-0.2-0.6-0.6-0.8-1.2-0.6\r\n\t\t\tc-0.6,0.199-0.8,0.6-0.6,1.199l2.2,9.7h7.6l5.601,6.7h3.3c0.6,0,0.8-0.2,0.8-0.8C1721.9,1201.3,1721.4,1200.7,1720.8,1200.7z\r\n\t\t\t M1706.6,1206.2c-2.301,0-4.4-0.8-6.5-2.3c-2.301-1.7-3.6-4.2-3.9-6.7c-0.6-3.7,1.2-7.601,4.4-9.5c0.6-0.2,1.199-0.2,1.4,0.2\r\n\t\t\tc0.199,0.6,0.199,1.199-0.2,1.399c-2.8,1.7-3.9,4.4-3.601,7.601c0.2,2.3,1.2,4.199,3.301,5.3c1.699,1.2,3.899,1.7,6.1,1.7\r\n\t\t\tc2.3-0.2,4.4-1.4,5.9-3.601c0.199-0.6,1.199-0.6,1.399-0.2c0.601,0.2,0.601,1.2,0.2,1.4c-1.7,2.8-4.4,4.2-7.6,4.4\r\n\t\t\tC1707.4,1206,1706.699,1206.2,1706.6,1206.2z M1708.9,1208.2l-1.2,4.2h-0.6l-1.2-3.101l-1.2,3.101h-0.6l-1.199-4.2h0.799\r\n\t\t\tl0.801,3.1l1.199-3.1h0.601l1.2,3.1l0.8-3.1H1708.9z M1712.8,1212.1c-0.2,0.2-0.601,0.2-0.601,0.2c-0.199,0.2-0.6,0.2-0.6,0.2\r\n\t\t\tc-0.2,0-0.6-0.2-0.8-0.2c-0.2-0.2-0.601-0.2-0.601-0.6c-0.199-0.2-0.199-0.601-0.6-0.8c-0.2-0.2-0.2-0.601-0.2-0.801\r\n\t\t\tc0-0.8,0.2-1.199,0.601-1.399c0.199-0.2,0.8-0.601,1.399-0.601c0.2,0,0.601,0,0.8,0.2c0.2,0.2,0.601,0.2,0.601,0.2v0.8h-0.2\r\n\t\t\tc-0.199-0.2-0.6-0.2-0.6-0.2c-0.2-0.199-0.6-0.199-0.6-0.199c-0.601,0-0.801,0.199-0.801,0.6c-0.199,0.2-0.199,0.6-0.199,1.2\r\n\t\t\tc0,0.6,0.199,0.8,0.199,1.199c0.2,0.2,0.6,0.601,0.801,0.601c0.199,0,0.199,0,0.6-0.2c0.3-0.2,0.199-0.2,0.6-0.2\r\n\t\t\tC1712.5,1212.1,1712.5,1212.1,1712.8,1212.1c0-0.199,0-0.199,0-0.199h0.2L1712.8,1212.1L1712.8,1212.1L1712.8,1212.1\r\n\t\t\tL1712.8,1212.1z"/>\r\n\t\t<path fill="#58595B" d="M1725,1116.4h-18.7v1.699h18.7l0,0c1.1,0,1.699,1.2,1.699,2.101v36.7c0,1.1-0.8,1.699-1.699,2.199\r\n\t\t\tl-18.7-0.199v1.399h18.7c1.699-0.2,3.3-1.399,3.3-3.3v-37.4C1728.1,1117.8,1727,1116.4,1725,1116.4z M1706.4,1116.4h-18.7\r\n\t\t\tc-1.699,0-3.3,1.399-3.3,3.3v37.399c0,1.7,1.4,3.301,3.3,3.301h18.7v-1.4h-18.7c-1.1,0-1.699-0.8-1.699-1.7V1119.9\r\n\t\t\tc0-1.101,0.8-1.7,1.699-1.7h18.7V1116.4z M1705.3,1146.3h16.399v1.7H1705.3V1146.3z M1716.4,1139.5c0-1.4-2.2-1.4-2.2,0\r\n\t\t\tc0,0.8,0,1.1,0,1.7l0,0c-1.1,0-2.199,0-3.3,0c0-0.2,0.601-0.8,0.601-0.8c0.199-0.601,0.199-0.801,0-1.4c0,0-0.2-0.6-0.601-0.6\r\n\t\t\tc-1.1-0.801-2.7-1.4-3.6-2.2c-1.101-0.8-2.3,1.1-1.101,1.7c0.801,0.6,1.7,0.8,2.7,1.399c-0.6,0.8-0.8,1.4-1.399,2.2\r\n\t\t\tc0,0-0.801,0.8-0.801,1.4c0,1.1,0.801,2.199,2.2,2.199c1.7,0,3.601,0,5.3,0c0.801,0,1.7-0.6,2.2-1.399c0,0,0-0.2,0-0.601\r\n\t\t\tC1716.4,1142.6,1716.4,1141,1716.4,1139.5z M1710.6,1121.4c1.699,0,3.3,1.399,3.3,3.3c0,1.899-1.399,3.3-3.3,3.3\r\n\t\t\ts-3.301-1.4-3.301-3.3C1707.3,1122.8,1708.9,1121.4,1710.6,1121.4z M1719.4,1141c1.4,0,2.7,1.1,2.7,2.7c0,1.399-1.1,2.7-2.7,2.7\r\n\t\t\tc-1.6,0-2.7-1.101-2.7-2.7C1716.9,1142.3,1717.8,1141,1719.4,1141z M1713.1,1135.7c-1.7-0.8-3.301-1.7-5-2.7c0-1.4,0-2.7,0-4.1\r\n\t\t\tc0-0.801,0-1.4-0.6-1.7c-0.801-1.4-2.7-1.7-4.101-1.101c-3,1.4-6.2,2.7-9.2,4.4c-0.8,0.2-1.1,0.8-1.399,1.7l0,0l-3.3,11.5h5.6\r\n\t\t\tc0,3.6,0,7,0,10.6c0,0.8,0.8,1.7,1.699,1.7c0.801,0,1.701-0.8,1.701-1.7c0-3.6,0-7,0-10.6h5.6l-2.7-9.8\r\n\t\t\tc1.399-0.801,2.7-1.4,4.101-2.2v1.1c0,0.8,0,1.7,0.799,2.2c1.701,1.1,3.601,2.2,5.601,3.3\r\n\t\t\tC1713.1,1138.7,1714.5,1136.7,1713.1,1135.7z"/>\r\n\t\t<path fill="#58595B" d="M1726.1,1234.1h-18.7v1.4h18.7l0,0c1.1,0,1.699,0.8,1.699,1.7v37.3c0,1.1-0.799,1.7-1.899,1.9l-18.601-0.2\r\n\t\t\tv1.7H1726c1.699-0.2,3.1-1.7,3.1-3.301v-36.8C1729,1235.8,1727.9,1233.8,1726.1,1234.1z M1707.5,1234.1h-18.7\r\n\t\t\tc-1.7,0-3.3,1.7-3.3,3.301v37.3c0,1.7,1.699,3.3,3.3,3.3h18.7v-1.7h-18.7c-1.101,0-1.7-0.8-1.7-1.699V1237.3\r\n\t\t\tc0-1.1,0.8-1.699,1.7-1.699h18.7V1234.1L1707.5,1234.1z M1701,1241.7c0,0.8-0.2,1.7-0.5,2.2c-0.5,0.5-1.101,0.8-1.7,0.8\r\n\t\t\tc-0.5,0-1.101-0.5-1.7-0.8c-0.5-0.5-0.5-1.4-0.5-2.2s0.2-1.7,0.5-1.9c0.5-0.5,1.1-0.8,1.7-0.8c0.5,0,1.1,0.2,1.7,0.8\r\n\t\t\tC1701,1240,1701,1240.9,1701,1241.7L1701,1241.7z M1704.199,1258.6L1704.199,1258.6c0,0.801-0.5,1.7-1.1,1.7s-1.1-0.5-1.1-1.7\r\n\t\t\tv-9.399h-0.5v22.6c0,0.8-0.5,1.7-1.4,1.7s-1.4-0.5-1.4-1.7V1258.4h-0.5v13.399c0,0.8-0.5,1.7-1.4,1.7\r\n\t\t\tc-0.799,0-1.399-0.5-1.399-1.7v-22.6h-0.5v9.399c0,0.801-0.5,1.7-1.101,1.7c-0.6,0-1.1-0.5-1.1-1.7v-10.8c0-1.7,1.1-2.5,3.1-2.5\r\n\t\t\th5.601c1.899,0,3.101,0.8,3.101,2.5v10.8H1704.199z M1718,1241.7c0,0.8-0.2,1.7-0.5,1.899c-0.5,0.5-1.101,0.801-1.7,0.801\r\n\t\t\tc-0.5,0-1.4-0.2-1.7-0.801c-0.5-0.5-0.5-1.399-0.5-1.899c0-0.8,0.2-1.7,0.5-1.9c0.5-0.5,1.1-0.8,1.7-0.8c0.5,0,1.399,0.2,1.7,0.8\r\n\t\t\tC1718,1240,1718,1241.1,1718,1241.7L1718,1241.7z M1721.699,1261.5L1721.699,1261.5h-2.8v10c0,0.8-0.5,1.7-1.7,1.7\r\n\t\t\tc-0.8,0-1.4-0.5-1.4-1.7v-10h-0.5v10c0,0.8-0.5,1.7-1.699,1.7c-0.801,0-1.4-0.5-1.4-1.7v-10h-2.8l2.8-6.9v-6.899h-0.5v6.399\r\n\t\t\tc0,0.801-0.5,1.7-1.1,1.7s-1.1-0.5-1.1-1.7v-6.399c0-2.2,1.1-3.101,3.1-3.101h5.6c1.9,0,3.1,1.101,3.1,3.101v6.399\r\n\t\t\tc0,0.801-0.5,1.7-1.1,1.7c-0.8,0-1.1-0.5-1.1-1.7v-6.399h-0.5v6.899L1721.699,1261.5z"/>\r\n\t\t<path fill="#58595B" d="M1774.8,1192.2h-11.9v0.8v0.2h11.9c0.6,0,1.1,0.6,1.1,1.1v23.9c0,0.6-0.6,1.1-1.1,1.1h-11.9v1.101h12\r\n\t\t\tc1.101,0,2-1.101,2-2.101V1194.4C1776.9,1193.4,1776,1192.2,1774.8,1192.2z M1762.9,1192.2h-12c-1.1,0-2.1,1.1-2.1,2.1v23.9\r\n\t\t\tc0,1.1,1.1,2.1,2.1,2.1h12v-1.1h-12c-0.6,0-1.1-0.601-1.1-1.101V1194.2c0-0.601,0.6-1.101,1.1-1.101h12V1192.2z M1771.699,1203.8\r\n\t\t\tL1771.699,1203.8h2.1c0.201,0,0.4-0.2,0.4-0.2c0.2-0.199,0.2-0.399,0-0.399l-1.1-1.7c-0.2-0.2-0.2-0.2-0.4-0.2\r\n\t\t\tc-0.199,0-0.4,0.2-0.4,0.2l-1.1,1.7c-0.199,0.2-0.199,0.399,0,0.399C1771.3,1203.8,1771.699,1203.8,1771.699,1203.8z\r\n\t\t\t M1774.3,1206.2c-0.2-0.2-0.2-0.2-0.4-0.2h-2.1c-0.2,0-0.4,0.2-0.4,0.2c-0.2,0.2-0.2,0.399,0,0.399l1.101,1.7\r\n\t\t\tc0.199,0.2,0.199,0.2,0.399,0.2s0.4-0.2,0.4-0.2l1.1-1.7C1774.5,1206.4,1774.5,1206.2,1774.3,1206.2z M1767.9,1195.5h-13.6\r\n\t\t\tc-0.9,0-1.5,0.6-1.5,1.5v15.8c0,0.8,0.6,1.5,1.5,1.5h13.6c0.9,0,1.5-0.6,1.5-1.5V1197\r\n\t\t\tC1769.4,1196.1,1768.699,1195.5,1767.9,1195.5z M1753.699,1212.8V1197c0-0.4,0.4-0.6,0.6-0.6c0,0,4.5,0,5.801,0\r\n\t\t\tc0.4,0,0.4,0.399,0.4,0.399v16.3c0,0,0.199,0.601-0.601,0.601c-1.5,0-5.8,0-5.8,0C1753.9,1213.7,1753.699,1213.2,1753.699,1212.8z\r\n\t\t\t M1768.5,1212.8c0,0.4-0.4,0.601-0.601,0.601c0,0-4.3,0-5.8,0c-0.6,0-0.6-0.601-0.6-0.601v-16.3c0,0,0-0.4,0.399-0.4\r\n\t\t\tc1.5,0,6,0,6,0c0.4,0,0.601,0.4,0.601,0.601V1212.8L1768.5,1212.8L1768.5,1212.8z M1769,1217.3h-15.9c-0.4,0-0.9-0.399-0.9-0.8\r\n\t\t\ts0.4-0.8,0.9-0.8h15.9c0.399,0,0.899,0.399,0.899,0.8C1769.699,1216.8,1769.4,1217.3,1769,1217.3z"/>\r\n\t\t<path fill="#58595B" d="M2252.4,935.5h1.8l-3.6,4.2c-0.4,0.399,0,1.1,0,1.399c0.399,0,1.1,0,1.399,0l3.601-4.199v1.8\r\n\t\t\tc0,0.399,0.399,1.1,1.1,1.1c0.801,0,1.101-0.399,1.101-1.1l-0.4-4.9c0-0.399-0.399-1.1-1.1-1.1l0,0l-5.101,0.399\r\n\t\t\tc-0.399,0-1.1,0.4-1.1,1.101C2250.9,934.9,2251.3,935.5,2252.4,935.5 M2249.1,908.9h-2.4c-1.8,0-4,1.1-5.399,2.399l-8.2,10.601\r\n\t\t\tv-0.2c0-1.101-1.1-2.4-2.399-2.4c-1.101,0-2.4,1.101-2.4,2.4v6.8l-1.1,1.1h-4c-4,0-6.4,2.801-6.4,6.4s2.9,6.4,6.4,6.4h4\r\n\t\t\tc1.8,0,4-1.101,5.399-2.4l13.9-17.7h1.8c4,0,6.399-2.8,6.399-6.399C2256,911.7,2252.4,908.9,2249.1,908.9 M2249.1,919.1h-2.9\r\n\t\t\tc-0.399,0-1.1,0-1.1,0.4l-14.7,18.6c-0.399,1.101-1.399,1.4-2.899,1.4h-4c-1.801,0-4-1.4-4-4c0-1.8,1.399-3.6,4-3.6h4.199\r\n\t\t\tc0.4,0,1.101,0,1.101-0.4l14.7-18.6c0.399-1.101,1.399-1.4,2.899-1.4h2.4c1.8,0,4,1.4,4,3.6C2252.4,917,2250.5,919.1,2249.1,919.1\r\n\t\t\t M2230.4,912.7c1.399,0,2.899,1.1,2.899,2.399c0,1.301-1.1,2.4-2.899,2.4s-2.899-1.1-2.899-2.4\r\n\t\t\tC2227.5,913.9,2229,912.7,2230.4,912.7 M2248.4,935.5h-1.8l3.6-4.9c0.4-0.399,0-1.1,0-1.399c-0.399,0-1.1,0-1.399,0l-3.601,4.899\r\n\t\t\tl-0.399-1.8c0-0.399-1.101-1.1-1.4-1.1c-0.399,0-1.1,0.399-1.1,1.399l1.1,4.9c0,0.4,0.4,1.1,1.101,1.1l0,0l5.1-1.1\r\n\t\t\tc0.4,0,1.101-0.4,1.101-1.4C2249.8,935.5,2249.5,934.9,2248.4,935.5 M2252.699,896.8h-34c-6.899,0-12.199,5.4-12.199,11.3V941.2\r\n\t\t\tc0,6.399,5.399,11.3,12.199,11.3H2252c6.899,0,12.199-5.4,12.199-11.3V908.1C2264.8,902.1,2259.6,896.8,2252.699,896.8\r\n\t\t\t M2262.4,942.2c0,5.399-4.2,9.6-9.601,9.6h-33.3c-5.399,0-9.6-4.2-9.6-9.6v-33.4c0-5.399,4.2-9.6,9.6-9.6h33.3\r\n\t\t\tc5.4,0,9.601,4.2,9.601,9.6V942.2L2262.4,942.2z"/>\r\n\t\t<path fill="#58595B" d="M689.3,693.9h1.8l-3.6,4.199c-0.4,0.4,0,1.101,0,1.4c0.399,0,1.1,0,1.399,0l3.601-4.2v1.8\r\n\t\t\tc0,0.4,0.399,1.101,1.1,1.101c0.8,0,1.1-0.4,1.1-1.101l-0.4-4.899c0-0.4-0.399-1.101-1.1-1.101l0,0l-5.1,0.4\r\n\t\t\tc-0.4,0-1.1,0.4-1.1,1.1C687.9,693.3,688.3,693.9,689.3,693.9 M686.1,667.3h-2.4c-1.8,0-4,1.101-5.4,2.4l-8.199,10.6v-0.2\r\n\t\t\tc0-1.1-1.1-2.399-2.4-2.399c-1.1,0-2.4,1.1-2.4,2.399v6.801l-1.1,1.1h-4c-4,0-6.4,2.8-6.4,6.4c0,3.6,2.9,6.399,6.4,6.399h4\r\n\t\t\tc1.801,0,4-1.1,5.4-2.399l13.9-17.7h1.799c4,0,6.4-2.8,6.4-6.4C693,670.2,689.3,667.3,686.1,667.3 M686.1,677.5h-2.9\r\n\t\t\tc-0.4,0-1.1,0-1.1,0.4l-14.7,18.6c-0.399,1.1-1.399,1.4-2.899,1.4h-4c-1.801,0-4-1.4-4-4c0-1.801,1.399-3.601,4-3.601h4.199\r\n\t\t\tc0.4,0,1.1,0,1.1-0.399L680.5,671.3c0.399-1.1,1.399-1.399,2.899-1.399h2.4c1.8,0,4,1.399,4,3.6\r\n\t\t\tC689.3,675.5,687.5,677.5,686.1,677.5 M667.4,671.1c1.4,0,2.9,1.101,2.9,2.4s-1.101,2.4-2.9,2.4s-2.899-1.101-2.899-2.4\r\n\t\t\tC664.5,672.3,666,671.1,667.4,671.1 M685.4,693.9h-1.8l3.6-4.9c0.4-0.4,0-1.1,0-1.4c-0.399,0-1.1,0-1.399,0l-3.601,4.9l-0.399-1.8\r\n\t\t\tc0-0.4-1.101-1.101-1.4-1.101c-0.399,0-1.1,0.4-1.1,1.4l1.1,4.9c0,0.399,0.4,1.1,1.101,1.1l0,0l5.1-1.1c0.4,0,1.1-0.4,1.1-1.4\r\n\t\t\tC686.8,693.9,686.5,693.3,685.4,693.9 M689.699,655.2h-34c-6.899,0-12.199,5.399-12.199,11.3v33.1\r\n\t\t\tc0,6.4,5.399,11.301,12.199,11.301H689c6.899,0,12.199-5.4,12.199-11.301v-33.1C701.8,660.5,696.6,655.2,689.699,655.2\r\n\t\t\t M699.4,700.7c0,5.399-4.2,9.6-9.6,9.6h-33.3c-5.4,0-9.601-4.2-9.601-9.6v-33.4c0-5.399,4.2-9.6,9.601-9.6h33.3\r\n\t\t\tc5.399,0,9.6,4.2,9.6,9.6V700.7L699.4,700.7z"/>\r\n\t</g>\r\n</g>\r\n</svg>\r\n',
    title: 'MechanicMap--1',
    mapWidth: 3000,
    no: -1,
  },
  {
    show: true,
    locations: [
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/469_original.jpg?1360772190',
        type: LocationTypes.STORE,
        title: "Arby's",
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_39',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/120_original.jpg?1360770415',
        type: LocationTypes.STORE,
        title: 'Burger King',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_38',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/95c5cd81-f507-469b-b88b-13682f9e2c02.png?1553589943724',
        type: LocationTypes.STORE,
        title: 'Ceviz Lokanta',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_48',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/137_original.jpg?1360770511',
        type: LocationTypes.STORE,
        title: 'Cinemaximum',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_12',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/177_original.jpg?1360770717',
        type: LocationTypes.STORE,
        title: 'Eczane Modern',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_17',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/5f13564a-db3f-490d-90d3-b20da553e4bd.png?1553589866007',
        type: LocationTypes.STORE,
        title: 'Figaro Kuaför',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_18',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/26144205-7a5e-41e1-a3bb-fb95bbf479e8.png?1553590004871',
        type: LocationTypes.STORE,
        title: 'Kahve Dehası',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_35',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/613_original.jpg?1400143924',
        type: LocationTypes.STORE,
        title: 'Komagene',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_53',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/361_original.jpg?1360771653',
        type: LocationTypes.STORE,
        title: 'Köfteci Ramiz',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_59',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/4919_original.jpg?1552036462',
        type: LocationTypes.STORE,
        title: 'Köfteci Yusuf',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_28',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/4919_original.jpg?1552036462',
        type: LocationTypes.STORE,
        title: 'Köfteci Yusuf',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_15',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/634d0d34-2594-4f1f-af2e-9716b11a31f7.png?1633616992513',
        type: LocationTypes.STORE,
        title: 'Kütüphane',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_26',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/711_original.jpg?1400145083',
        type: LocationTypes.STORE,
        title: 'Mac Fit',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_42',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/3186_original.jpg?1459338200',
        type: LocationTypes.STORE,
        title: 'Mado',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_36',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/301_original.jpg?1400145555',
        type: LocationTypes.STORE,
        title: 'Mavi',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_66',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/546_original.jpg?1400142265',
        type: LocationTypes.STORE,
        title: 'Mr. Kumpir',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_58',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/4518_original.jpg?1528205951',
        type: LocationTypes.STORE,
        title: 'Pidem',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_37',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/4638_original.png?1538997253',
        type: LocationTypes.STORE,
        title: 'Planet Bowling',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_23',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/1713_original.jpg?1393491699',
        type: LocationTypes.STORE,
        title: 'Play Planet',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_24',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/cd4b554a-876b-4a13-9055-74046c3cf06c.png?1632146370070',
        type: LocationTypes.STORE,
        title: 'Poligon',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_65',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/354_original.jpg?1360771616',
        type: LocationTypes.STORE,
        title: 'Popeyes',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_41',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/3626_original.jpg?1547194570',
        type: LocationTypes.STORE,
        title: 'Saloon Burger',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_56',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/3348_original.jpg?1471509382',
        type: LocationTypes.STORE,
        title: 'Sbarro - Usta Pideci',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_11',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/93_original.jpg?1360770274',
        type: LocationTypes.STORE,
        title: 'Tavuk Dünyası',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_49',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/2445d1cf-f0bd-4aff-841b-b9e758d50014.png?1631016397971',
        type: LocationTypes.STORE,
        title: 'The Box Kitchen Restaurant',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_34',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/3720_original.jpg?1491316176',
        type: LocationTypes.STORE,
        title: 'Tobacco Shop',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_33',
      },
      {
        zoom: 3,
        image_url:
          'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/1cd1a7ba-63ca-47c3-962a-c678c1a8b1aa.png?1628000918927',
        type: LocationTypes.STORE,
        title: 'Turkcell',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_64',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/4800_original.jpg?1545746214',
        type: LocationTypes.STORE,
        title: 'Usta Dönerci',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_40',
      },
      {
        zoom: 3,
        image_url:
          'https://d3heiv85u05n2u.cloudfront.net/images/brands/4523_original.jpg?1528206823',
        type: LocationTypes.STORE,
        title: 'İkbal',
        explanation: '',
        action: LocationActions.ZOOM,
        id: 'K0_store_55',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/S1RCW8Gd4-main.png?1553256918234',
        type: LocationTypes.SERVICE,
        title: 'ATM',
        id: 'K0_store_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/H1jrzLz_V-main.png?1553257026809',
        type: LocationTypes.SERVICE,
        title: 'Baby Care Room',
        id: 'K0_babycare_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/rydaGUMuN-main.png?1553257152129',
        type: LocationTypes.SERVICE,
        title: 'Pharmacy',
        id: 'K0_eczane_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/BJ-Pz8f_N-main.png?1553257049117',
        type: LocationTypes.SERVICE,
        title: 'Disabled WC',
        id: 'K0_disabledwc_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/BJcHQUf_V-main.png?1553257282205',
        type: LocationTypes.SERVICE,
        title: 'Security',
        id: 'K0_security_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/BJcHQUf_V-main.png?1553257282205',
        type: LocationTypes.SERVICE,
        title: 'Security',
        id: 'K0_security_02',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/r1e7QUfON-main.png?1553257240141',
        type: LocationTypes.SERVICE,
        title: 'Infirmary',
        id: 'K0_revir_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/r1GemIGdV-main.png?1553257193993',
        type: LocationTypes.SERVICE,
        title: 'Cinema',
        id: 'K0_cinema_01',
      },
      {
        image_url:
          'https://s3-eu-central-1.amazonaws.com/akyaka/images/service_logo/SJBY8M8_E-main.png?1553503868939',
        type: LocationTypes.SERVICE,
        title: 'WC',
        id: 'K0_wc_01',
      },
    ],
    id: 'level-0',
    mapHeight: 1500,
    map: '<?xml version="1.0" encoding="utf-8"?>\r\n<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\r\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t width="3000px" height="1500px" viewBox="0 0 3000 1500" enable-background="new 0 0 3000 1500" xml:space="preserve">\r\n<g id="floorbackup">\r\n\t<path fill="#D6D6D6" stroke="#4C4C4C" stroke-miterlimit="10" d="M677.2,267.5l134.5-121.4l87.7,80.1l77,31.3c0,0-4.4,70.1,0,70.1\r\n\t\tc4.4,0,154.6,0,154.6,0l33.8,15h43.2V374h209v-18.8l161.6,12.6v32.6h231.2v-17.5l115.2,5v33.8h235.5v-21.3l104,6.2V453h229.1v-29\r\n\t\tl506.5,24.4l-10.4,95.4H2928h-476v41.9l-136.7,0.1l-305.8,78.6H1829l-93.9-166.3h-51.7v-58.2l-501.5,52.9h-42.8l-213.2,34.8h-51.2\r\n\t\tL787,563.5h-72.5L677.2,267.5z M677.2,267.5l134.5-121.4l87.7,80.1l77,31.3c0,0-4.4,70.1,0,70.1c4.4,0,154.6,0,154.6,0l33.8,15\r\n\t\th43.2V374h209v-18.8l161.6,12.6v32.6h231.2v-17.5l115.2,5v33.8h235.5v-21.3l104,6.2V453h229.1v-29l506.5,24.4l-10.4,95.4H2928h-476\r\n\t\tv41.9l-136.7,0.1l-305.8,78.6H1829l-93.9-166.3h-51.7v-58.2l-501.5,52.9h-42.8l-213.2,34.8h-51.2L787,563.5h-72.5L677.2,267.5z"/>\r\n\t<path fill="#EDEDED" stroke="#636362" stroke-width="2" stroke-miterlimit="10" d="M2831.1,782.8l-150.5-148.2L2452,585.8\r\n\t\tl-136.7,0.1l-166.2-61.4l-139.6,140H1829l-93.9-166.3h-51.7V440h-501.5v52.9h-42.8V440H926v87.7h-51.2L787,557.2v6.4h-72.6V517h7.6\r\n\t\tv-66.1L752.7,329h-38.3l-82.9-137.4L0,573.8l114.1,182.8l75.6,121.2v23.9h215.8v-23.8H556v116.8h-28.4v332.1h1005.9v64.4h40.7v23.8\r\n\t\th970.4v-113.6h-49.3V1260L2781,829.6L2831.1,782.8z M709.4,841.4H442.6V647.6h266.7L709.4,841.4L709.4,841.4L709.4,841.4z\r\n\t\t M952.9,956.1H719.8v-68.7h233.1V956.1L952.9,956.1z M1226.3,956.1H985.9v-68.7h240.4V956.1L1226.3,956.1z M1501.7,956.1h-240.4\r\n\t\tv-68.7h240.4V956.1z M1762.6,956.1h-227.1v-68.7h227.1V956.1z M1974.3,956.1H1835v-68.7h139.3V956.1z M2150.7,1042.3h-145.1v-155\r\n\t\tv-3.8h72.5v31.6h72.5L2150.7,1042.3L2150.7,1042.3z"/>\r\n\t<path id="stores_1_" fill="#60605F" d="M1190.7,998.9h108.5l-0.4,306.2h-186.4l0.4-142l77.7-0.4V998.9H1190.7z M1070.6,998.9h31.3\r\n\t\tv113h-31.3V998.9z M1112.9,998.9h69.1v154.2h-69.1V998.9z M1322.5,998.9h96.9v265.6h-96.9V998.9z M1429.4,998.9H1544v128.5h31.9\r\n\t\tv179.9h-146.4L1429.4,998.9L1429.4,998.9z M1551.7,998.9v118h24.1V1074h9.4v-75.1H1551.7z M1582.2,1079.2h70.9v55.6h-70.9V1079.2z\r\n\t\t M1662.3,1079.2h63.4v55.6h-63.4V1079.2z M1732.4,1079.2h36.4v55.6h-36.4V1079.2z M1804.3,1123.7h92.7v131.2h-21.6v32h-22.8v19.7\r\n\t\th-101.9v-62.9h47.8V1160h5.8V1123.7z M1902.9,1123.7h75.4v131.2h-75.4V1123.7z M1984.8,1123.7h85.9v75h-85.9V1123.7L1984.8,1123.7z\r\n\t\t M2154.8,984.8h37.4v39h-37.4V984.8z M2009.7,852.3h34.6v35.2h-34.6V852.3z M1767.8,895.3h23.5v61.1h-23.5V895.3z M560,888.4h34.6\r\n\t\tv34.8H560V888.4z M2180.5,1123.7h58.8v32.4h-58.8V1123.7z M2244.2,1123.7h79.5v140.6h-100.4v-103h21L2244.2,1123.7L2244.2,1123.7\r\n\t\tL2244.2,1123.7z M2329.7,1123.7h79.4v140.6h-79.4V1123.7z M2415.2,1123.7v140.6h84.3l56.1-83.4l-25.8-16.7h-44.4v-40.5\r\n\t\tL2415.2,1123.7L2415.2,1123.7z M2490.6,1084.5v73.3h41.8l26,16.9l59.9-90.2H2490.6L2490.6,1084.5z M2490.6,1078.3h133.7l46-70.8\r\n\t\th-179.7V1078.3L2490.6,1078.3z M2490.6,999.8H2675l31.3-47h-215.7V999.8z M2490.6,946.5H2710l75.1-112.7v-26.6h-294.6L2490.6,946.5\r\n\t\tL2490.6,946.5z M2469,885.9h-53.9v-28.6h-20.7V764h-65.8V590h82.6v-0.1h44.7V548h476l50.2,35.5l-146.9,203.3h-183.6V659.4h-183.3\r\n\t\tv67h-18.8V832l19.4,0.1L2469,885.9L2469,885.9L2469,885.9z M2408.6,885.9v-19.8h-22.9v-94.9h-57V886L2408.6,885.9L2408.6,885.9\r\n\t\tL2408.6,885.9z M2227.8,839.9h94.4v46h-94.4V839.9z M2227.8,771.1h94.4v60.6h-94.4V771.1z M2252.7,726.2h-91V614.9h73.7v83.6h17.3\r\n\t\tV726.2z M2103.1,658.2h50v68.1h-50V658.2z M2094.5,726.2h-78.1V583.6h-50.1V444.1h103v84.6h83.9v121.1h-58.4L2094.5,726.2z\r\n\t\t M2319.4,726.2h-59.1v-34.1h-16.4V606h-82.2v-77.4h157.8L2319.4,726.2L2319.4,726.2L2319.4,726.2z M1833.1,726.2h-60.7v-39.3\r\n\t\th-112.7v-82h79.5V444.1h154.1v141.1h-60.2V726.2L1833.1,726.2z M1733,693.1h33.6v82H1733V693.1z M1659.7,693.1h68v82h-68V693.1z\r\n\t\t M1582.6,638.6h72.5v136.5h-72.5V638.6z M1582.6,853.6V779h-5.3v-34.6h-25.6v109.1L1582.6,853.6L1582.6,853.6L1582.6,853.6z\r\n\t\t M1505.8,744.4h38.2v109.1h-38.2V744.4z M1499.3,853.6v-114h77.5V638.8h-147.4v214.8H1499.3L1499.3,853.6z M1274.1,638.6h145.3\r\n\t\tv214.8h-145.3V638.6z M1159.7,638.6h104.7v214.8h-104.7V638.6z M531.8,998.9h316.7v119.9v87.2h-49.6v121.3H531.8V998.9z\r\n\t\t M868.3,998.9v277.3h47.1v29.3h186.4v-179.6h-42.5v-127H868.3L868.3,998.9z M791.1,698.2v155.3h352.2V441.7h-108v197h-74.2V698\r\n\t\tL791.1,698.2z M791.1,618v70h160.7v-48.9h-74.4V618H791.1z M791.1,609.6h87.8V444.1H843l-51.9,117.2V609.6z M930.1,444.1h96.1\r\n\t\tv171.2h-96.1V444.1z M485.2,527.2h76v90.9h-76V527.2L485.2,527.2z M558.2,527.2h80.2v90.9h-80.2V527.2z M647.2,527.2h71.3v90.9\r\n\t\th-71.3V527.2z M1656.4,597.6v17.6h-55.9V444h87.1v58.2h5.6v33.3h-49.9v61.9h13.2L1656.4,597.6L1656.4,597.6L1656.4,597.6z\r\n\t\t M1501.8,615.3v-63h91.3V444.1h-163.7v171.2H1501.8z M1352.5,444.1h66.8V580h-66.8V444.1z M1344.9,580V444.1h-159v92h82.6V580\r\n\t\tH1344.9z M409.6,905.9V618h68.1v-97h248.4v-66.1h30.7V333.3h-38.3l-82.8-137.5L4,577.8L63.4,673l40.5-23.7l54.3,89.3l-38.9,23.8\r\n\t\tl74.4,119.4v23.9h215.9V905.9L409.6,905.9z M2057.2,1202.3v25.5h46.8v26.9h21.6v-56h33.9v-75h-83.4v78.7L2057.2,1202.3\r\n\t\tL2057.2,1202.3z M1735.5,1170.5h10v9.5h-10V1170.5z M1735.5,1182.8h10v9.5h-10V1182.8z M1735.5,1195.6h10v9.5h-10V1195.6z\r\n\t\t M1735.5,1208.3h10v9.5h-10V1208.3z M1735.5,1221.4h10v9.5h-10V1221.4z M1735.5,1244.4h10v9.5h-10V1244.4z M1735.5,1257.5h10v9.5\r\n\t\th-10V1257.5z M1735.5,1269.8h10v9.5h-10V1269.8z M1735.5,1283.4h10v9.5h-10V1283.4z M1735.5,1295.7h10v9.5h-10V1295.7z"/>\r\n</g>\r\n<g id="stores">\r\n\t<path id="K0_store_66" fill="#FBC005" d="M1186.6,994.9h108.6l-0.4,306.1h-186.3l0.4-142l77.7-0.4L1186.6,994.9L1186.6,994.9z"/>\r\n\t<path id="K0_store_65" fill="#FBC005" d="M1066.5,994.9h31.3v113h-31.3V994.9z"/>\r\n\t<path id="K0_store_64" fill="#FBC005" d="M1108.9,994.9h69.1v154.2h-69.1V994.9z"/>\r\n\t<path id="K0_store_63" fill="#FBC005" d="M1318.5,994.9h96.9v265.6h-96.9V994.9z"/>\r\n\t<path id="K0_store_62" fill="#FBC005" d="M1425.3,994.9h114.6v128.4h31.8v180h-146.4V994.9z"/>\r\n\t<path id="K0_store_61" fill="#FBC005" d="M1547.6,994.9v117.9h24.1V1070h9.4v-75.1H1547.6z"/>\r\n\t<path id="K0_store_60" fill="#FBC005" d="M1578.1,1075.2h70.9v55.6h-70.9V1075.2z"/>\r\n\t<path id="K0_store_59" fill="#FBC005" d="M1658.2,1075.2h63.4v55.6h-63.4V1075.2z"/>\r\n\t<path id="K0_store_58" fill="#FBC005" d="M1728.4,1075.2h36.4v55.6h-36.4V1075.2z"/>\r\n\t<path id="K0_store_57" fill="#FBC005" d="M1800.3,1119.6h92.6v131.2h-21.6v31.9h-22.9v19.8h-101.9v-62.9h46.8v-83.7h7V1119.6z"/>\r\n\t<path id="K0_store_56" fill="#FBC005" d="M1898.9,1119.6h75.4v131.2h-75.4V1119.6z"/>\r\n\t<path id="K0_store_55" fill="#FBC005" d="M1980.7,1119.6h85.9v75h-85.9L1980.7,1119.6L1980.7,1119.6z"/>\r\n\t<path id="K0_store_54" fill="#FBC005" d="M2150.7,980.7h37.4v39h-37.4V980.7z"/>\r\n\t<path id="K0_store_53" fill="#FBC005" d="M2005.6,848.3h34.6v35.2h-34.6V848.3z"/>\r\n\t<path id="K0_store_52" fill="#FBC005" d="M1763.8,891.2h23.5v61h-23.5V891.2z"/>\r\n\t<path id="K0_store_51" fill="#FBC005" d="M556,884.4h34.6v34.8H556V884.4z"/>\r\n\t<path id="K0_store_50" fill="#FBC005" d="M2176.3,1119.6h58.8v32.4h-58.8V1119.6z"/>\r\n\t<path id="K0_store_49" fill="#FBC005" d="M2240.1,1119.6h79.5v140.6h-100.5v-103.1h21V1119.6z"/>\r\n\t<path id="K0_store_48" fill="#FBC005" d="M2325.7,1119.6h79.4v140.6h-79.4V1119.6z"/>\r\n\t<path id="K0_store_47" fill="#FBC005" d="M2411.1,1119.6v140.6h84.3l56.1-83.4l-25.9-16.7h-44.3v-40.5L2411.1,1119.6L2411.1,1119.6\r\n\t\tz"/>\r\n\t<path id="K0_store_46" fill="#FBC005" d="M2486.5,1080.5v73.3h41.7l26.2,16.9l59.8-90.2H2486.5L2486.5,1080.5z"/>\r\n\t<path id="K0_store_45" fill="#FBC005" d="M2486.5,1074.3h133.7l45.9-70.8h-179.6L2486.5,1074.3L2486.5,1074.3z"/>\r\n\t<path id="K0_store_44" fill="#FBC005" d="M2486.5,995.6h184.4l31.2-46.9h-215.6L2486.5,995.6L2486.5,995.6z"/>\r\n\t<path id="K0_store_43" fill="#FBC005" d="M2486.5,942.4h219.4l75.2-112.7v-26.6h-294.6L2486.5,942.4L2486.5,942.4z"/>\r\n\t<path id="K0_store_42" fill="#FBC005" d="M2464.8,881.9h-53.7v-28.7h-20.8V760h-65.7V585.9h82.6v-0.1h44.9v-41.9h475.7l50.4,35.5\r\n\t\tl-147.1,203.4h-183.5V655.4h-183.4v67h-18.8v105.4l19.4,0.1L2464.8,881.9L2464.8,881.9z"/>\r\n\t<path id="K0_store_41" fill="#FBC005" d="M2404.5,881.9v-19.8h-22.9V767h-57v114.9H2404.5z"/>\r\n\t<path id="K0_store_40" fill="#FBC005" d="M2223.8,835.8h94.4v46h-94.4V835.8z"/>\r\n\t<path id="K0_store_39" fill="#FBC005" d="M2223.8,767h94.4v60.6h-94.4V767z"/>\r\n\t<path id="K0_store_38" fill="#FBC005" d="M2248.7,722.2h-91.1V610.8h73.6v83.6h17.5L2248.7,722.2L2248.7,722.2z"/>\r\n\t<path id="K0_store_37" fill="#FBC005" d="M2099,654.1h50v68.1h-50V654.1z"/>\r\n\t<path id="K0_store_36" fill="#FBC005" d="M2090.4,722.2h-78.2V579.6h-50.1V439.9h103v84.6h84v121.1h-58.5L2090.4,722.2z"/>\r\n\t<path id="K0_store_35" fill="#FBC005" d="M2315.4,722.2h-59.3V688h-16.4v-86.1h-82.1v-77.4h157.8V722.2z"/>\r\n\t<path id="K0_store_34" fill="#FBC005" d="M1829,722.2h-60.7v-39.3h-112.7v-82h79.5v-161h154v141.2H1829V722.2z"/>\r\n\t<path id="K0_store_33" fill="#FBC005" d="M1729,689.1h33.6v82H1729V689.1z"/>\r\n\t<path id="K0_store_32" fill="#FBC005" d="M1655.6,689.1h68v82h-68V689.1z"/>\r\n\t<path id="K0_store_31" fill="#FBC005" d="M1578.5,634.6h72.5v136.5h-72.5V634.6z"/>\r\n\t<path id="K0_store_30" fill="#FBC005" d="M1578.5,849.4v-74.5h-5.3v-34.6h-25.6v109.1H1578.5z"/>\r\n\t<path id="K0_store_29" fill="#FBC005" d="M1501.7,740.3h38.2v109.1h-38.2V740.3z"/>\r\n\t<path id="K0_store_28" fill="#FBC005" d="M1495.1,849.4V735.5h77.5V634.6h-147.3v214.8H1495.1L1495.1,849.4z"/>\r\n\t<path id="K0_store_27" fill="#FBC005" d="M1270,634.6h145.3v214.8H1270V634.6z"/>\r\n\t<path id="K0_store_26" fill="#FBC005" d="M1155.7,634.6h104.7v214.8h-104.7V634.6z"/>\r\n\t<path id="K0_store_25" fill="#FBC005" d="M527.7,994.9h316.7v119.7v87.2h-49.6v121.4H527.7V994.9z"/>\r\n\t<path id="K0_store_24" fill="#FBC005" d="M864.3,994.9v277.2h47.2v29.3h186.4v-179.6h-42.7V994.9H864.3z"/>\r\n\t<path id="K0_store_23" fill="#FBC005" d="M787,694.2v155.2h352.2V437.6h-108.1v197H957v59.3L787,694.2z"/>\r\n\t<path id="K0_store_22" fill="#FBC005" d="M787,613.9V684h160.7v-48.9h-74.3v-21.2H787L787,613.9z"/>\r\n\t<path id="K0_store_21" fill="#FBC005" d="M787,605.5h87.9V439.9h-36L787,557.1V605.5z"/>\r\n\t<path id="K0_store_20" fill="#FBC005" d="M926,439.9h96.1v171.2H926V439.9z"/>\r\n\t<path id="K0_store_18" fill="#FBC005" d="M481.6,523h152.7v90.9H481.6V523z"/>\r\n\t<path id="K0_store_17" fill="#FBC005" d="M643.2,523h71.3v90.9h-71.3V523z"/>\r\n\t<path id="K0_store_16" fill="#FBC005" d="M1652.3,593.5v17.8h-55.9V439.9h87v58.2h5.7v33.5h-50v61.9H1652.3z"/>\r\n\t<path id="K0_store_15" fill="#FBC005" d="M1497.7,611.3v-63.1h91.4V439.9h-163.8v171.4H1497.7z"/>\r\n\t<path id="K0_store_14" fill="#FBC005" d="M1348.5,439.9h66.8v135.9h-66.8V439.9z"/>\r\n\t<path id="K0_store_13" fill="#FBC005" d="M1340.9,575.9v-136h-159V532h82.7v43.9H1340.9z"/>\r\n\t<path id="K0_store_12" fill="#FBC005" d="M405.5,901.7V613.9h68.1v-97H722v-66h30.7V329.1h-38.3l-82.9-137.4L0,573.8l59.4,95.1\r\n\t\tl40.4-23.6l54.4,89.4l-38.9,23.8l74.4,119.3v23.9H405.5z"/>\r\n\t<path id="K0_store_11" fill="#FBC005" d="M2053.2,1198.2v25.5h46.8v27h21.6v-56.1h34v-75h-83.4v78.7L2053.2,1198.2z"/>\r\n\t<path id="K0_store_10" fill="#FBC005" d="M1731.4,1166.4h10v9.5h-10V1166.4z"/>\r\n\t<path id="K0_store_09" fill="#FBC005" d="M1731.4,1178.8h10v9.5h-10V1178.8z"/>\r\n\t<path id="K0_store_08" fill="#FBC005" d="M1731.4,1191.5h10v9.5h-10V1191.5z"/>\r\n\t<path id="K0_store_07" fill="#FBC005" d="M1731.4,1204.3h10v9.5h-10V1204.3z"/>\r\n\t<path id="K0_store_06" fill="#FBC005" d="M1731.4,1217.4h10v9.5h-10V1217.4z"/>\r\n\t<path id="K0_store_05" fill="#FBC005" d="M1731.4,1240.4h10v9.5h-10V1240.4z"/>\r\n\t<path id="K0_store_04" fill="#FBC005" d="M1731.4,1253.4h10v9.5h-10V1253.4z"/>\r\n\t<path id="K0_store_03" fill="#FBC005" d="M1731.4,1265.7h10v9.5h-10V1265.7z"/>\r\n\t<path id="K0_store_02" fill="#FBC005" d="M1731.4,1279.2h10v9.5h-10V1279.2z"/>\r\n\t<path id="K0_store_01" fill="#FBC005" d="M1731.4,1291.7h10v9.5h-10V1291.7z"/>\r\n</g>\r\n<g id="services">\r\n\t<path id="K0_babycare_01" fill="#CE9E15" d="M1746.5,1156.1h44.9v74.8h-44.9V1156.1z"/>\r\n\t<path id="K0_disabledwc_01" fill="#CE9E15" d="M1578.1,1136.6h70.9v76.6h-70.9V1136.6z"/>\r\n\t<path id="K0_wc_01" fill="#CE9E15" d="M1578.1,1224.6h109v76.6h-109V1224.6z"/>\r\n\t<path id="K0_cinema_01" fill="#FBC005" d="M436.5,664.4h-18v-34.9h18V664.4z"/>\r\n\t<path id="K0_eczane_01" fill="#FBC005" d="M692.5,644.3h-31.6v-19.5h31.6V644.3z"/>\r\n\t<path id="K0_security_01" fill="#FBC005" d="M763.7,595.4h-31.6v-19.5h31.6V595.4z"/>\r\n\t<path id="K0_security_02" fill="#FBC005" d="M1879.7,697.9h-31.6v-19.5h31.6L1879.7,697.9L1879.7,697.9z"/>\r\n\t<path id="K0_revir_01" fill="#FBC005" d="M1721.5,1301.4h-31.6V1282h31.6V1301.4z"/>\r\n\t<path id="K0_kiosk_01" fill="#EDEDED" d="M2000,1004.3h-11v-19.5h11V1004.3z"/>\r\n\t<path id="K0_kiosk_02" fill="#EDEDED" d="M716.3,932.7h-11v-19.5h11V932.7z"/>\r\n</g>\r\n<g id="nopointer">\r\n\t<path fill="#878584" d="M2538,1306.3v101.4h-957.4v-21.6h-42.2V1320H800.5v-110.9h55.9v71.8h46v27.5h416.1v-37.9h96.9v37.9h438.3\r\n\t\tv-19.6h23.1V1256h103.8v-55h65.1v30.5h46.5v26.6h35.7v-57.2h33.3v-64.4h6.1v20.4h43.7V1268h278.5v38.1h48.5L2538,1306.3\r\n\t\tL2538,1306.3z M2474.7,665v66.5h-21.9v83.3h20.6V882h5v-83.5H2784l16.6,13.2l15.6-14.5l3.4-3.4h-179.8V665H2474.7z M1729,498.1\r\n\t\th-35.4V537h-50.2v52.6h12.2v6.1h73.4L1729,498.1L1729,498.1z M1503.3,554.9v61.6H1417v-33.2h-159.5v-42.2h-83.2v-48.3h-30.1v315.6\r\n\t\th6.5V626.3H1651v-10.4h-62v-61.5L1503.3,554.9z M881.2,527.7v102.1h145.6c0,0,0.9-11.9,0-11.9c-0.9,0-104.8,0-104.8,0v-90.2\r\n\t\tL881.2,527.7L881.2,527.7z M112.2,753.5l33.9-20.9l-47-77.9l-35.3,21.4L112.2,753.5z"/>\r\n\t<g id="dummies">\r\n\t\t<path fill="#58595B" d="M1634.6,1155.3h-19.3v1.5h19.3l0,0c1.3,0,1.8,0.8,1.8,1.8v38.7c0,1.3-0.8,1.8-1.8,1.8h-19.3v1.5h19.3\r\n\t\t\tc1.8,0,3.4-1.5,3.4-3.3v-38.7C1638,1156.8,1636.8,1155.3,1634.6,1155.3z M1615.2,1155.3h-19.3c-1.8,0-3.4,1.5-3.4,3.2v38.7\r\n\t\t\tc0,1.8,1.4,3.2,3.4,3.2h19.3v-1.4h-19.3c-1.3,0-1.8-0.8-1.8-1.8v-38.7c0-1.3,0.8-1.8,1.8-1.8h19.3V1155.3z M1611.5,1160.5\r\n\t\t\tc-1.4,0-2.9,1.3-2.9,2.9c0,1.6,1.3,2.9,2.9,2.9c1.4,0,2.9-1.3,2.9-2.9S1613.2,1160.5,1611.5,1160.5z M1629.1,1183.4h-2.4l-5.8-6.9\r\n\t\t\th-7.4l-0.8-3.9l4.3,1.3c0.2,0,0.2,0,0.2,0c0.2,0,0.8-0.2,0.8-0.6c0.2-0.6-0.2-0.8-0.6-1.3l-5.2-1.5l-0.6-2.4\r\n\t\t\tc-0.2-0.6-0.6-0.8-1.3-0.6c-0.6,0.2-0.8,0.6-0.6,1.3l2.3,10h7.9l5.8,6.9h3.4c0.6,0,0.8-0.2,0.8-0.8\r\n\t\t\tC1630.2,1184,1629.7,1183.4,1629.1,1183.4z M1614.4,1189c-2.4,0-4.5-0.8-6.8-2.4c-2.4-1.8-3.7-4.3-4-6.9c-0.6-3.9,1.3-7.9,4.5-9.8\r\n\t\t\tc0.6-0.2,1.3-0.2,1.4,0.2c0.2,0.6,0.2,1.3-0.2,1.4c-2.9,1.8-4,4.5-3.7,7.9c0.2,2.4,1.3,4.3,3.4,5.5c1.8,1.3,4,1.8,6.3,1.8\r\n\t\t\tc2.4-0.2,4.5-1.5,6.1-3.7c0.2-0.6,1.3-0.6,1.4-0.2c0.6,0.2,0.6,1.3,0.2,1.4c-1.8,2.9-4.5,4.3-7.9,4.5\r\n\t\t\tC1615.2,1188.8,1614.6,1189,1614.4,1189z M1616.9,1191.1l-1.3,4.3h-0.6l-1.3-3.2l-1.3,3.2h-0.6l-1.3-4.3h0.8l0.8,3.2l1.3-3.2h0.6\r\n\t\t\tl1.3,3.2l0.8-3.2H1616.9z M1620.9,1195.1c-0.2,0.2-0.6,0.2-0.6,0.2c-0.2,0.2-0.6,0.2-0.6,0.2c-0.2,0-0.6-0.2-0.8-0.2\r\n\t\t\tc-0.2-0.2-0.6-0.2-0.6-0.6c-0.2-0.2-0.2-0.6-0.6-0.8c-0.2-0.2-0.2-0.6-0.2-0.8c0-0.8,0.2-1.3,0.6-1.5c0.2-0.2,0.8-0.6,1.4-0.6\r\n\t\t\tc0.2,0,0.6,0,0.8,0.2c0.2,0.2,0.6,0.2,0.6,0.2v0.8h-0.2c-0.2-0.2-0.6-0.2-0.6-0.2c-0.2-0.2-0.6-0.2-0.6-0.2\r\n\t\t\tc-0.6,0-0.8,0.2-0.8,0.6c-0.2,0.2-0.2,0.6-0.2,1.3c0,0.6,0.2,0.8,0.2,1.3c0.2,0.2,0.6,0.6,0.8,0.6c0.2,0,0.2,0,0.6-0.2\r\n\t\t\tc0.3-0.2,0.2-0.2,0.6-0.2C1620.6,1195.1,1620.6,1195.1,1620.9,1195.1c0-0.2,0-0.2,0-0.2h0.2L1620.9,1195.1L1620.9,1195.1\r\n\t\t\tL1620.9,1195.1L1620.9,1195.1z"/>\r\n\t\t<path fill="#58595B" d="M1788.1,1172.7h-19.3v1.8h19.3l0,0c1.1,0,1.8,1.2,1.8,2.2v37.9c0,1.1-0.8,1.8-1.8,2.3l-19.3-0.2v1.5h19.3\r\n\t\t\tc1.8-0.2,3.4-1.5,3.4-3.4v-38.7C1791.3,1174.2,1790.2,1172.7,1788.1,1172.7z M1768.9,1172.7h-19.3c-1.8,0-3.4,1.4-3.4,3.4v38.7\r\n\t\t\tc0,1.8,1.4,3.4,3.4,3.4h19.3v-1.4h-19.3c-1.1,0-1.8-0.8-1.8-1.8v-38.7c0-1.1,0.8-1.8,1.8-1.8h19.3L1768.9,1172.7L1768.9,1172.7z\r\n\t\t\t M1767.8,1203.7h16.9v1.8h-16.9V1203.7z M1779.2,1196.6c0-1.4-2.3-1.4-2.3,0c0,0.8,0,1.1,0,1.8l0,0c-1.1,0-2.3,0-3.4,0\r\n\t\t\tc0-0.2,0.6-0.8,0.6-0.8c0.2-0.6,0.2-0.8,0-1.4c0,0-0.2-0.6-0.6-0.6c-1.1-0.8-2.7-1.5-3.7-2.3c-1.1-0.8-2.4,1.1-1.1,1.8\r\n\t\t\tc0.8,0.6,1.8,0.8,2.7,1.5c-0.6,0.8-0.8,1.4-1.4,2.3c0,0-0.8,0.8-0.8,1.4c0,1.1,0.8,2.3,2.3,2.3c1.8,0,3.7,0,5.5,0\r\n\t\t\tc0.8,0,1.8-0.6,2.3-1.4c0,0,0-0.2,0-0.6C1779.2,1199.8,1779.2,1198.2,1779.2,1196.6z M1773.3,1177.9c1.8,0,3.4,1.4,3.4,3.4\r\n\t\t\ts-1.4,3.4-3.4,3.4c-1.9,0-3.4-1.4-3.4-3.4S1771.5,1177.9,1773.3,1177.9z M1782.3,1198.2c1.4,0,2.7,1.1,2.7,2.7\r\n\t\t\tc0,1.4-1.1,2.7-2.7,2.7c-1.6,0-2.7-1.1-2.7-2.7C1779.7,1199.5,1780.7,1198.2,1782.3,1198.2z M1775.8,1192.7\r\n\t\t\tc-1.8-0.8-3.4-1.8-5.2-2.7c0-1.5,0-2.7,0-4.2c0-0.8,0-1.5-0.6-1.8c-0.8-1.5-2.7-1.8-4.2-1.1c-3.1,1.4-6.4,2.7-9.5,4.5\r\n\t\t\tc-0.8,0.2-1.1,0.8-1.4,1.8l0,0l-3.4,11.9h5.8c0,3.7,0,7.2,0,11c0,0.8,0.8,1.8,1.8,1.8c0.8,0,1.8-0.8,1.8-1.8c0-3.7,0-7.2,0-11h5.8\r\n\t\t\tl-2.7-10.1c1.4-0.8,2.7-1.4,4.2-2.3v1.1c0,0.8,0,1.8,0.8,2.3c1.8,1.1,3.7,2.3,5.8,3.4C1775.8,1195.8,1777.3,1193.7,1775.8,1192.7z\r\n\t\t\t"/>\r\n\t\t<path fill="#58595B" d="M1651.9,1242h-19.3v1.4h19.3l0,0c1.1,0,1.8,0.8,1.8,1.8v38.5c0,1.1-0.8,1.8-1.9,1.9l-19.2-0.2v1.8h19.3\r\n\t\t\tc1.8-0.2,3.2-1.8,3.2-3.4v-38.1C1655,1243.7,1653.9,1241.6,1651.9,1242z M1632.8,1242h-19.3c-1.8,0-3.4,1.8-3.4,3.4v38.5\r\n\t\t\tc0,1.8,1.8,3.4,3.4,3.4h19.3v-1.8h-19.3c-1.1,0-1.8-0.8-1.8-1.8v-38.5c0-1.1,0.8-1.8,1.8-1.8h19.3V1242L1632.8,1242z M1626,1249.9\r\n\t\t\tc0,0.8-0.2,1.8-0.5,2.3c-0.5,0.5-1.1,0.8-1.8,0.8c-0.5,0-1.1-0.5-1.8-0.8c-0.5-0.5-0.5-1.4-0.5-2.3c0-0.9,0.2-1.8,0.5-1.9\r\n\t\t\tc0.5-0.5,1.1-0.8,1.8-0.8c0.5,0,1.1,0.2,1.8,0.8C1626,1248.1,1626,1249,1626,1249.9L1626,1249.9z M1629.4,1267.3L1629.4,1267.3\r\n\t\t\tc0,0.8-0.5,1.8-1.1,1.8c-0.6,0-1.1-0.5-1.1-1.8v-9.7h-0.5v23.4c0,0.8-0.5,1.8-1.4,1.8c-0.9,0-1.4-0.5-1.4-1.8v-13.9h-0.5v13.9\r\n\t\t\tc0,0.8-0.5,1.8-1.4,1.8c-0.8,0-1.4-0.5-1.4-1.8v-23.4h-0.5v9.7c0,0.8-0.5,1.8-1.1,1.8s-1.1-0.5-1.1-1.8v-11.1\r\n\t\t\tc0-1.8,1.1-2.6,3.2-2.6h5.8c1.9,0,3.2,0.8,3.2,2.6v11.1H1629.4z M1643.5,1249.9c0,0.8-0.2,1.8-0.5,1.9c-0.5,0.5-1.1,0.8-1.8,0.8\r\n\t\t\tc-0.5,0-1.4-0.2-1.8-0.8c-0.5-0.5-0.5-1.4-0.5-1.9c0-0.8,0.2-1.8,0.5-1.9c0.5-0.5,1.1-0.8,1.8-0.8c0.5,0,1.4,0.2,1.8,0.8\r\n\t\t\tC1643.5,1248.1,1643.5,1249.2,1643.5,1249.9L1643.5,1249.9z M1647.4,1270.3L1647.4,1270.3h-2.9v10.3c0,0.8-0.5,1.8-1.8,1.8\r\n\t\t\tc-0.8,0-1.4-0.5-1.4-1.8v-10.3h-0.5v10.3c0,0.8-0.5,1.8-1.8,1.8c-0.8,0-1.4-0.5-1.4-1.8v-10.3h-2.9l2.9-7.1v-7.1h-0.5v6.6\r\n\t\t\tc0,0.8-0.5,1.8-1.1,1.8s-1.1-0.5-1.1-1.8v-6.6c0-2.3,1.1-3.2,3.2-3.2h5.8c1.9,0,3.2,1.1,3.2,3.2v6.6c0,0.8-0.5,1.8-1.1,1.8\r\n\t\t\tc-0.8,0-1.1-0.5-1.1-1.8v-6.6h-0.5v7.1L1647.4,1270.3z"/>\r\n\t\t<path fill="#58595B" d="M1684.9,1192.2h-12.3v0.9v0.2h12.3c0.7,0,1.1,0.7,1.1,1.1v24.7c0,0.7-0.7,1.1-1.1,1.1h-12.3v1.1h12.4\r\n\t\t\tc1.1,0,2-1.1,2-2.2v-24.7C1687.1,1193.3,1686.2,1192.2,1684.9,1192.2z M1672.6,1192.2h-12.4c-1.1,0-2.2,1.1-2.2,2.2v24.7\r\n\t\t\tc0,1.1,1.1,2.2,2.2,2.2h12.4v-1.1h-12.4c-0.7,0-1.1-0.7-1.1-1.1v-24.7c0-0.7,0.7-1.1,1.1-1.1h12.4L1672.6,1192.2L1672.6,1192.2z\r\n\t\t\t M1681.7,1204.1L1681.7,1204.1h2.2c0.2,0,0.4-0.2,0.4-0.2c0.2-0.2,0.2-0.4,0-0.4l-1.1-1.8c-0.2-0.2-0.2-0.2-0.4-0.2\r\n\t\t\ts-0.4,0.2-0.4,0.2l-1.1,1.8c-0.2,0.2-0.2,0.4,0,0.4C1681.3,1204.1,1681.7,1204.1,1681.7,1204.1z M1684.4,1206.6\r\n\t\t\tc-0.2-0.2-0.2-0.2-0.4-0.2h-2.2c-0.2,0-0.4,0.2-0.4,0.2c-0.2,0.2-0.2,0.4,0,0.4l1.1,1.8c0.2,0.2,0.2,0.2,0.4,0.2\r\n\t\t\tc0.2,0,0.4-0.2,0.4-0.2l1.1-1.8C1684.6,1206.9,1684.6,1206.6,1684.4,1206.6z M1677.8,1195.5h-14c-0.9,0-1.5,0.7-1.5,1.5v16.4\r\n\t\t\tc0,0.9,0.7,1.5,1.5,1.5h14c0.9,0,1.5-0.7,1.5-1.5V1197C1679.3,1196.2,1678.6,1195.5,1677.8,1195.5z M1663.1,1213.4V1197\r\n\t\t\tc0-0.4,0.4-0.7,0.7-0.7c0,0,4.7,0,6,0c0.4,0,0.4,0.4,0.4,0.4v16.8c0,0,0.2,0.7-0.7,0.7c-1.5,0-6,0-6,0\r\n\t\t\tC1663.3,1214.3,1663.1,1213.9,1663.1,1213.4z M1678.5,1213.4c0,0.4-0.4,0.7-0.7,0.7c0,0-4.5,0-6,0c-0.7,0-0.7-0.7-0.7-0.7v-16.8\r\n\t\t\tc0,0,0-0.4,0.4-0.4c1.5,0,6.2,0,6.2,0c0.4,0,0.7,0.4,0.7,0.7L1678.5,1213.4L1678.5,1213.4L1678.5,1213.4z M1678.9,1218.1h-16.4\r\n\t\t\tc-0.4,0-0.9-0.4-0.9-0.9c0-0.4,0.4-0.9,0.9-0.9h16.4c0.4,0,0.9,0.4,0.9,0.9C1679.7,1217.6,1679.3,1218.1,1678.9,1218.1z"/>\r\n\t\t<path fill="#58595B" d="M2061.8,1015.5h1.9l-3.7,4.4c-0.4,0.4,0,1.1,0,1.5c0.4,0,1.1,0,1.5,0l3.7-4.4v1.9c0,0.4,0.4,1.1,1.1,1.1\r\n\t\t\tc0.9,0,1.1-0.4,1.1-1.1l-0.4-5.1c0-0.4-0.4-1.1-1.1-1.1l0,0l-5.2,0.4c-0.4,0-1.1,0.4-1.1,1.1\r\n\t\t\tC2060.3,1014.9,2060.7,1015.5,2061.8,1015.5 M2058.4,987.9h-2.5c-1.9,0-4.1,1.1-5.6,2.5l-8.5,11v-0.2c0-1.1-1.1-2.5-2.5-2.5\r\n\t\t\tc-1.1,0-2.5,1.1-2.5,2.5v7l-1.1,1.1h-4.1c-4.1,0-6.6,2.9-6.6,6.6c0,3.7,3,6.6,6.6,6.6h4.1c1.9,0,4.1-1.1,5.6-2.5l14.3-18.3h1.9\r\n\t\t\tc4.1,0,6.6-2.9,6.6-6.6C2065.5,990.9,2061.8,987.9,2058.4,987.9 M2058.4,998.5h-3c-0.4,0-1.1,0-1.1,0.4l-15.2,19.2\r\n\t\t\tc-0.4,1.1-1.5,1.5-3,1.5h-4.1c-1.9,0-4.1-1.5-4.1-4.1c0-1.9,1.5-3.7,4.1-3.7h4.4c0.4,0,1.1,0,1.1-0.4l15.2-19.2\r\n\t\t\tc0.4-1.1,1.5-1.5,3-1.5h2.5c1.9,0,4.1,1.5,4.1,3.7C2061.8,996.4,2059.9,998.5,2058.4,998.5 M2039.1,991.9c1.5,0,3,1.1,3,2.5\r\n\t\t\ts-1.1,2.5-3,2.5c-1.9,0-3-1.1-3-2.5C2036.1,993.2,2037.6,991.9,2039.1,991.9 M2057.7,1015.5h-1.9l3.7-5.1c0.4-0.4,0-1.1,0-1.5\r\n\t\t\tc-0.4,0-1.1,0-1.5,0l-3.7,5.1l-0.4-1.9c0-0.4-1.1-1.1-1.5-1.1c-0.4,0-1.1,0.4-1.1,1.5l1.1,5.1c0,0.4,0.4,1.1,1.1,1.1l0,0l5.2-1.1\r\n\t\t\tc0.4,0,1.1-0.4,1.1-1.5C2059.2,1015.5,2058.8,1014.9,2057.7,1015.5 M2062.2,975.5H2027c-7.1,0-12.6,5.6-12.6,11.7v34.3\r\n\t\t\tc0,6.6,5.6,11.7,12.6,11.7h34.4c7.1,0,12.6-5.6,12.6-11.7v-34.3C2074.6,981,2069.3,975.5,2062.2,975.5 M2072.1,1022.4\r\n\t\t\tc0,5.6-4.4,10-10,10h-34.4c-5.6,0-10-4.4-10-10v-34.5c0-5.6,4.4-10,10-10h34.4c5.6,0,10,4.4,10,10L2072.1,1022.4L2072.1,1022.4z"\r\n\t\t\t/>\r\n\t\t<path fill="#58595B" d="M663.8,819.9h1.9l-3.7,4.4c-0.4,0.4,0,1.1,0,1.5c0.4,0,1.1,0,1.5,0l3.7-4.4v1.9c0,0.4,0.4,1.1,1.1,1.1\r\n\t\t\tc0.9,0,1.1-0.4,1.1-1.1l-0.4-5.1c0-0.4-0.4-1.1-1.1-1.1l0,0l-5.2,0.4c-0.4,0-1.1,0.4-1.1,1.1C662.3,819.2,662.7,819.9,663.8,819.9\r\n\t\t\t M660.5,792.3H658c-1.9,0-4.1,1.1-5.6,2.5l-8.5,11v-0.2c0-1.1-1.1-2.5-2.5-2.5c-1.1,0-2.5,1.1-2.5,2.5v7l-1.1,1.1h-4.1\r\n\t\t\tc-4.1,0-6.6,2.9-6.6,6.6c0,3.7,3,6.6,6.6,6.6h4.1c1.9,0,4.1-1.1,5.6-2.5l14.3-18.3h1.9c4.1,0,6.6-2.9,6.6-6.6\r\n\t\t\tC667.6,795.3,663.8,792.3,660.5,792.3 M660.5,802.9h-3c-0.4,0-1.1,0-1.1,0.4l-15.2,19.2c-0.4,1.1-1.5,1.5-3,1.5h-4.1\r\n\t\t\tc-1.9,0-4.1-1.5-4.1-4.1c0-1.9,1.5-3.7,4.1-3.7h4.4c0.4,0,1.1,0,1.1-0.4l15.2-19.2c0.4-1.1,1.5-1.5,3-1.5h2.5\r\n\t\t\tc1.9,0,4.1,1.5,4.1,3.7C663.8,800.8,662,802.9,660.5,802.9 M641.2,796.3c1.5,0,3,1.1,3,2.5s-1.1,2.5-3,2.5c-1.9,0-3-1.1-3-2.5\r\n\t\t\tC638.2,797.6,639.7,796.3,641.2,796.3 M659.7,819.9h-1.9l3.7-5.1c0.4-0.4,0-1.1,0-1.5c-0.4,0-1.1,0-1.5,0l-3.7,5.1l-0.4-1.9\r\n\t\t\tc0-0.4-1.1-1.1-1.5-1.1c-0.4,0-1.1,0.4-1.1,1.5l1.1,5.1c0,0.4,0.4,1.1,1.1,1.1l0,0l5.2-1.1c0.4,0,1.1-0.4,1.1-1.5\r\n\t\t\tC661.2,819.9,660.8,819.2,659.7,819.9 M664.2,779.9h-35.1c-7.1,0-12.6,5.6-12.6,11.7v34.3c0,6.6,5.6,11.7,12.6,11.7h34.4\r\n\t\t\tc7.1,0,12.6-5.6,12.6-11.7v-34.3C676.7,785.4,671.3,779.9,664.2,779.9 M674.2,826.8c0,5.6-4.4,10-10,10h-34.4c-5.6,0-10-4.4-10-10\r\n\t\t\tv-34.5c0-5.6,4.4-10,10-10h34.4c5.6,0,10,4.4,10,10V826.8L674.2,826.8z"/>\r\n\t</g>\r\n\t<path fill="#F24E4E" d="M746.9,548.4l-2.9-0.2l8.3,13.4l8.1-13.2H758l-5.5,9.1L746.9,548.4z M749.3,548.4h-1.5l4.6,7.4l4.5-7.3\r\n\t\tl-1.4-0.2l-3.1,5.1L749.3,548.4z M738.2,552.2v3.7h-19.1v-3.7H738.2z M785.4,552.2v3.7h-19.1v-3.7H785.4z"/>\r\n\t<path fill="#F24E4E" d="M1916.2,638.9l-4.8-0.3l13.7,22.2l13.5-21.9h-4l-9.2,15.1L1916.2,638.9z M1920,638.9h-2.4l7.5,12.3\r\n\t\tl7.4-12.1l-2.3-0.3l-5.1,8.3L1920,638.9z M1901.7,645.2v6.2h-31.6v-6.2H1901.7z M1979.8,645.2v6.2h-31.6v-6.2H1979.8z"/>\r\n\t<g id="rects">\r\n\t\t<rect id="rect_K0_store_23" x="796.5" y="730.1" fill="#FBC005" width="335" height="88.4"/>\r\n\t\t<rect id="rect_K0_store_26" x="1183.7" y="648" fill="#FBC005" width="48.7" height="184.6"/>\r\n\t</g>\r\n</g>\r\n</svg>\r\n',
    title: 'MechanicMap-0',
    mapWidth: 3000,
    no: 0,
  },
];

export default Payload;
