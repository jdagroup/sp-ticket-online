import { z } from 'zod';

const jwtPayloadSchema = z.object({
  id: z.string(),
  name: z.string(),
  eo_id: z.string().nullable(),
  exp: z.number(),
  iat: z.number(),
});

type JwtPayload = z.infer<typeof jwtPayloadSchema>;

export { jwtPayloadSchema, JwtPayload };
