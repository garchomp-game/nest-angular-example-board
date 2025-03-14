export interface Message {
  id: string;
  content: string;
  roomId: string;
  userId: string;
  createdAt: Date;
  updatedAt?: Date;
  isEdited?: boolean;
}
