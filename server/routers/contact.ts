import { z } from 'zod';
import { publicProcedure, router } from '../_core/trpc';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required').max(200),
  message: z.string().min(1, 'Message is required').max(5000),
});

export const contactRouter = router({
  send: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      try {
        // TODO: Integrate with email service (SendGrid, Nodemailer, etc.)
        // For now, just log the message
        console.log('Contact form submission:', {
          timestamp: new Date().toISOString(),
          ...input,
        });

        // Simulate sending email
        // In production, you would:
        // 1. Send email to admin
        // 2. Send confirmation email to user
        // 3. Store in database

        return {
          success: true,
          message: 'Your message has been sent successfully!',
        };
      } catch (error) {
        console.error('Error sending contact message:', error);
        throw new Error('Failed to send message');
      }
    }),
});
