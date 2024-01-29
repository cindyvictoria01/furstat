export class Pet {
  petName?: string;
  sex?: string;
  birthday?: string;
  breed?: string;
  furColor?: string;
  weight?: string;
  type?: string;
  vaccine?: {
    name: string;
    dateGiven: string;
    repeat: boolean;
    nextSchedule: string;
    notes: string;
  };
  schedule?: {
    eatFreq: number;
    eatHour: string;
    eatHour1: string;
    eatHour2: string;
    bathFreq: string;
    bathTime: string;
    bathHour: string;
  };
}
