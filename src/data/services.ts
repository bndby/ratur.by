import type { ImageMetadata } from 'astro';
import burenie from '../pages/services/burenie.jpg';
import obustroystvoSkvazhin from '../pages/services/obustroystvo-skvazhin.jpg';
import obsluzhivanieIRemontSkvazhin from '../pages/services/obsluzhivanie-i-remont-skvazhin.jpg';
import kanalizaciya from '../pages/services/kanalizaciya.jpg';
import zabivkaSvaiPodFundament from '../pages/services/zabivka-svai-pod-fundament.jpg';
import geotermalnoeOtoplenie from '../pages/services/geotermalnoe-otoplenie.jpg';
import teleinspectiyaSkvazhin from '../pages/services/teleinspectiya-skvazhin.jpg';

export interface ServiceItem {
  title: string;
  description: string;
  href: string;
  image: ImageMetadata;
}

export const services: ServiceItem[] = [
  {
    title: 'Бурение скважины',
    description: '',
    href: '/services/burenie',
    image: burenie,
  },
  {
    title: 'Обустройство скважин',
    description: '',
    href: '/services/obustroystvo-skvazhin',
    image: obustroystvoSkvazhin,
  },
  {
    title: 'Обслуживание и ремонт скважины',
    description: '',
    href: '/services/obsluzhivanie-i-remont-skvazhin',
    image: obsluzhivanieIRemontSkvazhin,
  },
  {
    title: 'Канализация',
    description: '',
    href: '/services/kanalizaciya',
    image: kanalizaciya,
  },
  {
    title: 'Забивка свай под фундамент',
    description: '',
    href: '/services/zabivka-svai-pod-fundament',
    image: zabivkaSvaiPodFundament,
  },
  {
    title: 'Геотермальное отопление',
    description: '',
    href: '/services/geotermalnoe-otoplenie',
    image: geotermalnoeOtoplenie,
  },
  {
    title: 'Телеинспекция скважин',
    description: '',
    href: '/services/teleinspectiya-skvazhin',
    image: teleinspectiyaSkvazhin,
  },
];
