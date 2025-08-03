import request from 'supertest';
import app from '../src/app'; 
import { describe, it, expect } from '@jest/globals';

describe('Habits API', () => {
  it('should return all habits', async () => {
    const res = await request(app).get('/api/habits');
    expect(res.status).toBe(200);
    console.log(res.body);
  })
});
