import { z } from 'zod';

export const propertiesSchema = z.object({
  height: z.number().min(5).max(200),
});

export type PropertiesFormSchema = z.infer<typeof propertiesSchema>;
