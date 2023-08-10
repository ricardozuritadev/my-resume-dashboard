import GenevaMap from "components/ad-hoc/about/where-i-lived-card/geneva-map";
import LanzaroteMap from "components/ad-hoc/about/where-i-lived-card/lanzarote-map";
import MadridMap from "components/ad-hoc/about/where-i-lived-card/madrid-map";
import OviedoMap from "components/ad-hoc/about/where-i-lived-card/oviedo-map";
import QuitoMap from "components/ad-hoc/about/where-i-lived-card/quito-map";

import { City } from "types/cities.types";

export const cities_data: City[] = [
  {
    id: 1,
    name: "Quito",
    years: "1988 - 2001",
    map: <QuitoMap />
  },
  {
    id: 2,
    name: "Lanzarote",
    years: "2001 - 2008",
    map: <LanzaroteMap />
  },
  {
    id: 3,
    name: "Madrid",
    years: "2015 - 2017",
    map: <MadridMap />
  },
  {
    id: 4,
    name: "Geneva",
    years: "2017 -2021",
    map: <GenevaMap />
  },
  {
    id: 5,
    name: "Oviedo",
    years: "2021 - 2023",
    map: <OviedoMap />
  }
];
