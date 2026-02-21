
export enum LeadStatus {
  NEW = 'New',
  CONTACTED = 'Contacted',
  QUALIFIED = 'Qualified',
  CLOSED = 'Closed'
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  budget: string;
  status: LeadStatus;
  timestamp: number;
  aiAnalysis?: string;
  notes?: string;
}

export interface AppState {
  leads: Lead[];
}
