import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string().min(3, '아이디는 최소 3글자 이상이어야 합니다.'),
  email: z.string().regex(/^[^@]+@[^@]+\.[^@]+$/, '이메일 형식이 아닙니다.'),
  name: z.string(),
  password: z.string().min(6, '비밀번호는 최소 6자리 이상이어야 합니다.'),
});

// 스키마 타입 추론
export type RegisterFormData = z.infer<typeof registerSchema>;

// 로그인용 스키마
export const loginSchema = registerSchema.pick({
  username: true,
  password: true,
});

export type LoginFromSchema = z.infer<typeof loginSchema>;
