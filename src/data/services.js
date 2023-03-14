import {
  ClipboardDocumentCheckIcon,
  RectangleStackIcon,
  PresentationChartLineIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  SignalIcon,
  ServerIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';
export const services = [
  {
    name: 'acquisition',
    title: 'Acquisition',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'planningAndDesign',
    title: 'Planning and design',
    icon: RectangleStackIcon,
  },
  {
    name: 'networkConstruction',
    title: 'Network construction',
    icon: SignalIcon,
  },
  {
    name: 'cablePull',
    title: 'Cable pull',
    icon: LinkIcon,
  },
  {
    name: 'connectionTechnology',
    title: 'Connection technology',
    icon: ServerIcon,
  },
  {
    name: 'measurementTechnology',
    title: 'Measurement technology',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'inHouseInstallations',
    title: 'In-house installations',
    icon: HomeIcon,
  },
  {
    name: 'operationAndMaintenance',
    title: 'Operation & Maintenance',
    icon: WrenchScrewdriverIcon,
  },
];
