type User = {
  id: number;
  name: string;
  email: string;
};

export type UserCardProps = Pick<User, 'id' | 'name'>;

// interface User = {
//   id: number;
//   name: string;
//   email: string;
// };

// export interface UserPreview extends Pick<User, "id" | "name">
