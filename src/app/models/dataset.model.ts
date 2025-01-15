export interface Dataset {
  id: number;
  name: string;
  uploadedBy: string;
  updateDate: Date;
  uploaded: boolean;
  status: string;
  containsPersonalInfo: boolean;
  containsErrors: boolean;
}
