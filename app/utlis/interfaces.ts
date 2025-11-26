export interface EquipmentItem {
  id: number;
  category: string;
  item: string;
  notes: string;
  imageUrl: string;
}

export interface Credentials {
  title: string;
  image?: string;
  items: string[];
}

export interface Section {
  id: string;
  title: string;
  content: string[];
  credentials?: Credentials;
}

export interface AboutUsData {
  header: {
    title: string;
    subtitle: string;
  };
  sections: Section[];
  callToAction: string;
}
