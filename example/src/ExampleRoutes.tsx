import type { Route } from 'react-native-mechanic-map';

const ADIDAS_TO_AVELIEER: Route = {
  nodes: ['K40', 'K39', 'K10', 'K09'],
  direction: [-1],
  floors: [
    {
      no: -1,
      lines: [
        {
          x1: 1147,
          y1: 832,
          x2: 1273,
          y2: 832,
        },
        {
          x1: 1273,
          y1: 832,
          x2: 1273,
          y2: 942,
        },
        {
          x1: 1273,
          y1: 942,
          x2: 1127,
          y2: 942,
        },
      ],
    },
  ],
  end: 'KE1_store_06',
  start: {
    location: 'KE1_store_28',
  },
};

const STARBUCKS_TO_WATSONS: Route = {
  nodes: [
    'L12',
    'L13',
    'L16',
    'L17',
    'L18',
    'L19',
    'L20',
    'L21',
    'L22',
    'L51',
    'L50',
    'L49',
    'L47',
    'L46',
    'L45',
  ],
  direction: [-2],
  floors: [
    {
      no: -2,
      lines: [
        {
          x1: 610,
          y1: 892,
          x2: 713,
          y2: 892,
        },
        {
          x1: 713,
          y1: 892,
          x2: 861,
          y2: 892,
        },
        {
          x1: 861,
          y1: 892,
          x2: 958,
          y2: 892,
        },
        {
          x1: 958,
          y1: 892,
          x2: 1043,
          y2: 892,
        },
        {
          x1: 1043,
          y1: 892,
          x2: 1135,
          y2: 892,
        },
        {
          x1: 1135,
          y1: 892,
          x2: 1220,
          y2: 892,
        },
        {
          x1: 1220,
          y1: 892,
          x2: 1320,
          y2: 892,
        },
        {
          x1: 1320,
          y1: 892,
          x2: 1461,
          y2: 892,
        },
        {
          x1: 1461,
          y1: 892,
          x2: 1573,
          y2: 820,
        },
        {
          x1: 1573,
          y1: 820,
          x2: 1654,
          y2: 820,
        },
        {
          x1: 1654,
          y1: 820,
          x2: 1739,
          y2: 820,
        },
        {
          x1: 1739,
          y1: 820,
          x2: 1854,
          y2: 820,
        },
        {
          x1: 1854,
          y1: 820,
          x2: 1984,
          y2: 820,
        },
        {
          x1: 1984,
          y1: 820,
          x2: 2092,
          y2: 820,
        },
      ],
    },
  ],
  end: 'KE2_store_19',
  start: {
    location: 'KE2_store_45',
  },
};

const STARBUCKS_TO_ADIDAS: Route = {
  nodes: [
    'L12',
    'L13',
    'L16',
    'L17',
    'L18',
    'L55',
    'K49',
    'K48',
    'K47',
    'K45',
    'K44',
    'K43',
    'K42',
    'K41',
    'K40',
  ],
  direction: [-2, -1],
  floors: [
    {
      no: -2,
      lines: [
        {
          x1: 610,
          y1: 892,
          x2: 713,
          y2: 892,
        },
        {
          x1: 713,
          y1: 892,
          x2: 861,
          y2: 892,
        },
        {
          x1: 861,
          y1: 892,
          x2: 958,
          y2: 892,
        },
        {
          x1: 958,
          y1: 892,
          x2: 1043,
          y2: 892,
        },
        {
          x1: 1043,
          y1: 892,
          x2: 1156,
          y2: 820,
          node_level_changer: 'escalator',
        },
      ],
    },
    {
      no: -1,
      lines: [
        {
          x1: 672,
          y1: 672,
          x2: 672,
          y2: 622,
          node_level_changer: 'escalator',
        },
        {
          x1: 672,
          y1: 622,
          x2: 734,
          y2: 622,
        },
        {
          x1: 734,
          y1: 622,
          x2: 734,
          y2: 832,
        },
        {
          x1: 734,
          y1: 832,
          x2: 802,
          y2: 832,
        },
        {
          x1: 802,
          y1: 832,
          x2: 883,
          y2: 832,
        },
        {
          x1: 883,
          y1: 832,
          x2: 981,
          y2: 832,
        },
        {
          x1: 981,
          y1: 832,
          x2: 1048,
          y2: 832,
        },
        {
          x1: 1048,
          y1: 832,
          x2: 1147,
          y2: 832,
        },
      ],
    },
  ],
  end: 'KE1_store_28',
  start: {
    location: 'KE2_store_45',
  },
};

export default {
  ADIDAS_TO_AVELIEER,
  STARBUCKS_TO_WATSONS,
  STARBUCKS_TO_ADIDAS,
};
