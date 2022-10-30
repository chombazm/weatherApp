import { CloudMoon, CloudSun, Humidity, Rain, Wind } from '../assets/icons';

export const currentStats = [
  {
    icon: <Rain />,
    value: '18 mm',
    label: 'Rain',
  },
  {
    icon: <Humidity />,
    value: '67%',
    label: 'Humidity',
  },
  {
    icon: <Wind />,
    value: '25 km/h',
    label: 'Wind',
  },
];
export const dailyHourlyStats = [
  {
    icon: <CloudSun />,
    value: '31 °C',
    label: '15: 00',
  },
  {
    icon: <CloudSun />,
    value: '30 °C',
    label: '16: 00',
  },
  {
    icon: <CloudMoon />,
    value: '28 °C',
    label: '17: 00',
  },
  {
    icon: <CloudMoon />,
    value: '28 °C',
    label: '18: 00',
  },
];
