import { z } from 'zod';

export const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
});

export type PropertiesFormSchema = z.infer<typeof propertiesSchema>;
