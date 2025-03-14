export interface Room {
  id: string;
  name: string;
  description?: string;
  isPrivate: boolean;
  createdById: string;
  createdAt: Date;
  updatedAt: Date;
}
