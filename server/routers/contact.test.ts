import { describe, expect, it } from 'vitest';
import { contactRouter } from './contact';
import type { TrpcContext } from '../_core/context';

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: 'https',
      headers: {},
    } as TrpcContext['req'],
    res: {} as TrpcContext['res'],
  };
}

describe('contact.send', () => {
  it('should send a valid contact message', async () => {
    const ctx = createPublicContext();
    const caller = contactRouter.createCaller(ctx);

    const result = await caller.send({
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Project Inquiry',
      message: 'I would like to discuss a project with you.',
    });

    expect(result).toEqual({
      success: true,
      message: 'Your message has been sent successfully!',
    });
  });

  it('should reject empty name', async () => {
    const ctx = createPublicContext();
    const caller = contactRouter.createCaller(ctx);

    await expect(
      caller.send({
        name: '',
        email: 'john@example.com',
        subject: 'Project Inquiry',
        message: 'I would like to discuss a project with you.',
      })
    ).rejects.toThrow();
  });

  it('should reject invalid email', async () => {
    const ctx = createPublicContext();
    const caller = contactRouter.createCaller(ctx);

    await expect(
      caller.send({
        name: 'John Doe',
        email: 'invalid-email',
        subject: 'Project Inquiry',
        message: 'I would like to discuss a project with you.',
      })
    ).rejects.toThrow();
  });

  it('should reject empty subject', async () => {
    const ctx = createPublicContext();
    const caller = contactRouter.createCaller(ctx);

    await expect(
      caller.send({
        name: 'John Doe',
        email: 'john@example.com',
        subject: '',
        message: 'I would like to discuss a project with you.',
      })
    ).rejects.toThrow();
  });

  it('should reject empty message', async () => {
    const ctx = createPublicContext();
    const caller = contactRouter.createCaller(ctx);

    await expect(
      caller.send({
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Project Inquiry',
        message: '',
      })
    ).rejects.toThrow();
  });

  it('should reject message exceeding max length', async () => {
    const ctx = createPublicContext();
    const caller = contactRouter.createCaller(ctx);

    const longMessage = 'a'.repeat(5001);

    await expect(
      caller.send({
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Project Inquiry',
        message: longMessage,
      })
    ).rejects.toThrow();
  });
});
