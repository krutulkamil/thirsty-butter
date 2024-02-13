import { z } from 'zod';

export const propertiesSchema = z.object({
  title: z.string().min(2).max(50),
});

export type PropertiesFormSchema = z.infer<typeof propertiesSchema>;
