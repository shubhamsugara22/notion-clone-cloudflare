import OpenAI from 'openai';
import { Hono } from 'hono';
import { cors } from 'homo/cors'; 


const app = new Hono<{ Bindings: Bindings}>();