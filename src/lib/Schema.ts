import * as z from 'zod';


export const formSchema = z.object({
  referrerName: z.string().min(2, "Name too short"),
  referrerEmail: z.string().email("Invalid email"),
  refereeName: z.string().min(2, "Name too short"),
  refereeEmail: z.string().email("Invalid email"),
  program: z.string().min(1, "Select a program"),
});

